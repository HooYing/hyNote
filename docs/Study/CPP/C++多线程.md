# C++多线程

## 创建线程和结束线程

### 1、pthread_create

创建一个线程的函数是pthread_create。其定义如下：

```c++
#include <pthread.h>
int pthread_create(pthread_t* thread, const pthread_attr_t* attr, void* (*start_routine)(void *), void* arg);
```

thread参数是新线程的标识符，后续pthread_*函数通过它来引用新线程。其类型pthread_t的定义如下：

```c++
#include <bits/pthreadtypes.h>
typedef unsigned long int pthread_t;
```

可见，pthread_t是一个整形类型。实际上，Linux上几乎所有的资源标识符都是一个整型数。

attr参数用于设置新线程的属性。给他传递NULL表示使用默认线程属性。strart_routine和arg参数分别指定新线程将运行的函数及其参数。

pthread_create成功时返回0，失败时返回错误码。

### 2、pthread_exit

线程一旦创建好，内核就可以调度内核线程来执行start_routine函数指针所指向的函数了。线程函数在结束时最好调用如下函数，以确保安全、干净地退出：

```c++
#include <pthread.h>
void pthread_exit(void* retval);
```

pthread_exit函数通过retval参数向线程的回收者传递其退出信息。它执行完后不会返回到调用者，而且永远不会失败。

### 3、pthread_join

一个进程中的所有线程都可以调用pthread_join函数来**回收其他线程**（前提是目标线程是可回收的），即等待其他线程结束，这类似于回收进程的wait和waitpid习通调用。pthread_join的定义如下：

```c++
#include <pthread_h>
int pthread_join(pthread_t thread, void** retval);
```

thread参数是目标线程的标识符，retval参数则是目标线程返回的退出信息。该函数会一直阻塞，直到被回收的线程结束为止。该函数成功时返回0，失败时返回错误码。可能的错误码如下表所示：

![image-20220114150515248](https://cdn.jsdelivr.net/gh/HooYing/Image@main/imgs/image-20220114150515248.png)



![](https://cdn.staticaly.com/gh/HooYing/Image@main/imgs/imgs/202207231439304.jpg)



![](https://git.poker/HooYing/Image/imgs/202207231440942.jpg)



![](https://cdn.jsdelivr.net/gh/HooYing/Image@main/imgs/202207231608796.jpg)



![image-20220723171034678](image/C++多线程/image-20220723171034678.png)

### 4、pthread_cancel

有时候我们希望异常终止一个线程，即取消线程，它是通过如下函数实现的：

```c++
#include <pthread.h>
int pthread_cancel(pthread_t thread);
```

thread参数是目标线程的标识符。该函数成功时返回0，失败时返回错误码。

### 5、简单实现多线程

```c++
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <string.h>
#include <unistd.h>

void* thread_main(void* arg)
{
    int cnt = *((int*)arg);
    char* msg = (char*)malloc(sizeof(char)*50);
    strcpy(msg,"Hello, I'am thread~ \n");
    for(int i=0; i<cnt; i++){
        sleep(1);
        puts("running thread");
    }
    return (void*)msg;
}

int main()
{
    pthread_t t_id;
    int thread_param = 5;
    void* thr_ret;
    if(pthread_create(&t_id, NULL, thread_main, (void*)&thread_param)!=0){
        puts("pthread_create() error");
        return -1;
    }
    //mian函数将等待ID保存在t_id变量中的线程终止
    if(pthread_join(t_id, &thr_ret)!=0){
        puts("pthread_join() join");
        return -1;
    }
    printf("Thread return message:%s\n",(char*)thr_ret);
    free(thr_ret);
    return 0;
}
```

## 线程同步机制

### 1、信号量

常用的POSIX信号量函数是下面5个：

```c++
#include <semphore.h>
int sem_init(sem_t* sem, int pshared, unsigned int value);
int sem_destory(sem_t* sem);
int sem_wait(sem_t* sem);
int sem_trywait(sem_t* sem);
int sem_post(sem_t* sem);
```

**sem_init**函数同于初始化一个未命名的信号量。pshared参数指定信号量的类型。如果其值为0，就表示这个信号量是当前进程的局部信号量，否则该信号量可以再多个进程之间共享。value参数指定信号量的初始值。

**sem_destory**函数用于销毁信号量，以释放其占用的内核资源。如果销毁一个正被其他线程等待的信号量，则将导致不可预期的结果。

**sem_wait**函数以原子操作的方式将信号量的值减一。**如果信号量值为0，则sem_wait将被阻塞，直到这个信号量具有非0值。**

**sem_trywait**与sem_wait函数相似，不过它始终立即返回，而不论被操作的信号量是否具有非0值，**相当于sem_wait的非阻塞版**。当信号量的值非0时，sem_trywait对信号量执行减一操作。当信号量的值为0时，它将返回-1并设置errno为EAGAIN。

**sem_post**函数以原子操作的方式将信号量的值加1。**当信号量的值大于0时，其他正在调用sem_wait等待信号量的线程将被唤醒。**

上面这些函数成功时返回0，失败则返回-1并设置errno。

下面用信号量来实现：线程A从用户输入得到值后存入全局变量num，此时线程B将取走改值并累加。该过程共进行5次，完成后输出总和并退出程序。

```c++
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

static sem_t sem_one;
static sem_t sem_two;
static int num;

void* read(void* arg)
{
    for(int i=0; i<5; i++){
        printf("Input num:");
        sem_wait(&sem_two);
        scanf("%d", &num);
        sem_post(&sem_one);
    }
    return NULL;
}

void* accu(void* arg)
{
    int sum = 0;
    for(int i=0; i<5; i++){
        sem_wait(&sem_one);
        sum+=num;
        sem_post(&sem_two);
    }
    printf("Result:%d\n",sum);
    return NULL;
}

int main(int argc, char* argv[])
{
    pthread_t id_t1, id_t2;
    //生成两个信号量，一个设为0，一个设为1，让read线程先执行
    //之后通过两个信号量实现交替执行read和accu
    sem_init(&sem_one, 0, 0);
    sem_init(&sem_two, 0, 1);

    pthread_create(&id_t1, NULL, read, NULL);
    pthread_create(&id_t2, NULL, accu, NULL);

    pthread_join(id_t1, NULL);
    pthread_join(id_t2, NULL);

    sem_destroy(&sem_one);
    sem_destroy(&sem_two);

    return 0;
}

```

### 2、互斥锁

互斥锁（也称互斥量）可以用于保护关键代码段，以确保其独占式的访问，这有点像一个二进制信号量。当进入关键代码段时，我们需要获得互斥锁并将其加锁，这等价于二进制信号量的P操作；当离开关键代码段时，我们需要对互斥锁解锁，以唤醒其他等待该互斥锁的线程，这等价于二进制信号量的V操作。‘

互斥锁的相关函数主要有如下5个：

```c++
#include <pthread.h>
int pthread_mutex_init(pthread_mutex_t* mutex, const pthread_mutexattr_t* mutexattr);
int pthread_mutex_destory(pthread_mutex_t* mutex);
int pthread_mutex_lock(pthread_mutex_t* mutex);
int pthread_mutex_trylock(pthread_mutex_t* mutex);
int pthread_mutex_unlock(pthread_mutex_t* mutex);
```

这些函数的第一个参数mutex指向要操作的目标互斥锁，互斥锁的类型是篇thread_mutex_t结构体。

**pthread_mutex_init**函数用于初始化互斥锁。mutexattr参数指定互斥锁的属性。如果将它设置为NULL，则表示使用默认属性。除了这个函数外，我们还可以使用如下方式来初始化一个互斥锁：

```c++
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
```

**pthread_mutex_destory**函数用于销毁互斥锁，以释放其占用的内核资源。销毁一个已经加锁的互斥锁将导致不可预期的后果。

**pthread_mutex_lock**函数以原子操作的方式给一个互斥锁加锁。如果目标互斥锁已经被锁上，**则pthread_mutex_lock调用将阻塞**，直到该互斥锁的占有者将其解锁。

**pthread_mutex_try**与pthread_mutex_lock函数类似，不过它始终立即返回，而不论被操作的互斥锁是否已经被加锁，**相当于pthread_mutex_lock的非阻塞版本。**当目标互斥锁未被加锁时，pthread_mutex_trylock对互斥锁执行加锁操作。当互斥锁已经被加锁时，pthread_mutex_trylock将返回错误码EBUSY。

**pthread_mutex_unlock**函数以原子操作的方式给一个互斥锁解锁。如果此时有其他线程正在等待这个互斥锁，则这些线程中的某一个将获得它。

上面这些函数成功时返回0，失败则返回错误码。

下面用互斥锁来实现：创建100个线程，其中一半执行thread_inc函数中的代码，另一半则执行thread_des函数中的代码，全局变量num经过增减过程后应存有0，用互斥锁来实现某一时刻只能有一个线程访问全局变量num。

```c++
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <pthread.h>
#define NUM_THREAD 100

long long num = 0;
pthread_mutex_t mutex;

void* thread_inc(void* arg)
{
    pthread_mutex_lock(&mutex);
    for(int i=0; i<50000; i++)num++;
    pthread_mutex_unlock(&mutex);
    return NULL;
}

void* thread_des(void* arg)
{
    pthread_mutex_lock(&mutex);
    for(int i=0; i<50000; i++)num--;
    pthread_mutex_unlock(&mutex);
    return NULL;
}

int main(int argc, char* argv[])
{
    pthread_t thread_id[NUM_THREAD];
    pthread_mutex_init(&mutex, NULL);
    for(int i=0; i<NUM_THREAD; i++){
        if(i%2)pthread_create(&(thread_id[i]), NULL, thread_inc, NULL);
        else pthread_create(&(thread_id[i]), NULL, thread_des, NULL);
    }
    for(int i=0; i<NUM_THREAD; i++)
        pthread_join(thread_id[i], NULL);
    
    printf("result:%lld\n", num);
    pthread_mutex_destroy(&mutex);
    return 0;
}
```

**死锁举例**

使用死锁的一个噩耗是死锁。死锁使得一个或多个线程被挂起而无法继续执行，而且这种情况还不容易发现。前文提到，在一个线程中对一个已经加锁的普通锁再次加锁，将导致死锁。另外，如果两个线程按照不同的顺序来申请两个互斥锁，也容易产生死锁，如下面代码所示：

```c++
#include <pthread.h>
#include <unistd.h>
#include <stdio.h>

int a = 0;
int b = 0;
pthread_mutex_t mutex_a;
pthread_mutex_t mutex_b;

void* another(void* arg)
{
    pthread_mutex_lock(&mutex_b);
    printf("in child thread, got mutex b, waiting for mutex a\n");
    sleep(5);
    ++b;
    pthread_mutex_lock(&mutex_a);
    b += a++;
    pthread_mutex_unlock(&mutex_a);
    pthread_mutex_unlock(&mutex_b);
    pthread_exit(NULL);
}

int main()
{
    pthread_t id;
    pthread_mutex_init(&mutex_a, NULL);
    pthread_mutex_init(&mutex_b, NULL);
    pthread_create(&id, NULL, another, NULL);

    pthread_mutex_lock(&mutex_a);
    printf("in parent thread, got mutex a, waiting for mutex b\n");
    sleep(5);
    ++a;
    pthread_mutex_lock(&mutex_b);
    a += b++;
    pthread_mutex_unlock(&mutex_b);
    pthread_mutex_unlock(&mutex_a);

    pthread_join(id, NULL);
    pthread_mutex_destroy(&mutex_a);
    pthread_mutex_destroy(&mutex_b);
    return 0;

}
```

主线程试图先占有互斥锁mutex_a，然后操作被该所保护的变量a，但操作完毕之后，主线程没有立即释放互斥锁mutex_a，而是又申请互斥锁mutex_b，并在两个互斥锁的保护下，操作变量a和b，最后才一起释放这两个互斥锁；与此同时，子线程则按照相反的顺序来申请mutex_a和mutex_b，并在两个锁的保护下操作变量a和b。我们用sleep函数来模拟连续两次调用pthread_mutex_lock之间的时间差，以确保两个线程各自先占有一个互斥锁（主线程占有mutex_a，子线程占有mutex_b），然后等待另外一个互斥锁（主线程等待mutex_b，子线程等待mutex_a）。这样，两个线程就僵持住了，谁都不能继续往下执行，从而形成死锁。

> - 信号量：多线程同步使用的；一个线程完成某个动作后通过信号告诉别的线程，别的线程才可以执行某些动作；
> - 互斥量：多线程互斥使用的；一个线程占用某个资源，那么别的线程就无法访问，直到该线程离开，其他线程才可以访问该资源；

### 3、条件变量

如果说互斥锁是用于同步线程对共享数据的访问的话，那么条件变量则是用于在线程之间同步共享数据的值。条件变量提供了一种线程间的通知机制：当某个共享数据达到某个值的时候，唤醒等待这个共享数据的线程。

条件变量的相关函数主要有如下5个：

```c++
#include <pthread.h>
int pthread_cond_init(pthread_cond_t* cond, const pthread_condattr_t* cond_attr);
int pthread_cond_destroy(pthread_cond_t* cond);
int pthread_cond_broadcast(pthread_cond_t* cond);
int pthread_cond_signal(pthread_cond_t* cond);
int pthread_cond_wait(pthread_cond_t* cond, pthread_mutex_t* mutex);
```

这些函数的第一个参数cond指向要操作的目标条件变量，条件变量的类型是pthread_cond_t结构体。

**pthread_cond_init**函数用于初始化条件变量。cond_attr参数指定条件变量的属性。如果将它设置为NULL，则表示使用默认属性。我们还可以使用如下方式来初始化一个条件变量：

```c++
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
```

**pthread_cond_destory**函数用于销毁条件变量，以释放其占用的内核资源。销毁一个正在等待的条件变量将失败并返回EBUSY。

**pthread_cond_broadcast**函数以广播的方式唤醒所有等待目标条件变量的线程。**pthread_cond_signal**函数用于唤醒一个等待目标条件变量的线程。至于哪个线程被唤醒，则取决于线程的优先级和调度策略。有时候我们可能想唤醒一个指定的线程，但pthread没有对该需要提供解决方法。不过我们可以间接地实现该需求：定义一个能够唯一表示目标线程地全局变量，在唤醒等待条件变量地线程前先设置该变量为目标线程，然后采用广播方式唤醒所有等待条件变量地线程，这些线程被唤醒后都检查改变量以判断被唤醒的是否是自己，如果是就开始执行后续代码，如果不是则返回继续等待。

**pthread_cond_wait**函数用于等待目标条件变量。mutex参数是用于保护条件变量的互斥量，以确保pthread_cond_wait的原子性。在调用pthread_cond_wait前，必须确保锁mutex已经加锁，否则将导致不可预期的结果。pthread_cond_wait函数执行时，首先把调用线程放入条件变量的等待队列中，然后将互斥锁mutex解锁。可见，从pthread_cond_wait开始执行到其调用线程被放入条件变量的等待队列之间的这段时间内，pthread_cond_signal和pthread_cond_broadcast等函数不会修改条件变量。换言之，pthread_cond_wait函数不会错过目标条件变量的任何变化。当pthread_cond_wait函数成功返回时，互斥锁mutex将再次被锁上。

即完成以下两个操作：

- 阻塞线程，直至接收到“条件成立”的信号
- 当线程被添加到等待队列上时，将互斥锁解锁

也就是说，函数尚未接收到“条件成立”的信号之前，它将一直阻塞线程执行。注意，当函数接收到“条件成立”的信号后，它并不会立即结束对线程的阻塞，而是先完成对互斥锁的加锁操作，然后才解除阻塞。

> 以“原子操作”的方式完成“阻塞线程+解锁”或者“重新加锁+解除阻塞”这两个过程。所谓“原子操作”，即当有多个线程执行相同的某个过程时，虽然它们都会访问互斥锁和条件变量，但之间不会相互干扰。

使用条件变量的例子

```c++
#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>
#include <unistd.h>

//初始化互斥锁
pthread_mutex_t myMutex = PTHREAD_MUTEX_INITIALIZER;
//初始化条件变量
pthread_cond_t myCond = PTHREAD_COND_INITIALIZER;
//设置全局变量
int x = 0;

void* waitForTrue(void* arg)
{

    //条件变量阻塞线程之前，先对互斥锁执行加锁操作
    pthread_mutex_lock(&myMutex);
    printf("等待x的值为10\n");
    if(pthread_cond_wait(&myCond, &myMutex) == 0){
        printf("x = %d\n", x);
    }
    //最终将互斥锁解锁
    pthread_mutex_unlock(&myMutex);
    return NULL;
}

void* doneForTrue(void* arg)
{
    int res;
    while(x!=10){
        //对互斥锁执行加锁操作
        pthread_mutex_lock(&myMutex);
        x++;
        printf("doneForTrue:x = %d\n", x);
        sleep(1);
        //对互斥锁解锁
        pthread_mutex_unlock(&myMutex);
    }
    //发送条件成立的信号，解除mythread1线程的被阻塞状态
    pthread_cond_signal(&myCond);
    return NULL;
}

int main(int argc, char* argv[])
{
    pthread_t mythread1, mythread2;
    pthread_create(&mythread1, NULL, waitForTrue, NULL);
    pthread_create(&mythread2, NULL, doneForTrue, NULL);
    
    pthread_join(mythread1, NULL);
    pthread_join(mythread2, NULL);
    pthread_cond_destroy(&myCond);
    pthread_mutex_destroy(&myMutex);
    return 0;
}

```

### 4、线程同步机制包装类

```c++
//locker.h
#ifndef LOCKER_H
#define LOCKER_H

#include <exception>
#include <pthread.h>
#include <semaphore.h>
//封装信号量的类
class sem
{
public:
    //创建并初始化信号量
    sem(){
        if(sem_init(&m_sem, 0, 0) != 0){
            //构造函数没有返回值，可以通过抛出异常来报告错误
            throw std::exception();
        }
    }
    //销毁信号量
    ~sem(){
        sem_destroy(&m_sem);
    }
    //等待信号量
    bool wait(){
        return sem_wait(&m_sem) == 0;
    }
    //增加信号量
    bool post(){
        return sem_post(&m_sem) == 0;
    }

private:
    sem_t m_sem;
};


//封装互斥锁的类
class locker
{
public:
    //创建并初始化互斥锁
    locker(){
        if(pthread_mutex_init(&m_mutex, NULL) != 0){
            throw std::exception();
        }
    }
    //销毁互斥锁
    ~locker(){
        pthread_mutex_destroy(&m_mutex);
    }
    //获取互斥锁
    bool lock(){
        return pthread_mutex_lock(&m_mutex) == 0;
    }
    //释放互斥锁
    bool unlock(){
        return pthread_mutex_unlock(&m_mutex) == 0;
    }

private:
    pthread_mutex_t m_mutex;
};

//封装条件变量的类
class cond
{
public:
    //创建并初始化条件变量
    cond(){
        if(pthread_mutex_init(&m_mutex, NULL) != 0){
            throw std::exception();
        }
        if(pthread_cond_init(&m_cond, NULL) != 0){
            //构造函数一旦出现问题，就应该立即释放已经成功分配了的资源
            pthread_mutex_destroy(&m_mutex);
            throw std::exception();
        }
    }
    //销毁条件变量
    ~cond(){
        pthread_mutex_destroy(&m_mutex);
        pthread_cond_destroy(&m_cond);
    }
    //等待条件变量
    bool wait(){
        int ret = 0;
        pthread_mutex_lock(&m_mutex);
        ret = pthread_cond_wait(&m_cond, &m_mutex);
        pthread_mutex_unlock(&m_mutex);
        return ret == 0;
    }
    //唤醒等待条件变量的线程
    bool signal(){
        return pthread_cond_signal(&m_cond) == 0;
    }
private:
    pthread_mutex_t m_mutex;
    pthread_cond_t m_cond;
};

#endif

```

## 半同步/半反应堆线程池实现


异步线程只有一个，由主线程来充当。它负责监听所有socket上的事件。如果监听socket上有可读事件发生，即有新的连接请求到来，主线程就接受之以得到新的连接socket，然后往epoll内核事件表注册该socket上的读写事件。如果连接socket上有读写事件发生，即有新的客户请求到来或有数据要发送至客户端，主线程就将该连接socket插入请求队列中。所有工作线程都睡眠在请求队列中，当有任务到来时，它们将通过竞争（比如申请互斥锁）获得任务的接管权。这种竞争机制使得只有空闲的工作线程才有机会来处理新任务。

1. 线程池的概念

   线程池就是首先创建一些线程，它们的集合称为线程池。使用线程池可以很好地提高性能。线程池在系统启动时创建大量空闲的线程，程序将一个任务传给线程池，线程池就会启动一条线程来执行这个任务，执行结束以后，该线程并不会死亡，而是再次回线程池中成为空闲状态，等待执行下一个任务。

2. 线程池的工作机制
   - 在线程池的编程模式下，任务是提交给整个线程池，而不是直接提交给某个线程，线程池拿到任务后，就在内部寻找是否有空闲的线程，如果有，则将任务交给某个空闲的线程。
   - 一个线程同时只能执行一个任务，但可以同时向一个线程池提交多个任务

3. 使用线程池的原因

   多线程运行时间，系统不断的启动和关闭新线程，成本非常高，会过度消耗系统资源，以及过度切换线程的危险，从而可能导致系统资源的崩溃。这时，线程池就是最好的选择。

下面实现一个基于半同步/半反应堆模式的线程池，它使用了一个工作队列完全解除了主线程和工作线程的耦合关系：主线程往工作队列中插入任务，工作线程通过竞争取得任务并执行它。不过，如果要将该线程池应用到实际服务器程序中，那么我们必须保证所有客户请求都是无状态的，因为同一个连接上的不同请求可能会由不同的线程处理。

```c++
//threadpool.h
#ifndef THREADPOOL_H
#define THREADPOOL_H

#include <list>
#include <cstdio>
#include <exception>
#include <pthread.h>
#include "locker.h"

//线程池类，将它定义为模板类是为了代码复用，模板参数T是任务类
template<typename T>
class threadpool
{
public:
    //参数thread_number是线程池中线程的数量，max_requests是请求队列中最多允许的、等待处理的请求的数量
    threadpool(int thread_number = 8, int max_requests = 10000);
    ~threadpool();
    //往请求队列中添加任务
    bool append(T* request);

private:
    //工作线程运行的函数，它不断从工作队列中取出任务并执行之
    static void* worker(void* arg);
    void run();

    int m_thread_number;        //线程池中的线程数
    int m_max_requests;         //请求队列中允许的最大请求数
    pthread_t* m_threads;       //描述线程池的数组，其大小为m_thread_number
    std::list<T*>m_workqueue;   //请求队列
    locker m_queuelocker;       //保护请求队列的互斥锁
    sem m_queuestat;            //是否有任务需要处理
    bool m_stop;                //是否结束线程
};

template<typename T>
threadpool<T>::threadpool(int thread_number, int max_requests):
    m_thread_number(thread_number), m_max_requests(max_requests),
    m_stop(false), m_threads(NULL)
{
    if(thread_number <=0 || max_requests <= 0){
        throw std::exception();
    }
    m_thread = new pthread_t[m_thread_number];
    if(!m_thread){
        throw std::exception();
    }

    //创建thread_number个线程，并将它们都设置为脱离线程
    for(int i=0; i<thread_number; ++i){
        printf("create the %dth thread\n", i);
        if(pthread_create(m_threads + i, NULL, worker, this) != 0){
            delete [] m_threads;
            throw std::exception();
        }
        if(pthread_detach(m_threads[i]) != 0){
            delete [] m_threads;
            throw std::exception();
        }
    }
}

template<typename T>
threadpool<T>::~threadpool()
{
    delete [] m_threads;
    m_stop = true;
}

template<typename T>
bool threadpool<T>::append(T* request)
{
    //操作工作队列时一定要加锁，因为它被所有线程共享
    m_queuelocker.lock();
    if(m_workqueue.size() > m_max_requests){
        m_queuelocker.unlock();
        return false;
    }
    m_workqueue.push_back(request);
    m_queuelocker.unlock();
    m_queuestat.post();
    return true;
}

template<typename T>
void* threadpool<T>::worker(void* arg)
{
    threadpool* pool = (threadpool*)arg;
    pool->run();
    return pool;
}

template<typename T>
void threadpool<T>::run()
{
    while(!m_stop){
        m_queuestat.wait();
        m_queuelocker.lock();
        if(m_workqueue.empty()){
            m_queuelocker.unlock();
            continue;
        }
        T* request = m_workqueue.front();
        m_workqueue.pop_front();
        m_queuelocker.unlock();
        if(!request){
            continue;
        }
        request->process();
    }
}

#endif
```

## epoll

**EPOLL**的本质就是一个**状态机** 它的**条件关联了读写缓冲区**

**电平触发:**

**EPOLLIN**的触发条件是 **读缓冲区非空 && 事件带有EPOLLIN状态**

**EPOLLOUT**的触发条件是 **写缓冲区非满 && 事件带有EPOLLOUT状态**

**边沿触发:**

**EPOLLIN**的触发条件是 **读缓冲区 空=>非空 发生切换 && 事件带有EPOLLIN状态**

**EPOLLOUT**的触发条件是 **写缓冲区 满=>非满 发生切换 && 事件带有EPOLLOUT状态**

所以EPOLLOUT能够很好的处理发送失败的情况
