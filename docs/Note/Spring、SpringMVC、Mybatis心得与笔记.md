# Spring、SpringMVC、Mybatis心得与笔记

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

[卖炫迈的小男孩](https://blog.csdn.net/qq_43791377?spm=1001.2014.3001.5343)

本博客参考视频来自黑马：[B站黑马官方视频](https://www.bilibili.com/video/BV1WZ4y1P7Bp)

[B站视频2](https://www.bilibili.com/video/BV1WZ4y1H7du?p=1)

截图来自黑马课件和尚硅谷javaweb课件

## 一.Spring简介

### 1.Spring是什么

![Spring简介](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring简介.png)

### 2.Spring的优势

![Spring的优势](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring的优势.png)

![Spring的优势2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring的优势2.png)

（3）指的是数据库的事物管理

（4）Spring集成了junit

## 二.Spring程序开发步骤

### 1.开发步骤举例

![Spring程序开发步骤举例](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring程序开发步骤举例.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;图中的Service层不用再像以前javaweb一样自己new一个Dao层的实例再进行操作，Spring会根据d标识并通过xml配置文件的来创建实例。

![Spring程序开发步骤举例2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring程序开发步骤举例2.png)

### 2.Spring入门开发步骤代码示例

步骤：

![Spring快速入门](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring快速入门.png)

最终项目的目录结构如下:

![image-20210123025241520](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123025241520.png)

（1）在pom.xml导入[应用上下文spring-context](https://blog.csdn.net/smd2575624555/article/details/83309756)。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spring通过应用上下文（Application Context）装载bean的定义并把它们组装起来。Spring应用上下文全权负责对象的创建和组装。Spring自带了多种应用上下文的实现，它们之间主要的区别仅仅在于如何加载配置。其中：

ClassPathXmlApplicationContext：从类路径下的一个或多个XML配置文件中加 载上下文定义，把应用上下文的定义文件作为类资源。

在IDEA中配置如下：

![pom.xml](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123021426550.png)

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.0.5.RELEASE</version>
    </dependency>
</dependencies>
```

（2）创建dao

![dao](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123022225235.png)

(3)、（4）创建并配置applicationContext.xml

![applicationContext.xml](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123025044049.png)

(5)通过ApplicationContext对象.getBean("id")创建响应的Bean对象

![image-20210123025501461](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123025501461.png)

运行结果如下：

![image-20210123025535035](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123025535035.png)

## 三.Spring配置文件

### 1.Bean标签的基本配置

#### 3.1.1.id和class属性

![Bean标签的基本配置 ](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Bean标签的基本配置 .png)

- 默认情况下（Singleton），多次获取同一个id的bean，得到的将是同一个对象。
- 不可以配置多个id相同的bean
- ***可以配置多个id不同但class相同的bean***

#### 3.1.2.scope作用范围属性

![Bean标签的基本配置2 ](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Bean标签的基本配置2 .png)

**（1）singleton**：

代码测试：

![image-20210123121558078](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123121444854-1611722848180.png)

运行结果：

![image-20210123121444854](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123121558078.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要测试对象是一个还是多个在容器当中，只要测一下它的地址就行，即测试一下userDao1和userDao2的地址是否相同。根据结果是相同的。

（2）**prototype：**

代码测试：

![image-20210123122127386](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123122127386.png)

运行结果：

![image-20210123122236237](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123122236237.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;userDao1和userDao2的地址不相同，即代表容器中存在的UserDao有多个。

#### 3.1.3.Bean对象的创建时机

![Bean标签的基本配置3 ](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Bean标签的基本配置3 .png)

![image-20210123144546918](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123144546918.png)

#### 3.1.4.Bean生命周期配置

![Bean标签的生命周期配置](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Bean标签的生命周期配置.png)

代码测试：

（1）在UserDaoImpl类中加无参构造函数、init()和destroy()方法

```java
//无参构造函数
public UserDaoImpl() {
    System.out.println("UserDaoImpl创建....");
}
public void init(){
    System.out.println("初始化方法");
}

public void destroy(){
    System.out.println("销毁方法");
}
```

（2）在applicationContext中init-method和destroy-method标签

![image-20210123151108651](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123151108651.png)

（3）运行结果

![image-20210123151259006](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210123151259006.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;init-method和destroy-method标签其实就是定义Bean对象初始化和销毁的时候要调用的方法。

#### 3.1.5.Bean实例化的三种方式

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先什么是**工厂类**，可以简单理解就是一个可以在你需要一个类A的地方，代替new动态生成（生产）一个类A（或类A的子类）的类，工厂类可以动态的返回一个类给你，实现解耦，增加代码的灵活性。工厂模式一共有三种，这里不需要深入了解。

**（1）无参构造方法实例化**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个是默认方式，效果就是3.1.3和3.1.4。

**（2）工厂静态方法实例化**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）创建静态工厂类StaticFactory

![创建静态工厂类](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/创建静态工厂类.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）在配置文件配置Bean标签的factory-method属性

```xml
<!--这么写就是无参构造创建
<bean id="userDao" class="dao.impl.UserDaoImpl" ></bean>-->

<!--一定不要忘记加factory-method，否则就是无参构造创建StaticFactory类了-->
<bean id="userDao" class="factory.StaticFactory" factory-method="getUserDao"></bean>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3）运行测试代码:

```java
    public void test1(){
        ClassPathXmlApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserDao userDao1 = (UserDao) app.getBean("userDao");
        System.out.println(userDao1);
    }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4）测试结果：

![创建静态工厂类测试结果](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/创建静态工厂类测试结果.png)

**（3）工厂实例方法实例化**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）创建工厂类DynamicFactory

```java
package factory;

import dao.UserDao;
import dao.impl.UserDaoImpl;

public class DynamicFactory {

    //这里的方法不是静态的，就意味着要先实例化类DynamicFactory
    public UserDao getUserDao(){
        return new UserDaoImpl();
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）在配置文件配置Bean标签的factory-method属性

```xml
<!--既然要先有工厂类DynamicFactory，所以要先让spring容器产生对象-->
<bean id="factory" class="factory.DynamicFactory"></bean>
<!--最终要的是工厂返回的对象，所以还要配一个userDao的Bean-->
<bean id="userDao" factory-bean="factory" factory-method="getUserDao"></bean>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3）4）步骤结果都一样

后两种方法**总结**：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实本质上没有多大不同，只是调用方法的方式不同。一个类的静态方法（static）可以不用先创建(new)该类，就能通过“该类名.方法“调用。但是如果要调用的方法不是静态的方法就不用通过一个实例化的对象来调用，即必须先创建(new)该类，生成一个该类的对象，再通过”对象.方法“才能调用。

### 2.Bean标签的依赖注入

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**依赖注入**（Dependency Injection）:它是Spring框架核心IOC的具体实现。

![依赖注入](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/依赖注入.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**给某个类的属性设置值有两种方式：1.set方法；2.有参构造函数。**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个“依赖注入”就是给某个类里面的属性设置值（获取对象）。只不过以前javaweb的属性是直接new的，(比如UserServiceImpl)：

```java
//业务要操作数据库就要用dao层
private UserDao userDao = new UserDaoImpl();
```

而现在userDao获取对象是通过spring的getBean()实现。所以userDao在定义时就不能new了。直接写:

```java
private UserDao userDao;
```

如果不设置值，运行就会报空指针异常错误。这个依赖注入就是解决这种问题。



&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果**不使用依赖注入**，加入web层调用service层，service层里面再调用dao层都是需要使用getBean()来获取的。

ApplicationContext.xml:

```xml
<bean id="userDao" class="dao.impl.UserDaoImpl" ></bean>
<bean id="userService" class="service.impl.UserServiceImpl"></bean>
```

web层代码：

```java
//充当web层，调用service层
public static void main(String[] args) {
    ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
    UserService userService = (UserService) app.getBean("userService");
    userService.save();
}
```

service层：

```java
public void save() {
    ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
    UserDao userDao1 = (UserDao) app.getBean("userDao");
    //这是Service层要调用dao层,dao层是由Spring创建的
    userDao1.save();
}
```

但是无论是service层调用dao层，还是web层调用service层，每次都通过getBean()来获取就有点麻烦，这就需要使用依赖注入了。



ps:目前了解到依赖注入的好处就是减低代码之间的耦合度和Bean的生命周期控制。



> Spring容器中使用到的原则就是控制反转,我们之前写的代码中对象实例都是直接通过我们自己使用new关键字来创建,我们对于对象来说就是绝对的霸主,但Spring框架中使用容器来帮助我们管理项目中的类的创建,这样我们的控制权就给了spring容器,类似一种反转,所以称为控制反转,我们控制类的创建被spring取代了.
>
> Spring容器管理对象
> 对象的创建和管理交给容器完成
> 当我们需要实现具体业务时，只需要从容器中获取相关对象即可
> 传统方式：
> 对象的创建和管理由程序员手动完成
> 对象的创建和管理方式发生了反转，由程序员变成了程序（容器）

[^]: 引用于：https://blog.csdn.net/qq_43265564/article/details/112302472



#### 3.2.1.set方式依赖注入

1.给需要调用dao的service层（UserServiceImpl）设置属性和该属性的set方法

```java
private UserDao userDao;
//set方法
public void setUserDao(UserDao userDao) {
    this.userDao = userDao;
}
```

2.去掉多余的getBean()

UserServiceImpl完整代码如下：

```java
public class UserServiceImpl implements UserService {

    private UserDao userDao;
    //set方法
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public void save() {
        //ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        //UserDao userDao = (UserDao) app.getBean("userDao");
        userDao.save();
    }
}
```

把getBean()那两行去掉。

3.**配置ApplicationContext.xml**

```xml
<bean id="userDao" class="dao.impl.UserDaoImpl" ></bean>
<bean id="userService" class="service.impl.UserServiceImpl">
    <property name="userDao" ref="userDao"></property>
</bean>
```

注意属性标签的name属性里面的值是setter方法后面那部分的名字的首字母改小写，而不是属性值 。ref是注入引用，注入值是value属性

4.**测试**

用于充当web层测试的UserController类：

```java
public class UserController {
    //充当web层，调用service层
    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = (UserService) app.getBean("userService");
        userService.save();
    }
}
```

执行其main方法是可以正常运行的。

延伸：

如果main()里面的userService不是通过容器获取的，而是new出来的话，会报“空指针异常”：

将main方法改为：

```java
    public static void main(String[] args) {
        UserService userService = new UserServiceImpl();
        userService.save();
    }
```

运行main()方法：

![image-20210124153906756](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210124153906756.png)

这里的userService不是通过容器拿的，所以里面没有userDao,根本就没有给userDao赋值，所以会报空指针异常。



**set方法P命名空间注入**

![P命名空间](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/P命名空间.png)

1.引入P命名空间：（图画错了，应该是下一行）

![image-20210124155656225](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210124155656225.png)

2.修改注入方式

```xml
<bean id="userService" class="service.impl.UserServiceImpl" p:userDao-ref="userDao">
</bean>
```

#### 3.2.2.有参构造函数方式依赖注入

1.在service层的UserServiceImpl类中，添加有参构造函数

```java
public class UserServiceImpl implements UserService {

    private UserDao userDao;

    public UserServiceImpl(UserDao userDao1) {
        this.userDao = userDao1;
    }

    public UserServiceImpl() {
    }
    
    @Override
    public void save() {
        userDao.save();
    }
}
```

为了更加明确name属性的值是给谁的，特意将构造函数的参数修改为userDao1！

2.配置ApplicationContext.xml

```xml
<bean id="userService" class="service.impl.UserServiceImpl" >
    <constructor-arg name="userDao1" ref="userDao"></constructor-arg>
</bean>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试还是用的UserController类上面运行无误，constructor-arg标签的name属性的值是有参构造函数的参数。set方式中的property标签中的name属性的值是setter方法后面那部分的名字的首字母改小写，而不是属性值 。

#### 3.2.3.Bean的其他数据类型依赖注入

![Bean标签的依赖注入的数据类型 ](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Bean标签的依赖注入的数据类型 .png)

**1.普通数据类型注入**

（1）UserDaoImpl设置String、int和setter()

```java
public class UserDaoImpl implements UserDao {

    private String username;
    private int age;

    public void setUsername(String username) {
        this.username = username;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void save() {
        System.out.println("username = " + username + ";age=" + age);
        System.out.println("save() running...");
    }
}
```

（2）配置ApplicationContext.xml

```xml
<bean id="userDao" class="dao.impl.UserDaoImpl" >
    <property name="username" value="张三"/>
    <property name="age" value="18"/>
</bean>
```

（3）以下代码测试

```java
public class UserController {
    //充当web层，调用service层
    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = (UserService) app.getBean("userService");
        userService.save();
    }
}
```

测试结果为：

![image-20210124190832366](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210124190832366.png)

**2.集合数据类型注入**

property的双标签里面还能有其他依赖注入类型的标签，比如：

![依赖注入的开标签里面还有标签](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/依赖注入的开标签里面还有标签.png)

（1）创建domain.User类进行测试

```java
public class User {

    private String name;
    private String addr;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", addr='" + addr + '\'' +
                '}';
    }
}
```

（2）修改UserDaoImpl类，添加三个集合/引用数据类型

```java
public class UserDaoImpl implements UserDao {

    private List<String> strList;
    private Map<String, User> userMap;
    private Properties properties;

    public void setStrList(List<String> strList) {
        this.strList = strList;
    }

    public void setUserMap(Map<String, User> userMap) {
        this.userMap = userMap;
    }

    public void setProperties(Properties properties) {
        this.properties = properties;
    }

    private String username;
    private int age;

    public void setUsername(String username) {
        this.username = username;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void save() {
        //System.out.println("username = " + username + ";age=" + age);
        System.out.println(strList);
        System.out.println(userMap);
        System.out.println(properties);
        System.out.println("save() running...");
    }
}
```

（3）**配置ApplicationContext.xml并注入**

```xml
<!--setter方法注入-->
<bean id="userDao" class="dao.impl.UserDaoImpl" >
    <property name="strList">
        <list>
            <value>aaa</value>
            <value>bbb</value>
            <value>ccc</value>
        </list>
    </property>
    <property name="userMap">
        <map>
            <!--key可以取key,key-ref后者是引用类型。传入的值就是map的key-->
            <entry key="u1" value-ref="user1"></entry>
            <entry key="u2" value-ref="user2"></entry>
        </map>
    </property>
    <property name="properties">
        <props>
            <!--prop里没有value属性，直接写在标签里-->
            <prop key="p1">ppp1</prop>
            <prop key="p2">ppp2</prop>
            <prop key="p3">ppp3</prop>
        </props>
    </property>
</bean>
<!--创建两个User对象user1,user2-->
<bean id="user1" class="domain.User">
    <!--因为User里面的两个属性都是String,属于普通数据类型，都用value-->
    <property name="name" value="tom"/>
    <property name="addr" value="beijing"/>
</bean>
<bean id="user2" class="domain.User">
    <property name="name" value="lucy"/>
    <property name="addr" value="tianjin"/>
</bean>

<bean id="userService" class="service.impl.UserServiceImpl">
    <property name="userDao" ref="userDao"></property>
</bean>
```

（4）使用UserController进行测试

```java
public class UserController {
    //充当web层，调用service层
    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = (UserService) app.getBean("userService");
        userService.save();
    }
}
```

（5）运行结果

![image-20210124233007004](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210124233007004.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[IoC(控制反转)和DI(依赖注入)的理解](https://www.cnblogs.com/xdp-gacl/p/4249939.html)。

### 3.import标签和总结

1.import标签引入其他配置文件

![引入其他配置文件](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/引入其他配置文件.png)

2.总结：

![Spring配置文件](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring配置文件.png)

### 4.Spring相关类和API

#### 3.4.1.ApplicationContext的继承体系

（1）ApplicationContext：接口类型，代表应用上下文，可以通过其实例获得Spring容器中的Bean对象

（2）ApplicationContext的实现类

![ApplicationContext的实现类](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/ApplicationContext的实现类.png)

#### 3.4.2.getBean()方法的使用

![getBean()方法使用](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/getBean()方法使用.png)

两种使用方式如下：

```java
public class UserController {
    //充当web层，调用service层
    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        //1.
//        UserService userService = (UserService) app.getBean("userService");
        //2.
        UserService userService = app.getBean(UserService.class);
        userService.save();
    }
}
```

### 5.Spring配置数据源

![数据源的作用](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/数据源的作用.png)

#### 3.5.1.配置C3P0数据源(测试)

（1）创建新的项目

​	3.5.1.的最终目录如下：

![image-20210125011207910](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210125011207910.png)

（2）在pom.xml导坐标，导入mysql数据库驱动，c3p0，druid，junit

```xml
<dependencies>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>5.1.32</version>
    </dependency>
    <dependency>
        <groupId>c3p0</groupId>
        <artifactId>c3p0</artifactId>
        <version>0.9.1.2</version>
    </dependency>
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>druid</artifactId>
        <version>1.1.10</version>
    </dependency>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.11</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

（3）创建测试类和方法

```java
public class DataSourceTest {

    @Test
    //测试手动创建c3p0数据源
    public void test() throws PropertyVetoException, SQLException {
        ComboPooledDataSource dataSource = new ComboPooledDataSource();
        //设置基本的连接参数
        dataSource.setDriverClass("com.mysql.jdbc.Driver");
        dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/test");
        dataSource.setUser("root");
        dataSource.setPassword("123456");
        //获取连接
        Connection connection = dataSource.getConnection();
        //打印connection地址看看是否为空
        System.out.println(connection);
        connection.close();
    }
}
```

（4）测试结果：

```
com.mchange.v2.c3p0.impl.NewProxyConnection@1534f01b

Process finished with exit code 0
```

#### 3.5.2.配置druid数据源(测试)

由于已经导入druid坐标，所以直接在测试类DataSourceTest里添加测试方法就行了

```java
@Test
//测试druid数据源
public void test2() throws SQLException {
    DruidDataSource dataSource = new DruidDataSource();
    //c3p0是setDriverClass()
    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
    dataSource.setUrl("jdbc:mysql://localhost:3306/test");
    dataSource.setUsername("root");
    dataSource.setPassword("123456");
    DruidPooledConnection connection = dataSource.getConnection();
    System.out.println(connection);
    connection.close();
}
```

#### 3.5.3.抽取jdbc.properties配置文件

抽取生成配置文件的目的是为了解耦。

**（1）使用ResourceBundle来获取配置文件信息**

这里用**c3p0**来演示：

1.在resources下创建文件jdbc.properties，内容如下

```properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/test
jdbc.username=root
jdbc.password=123456
```

2.在DataSourceTest下创建测试方法：

```java
@Test
//测试手动创建c3p0数据源（加载properties配置文件）
public void test3() throws PropertyVetoException, SQLException {
    //1.读取配置文件 Bundle：绑定
    ResourceBundle resourceBundle = ResourceBundle.getBundle("jdbc");//不用加properties扩展名
    //key是配置文件的key
    String driver = resourceBundle.getString("jdbc.driver");
    String url = resourceBundle.getString("jdbc.url");
    String username = resourceBundle.getString("jdbc.username");
    String password = resourceBundle.getString("jdbc.password");
    //2.创建数据源对象
    ComboPooledDataSource dataSource = new ComboPooledDataSource();
    //3.设置连接对象
    dataSource.setDriverClass(driver);
    dataSource.setJdbcUrl(url);
    dataSource.setUser(username);
    dataSource.setPassword(password);
    //4.获得资源（连接）
    Connection connection = dataSource.getConnection();
    System.out.println(connection);
    //5.资源归还
    connection.close();
}
```

3.运行结果为

```
com.mchange.v2.c3p0.impl.NewProxyConnection@4386f16

Process finished with exit code 0
```

**（2）从InputStream流中加载配置信息并创建数据源对象**

用**druid**来演示，这也是以前javaweb用的方式。

1.jdbc.properties：

```properties
username=root
password=123456
url=jdbc:mysql://localhost:3306/book?useUnicode=true&characterEncoding=utf8
driverClassName=com.mysql.jdbc.Driver
initialSize=5
maxActive=10
```

2.工具类JdbcUtils：

```java
public class JdbcUtils {

    private static DruidDataSource dataSource;
    //为了实现事务，所以用ThreadLocal来保存连接
    private static ThreadLocal<Connection> conns = new ThreadLocal<Connection>();

    static {//静态代码块做初始化
        try {// Crtl + Alt +t 快捷键
            Properties properties = new Properties();//连接池的属性信息都是配置文件里来的，所以要读配置文件jdbc.properties
            //读取jdbc.properties属性配置文件
            InputStream inputStream = JdbcUtils.class.getClassLoader().getResourceAsStream("jdbc.properties");
            //从流中加载数据
            properties.load(inputStream);//需要一个InputStream
            //创建数据库连接池
            dataSource = (DruidDataSource) DruidDataSourceFactory.createDataSource(properties);//Alt+Enter :类型转换
            /*//查看是否连接成功-获取连接
            System.out.println(dataSource.getConnection());----------用于测试的代码*/
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

其实加载properties文件的方法有许多看自己喜欢了。

#### 3.5.4.Spring产生数据源对象(正题)

（1）分析：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们看一下测试方法test3()中有如下代码：

```java
//2.创建数据源对象
ComboPooledDataSource dataSource = new ComboPooledDataSource();
//3.设置连接对象
dataSource.setDriverClass(driver);
dataSource.setJdbcUrl(url);
dataSource.setUser(username);
dataSource.setPassword(password);
```

里面是不是有**无参构造**，是不是有那么多的**set方法**，那么用Spring的**setter方法注入**不是刚刚好。即将dataSource的创建权交给Spring容器去完成。

（2）在pom.xml导入Spring的基本坐标spring-context

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.0.5.RELEASE</version>
</dependency>
```

（3）创建配置文件在resources/applicationContext.xml

```java
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <!--无参构造创建完毕后，还要注入参数-->
    <property name="driverClass" value="com.mysql.jdbc.Driver"></property>
    <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/test"></property>
    <property name="user" value="root"></property>
    <property name="password" value="123456"></property>
</bean>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实就是（1）中的代码，这就创建并配置好好数据源dataSource了。

（4）test4()测试

```java
@Test
//测试Spring容器产生数据源对象（c3p0）
public void test4() throws PropertyVetoException, SQLException {
    ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
    ComboPooledDataSource dataSource = (ComboPooledDataSource) applicationContext.getBean("dataSource");
    Connection connection = dataSource.getConnection();
    System.out.println(connection);
    connection.close();
}
```

（5）测试结果

```
com.mchange.v2.c3p0.impl.NewProxyConnection@4ee203eb

Process finished with exit code 0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用druid数据源也一样配置，只不过配的是DruidDataSource类，并且它的setter4个方法名有所不同。

#### 3.5.5.Spring加载Properties文件

![Spring加载properties配置文件](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210126140143840.png)

（1）在applicationContext.xml引入命名空间和约束路径

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:comtext="http://www.springframework.org/schema/context"
       xsi:schemaLocation=
               "http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                http://www.springframework.org/schema/context  http://www.springframework.org/schema/context/spring-context.xsd">

    <!--加载外部的properties文件-->
    <comtext:property-placeholder location="classpath:jdbc.properties"/>
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <!--用Spring表达式，获取properties文件的key；输入的时候IDEA也有提示的-->
        <property name="driverClass" value="${jdbc.driver}"></property>
        <property name="jdbcUrl" value="${jdbc.url}"></property>
        <property name="user" value="${jdbc.username}"></property>
        <property name="password" value="${jdbc.password}"></property>
    </bean>

    <!--<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        &lt;!&ndash;无参构造创建完毕后，还要注入参数&ndash;&gt;
        <property name="driverClass" value="com.mysql.jdbc.Driver"></property>
        <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/test"></property>
        <property name="user" value="root"></property>
        <property name="password" value="123456"></property>
    </bean>-->

</beans>
```

（4）用test4()方法测试，结果为

```
com.mchange.v2.c3p0.impl.NewProxyConnection@14f232c4

Process finished with exit code 0
```

## 四.Spring的注解开发

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spring是轻代码而重配置的框架，配置比较繁重，影响开发效率，所以注解开发是一种趋势，注解代替xml配置文件可以简化配置，提高开发效率。

#### 1.Spring原始注解

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spring原始注解主要是代替< Bean > 的配置。（除了最后两个都是重点）

![Spring原始注解](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring原始注解.png)

**关于资源文件resources资源文件**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资源文件main目录和test目录下都能创建，但是test目录下的文件包括test资源文件可以读到主资源文件夹和源代码，但是在main目录下的文件是无法访问到test目录下的文件的（比如test/Dao/impl/UserDaoImpl）。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果main和test都有相同的资源文件，就读自己目录下的。main就读main资源文件，test就读test资源文件。

（1）搭建模拟环境

1.创建dao和其impl

```java
public class UserDaoImpl implements UserDao {
    @Override
    public void save() {
        System.out.println("save running ...");
    }
}
```

2.创建Service和其impl

```java
public class UserServiceImpl implements UserService {

    private UserDao userDao;
    //setter方法
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public void save() {
        //注入成功后就可以调用
        userDao.save();
    }
}
```

3.创建模拟web层用于测试

```java
public class UserController {
    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = app.getBean(UserService.class);
        userService.save();
    }
}
```

（2）**用配置文件配置容器**

```xml
<bean id="userDao" class="dao.impl.UserDaoImpl"></bean>
<bean id="userService" class="service.impl.UserServiceImpl">
    <!--Service内部要注入Dao-->
    <property name="userDao" ref="userDao"></property>
</bean>
```

**使用注解替代配置文件**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实就是把applicationcontext.xml里面的Bean的配置注解到类那里。

1.在dao层的UserDaoImpl下进行注解

```java
package dao.impl;

import dao.UserDao;
import org.springframework.stereotype.Component;

//<bean id="userDao" class="dao.impl.UserDaoImpl"></bean>
@Component("userDao")
public class UserDaoImpl implements UserDao {
    @Override
    public void save() {
        System.out.println("save running ...");
    }
}
```

2.在service层的UserServiceImpl下进行注解和依赖注入

```java
package service.impl;

import dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import service.UserService;

//<bean id="userService" class="service.impl.UserServiceImpl">
@Component("userService")
public class UserServiceImpl implements UserService {

    //<property name="userDao" ref="userDao"></property>
    @Autowired
    @Qualifier("userDao")
    private UserDao userDao;
    //setter方法
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public void save() {
        //注入成功后就可以调用
        userDao.save();
    }
}
```

3.在applicationcontext.xml下**配置组件扫描**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意：***使用注解开发时，需要在applicationContext.xml中配置组件扫描，作用是指定哪个包及其子包下的Bean需要进行扫描一遍识别使用注解配置的类、字段和方法。不然Spring怎么知道，就会报错。（这个配置后面也可以使用新注解去注解的）***

在applicationcontext.xml下配置组件扫描：

```xml
<!--配置组件扫描-->
<comtext:component-scan base-package="com.hugo"/>
```

因为要扫描所有的Bean，所以要创建一个最基础的包com.hugo:(项目名：spring_aop)

![image-20210126140143840](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210126140143840.png)

4.运行测试UserController的main方法：

```
save running ...

Process finished with exit code 0
```

其他注解：

1.@Repository用在dao层类上实例化Bean，UserDaoImpl的注解也能写成：

```java
//<bean id="userDao" class="com.hugo.dao.impl.UserDaoImpl"></bean>
//@Component("userDao")
@Repository("userDao")
public class UserDaoImpl implements UserDao {
    ...
}
```

2.@Service是用在Service层的：

```java
//<bean id="userService" class="com.hugo.service.impl.UserServiceImpl">
//@Component("userService")
@Service("userService")
public class UserServiceImpl implements UserService {

    //<property name="userDao" ref="userDao"></property>
    @Autowired
    @Qualifier("userDao")
    private UserDao userDao;
    //setter方法
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
    ...
}
```

3.关于@Autowired和@Qualifier("userDao")

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***在上面用xml配置而没有用注解的方法时，我们使用的是Setter方法注入所以UserServiceImpl类里面一定要有相应的setter方法。但是使用了注解的方法，把setter方法去掉也是可以运行的，Spring会通过反射去给属性赋值。***

4.只使用@Autowired也能注入

```java
@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired//按照数据类型从Spring容器中进行匹配
//    @Qualifier("userDao")//是按照id值从容器中进行匹配的 但是此处@Qualifier("userDao")是要结合@Autowired一起使用
    private UserDao userDao;
    
    @Override
    public void save() {
        //注入成功后就可以调用
        userDao.save();
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***@Autowired是按照数据类型从Spring容器中进行匹配的，如果有多个类型一样的Bean就会出错！所以要根据id注入Bean就要结合@Qualifier("[id]")一起使用***

5.@Resource

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可能IDEA会报红，在pom.xml里面添加坐标：

```xml
<dependency>
    <groupId>javax.annotation</groupId>
    <artifactId>javax.annotation-api</artifactId>
    <version>1.3.1</version>
</dependency>
```

修改UserServiceImpl的注入注解

```java
package com.hugo.service.impl;
import com.hugo.dao.UserDao;
import com.hugo.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Resource(name = "userDao")
    private UserDao userDao;

    @Override
    public void save() {
        //注入成功后就可以调用
        userDao.save();
    }
}
```

@Resource(name = "userDao")就相当于@Autowired + @Qualifier("userDao")。

[@Resource注解加不加name属性]: https://blog.csdn.net/qq_37611061/article/details/88564426

6.@Value

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***前面演示的时候都是注入的引用，如果是值就用Value***

```java
@Service("userService")
public class UserServiceImpl implements UserService {

    @Value("itcast")
    private String driver;

    @Resource(name = "userDao")
    private UserDao userDao;

    @Override
    public void save() {
        System.out.println(driver);
        userDao.save();
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是应用场景就有点尴尬了，既然都是给一个字符串，为什么不直接赋值private String driver=“itcast”;所以还有其他应用场景：

在前面的时候在applicationContext.xml就配置过数据源的Bean：

```xml
<!--加载外部的properties文件-->
<comtext:property-placeholder location="classpath:jdbc.properties"/>
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <!--用Spring表达式，获取properties文件的key；输入的时候IDEA也有提示的-->
    <property name="driverClass" value="${jdbc.driver}"></property>
    <property name="jdbcUrl" value="${jdbc.url}"></property>
    <property name="user" value="${jdbc.username}"></property>
    <property name="password" value="${jdbc.password}"></property>
</bean>
```

所以假如我要把驱动的名字赋给UserServiceImpl里面的字符串driver呢？

可以这样做：

```java
@Service("userService")
public class UserServiceImpl implements UserService {

    @Value("${jdbc.driver}")
    private String driver;

    @Resource(name = "userDao")
    private UserDao userDao;
    @Override
    public void save() {
        System.out.println(driver);
        userDao.save();
    }
}
```

使用UserController测试结果为：

```
com.mysql.jdbc.Driver
save running ...

Process finished with exit code 0
```

6.@Scope("singleton")和@Scope("prototype")

```java
@Service("userService")
//@Scope("singleton")
@Scope("prototype")
public class UserServiceImpl implements UserService {

    @Value("${jdbc.driver}")
    private String driver;

    @Resource(name = "userDao")
    private UserDao userDao;
    ...
}
```

7.@PostConstruct和PreDestroy

```java
@Service("userService")
@Scope("singleton")
//@Scope("prototype")
public class UserServiceImpl implements UserService {

    @Value("${jdbc.driver}")
    private String driver;

    //@Autowired//按照数据类型从Spring容器中进行匹配
//    @Qualifier("userDao")//是按照id值从容器中进行匹配的 但是此处@Qualifier("userDao")是要结合@Autowired一起使用
    @Resource(name = "userDao")
    private UserDao userDao;

    @Override
    public void save() {
        System.out.println(driver);
        userDao.save();
    }
    //post做介词表示在...之后
    //初始化方法是在构造器方法执行之后才执行
    @PostConstruct
    public void init(){
        System.out.println("Service对象的初始化方法");
    }
    @PreDestroy
    public void destroy(){
        System.out.println("Service对象的销毁方法");
    }
}
```

需要注意的是，定义为prototype[类型的实例创建之后spring就不在管理了，它只是做了new操作而已，要想使用preDestroy注解，注意把scope中的参数改成singleton。否则为prototype不执行destroy()](https://blog.csdn.net/qq_37699336/article/details/109120530)。

#### 2.Spring新注解

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虽然使用**原始注解可以配置一些自定义的Bean**，但是回到用原始注解配置后的配置文件applicationContext.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:comtext="http://www.springframework.org/schema/context"
       xsi:schemaLocation=
               "http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                http://www.springframework.org/schema/context  http://www.springframework.org/schema/context/spring-context.xsd">

    <!--加载外部的properties文件-->
    <comtext:property-placeholder location="classpath:jdbc.properties"/>
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <!--用Spring表达式，获取properties文件的key；输入的时候IDEA也有提示的-->
        <property name="driverClass" value="${jdbc.driver}"></property>
        <property name="jdbcUrl" value="${jdbc.url}"></property>
        <property name="user" value="${jdbc.username}"></property>
        <property name="password" value="${jdbc.password}"></property>
    </bean>
    <!--配置组件扫描-->
    <comtext:component-scan base-package="com.hugo"/>

</beans>
```

剩下这些都是无法用原始注解配置的，我们从上到下来看这些配置，比如加载外部配置文件；Bean虽然可以配置，但是必须到源码那里进行注解才行，不是所有的代码都能进行修改的，第三方的数据源ComboPooledDataSource显然不能用注解，要自己写的代码才可以。所以**原始注解对于那些非自定义的Bean就束手无策了；还有组件扫描也一样无法使用原始注解来配置**。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以就要引入新注解。

![Spring新注解](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring新注解.png)

![Spring新注解2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring新注解2.png)

（1）搭建模拟环境

1.创建Spring配置类config.SpringConfiguration来代替applicationContext.xml

```java
package com.hugo.config;

import org.springframework.context.annotation.Configuration;
//标志该类是Spring核心配置类
@Configuration
public class SpringConfiguration {
}
```

2.看applicationContext.xml里面的内容，在SpringConfiguration类中进行逐一替代

```java
//标志该类是Spring核心配置类
@Configuration
//<comtext:component-scan base-package="com.hugo"/>
@ComponentScan("com.hugo")
//<comtext:property-placeholder location="classpath:jdbc.properties"/>
@PropertySource("classpath:jdbc.properties ")
public class SpringConfiguration {

    @Value("${jdbc.driver}")
    private String driver;
    @Value("${jdbc.url}")
    private String url;
    @Value("${jdbc.username}")
    private String username;
    @Value("${jdbc.password}")
    private String password;

    //这个方法的返回值就是非自定义的DataSource
    //写完方法后，得把返回值放到容器当中
    @Bean("dataSource")//Spring会将当前方法的返回值以指定名称存储到Spring容器当中
    public DataSource getDataSource() throws PropertyVetoException {
        //就把创建以前创建DataSource的代码拷贝进来
        //DataSourceTest.test1()
        ComboPooledDataSource dataSource = new ComboPooledDataSource();
        //设置基本的连接参数
        dataSource.setDriverClass(driver);
        dataSource.setJdbcUrl(url);
        dataSource.setUser(username);
        dataSource.setPassword(password);
        return dataSource;
    }

}
```

3.@Import

（1）再创建一个配置类DataSourceConfiguration专门配置数据源

```java
//<comtext:property-placeholder location="classpath:jdbc.properties"/>
@PropertySource("classpath:jdbc.properties ")
public class DataSourceConfiguration {
    @Value("${jdbc.driver}")
    private String driver;
    @Value("${jdbc.url}")
    private String url;
    @Value("${jdbc.username}")
    private String username;
    @Value("${jdbc.password}")
    private String password;

    //这个方法的返回值就是非自定义的DataSource
    //写完方法后，得把返回值放到容器当中
    @Bean("dataSource")//Spring会将当前方法的返回值以指定名称存储到Spring容器当中
    public DataSource getDataSource() throws PropertyVetoException {
        //就把创建以前创建DataSource的代码拷贝进来
        //DataSourceTest.test1()
        ComboPooledDataSource dataSource = new ComboPooledDataSource();
        //设置基本的连接参数
        dataSource.setDriverClass(driver);
        dataSource.setJdbcUrl(url);
        dataSource.setUser(username);
        dataSource.setPassword(password);
        return dataSource;
    }
}
```

[@Bean注解的使用和详解]: https://blog.csdn.net/weixin_42140261/article/details/104864333

（2）核心配置类引入DataSourceConfiguration

```java
//标志该类是Spring核心配置类
@Configuration
//<comtext:component-scan base-package="com.hugo"/>
@ComponentScan("com.hugo")
//<import resource=""/>
@Import(DataSourceConfiguration.class)//这是个数组{DataSourceConfiguration.class,xxx.class,....}可引入多个
public class SpringConfiguration {

}
```

（3）测试

```java
public class UserController {
    public static void main(String[] args) {
        //ClassPathXmlApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");使用了注解就不需要配置文件来加载了
        ApplicationContext app = new AnnotationConfigApplicationContext(SpringConfiguration.class);
        UserService userService = app.getBean(UserService.class);
        userService.save();
    }
}
```

#### 3.关于解耦

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实解耦不是指不能修改源代码，耦合度是指逻辑上的依赖，不会改一处而动全身。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注解是为了增加编程的敏捷性，用到哪注到哪，随用随注。原理是跟xml是一样的，差别在于读取配置的方式不一样。耦合度是指逻辑上的依赖，不会改一处而动全身。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果不使用Spring容器创建某个接口的实现类，而是使用new去创建某个具体的实现类，这个类可能需要new多次，因为要使用多次；那么问题来了，如果某天我想改一下该接口的实现类呢？那么新写一个类，修改以下注解就行了，而不用修改每一处new的代码。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有时候就想杠一下，既然要改实现类，我把原来的类直接修改不就行了？确实可以，但是假如我的需求是保留原来的实现类，又要更换实现类呢？或者我本来就写好多个实现类了，我想切换一下呢？这就很需要解耦合了。

#### 4.Spring整合Junit

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实不整合也能用Junit，导入坐标就行了。但是看看以前的测试方法和类的代码。

```java
public class UserController {
    public static void main(String[] args) {
        //ClassPathXmlApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");使用了注解就不需要配置文件来加载了
        ApplicationContext app = new AnnotationConfigApplicationContext(SpringConfiguration.class);
        UserService userService = app.getBean(UserService.class);
        userService.save();
    }
}
```

```java
@Test
//测试Spring容器产生数据源对象（c3p0）
public void test4() throws PropertyVetoException, SQLException {
    ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
    ComboPooledDataSource dataSource = (ComboPooledDataSource) applicationContext.getBean("dataSource");
    Connection connection = dataSource.getConnection();
    System.out.println(connection);
    connection.close();
}
```

![Spring整合Junit](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring整合Junit.png)

**上述问题解决思路：**

- 让SpringJunit负责创建Spring容器，但是需要将配置文件的名称告诉它
- 将需要进行测试Bean直接在测试类中进行注入

![Spring整合Junit2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring整合Junit2.png)

- [x] 在pom.xml导入Junit坐标和Spring集成Junit坐标

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.11</version>
    <scope>com.hugo.test</scope>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>5.0.5.RELEASE</version>
</dependency>
```

- [x] 在applicationContext.xml中配置组件扫描（**其他部分使用了注解**）

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意：因为要使用注解开发，但是我们又不能在源码上进行注解，所以需要在applicationContext.xml中配置组件扫描，作用是指定哪个包及其子包下的Bean需要进行扫描一遍识别使用注解配置的类、字段和方法。不然会报错。(如果使用了Spring配置类config.SpringConfiguration来代替applicationContext.xml就不用了)

```xml
<!--配置组件扫描-->
<comtext:component-scan base-package="com.hugo"/>
```

- [x] 测试类和方法的编写：

```java
@RunWith(SpringJUnit4ClassRunner.class)//指定测试是使用Spring集成的Junit测试
@ContextConfiguration("classpath:applicationContext.xml")//把配置文件/类告诉Spring
public class SpringJunitTest {

    //假如要测试的是UserService,要先注入
    @Autowired
    private UserService userService;

    @Test
    public void test1(){
        userService.save();
    }

}
```

运行结果：


- [ ] 使用全注解方式

如果加载的是核心配置类@ContextConfiguration(classes = SpringConfiguration.class)就不用引入xml配置文件了

如果要测试多个属性也是可以的：

```java
@RunWith(SpringJUnit4ClassRunner.class)//指定测试是使用Spring集成的Junit测试
//@ContextConfiguration("classpath:applicationContext.xml")//把配置文件/类告诉Spring
@ContextConfiguration(classes = {SpringConfiguration.class})//配置类
public class SpringJunitTest {

    //假如要测试的是UserService,要先注入
    @Autowired
    private UserService userService;
    @Autowired
    private DataSource dataSource;

    @Test
    public void test1() throws Exception {
        userService.save();
        System.out.println(dataSource.getConnection());
    }

}
```

## 五.Spring的AOP

#### 1.AOP简介

1.1.什么是AOP

![AOP简介](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/AOP简介.png)

1.2.***AOP的作用与优势***

- ***作用：在程序运行期间，在不修改源码的情况下对方法进行功能增强***
- ***优势：减少重复代码，提高开发效率，并且便于维护***


**[关于代理](https://www.cnblogs.com/leeego-123/p/10995975.html)**

- JDK动态代理是基于接口的方式，换句话来说就是代理类和目标类都实现同一个接口
- CGLib动态代理是代理类去继承目标类，然后重写其中目标类的方法，这样也可以保证代理类拥有目标类的同名方法

![动态代理技术](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/动态代理技术.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;左边是由实现接口，右边是没有implement接口

#### 2.基于jdk的动态代理（实现原理）

**[InvocationHandler和Proxy(Class)的动态代理机制详解](https://blog.csdn.net/yangaiyu/article/details/73827043)**(这两个一起使用的)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;静态代理是需要给每一个目标对象的接口方法**逐一代理**，而动态代理：通过调研Proxy.newProxyInstance()将目标对象和实现InvocationHandler接口的代理对象进行绑定，修改代理对象的InvocationHandler接口方法invoke即可**统一进行代理**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为代理对象需要与目标对象实现一样的***接口***,所以会有很多代理类,类太多.同时,一旦接口增加方法,目标对象与代理对象都要维护。因为静态代理的类也实现了该接口，而动态代理的就不用自己去实现该接口。

```java
public Object invoke(Object object, Method method, Object[] args)
            throws Throwable
    {
        //　　在代理真实对象前我们可以添加一些自己的操作
        System.out.println("before rent house");
        
        System.out.println("Method:" + method);
        
        //    当代理对象调用真实对象的方法时，其会自动的跳转到代理对象关联的handler对象的invoke方法来进行调用
        method.invoke(subject, args);
        
        //　　在代理真实对象后我们也可以添加一些自己的操作
        System.out.println("after rent house");
        
        return null;
    }
```

代码演示：

（1）创建如下类：

![image-20210131022730574](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210131022730574.png)

目标接口TargetInterface：

```java
package com.hugo.proxy.jdk;

public interface TargetInterface {
    public void save();
}
```

目标对象类Target：

```java
package com.hugo.proxy.jdk;
//目标对象
public class Target implements TargetInterface{
    @Override
    public void save() {
        System.out.println("save running......");
    }
}
```

写增强方法的类Advice：

```java
package com.hugo.proxy.jdk;
//增强
public class Advice {
    public void before(){
        System.out.println("前置增强......");
    }
    public void afterReturning(){
        System.out.println("后置增强......");
    }
}
```

测试类ProxyTest:

```java
package com.hugo.proxy.jdk;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

//测试类
public class ProxyTest {
    public static void main(String[] args) {
        //创建目标对象
        final Target target = new Target();
        //获得增强对象
        Advice advice = new Advice();

        //返回值就是动态生成的代理对象
        TargetInterface proxy = (TargetInterface) Proxy.newProxyInstance(
                target.getClass().getClassLoader()/*目标对象类加载器*/,
                target.getClass().getInterfaces()/*目标对象相同的接口-Interface对象的数组*/,
                new InvocationHandler() {
                    //调用代理对象的任何方法，实质执行的都是invoke方法
                    @Override
                    public Object invoke(Object o, Method method, Object[] objects) throws Throwable {
                        //前置增强
                        advice.before();
                        //反射
                        method.invoke(target, args);//在invoke方法里调用执行目标对象的方法
                        //后置增强
                        advice.afterReturning();
                        return null;
                    }
                }/*关联代理对象的InvocationHandler对象*/);
        //调用代理对象的方法
        proxy.save();//输入时，IDEA有补全提示
    }
}
```

（2）测试结果：

```
前置增强......
save running......
后置增强......
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这jdk动态代理是Spring aop的底层实现，后面Spring不用我们自己写，可以通过配置来实现。

#### 3.基于cglib的动态代理

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***如果目标对象没有接口***（比如2中的TargetInterface），就不能使用jdk的动态代理了。第三方的cglib就能派上用场了。但是新版的Spring的核心已经集成了cglib，不用导坐标了。

（1）将上面com.hugo.proxy.jdk里的Target，Advice，拷贝到新创建的包package com.hugo.proxy.cglib下。

- 取消Target的接口

```java
package com.hugo.proxy.cglib;

//目标对象
public class Target{

    public void save() {
        System.out.println("save running......");
    }
}
```

- 修改测试类ProxyTest

```java
package com.hugo.proxy.cglib;

import org.springframework.cglib.proxy.Enhancer;
import org.springframework.cglib.proxy.MethodInterceptor;
import org.springframework.cglib.proxy.MethodProxy;

import java.lang.reflect.Method;

//测试类
public class ProxyTest {
    public static void main(String[] args) {
        //创建目标对象
        final Target target = new Target();
        //获得增强对象
        Advice advice = new Advice();

        //返回值就是动态生成的代理对象 基于cglib
        //1.创建增强器
        Enhancer enhancer = new Enhancer();
        //2.设置父类（目标）
        enhancer.setSuperclass(target.getClass());
        //3.设置回调        MethodInterceptor是Callback的子接口
        enhancer.setCallback(new MethodInterceptor() {
            @Override
            public Object intercept(Object o, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
                advice.before();//执行前置
                Object invoke = method.invoke(target, args);//执行目标
                advice.afterReturning();//执行后置
                return null;
            }
        });
        //4.创建代理对象
        Target proxy = (Target) enhancer.create();//生成的是Target子对象，所以能用Target接收
        proxy.save();
    }
}
```

（2）测试结果：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果有红色警告，不影响运行，只需将pom.xml文件里面把springframework的各个dependency版本改到5.2.5就好了。

```
前置增强......
save running......
后置增强......

Process finished with exit code 0
```

#### 4.AOP相关概念和开发事项

![AOP相关概念](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/AOP相关概念.png)

![AOP开发事项](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/AOP开发事项.png)

![AOP开发事项2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/AOP开发事项2.png)

#### 5.基于XML的AOP开发

![基于XML的AOP开发](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/基于XML的AOP开发.png)

1.导入AOP相关坐标

​	虽然Spring内部有源生的AOP，但是它更提倡使用aspectj

```xml
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.8.4</version>
</dependency>
```

2.创建目标接口和目标类（内部有切点）

创建一个aop包，把jdk包下的目标接口TargetInterface和目标对象类Target复制到aop包。

```java
package com.hugo.aop;

public interface TargetInterface {
    public void save();
}
```

```java
package com.hugo.aop;

//目标对象
public class Target implements TargetInterface {
    @Override
    public void save() {
        System.out.println("save running......");
    }
}
```

3.创建切面类（内部有增强方法）

```java
package com.hugo.aop;
//切面类
public class MyAspect {
    public void before(){
        System.out.println("前置增强......");
    }
}
```

4.将目标类和切面类的对象创建交给Spring

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在资源目录下创建配置文件applicationContext.xml文件，并给Target和MyAspect配置Bean

```xml
<!--目标对象-->
<bean id="target" class="com.hugo.aop.Target"></bean>

<!--切面对象-->
<bean id="myAspect" class="com.hugo.aop.MyAspect"></bean>
```

5.在applicationContext.xml中配置织入关系：

（1）引入aop命名空间：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd
">
```

（2）配置织入关系：

```xml
<!--配置织入，告诉spring框架，哪些方法（切点）需要进行哪些增强（前置、后置...）-->
<aop:config>
    <!--声明切面,myAspect是切面类里面有增强方法（比如用作前置增强的before()）-->
    <aop:aspect ref="myAspect">
        <!--切面包括 切点 + 通知（增强）-->
        <aop:before method="before" pointcut="execution(public void com.hugo.aop.Target.save())"/>
    </aop:aspect>
</aop:config>
```

6.测试：

（1）在test目录下的test包创建测试类：AopTest:

```java
package com.hugo.test;

import com.hugo.aop.TargetInterface;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext1.xml")
public class AopTest {

    @Autowired
    private TargetInterface target;

    @Test
    public void test1(){
        target.save();
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为我在主目录和test目录都有资源文件夹，并且里面都有applicationContext.xml配置文件，所以要将主main目录下的资源文件夹下的applicationContext.xml改名为applicationContext1.xml。否则只能读取到test目录下的。

![image-20210201010649327](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210201010649327.png)

（2）将applicationContext1.xml里面的织入关系注释掉，运行结果为：

```
save running......

Process finished with exit code 0
```

（3）配置织入关系后运行结果为：

```
前置增强......
save running......

Process finished with exit code 0
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;增强的功能逻辑代码和目标是解耦合的。这就是基于xml的AOP快速入门。

- [ ] **切点表达式的写法**

  大概都在注释里写了，这里只是补充一下。

通知的类型：

```xml
aop:before
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还可以选择其他增强，比如后置增强等。

![通知的类型](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/通知的类型.png)

关于环绕通知：

1）在MyAspect增加一个方法：

```java
package com.hugo.aop;

import org.aspectj.lang.ProceedingJoinPoint;

//切面类
public class MyAspect {
    public void before(){
        System.out.println("前置增强......");
    }
    public Object around(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("环绕前增强。。。。。。");
        Object proceed = pjp.proceed();//切点方法 ProceedingJoinPoint
        System.out.println("环绕后增强。。。。。。");
        return proceed;//因为切点可能会有返回值，所以一般要有返回类型
    }
}
```

2）配置织入

```xml
    <aop:config>
        <!--声明切面,myAspect是切面类里面有增强方法（比如用作前置增强的before()）-->
        <aop:aspect ref="myAspect">
            <!--切面包括 切点 + 通知（增强）-->
<!--            <aop:before method="before" pointcut="execution(public void com.hugo.aop.Target.save())"/>-->
            <aop:around method="around" pointcut="execution(public void com.hugo.aop.Target.save())"/>
        </aop:aspect>
    </aop:config>
```

3）测试结果

```
环绕前增强。。。。。。
save running......
环绕后增强。。。。。。

Process finished with exit code 0
```

method表示选用切面类里面的哪个增强方法。

切点表达式：

```xml
execution(public void com.hugo.aop.Target.save())
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以指定多个方法。

![基于XML的AOP开发-切点表达式](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/基于XML的AOP开发-切点表达式.png)

切点表达式的抽取：

```xml
    <aop:config>
        <aop:aspect ref="myAspect">
            <!--抽取切点表达式-->
            <aop:pointcut id="myPointcut" expression="execution(* com.hugo.aop.*.*(..))" />
<!--            <aop:around method="around" pointcut="execution(public void com.hugo.aop.Target.save())"/>-->
            <aop:around method="around" pointcut-ref="myPointcut"/>
        </aop:aspect>
    </aop:config>
```

![基于xml的aop开发知识要点](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/基于xml的aop开发知识要点.png)

#### 6.基于注解的AOP开发

![基于注解的AOP开发步骤](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/基于注解的AOP开发步骤.png)

1.创建anno包，并将aop包下的MyAspect，TargetInterface，Target复制到包下

```java
package com.hugo.anno;

public interface TargetInterface {
    public void save();
}
```

```java
package com.hugo.anno;

//目标对象
public class Target implements TargetInterface {
    @Override
    public void save() {
        System.out.println("save running......");
    }
}
```

```java
package com.hugo.anno;

import org.aspectj.lang.ProceedingJoinPoint;

//切面类
public class MyAspect {
    public void before(){
        System.out.println("前置增强......");
    }
    //ProceedingJoinPoint： 正在执行的连接点 == 切点
    public Object around(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("环绕前增强。。。。。。");
        Object proceed = pjp.proceed();//切点方法
        System.out.println("环绕后增强。。。。。。");
        return proceed;//因为切点可能会有返回值，所以一般要有返回类型
    }
}
```

2.将目标类和切面类的对象创建交给Spring并标记切面类和织入

目标类：

```java
package com.hugo.anno;

import org.springframework.stereotype.Component;

//目标对象
@Component("target")
public class Target implements TargetInterface {
    @Override
    public void save() {
        System.out.println("save running......");
    }
}
```

切面类：

```java
package com.hugo.anno;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

//切面类
@Component("myAspect")
@Aspect//标注当前MyAspect是一个切面类
public class MyAspect {
    @Before("execution(* com.hugo.anno.*.*(..))")
    public void before(){
        System.out.println("前置增强......");
    }
    @Around("execution(* com.hugo.anno.*.*(..))")
    public Object around(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("环绕前增强。。。。。。");
        Object proceed = pjp.proceed();//切点方法
        System.out.println("环绕后增强。。。。。。");
        return proceed;//因为切点可能会有返回值，所以一般要有返回类型
    }
}
```

3.创建测试类AnnoTest和新的配置文件applicationContext-anno.xml（因为要使用注解来测试又不想写配置类）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <context:component-scan base-package="com.hugo.anno"/>

</beans>
```

4.测试时：注意要将TargetInterface的包改为anno的

```java
package com.hugo.test;

import com.hugo.anno.TargetInterface;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext-anno.xml")
public class AnnoTest {

    @Autowired
    private TargetInterface target;

    @Test
    public void test1(){
        target.save();
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此时执行测试，会发现没有增强方法的运行。原因在于少了***AOP的自动代理***。

5.配置AOP的自动代理后，配置文件的全部内容如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <context:component-scan base-package="com.hugo.anno"/>
    <!--aop自动代理-->
    <aop:aspectj-autoproxy/>

</beans>
```

注解通知类型：

![注解通知类型](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/注解通知类型.png)

切点表达式的抽取：

![注解-切点表达式的抽取](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/注解-切点表达式的抽取.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以不加类名来引用切点表达式。

**总结**：

![基于注解的aop开发知识要点](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/基于注解的aop开发知识要点.png)

## 六.JdbcTemplate

### 1.概述

![jdbcTemplate概述](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/jdbcTemplate概述.png)

### 2.基本使用（快速入门）

![jdbcTemplate开发步骤](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/jdbcTemplate开发步骤.png)

1.导入spring-jdbc和spring-tx坐标

```xml
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-jdbc</artifactId>
  <version>5.2.5.RELEASE</version>
</dependency>
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-tx</artifactId>
  <version>5.2.5.RELEASE</version>
</dependency>
```

2.创建数据库表和实体

（1）创建数据库表

![创建表account](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/创建表account.png)

（2）创建该表对于的实体

```java
package com.hugo.domain;

public class Account {
    private String name;
    private double money;

    public Account() {
    }

    public Account(String name, double money) {
        this.name = name;
        this.money = money;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getMoney() {
        return money;
    }

    public void setMoney(double money) {
        this.money = money;
    }

    @Override
    public String toString() {
        return "Account{" +
                "name='" + name + '\'' +
                ", money=" + money +
                '}';
    }
}
```

3.创建JdbcTemplate对象和数据源

```java
package com.hugo.test;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import org.junit.Test;
import org.springframework.jdbc.core.JdbcTemplate;

import java.beans.PropertyVetoException;

public class JdbcTemplateTest {
    @Test
    //测试JdbcTemplate开发步骤
    public void test() throws PropertyVetoException {
        //创建数据源对象
        ComboPooledDataSource dataSource = new ComboPooledDataSource();
        dataSource.setDriverClass("com.mysql.jdbc.Driver");
        dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/test");
        dataSource.setUser("root");
        dataSource.setPassword("123456");
        //创建模板对象
        JdbcTemplate jdbcTemplate = new JdbcTemplate();
        //设置数据源对象，知道数据源在哪
        jdbcTemplate.setDataSource(dataSource);
        //执行操作
        int row = jdbcTemplate.update("insert into account value (?,?)", "tom", 5000);
        System.out.println(row);
    }
}
```

4.测试结果（插入）：

```
1

Process finished with exit code 0
```

![image-20210202200355962](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210202200355962.png)

### 3.Spring产生JdbcTemplate对象

![Spring产生JdbcTemplate对象](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring产生JdbcTemplate对象.png)

（1）创建并配置applicationContext.xml文件

```xml
<!--配置数据源对象-->
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <property name="driverClass" value="com.mysql.jdbc.Driver"/>
    <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/test"/>
    <property name="user" value="root"/>
    <property name="password" value="123456"/>
</bean>
<!--jdbc模板-->
<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
    <property name="dataSource" ref="dataSource"/>
</bean>
```

（2）在JdbcTemplateTest中编写测试方法test2()

```java
@Test
//测试Spring产生jdbcTemplate对象
public void test2() throws PropertyVetoException {
    ApplicationContext app = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
    JdbcTemplate jdbcTemplate = app.getBean(JdbcTemplate.class);
    int row = jdbcTemplate.update("insert into account value (?,?)", "zhangsan", 4399);
    System.out.println(row);
}
```

（3）运行结果

```
1

Process finished with exit code 0
```

![image-20210202210948856](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210202210948856.png)

**抽取jdbc.properties文件**:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;applicationContext.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context  http://www.springframework.org/schema/context/spring-context.xsd
">

    <!--加载jdbc.properties-->
    <context:property-placeholder location="jdbc.properties"/>

    <!--配置数据源对象-->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"/>
        <property name="jdbcUrl" value="${jdbc.url}"/>
        <property name="user" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>
    </bean>
    <!--jdbc模板-->
    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <property name="dataSource" ref="dataSource"/>
    </bean>

</beans>
```

### 4.常用操作（增删改查）

**（1）增删改都属于update操作。**

使用spring集成Junit进行测试，新建test.JdbcTemplateCRUDTest：

```java
package com.hugo.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")//将上下文告诉spring
public class JdbcTemplateCRUDTest {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Test
    public void testUpdate(){
        jdbcTemplate.update("update account set money=? where name=?", 10000,"tom");
    }
    @Test
    public void testDelete(){
        jdbcTemplate.update("delete from account where name = ?", "tom");
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;insert已经在上面测试过了，就不在进行演示了。

**（2）查询属于Query操作**

![image-20210202232439609](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210202232439609.png)

1）查询全部

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;参数RowMapper接口就是帮助进行封装成javaBean的功能和行为接口。所以要new一个接口对应的实现类。该类有实体属性封装的实现。该类就是BeanPropertyRowMapper。构造函数：

[关于泛型和泛型的确定](https://blog.csdn.net/u012260238/article/details/82778591)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在测试类JdbcTemplateCRUDTest中加一个测试方法：

```java
    @Test
    public void testQueryAll(){
        //(sql:sql语句，rowMapper:封装成Javabean的接口)
//        List<Account> accountList = jdbcTemplate.query("select * from account", new BeanPropertyRowMapper(Account.class));
//        List<Account> accountList = jdbcTemplate.query("select * from account", new BeanPropertyRowMapper<>(Account.class));
        List<Account> accountList = jdbcTemplate.query("select * from account", new BeanPropertyRowMapper<Account>(Account.class));
        System.out.println(accountList);
    }
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试结果：

```
[Account{name='lisi', money=4399.0}, Account{name='tom', money=5000.0}, Account{name='zhangsan', money=4399.0}]

Process finished with exit code 0
```

![image-20210203001439131](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210203001439131.png)

2）查询一个对象

![image-20210203012535738](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210203012535738.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在测试类JdbcTemplateCRUDTest中加一个测试方法：

```java
@Test
public void testQueryOne(){
    Account account = jdbcTemplate.queryForObject("select * from account where name=?", new BeanPropertyRowMapper<>(Account.class), "tom");
    System.out.println(account);
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试结果：

```
Account{name='tom', money=5000.0}

Process finished with exit code 0
```

3）聚合查询

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用的方法为：

![image-20210203015850013](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210203015850013.png)

因为返回的是一个简单的类型，就不需要使用BeanPropertyRowMapper进行封装，只需要将结果转换（强转）一下即可。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在测试类JdbcTemplateCRUDTest中加一个测试方法：

```java
public void testQueryCount(){
    Long count = jdbcTemplate.queryForObject("select count(*) from account", Long.class);
    System.out.println(count);
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试结果：

```
3

Process finished with exit code 0
```

### 5.知识要点

![JdbcTemplate知识要点](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/JdbcTemplate知识要点.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quertForObject的参数选择区别就是看返回的数据类型是不是一个要封装的Javabean。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在企业当中用的JdbcTemplate用的不是特别多，使用Mybatis更多。

## <h2 align = "center">七.事务控制</h2>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编程式就是自己使用java的API去写代码，声明式就是用配置的方式。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;事务及事务隔离级别：https://www.cnblogs.com/xrq730/p/5087378.html

### 1.编程式事务控制

**相关对象：**

#### 1.1.平台事务管理器（接口）

![编程式事务控制1](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/编程式事务控制1.png)

***关于平台事务管理器，不同的dao层有不同的实现对象，所以在后面使用声明式事务控制时，通过配置或注解的方式时必须要先告诉Spring需要用哪个具体的平台事务管理器。***

#### 1.2.事务定义对象

![编程式事务控制2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/编程式事务控制2.png)

（1）**并发事务**会产生的问题：（就是有多个事务“同时”执行会发生的问题）

​	① 脏读：事务A读到了事务B还没有提交的数据。

​	② 不可重复读：在一个事务里面读取了两次某个数据，读出来的数据不一致。

​	③ 幻读：在一个事务里面的操作中发现了未被操作的数据（这个数据是其他事务产生的数据），就好像幻觉一样！



（2）事务隔离级别：

​	① read_uncommitted（读未提交）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	读未提交，即能够读取到没有被提交的数据，所以很明显这个级别的隔离机制无法解决脏读、不可重复读、幻读中的任何一种，因此很少使用。

​	② read_committed（读已提交）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	一个事务等另一个事务提交之后才可进行读取，解决了脏读问题，但是无法限制不可重复读和幻读。

​	③ repeatable_read（可重复读）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	重复读取，即在数据读出来之后加锁，类似"select * from XXX for update"，明确数据读取出来就是为了更新用的，所以要加一把锁，防止别人修改它。REPEATABLE_READ的意思也类似，读取了一条数据，这个事务不结束，别的事务就不可以改这条记录，这样就解决了脏读、不可重复读的问题，但是幻读的问题还是无法解决。

​	④ serializable（序列化）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	串行化，最高的事务隔离级别，不管多少事务，挨个运行完一个事务的所有子事务之后才可以执行另外一个事务里面的所有子事务，这样就解决了脏读、不可重复读和幻读的问题了，但是这种事务隔离级别效率低下，比较耗数据库性能，一般不使用。



（3）**事务传播：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;解决当一个业务（事务）方法被另一个业务（事务）方法调用时，这个事务应该如何进行的问题。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spring在TransactionDefinition接口中规定了7种类型的事务传播行为。事务传播行为是Spring框架独有的事务增强特性，他不属于的事务实际提供方数据库行为。

![编程式事务控制3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/编程式事务控制3.png)

#### 1.3.事务状态对象

![编程式事务控制4](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/编程式事务控制4.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个是不用配置给spring的，因为事务状态对象是被动封装事务状态信息的，它随着程序的进行，内部的信息会跟着相应的改变。这个是维护不同时间点这个事务状态信息的。

### 2.声明式事务控制

创建如下项目：（原始状态）

![image-20210203221201707](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210203221201707.png)

（1）充当web层的测试类

```java
public class AccountController {

    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        AccountService accountService = app.getBean(AccountService.class);
        accountService.transfer("tom","lucy",500);
    }

}
```

（2）dao层

```java
public class AccountDaoImpl implements AccountDao {

    private JdbcTemplate jdbcTemplate;
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
	//转出
    public void out(String outMan, double money) {
        jdbcTemplate.update("update account set money=money-? where name=?",money,outMan);
    }
	//转入
    public void in(String inMan, double money) {
        jdbcTemplate.update("update account set money=money+? where name=?",money,inMan);
    }
}
```

（3）domain里面是数据库表account的Javabean

```java
public class Account {

    private String name;
    private double money;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getMoney() {
        return money;
    }

    public void setMoney(double money) {
        this.money = money;
    }
}
```

（4）service层

```java
public class AccountServiceImpl implements AccountService {

    private AccountDao accountDao;
    public void setAccountDao(AccountDao accountDao) {
        this.accountDao = accountDao;
    }

    public void transfer(String outMan, String inMan, double money) {
        accountDao.out(outMan,money);
        accountDao.in(inMan,money);
    }
}
```

（5）配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd
">

    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="com.mysql.jdbc.Driver"/>
        <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/test"/>
        <property name="user" value="root"/>
        <property name="password" value="123456"/>
    </bean>

    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <bean id="accountDao" class="com.itheima.dao.impl.AccountDaoImpl">
        <property name="jdbcTemplate" ref="jdbcTemplate"/>
    </bean>

    <bean id="accountService" class="com.itheima.service.impl.AccountServiceImpl">
        <property name="accountDao" ref="accountDao"/>
    </bean>


</beans>
```

（6）pom.xml

```xml
<groupId>com.itheima</groupId>
<artifactId>itheima_spring_tx</artifactId>
<version>1.0-SNAPSHOT</version>
<packaging>war</packaging>

  <dependencies>
      <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-context</artifactId>
          <version>5.0.5.RELEASE</version>
      </dependency>
      <dependency>
          <groupId>org.aspectj</groupId>
          <artifactId>aspectjweaver</artifactId>
          <version>1.8.4</version>
      </dependency>
      <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-jdbc</artifactId>
          <version>5.0.5.RELEASE</version>
      </dependency>
      <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-tx</artifactId>
          <version>5.0.5.RELEASE</version>
      </dependency>
      <dependency>
          <groupId>org.springframework</groupId>
          <artifactId>spring-test</artifactId>
          <version>5.0.5.RELEASE</version>
      </dependency>
      <dependency>
          <groupId>c3p0</groupId>
          <artifactId>c3p0</artifactId>
          <version>0.9.1.1</version>
      </dependency>
      <dependency>
          <groupId>mysql</groupId>
          <artifactId>mysql-connector-java</artifactId>
          <version>5.1.32</version>
      </dependency>
      <dependency>
          <groupId>junit</groupId>
          <artifactId>junit</artifactId>
          <version>4.12</version>
      </dependency>
  </dependencies>
```

#### 2.1.基于xml的声明式事务控制

![基于xml的声明式事务控制](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/基于xml的声明式事务控制.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的项目，此时是没有事务控制的，我们来分析一下AccountServiceImpl里面的transfer方法：（并做如下修改）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里有两个事务out和in共同实现转账这个业务，假如out和in中间出错（除零错误），转出钱out执行但是转入钱in失败；并不能实现同时成功/失败。

```java
public void transfer(String outMan, String inMan, double money) {
    //开启事务
    accountDao.out(outMan,money);
    int i=1/0;//模拟出错
    accountDao.in(inMan,money);
    //提交事务
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*假如业务层有很多方法都需要进行事务控制，那么就要写很多try...catch。那么就要使用spring的aop思想，把开启事务和提交事务（**事务控制**）看成**是通知**（增强）提取出去，把上面的方法（**转账方法transfer()**）当成**切点**，进行织入。*

#### 2.2.基于xml声明式事务控制的实现

**1.快速入门**

（1）在配置文件applicationContext.xml中引入tx命名空间和指定平台事务管理器transactionManager的实现类DataSourceTransactionManager的Bean标签。

（2）配置事务的aop织入

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd
">

    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="com.mysql.jdbc.Driver"/>
        <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/test"/>
        <property name="user" value="root"/>
        <property name="password" value="123456"/>
    </bean>

    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <bean id="accountDao" class="com.itheima.dao.impl.AccountDaoImpl">
        <property name="jdbcTemplate" ref="jdbcTemplate"/>
    </bean>

    <!--目标对象-->
    <bean id="accountService" class="com.itheima.service.impl.AccountServiceImpl">
        <property name="accountDao" ref="accountDao"/>
    </bean>
    <!--配置平台事务管理器-->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <!--注入dataSource,因为要从中获取connection-->
        <property name="dataSource" ref="dataSource"/>
    </bean>
    <!--通知 事务的增强-->
    <tx:advice id="txAdvice" transaction-manager="transactionManager">
        <tx:attributes>
            <tx:method name="*"/>
        </tx:attributes>
    </tx:advice>
    <!--配置事务的aop织入，将事务增强与切点进行结合-->
    <aop:config>
        <!--spring专门为事务增强提供一个配置：advisor-->
        <!--切面包括  通知（增强）+ 切点 -->
        <aop:advisor advice-ref="txAdvice" pointcut="execution(* com.itheima.service.impl.*.*(..))"/>
    </aop:config>


</beans>
```

（3）使用AccountController进行测试

```java
public class AccountController {

    public static void main(String[] args) {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        AccountService accountService = app.getBean(AccountService.class);
        accountService.transfer("tom","lucy",500);
    }

}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试要达到的效果是1.报错；2.数据库的钱没变；

测试前数据库为：

![image-20210203234433124](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210203234433124.png)

测试结果为：

1.报错

![image-20210203235004130](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210203235004130.png)

2.数据库的钱没变

![image-20210203235058597](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210203235058597.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以上就是快速入门，现在再看看配置文件的配置。

**2.配置解析-设置事务属性信息：**

```xml
<!--tx:事务 attributes:属性-->
<tx:attributes>
    <tx:method name="*"/>
</tx:attributes>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个标签的配置就相当于事务定义对象的功能，比如设置事务的隔离级别等。

<tx:method />标签还可以补全，还有其他设置事务信息的属性。比如：

```xml
<tx:method name="*" isolation="DEFAULT" propagation="REQUIRED" timeout="-1" read-only="false"/>
```

但是这么配，意义不大。详细信息请看以下配置：

```xml
<!--通知 事务的增强-->
<tx:advice id="txAdvice" transaction-manager="transactionManager">
    <!--设置每个事务的属性信息的-->
    <tx:attributes>
        <!--name指的是AccountServiceImpl（目标对象）里面的方法名-->
        <tx:method name="transfer" isolation="REPEATABLE_READ" read-only="false"/>
        <!--加入目标对象还有以下几个（种）方法-->
        <tx:method name="save" isolation="REPEATABLE_READ" read-only="false"/>
        <!--因为查询方法，设置只读就行-->
        <tx:method name="findALL" isolation="REPEATABLE_READ" read-only="true"/>
        <!--下面这个*表示通配符-->
        <tx:method name="update*" isolation="REPEATABLE_READ" read-only="false"/>
        <!--*表示任意方法，其他属性不配就是默认值-->
        <tx:method name="*"/>
    </tx:attributes>
</tx:advice>
```

![基于xml的声明式事务控制2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/基于xml的声明式事务控制2.png)

**3.总结：**

声明式事务控制的配置要点：

- 平台事务管理器配置
- 事务通知配置
- 事务aop织入的配置

完整的applicationContext.xml：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd
">

    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="com.mysql.jdbc.Driver"/>
        <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/test"/>
        <property name="user" value="root"/>
        <property name="password" value="123456"/>
    </bean>

    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <bean id="accountDao" class="com.itheima.dao.impl.AccountDaoImpl">
        <property name="jdbcTemplate" ref="jdbcTemplate"/>
    </bean>

    <!--目标对象-->
    <bean id="accountService" class="com.itheima.service.impl.AccountServiceImpl">
        <property name="accountDao" ref="accountDao"/>
    </bean>
    <!--配置平台事务管理器-->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <!--注入dataSource,因为要从中获取connection-->
        <property name="dataSource" ref="dataSource"/>
    </bean>
    <!--通知 事务的增强-->
    <tx:advice id="txAdvice" transaction-manager="transactionManager">
        <!--设置每个事务的属性信息的-->
        <tx:attributes>
            <!--name指的是AccountServiceImpl（目标对象）里面的方法名-->
            <tx:method name="transfer" isolation="REPEATABLE_READ" read-only="false"/>
            <!--加入目标对象还有以下几个（种）方法-->
            <tx:method name="save" isolation="REPEATABLE_READ" read-only="false"/>
            <!--因为查询方法，设置只读就行-->
            <tx:method name="findALL" isolation="REPEATABLE_READ" read-only="true"/>
            <!--下面这个*表示通配符-->
            <tx:method name="update*" isolation="REPEATABLE_READ" read-only="false"/>
            <!--*表示任意方法，其他属性不配就是默认值-->
            <tx:method name="*"/>
        </tx:attributes>
    </tx:advice>
    <!--配置事务的aop织入，将事务增强与切点进行结合-->
    <aop:config>
        <!--spring专门为事务增强提供一个配置：advisor-->
        <!--切面包括  通知（增强）+ 切点 -->
        <aop:advisor advice-ref="txAdvice" pointcut="execution(* com.itheima.service.impl.*.*(..))"/>
    </aop:config>


</beans>
```

目标对象AccountServiceImpl：

```java
public class AccountServiceImpl implements AccountService {

    private AccountDao accountDao;
    public void setAccountDao(AccountDao accountDao) {
        this.accountDao = accountDao;
    }

    public void transfer(String outMan, String inMan, double money) {
        accountDao.out(outMan,money);
        int i = 1/0;//模拟错误
        accountDao.in(inMan,money);
    }
}
```

#### 2.3.基于注解的声明式事务控制

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般情况下自定义的Bean用注解，非自定义的Bean用配置文件。

先回顾一下配置文件applicationContext.xml的内容：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd
">

    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="com.mysql.jdbc.Driver"/>
        <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/test"/>
        <property name="user" value="root"/>
        <property name="password" value="123456"/>
    </bean>

    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <bean id="accountDao" class="com.itheima.dao.impl.AccountDaoImpl">
        <property name="jdbcTemplate" ref="jdbcTemplate"/>
    </bean>

    <!--目标对象-->
    <bean id="accountService" class="com.itheima.service.impl.AccountServiceImpl">
        <property name="accountDao" ref="accountDao"/>
    </bean>
    <!--配置平台事务管理器-->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <!--注入dataSource,因为要从中获取connection-->
        <property name="dataSource" ref="dataSource"/>
    </bean>
    <!--通知 事务的增强-->
    <tx:advice id="txAdvice" transaction-manager="transactionManager">
        <!--设置每个事务的属性信息的-->
        <tx:attributes>
            <!--name指的是AccountServiceImpl（目标对象）里面的方法名-->
            <tx:method name="transfer" isolation="REPEATABLE_READ" read-only="false"/>
            <!--加入目标对象还有以下几个（种）方法-->
            <tx:method name="save" isolation="REPEATABLE_READ" read-only="false"/>
            <!--因为查询方法，设置只读就行-->
            <tx:method name="findALL" isolation="REPEATABLE_READ" read-only="true"/>
            <!--下面这个*表示通配符-->
            <tx:method name="update*" isolation="REPEATABLE_READ" read-only="false"/>
            <!--*表示任意方法，其他属性不配就是默认值-->
            <tx:method name="*"/>
        </tx:attributes>
    </tx:advice>
    <!--配置事务的aop织入，将事务增强与切点进行结合-->
    <aop:config>
        <!--spring专门为事务增强提供一个配置：advisor-->
        <!--切面包括  通知（增强）+ 切点 -->
        <aop:advisor advice-ref="txAdvice" pointcut="execution(* com.itheima.service.impl.*.*(..))"/>
    </aop:config>


</beans>
```

（1）将自定义的accountDao和accountservice的、从配置文件中删掉，用注解取代

（2）配置组件扫描,要先引入context命名空间

AccountDaoImpl：

```java
@Repository("accountDao")
public class AccountDaoImpl implements AccountDao {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    /* 使用注解的方式注入，这个setter方法就可以不要了
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }*/

    public void out(String outMan, double money) {
        jdbcTemplate.update("update account set money=money-? where name=?",money,outMan);
    }

    public void in(String inMan, double money) {
        jdbcTemplate.update("update account set money=money+? where name=?",money,inMan);
    }
}
```

AccountServiceImpl：

```java
@Service("accountService")
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;
    /*public void setAccountDao(AccountDao accountDao) {
        this.accountDao = accountDao;
    }*/

    public void transfer(String outMan, String inMan, double money) {
        accountDao.out(outMan,money);
        //int i = 1/0;
        accountDao.in(inMan,money);
    }
}
```

```xml
<!--组件扫描-->
<context:component-scan base-package="com.itheima"/>

<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <property name="driverClass" value="com.mysql.jdbc.Driver"/>
    <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/test"/>
    <property name="user" value="root"/>
    <property name="password" value="123456"/>
</bean>

<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
    <property name="dataSource" ref="dataSource"/>
</bean>
```

（3）事务控制的增强和织入的配置用注解**@Transactional**替换

```java
@Service("accountService")
//甚至可以给此类的所有方法加同一个事务控制的参数
//@Transactional(isolation = Isolation.READ_COMMITTED)
// 如果类中的某个方法也配置了@Transactional，就使用就近原则
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;
    /*public void setAccountDao(AccountDao accountDao) {
        this.accountDao = accountDao;
    }*/

    @Transactional(isolation = Isolation.READ_COMMITTED,propagation = Propagation.REQUIRED)
    //配置事务的增强
    public void transfer(String outMan, String inMan, double money) {
        accountDao.out(outMan,money);
        int i = 1/0;
        accountDao.in(inMan,money);
    }
    //再写一个方法
    //@Transactional(isolation = Isolation.DEFAULT)
    public void xxx(){
    }
}
```

（4）*配置**事务的注解驱动**（如果不配置，事务将不起作用）*

```xml
<!--事务的注解驱动-->
<tx:annotation-driven transaction-manager="transactionManager"/>
```

（5）使用AccountController进行测试

运行结果：

![image-20210205015921831](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/基于注解的声明式事务控制3.png)

数据库的内容也没变。

**最后配置文件applicationContext.xml内容为：**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="
       http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd
       http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd
       http://www.springframework.org/schema/context http://www.springframework.org/schema/tx/spring-context.xsd
">

    <!--组件扫描-->
    <context:component-scan base-package="com.itheima"/>

    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="com.mysql.jdbc.Driver"/>
        <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/test"/>
        <property name="user" value="root"/>
        <property name="password" value="123456"/>
    </bean>

    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <!--配置平台事务管理器-->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <!--注入dataSource,因为要从中获取connection-->
        <property name="dataSource" ref="dataSource"/>
    </bean>


    <!--事务的注解驱动-->
    <tx:annotation-driven transaction-manager="transactionManager"/>
<!--    相当于<tx:advice id="txAdvice" transaction-manager="transactionManager">-->


</beans>
```

**总结：**

![基于注解的声明式事务控制3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/基于xml的声明式事务控制2.png)

## <h2 align = "center">八.Spring集成web环境</h2>

### 1.基本三层框架环境搭建

**（1）导入servlet和jsp坐标**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pom.xml

```xml
<dependency>
  <groupId>javax.servlet</groupId>
  <artifactId>javax.servlet-api</artifactId>
  <version>3.0.1</version>
  <scope>provided</scope>
</dependency>
<dependency>
  <groupId>javax.servlet.jsp</groupId>
  <artifactId>javax.servlet.jsp-api</artifactId>
  <version>2.2.1</version>
  <scope>provided</scope>
</dependency>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以前不用导包是因为Tomcat里面有，现在没有集成Tomcat所以要导坐标。(PS:provide仅仅需要在编译和测试阶段，同样provide将不会被打包到lib目录下。)

（2）添加web层并配置Servlet地址

web.UserServlet:

```java
public class UserServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = app.getBean(UserService.class);
        userService.save();
    }
}
```

web.xml

```xml
<servlet>
  <servlet-name>UserServlet</servlet-name>
  <servlet-class>com.itheima.web.UserServlet</servlet-class>
</servlet>
<servlet-mapping>
  <servlet-name>UserServlet</servlet-name>
  <url-pattern>/userServlet</url-pattern>
</servlet-mapping>
```

**（3）发布到Tomcat：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果按照视频直接添加现有项目的war Explorer运行报错war exploded: Error during artifact deployment；就打开project structure把Artifacts里面的当前项目的war Explorer删掉再回来Tomcat配置那里添加Artifact，选择项目的war Explorer。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;图文操作连接可参考：https://blog.csdn.net/Petershusheng/article/details/52382216?utm_source=copy

**<u>补充：</u>**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实上面的方法并不一定有用，比如我之后还是报错，只是第一次成功运行。关键还得学会**报错看日志**啊！

错误信息：

```
org.springframework.web.context.ContextLoader.initWebApplicationContext Context initialization failed
 org.springframework.beans.factory.BeanInitializationException: Could not load properties; nested exception is java.io.FileNotFoundException: Could not open ServletContext resource [/jdbc.properties]
```

可以看到是加载配置文件jdbc.properties出错了

web.xml:

```xml
<!--加载外部的properties文件-->
<context:property-placeholder location="classpath:jdbc.properties"/>
```

将上面的路径加上classplath:

```xml
<!--加载外部的properties文件-->
<context:property-placeholder location="classpath:jdbc.properties"/>
```

这样就可以了！

（4）项目的基本结构内容如下：

![image-20210208190245689](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210208190245689.png)

dao层：

```java
public class UserDaoImpl implements UserDao {
    @Override
    public void save() {
        System.out.println("save running......");
    }
}
```

service层：

```java
public class UserServiceImpl implements UserService {

    private UserDao userDao;
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public void save() {
        userDao.save();
    }
}
```

web层：

```java
public class UserServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = app.getBean(UserService.class);
        userService.save();
    }
}
```

applicationContext.xml:

```xml
<!--加载外部的properties文件-->
<context:property-placeholder location="jdbc.properties"/>

<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
    <property name="driverClass" value="${jdbc.driver}"/>
    <property name="jdbcUrl" value="${jdbc.url}"/>
    <property name="user" value="${jdbc.username}"/>
    <property name="password" value="${jdbc.password}"/>
</bean>

<!--配置Dao-->
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl"/>

<!--配置service-->
<bean id="userService" class="com.itheima.service.impl.UserServiceImpl">
    <property name="userDao" ref="userDao"/>
</bean>
```

jdbc.properties:

```properties
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/test
jdbc.username=root
jdbc.password=123456
```

### 2.获取ApplicationContext对象

**问题引入：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在之前，包括上面创建的web层里面的UserServlet，我们要获取Spring容器里面的对象，比如UserServiceImpl。我们都需要先获取ApplicationContext对象：

```java
ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
UserService userService = app.getBean(UserService.class);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们以后可是要多次去拿容器里面的对象，就要多次编写这两行代码了，那就意味着每次都要加载一次配置文件，每次都去创建容器，那么就会**创建很多次**，**这没有意义**！还影响性能。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为所有的容器都是使用相同的那个配置文件，那么加载一次配置文件，**创建一个容器供大家使用就行了！**

**解决方法：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.将应用上下文（ApplicationContext）定义为**静态对象**，但是只能解决本类对象，每个类都要创建一个，还是不够完美。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.*使用**监听器**，服务器一启动就创建应用上下文对象（ServletContext对象），其监听器ServletContextListener就会执行。那么就可以将上面那两行创建ApplicationContext对象代码放到监听器初始化方法当中，再将它放到Context域中。*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.依赖注入（注解方式）。将要使用的对象定义为属性，其实也挺不错的，但是每个类都要写一个属性，也还不够完美。

![image-20210208225506628](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210208225506628.png)

![spring集成web](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/spring集成web.png)

下面是模拟spring生成ApplicationContext对象

（1）创建listen.ContextLoaderListener:

```java
public class ContextLoaderListener implements ServletContextListener {
    //初始化方法
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        //将Spring的应用上下文对象存储到ServletContext域中
        ServletContext servletContext = servletContextEvent.getServletContext();
        servletContext.setAttribute("app", app);
    }

    //销毁方法
    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {

    }
}
```

（2）在web.xml配置监听器

```xml
<!--配置监听器-->
<listener>
  <listener-class>com.itheima.listener.ContextLoaderListener</listener-class>
</listener>
```

（3）修改web层UserServlet获取容器对象代码：

```java
public class UserServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        ServletContext servletContext = getServletContext();
        ApplicationContext app = (ApplicationContext) servletContext.getAttribute("app");//返回值是Object
        //但是自己知道是ApplicationContext，所以进行强转
        UserService userService = app.getBean(UserService.class);
        userService.save();
    }
}
```

### 3.获取ApplicationContext对象代码优化

（1）解耦

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在ContextLoaderListener当中配置文件写死了：

```java
ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
```

1).可以在web.xml配置文件中设置要加载的Spring配置文件名字。

```xml
<!--全局初始化参数-->
<context-param>
  <param-name>contextConfigLocation</param-name>
  <param-value>applicationContext.xml</param-value>
</context-param>
```

2).修改监听器代码

```java
public class ContextLoaderListener implements ServletContextListener {
    //初始化方法
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        ServletContext servletContext = servletContextEvent.getServletContext();
        //读取web.xml中的全局参数
        String contextConfigLocation = servletContext.getInitParameter("contextConfigLocation");
        ApplicationContext app = new ClassPathXmlApplicationContext(contextConfigLocation);

        //将Spring的应用上下文对象存储到ServletContext域中
        servletContext.setAttribute("app", app);
        System.out.println("Spring容器创建完毕...");
    }

    //销毁方法
    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
    }
}
```

（2）提取工具类

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;获取spring应用上下文对象时，我们通过参数app来获取,比如web.UserServlet里的：

```java
ApplicationContext app = (ApplicationContext) servletContext.getAttribute("app");
```

这样不是很直观，所以在设计代码时，设置一个工具类里面包括，获取应用上下文对象的方法。

1).创建工具类WebApplicationContextUtils:

```java
public class WebApplicationContextUtils {
    public static ApplicationContext getApplicationContext(ServletContext servletContext){
        return (ApplicationContext) servletContext.getAttribute("app");
    }
}
```

2).修改获取spring应用上下文对象代码：

```java
public class UserServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        ServletContext servletContext = getServletContext();
        //ApplicationContext app = (ApplicationContext) servletContext.getAttribute("app");//返回值是Object
        ApplicationContext app = WebApplicationContextUtils.getApplicationContext(servletContext);
        UserService userService = app.getBean(UserService.class);
        userService.save();
    }
}
```

### 4.Spring提供获取应用上下文的工具

![spring集成web环境](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/spring集成web环境.png)

（1）在pom.xml导如spring-web坐标

```xml
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-web</artifactId>
  <version>5.2.5.RELEASE</version>
</dependency>
```

（2）修改web.xml

***配置监听器***，ContextLoaderListener是spring提供的。

```xml
<!--配置监听器-->
<listener>
  <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
```

修改***配置文件***位置，上面自己写的初始化参数只是演示用途，正确的写法是：

```xml
<!--全局初始化参数-->
<context-param>
  <param-name>contextConfigLocation</param-name>
  <param-value>classpath:applicationContext.xml</param-value>
</context-param>
```

（3）获取spring应用上下文对象代码：

```java
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
        ServletContext servletContext = getServletContext();
        //ApplicationContext app = (ApplicationContext) servletContext.getAttribute("app");//返回值是Object
//        ApplicationContext app = WebApplicationContextUtils.getApplicationContext(servletContext);
        ApplicationContext app = WebApplicationContextUtils.getWebApplicationContext(servletContext);
        //返回值是WebApplicationContext 是 ApplicationContext 的子类，可以用父类直接接收
        UserService userService = app.getBean(UserService.class);
        userService.save();
    }
```

## <h2 align = "center">九.SpringMVC</h2>

### 1.JavaEE三层框架和MVC模型的关系

（1）**JavaEE三层框架**

![尚硅谷](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210215115355898.png)

（2）**MVC模型**

![尚硅谷2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210215115433998.png)

![尚硅谷3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210215115532467.png)

（2）**两者关系**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaEE不只是包含web还有桌面的，这里只讨论web（Javaweb）方面（JavaWeb又是JavaEE的子集）。MVC模型在JavaEE里是属于web层的，是子集。

### 2.SpringMVC概述和开发步骤

![SpringMVC概述](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC概述.png)

![SpringMVC开发步骤1](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC开发步骤1.png)

![SpringMVC开发步骤2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC开发步骤2.png)

### 3.SpringMVC初体验

① 导入SpringMVC相关坐标

pom.xml:

```xml
<dependency>
  <groupId>org.springframework</groupId>
  <artifactId>spring-webmvc</artifactId>
  <version>5.2.5.RELEASE</version>
</dependency>
```

② 配置SpringMVC核心控制器DispatcherServlet

web.xml:

```xml
<!--配置SpringMVC的前端控制器-->
<servlet>
  <servlet-name>DispatcherServlet</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
  <servlet-name>DispatcherServlet</servlet-name>
  <url-pattern>/</url-pattern>
</servlet-mapping>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;load-on-startup元素标记容器是否在启动的时候就加载这个servlet(实例化并调用其init()方法)

③ 编写视图页面和创建web层的Controller类（包）

（1）controller.UserController:

```java
package com.itheima.controller;

public class UserController {

    public String save(){
        System.out.println("Controller save running...");
        return "";
    }
}
```

（2）jsp页面：

```xml
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>Success</h1>
</body>
</html>
```

④ 配置注解和Controller类中业务方法的映射地址

controller.UserController:

```java
@Controller
public class UserController {

    @RequestMapping("/quick")
    public String save(){
        System.out.println("Controller save running...");
        return "success.jsp";//返回的就是你要跳转的视图
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还需要配置组件扫描，虽然可以配置在applicationContext.xml里面，但是SpringMVC相关配置还是专门配置到spring-mvc.xml里面。

⑤ 配置SpringMVC核心文件spring-mvc.xml文件

（1） 配置组件扫描还要引入Context命名空间，最后该文件的内容为：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context  http://www.springframework.org/schema/context/spring-context.xsd
">

    <!--Controller的组件扫描-->
    <context:component-scan base-package="com.itheima.controller"/>

</beans>
```

（2）spring-mvc.xml文件要配置才能被加载

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为SpringMVC的配置文件是给核心控制器用的，所以在web.xml中配置核心控制器DispatcherServlet时增加初始化参数：

```xml
<!--配置SpringMVC的前端控制器-->
<servlet>
  <servlet-name>DispatcherServlet</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <init-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:spring-mvc.xml</param-value>
  </init-param>
  <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
  <servlet-name>DispatcherServlet</servlet-name>
  <url-pattern>/</url-pattern>
</servlet-mapping>
```

⑥ 测试

启动后页面：

![image-20210216015408529](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210216015408529.png)

访问“/quick”:

![image-20210216022034834](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210216022034834.png)

### 4.SpringMVC执行流程

![SpringMVC流程图](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC流程图.png)

![SpringMVC执行流程](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC执行流程.png)

![SpringMVC执行流程2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC执行流程2.png)

### 5.SpringMVC组件解析

#### 5.1.注解解析@RequestMapping

![SpringMVC注解解析（入门）](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC注解解析（入门）.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该注解还有一个produces属性可以设置返回数据的类型以及编码，解决响应中文乱码。

UserController:

```java
@Controller
public class UserController {

    @RequestMapping(value = "/quick",method = RequestMethod.GET,params = {"username"})
    public String save(){
        System.out.println("Controller save running...");
        return "success.jsp";//返回的就是你要跳转的视图
    }
}
```

![SpringMVC注解解析（入门）2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC注解解析（入门）2.png)

#### 5.2.xml(Spring-mvc.xml)配置解析（资源解析器）

![SpringMVCxml配置解析（入门）](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVCxml配置解析（入门）.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;后面还会讲其他相关配置，这里只举例配置内部资源视图解析器，了解即可：

```xml
<!--配置内部资源视图解析器-->
<bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
    <!--配置地址前缀-->
    <property name="prefix" value="/jsp/"></property>
    <!--配置地址的后缀-->
    <property name="suffix" value=".jsp"></property>
</bean>
```

#### 5.3.知识要点

![SpringMVCxml相关组件](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVCxml相关组件.png)

### 6.请求-@RequestMapping()与响应

![SpringMVC数据响应](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC数据响应.png)

#### 6.1.响应：页面跳转-默认

**（1）返回字符串形式**

![SpringMVC数据响应1](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC数据响应1.png)

1.回顾项目的spring-mvc.xml、UserController类、web.xml，并且success.jsp已经移动到webapp下的jsp目录

spring-mvc.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context  http://www.springframework.org/schema/context/spring-context.xsd
">

    <!--Controller的组件扫描-->
    <context:component-scan base-package="com.itheima.controller"/>

    <!--配置内部资源视图解析器-->
    <bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <!--配置地址前缀-->
        <property name="prefix" value="/jsp/"></property>
        <!--配置地址的后缀-->
        <property name="suffix" value=".jsp"></property>
    </bean>

</beans>
```

UserController：

```java
package com.itheima.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/user")
public class UserController {

    //请求地址变为 http://ip:import/工程名/user/quick
    @RequestMapping(value = "/quick",method = RequestMethod.GET,params = {"username"})
    public String save(){
        System.out.println("Controller save running...");
        return "success";//返回的就是你要跳转的视图,会自动加上前后缀
    }
}
```

web.xml:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

  <!--配置SpringMVC的前端控制器-->
  <servlet>
    <servlet-name>DispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:spring-mvc.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
  </servlet>
  <servlet-mapping>
    <servlet-name>DispatcherServlet</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>

  <!--全局初始化参数-->
  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:applicationContext.xml</param-value>
  </context-param>
  
  <!--配置监听器-->
  <listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
  </listener>

  <servlet>
    <servlet-name>UserServlet</servlet-name>
    <servlet-class>com.itheima.web.UserServlet</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>UserServlet</servlet-name>
    <url-pattern>/userServlet</url-pattern>
  </servlet-mapping>
</web-app>

```

2.访问地址“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick/?username=123123231”就能看到/jsp/success.jsp文件

**（2）返回ModelAndView对象形式**

① 1.在UserController类中增加方法：

```java
@RequestMapping(value = "/quick2")
public ModelAndView save2(){
    /*
        Model:模型 作用是封装数据
        View:视图 作用展示数据的
    */
    ModelAndView modelAndView =new ModelAndView();
    //设置视图名称
    modelAndView.setViewName("success");
    return modelAndView;
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick2”就能看到success.jsp页面

② 上面设置完视图，model是空的。下边给model设置点数据，其实就是在域中保存数据。

1.修改UserController的save方法

```java
@RequestMapping(value = "/quick2")
public ModelAndView save2(){
    /*
        Model:模型 作用是封装数据
        View:视图 作用展示数据的
    */
    ModelAndView modelAndView =new ModelAndView();
    //设置模型数据(放到Request域中)
    modelAndView.addObject("username", "itcast");
    //设置视图名称
    modelAndView.setViewName("success");
    return modelAndView;
}
```

2.修改success.jsp，在页面中展示数据

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>Success！${requestScope.username}</h1>
</body>
</html>
```

3.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick2”

![image-20210217183110924](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210217183110924.png)

③ ModelAndView可以不自己new

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick3")
public ModelAndView save3(ModelAndView modelAndView){
    modelAndView.addObject("username", "itheima");
    modelAndView.setViewName("success");
    return modelAndView;
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick3”

![image-20210217184114380](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210217184114380.png)

④ 将model和View拆开

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick4")
public String save4(Model model/*封装数据的model*/) {
    model.addAttribute("username", "名字");
    return "success";//这个字符串就是视图
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick4”

![image-20210217192617577](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210217192617577.png)

⑤ 用原始(JavaWeb)的方式存数据

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是这里写的Controller只是一个普通的类，和web中的Servlet类没有一点关系。上面所有save方法都是SpringMVC框架帮你调用的，所以加个形参HttpServletRequest就行。

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick5")
public String save5(HttpServletRequest Request) {
    Request.setAttribute("username", "看完就吃饭");
    return "success";//这个字符串就是视图
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick5”

![image-20210217194118721](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210217194118721.png)

#### 6.2.响应：回写数据-@ResponseBody

**（1）直接返回字符串**

![SpringMVC数据响应2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC数据响应2.png)

① 使用原始响应流

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick6")
public void save6(HttpServletResponse response) throws IOException {
    response.setContentType("text/html;charset=UTF-8");
    response.getWriter().print("hello itcast!你好");
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick6”

![image-20210219003154145](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210219003154145.png)

② 更简单的方式回写——直接返回字符串

1.在UserController中增加方法并且要增加注解

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***原来的只使用@RequestMapping注解的方法直接返回字符串表示返回的是一个视图，所以要想直接返回字符串必须使用新的注解来区分（标记）！使用的新注解是ResponseBody***（响应体）。

```java
@RequestMapping(value = "/quick7",produces = {"text/html;charset=UTF-8"})//produces解决中文乱码
@ResponseBody   //告知SpringMVC框架 不进行试图跳转 直接进行数据回写
public String save7() {
    return "hello itcast!你好";//这是响应体而不是试图
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick7”

![image-20210219010708553](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210219010708553.png)

**（2）返回对象或集合**

① 返回JSON格式的字符串

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick8")
@ResponseBody
public String save8() {
    //JSON本质上就是一个字符串，所以可以直接这样返回
    return "{\"username\":\"zhangsan\",\"age\":18}";
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick8”

![image-20210219011932380](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210219011932380.png)

② 使用第三方转换工具转换JSON

1.创建domian.User类

```java
package com.itheima.domain;

public class User {
    private String username;
    private int age;

    public User() {
    }

    public User(String username, int age) {
        this.username = username;
        this.age = age;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", age=" + age +
                '}';
    }
}
```

2.在pom.xml导包

```xml
<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-core</artifactId>
  <version>2.9.0</version>
</dependency>
<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-databind</artifactId>
  <version>2.9.0</version>
</dependency>
<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-annotations</artifactId>
  <version>2.9.0</version>
</dependency>
```

3.在UserController中增加方法

```java
@RequestMapping(value = "/quick9")
@ResponseBody
public String save9() throws JsonProcessingException {
    User user = new User();
    user.setUsername("lisi");
    user.setAge(30);
    //使用json的转换工具将对象转换json格式字符串再返回
    ObjectMapper objectMapper = new ObjectMapper();
    String json = objectMapper.writeValueAsString(user);
    return json;
}
```

4.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick9”

![image-20210219022321605](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210219022321605.png)

③ 不用自己使用转换代码将对象转换为JSON字符串

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们要想直接返回User对象，让转换jaon的过程交给框架，就得配置。首先看源码：

![image-20210219230653013](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210219230653013.png)

有RequestMappingHandlerAdapter，所以要想直接返回自定义的User对象然后框架自动将其转换成json格式字符串到Request域中，必须配置该类。为什么是它？要想修改处理器必须靠处理器适配器，然后返回的数据是到Request域中的，所以看名字就是它了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该类有个setMessageConverters方法(翻译过来就是设置消息转换器):

```java
public void setMessageConverters(List<HttpMessageConverter<?>> messageConverters) {
    this.messageConverters = messageConverters;
}
```

就可以在这里设置json格式转换的转换器。

1.配置处理器适配器，并进行参数设置使用jackson进行**转换**（说白了就是要给框架配一个转换器）

spring-mvc.xml

```xml
<!--配置处理器适配器-->
<bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter">
    <property name="messageConverters">
        <list>
            <!--看源码知道list要的是HttpMessageConverter转换器对象，所以直接配一个bean对象-->
            <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter"/>
        </list>
    </property>
</bean>
```

2.在UserController中增加方法

```java
@RequestMapping(value = "/quick10")
@ResponseBody
//期望SpringMVC自动将User转换成json格式的字符串，所以要配置
public User save10() throws JsonProcessingException {
    User user = new User();
    user.setUsername("lisi2");
    user.setAge(32);
    //这里没有进行转换，直接返回User对象，让框架帮我们转换成json
    return user;
}
```

3.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick10”

![image-20210219234005073](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210219234005073.png)

**④ 简化配置**

![SpringMVC数据响应3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC数据响应3.png)

1.引入mvc命名空间配置***mvc注解驱动***

spring-mvc.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context  http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/mvc  http://www.springframework.org/schema/mvc/spring-mvc.xsd
">

    <!--Controller的组件扫描-->
    <context:component-scan base-package="com.itheima.controller"/>

    <!--配置内部资源视图解析器-->
    <bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <!--配置地址前缀-->
        <property name="prefix" value="/jsp/"></property>
        <!--配置地址的后缀-->
        <property name="suffix" value=".jsp"></property>
    </bean>

<!--    &lt;!&ndash;配置处理器适配器&ndash;&gt;
    <bean class="org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter">
        <property name="messageConverters">
            <list>
                &lt;!&ndash;看源码知道list要的是HttpMessageConverter转换器对象，所以直接配一个bean对象&ndash;&gt;
                <bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter"/>
            </list>
        </property>
    </bean>-->

    <!--mvc的注解驱动-->
    <mvc:annotation-driven/>

</beans>
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick10”进行测试

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;效果和③是一样的，所以就不截图了。

**知识要点**

![SpringMVC数据响应4](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC数据响应4.png)

### 7.获得请求参数

#### 7.0.参数类型：

![SpringMVC获取请求参数](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数.png)

##### （1）获取基本类型参数

![SpringMVC获取请求参数1](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数1.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***只需要方法的形参和参数名称一致即可***。

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick11")
public void save11(String username,int age) {
    System.out.println(username);
    System.out.println(age);
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意这里没有加@ResponseBody注解，所以会进行视图跳转

2.访问"http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick11?username=zhangsan&age=18"

控制台会打印：

```
zhangsan
18
```

浏览器显示：

![image-20210220013709334](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210220013709334.png)

3.增加注解@ResponseBody再次访问

![image-20210220013806239](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210220013806239.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页面什么也没有，控制台会输出。

##### （2）获得POJO类型数据

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先看看以前javaweb使用第三方的BeanUtil的使用：

![尚硅谷javaweb](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210220014622234.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些操作以及BeanUtil已经被SpringMVC底层封装了。***注意controller中的方法参数的POJO属性名要与请求参数名相同***

![SpringMVC获取请求参数2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数2.png)

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick12")
@ResponseBody
public void save12(User user) {
    System.out.println(user);
}
```

2.访问"http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick12?username=zhangsan&age=19"

页面什么也没有，控制台输出：

```
User{username='zhangsan', age=19}
```

##### （3）获得数组类型参数

![SpringMVC获取请求参数3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数3.png)

即有***多个名字相同的请求参数名，controller中的方法数组名应与请求参数相同***

1.在UserController中增加方法

```
@RequestMapping(value = "/quick13")
@ResponseBody
public void save13(String[] strs) {
    System.out.println(strs);//数组直接打印输出的是地址
    //所以要转换成集合，输出才能看到内容
    System.out.println(Arrays.asList(strs));
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick13?strs=aaa&strs=bbb&strs=ccc”

控制台输出：

```
[Ljava.lang.String;@70a42153
[aaa, bbb, ccc]
```

##### （4）获得集合类型参数-VO类

① 将集合封装到一个pojo中再获取

按上面的思路我们可以这样写：

```java
@RequestMapping(value = "/quick14")
@ResponseBody
public void save14(List<User> userList) {
    
}
```

但是这样不行的，我们要***把List封装到一个pojo对象当中然后才能注入。这个类就叫 VO（ValueObject）类***。

1.创建domain.VO类(里面有我们要封装的集合)

```java
package com.itheima.domain;

import java.util.List;

public class VO {
    private List<User> userList;

    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }

    @Override
    public String toString() {
        return "VO{" +
                "userList=" + userList +
                '}';
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;里面有个属性，名叫userList。

2.为了测试，建一个form.jsp页面

```xml
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <form action="${pageContext.request.contextPath}/user/quick14" method="post">
        <%--表明是第一个User对象的username age--%>
        <input type="text" name="userList[0].username"/><br/>
        <input type="text" name="userList[0].age"/><br/>
        <input type="text" name="userList[1].username"/><br/>
        <input type="text" name="userList[1].age"/><br/>
        <input type="submit" value="提交">
    </form>
</body>
</html>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意表单项的name属性名的命名格式。

3.在UserController中增加方法

```java
@RequestMapping(value = "/quick14")
@ResponseBody
public void save14(VO vo) {
    System.out.println(vo);
}
```

4.访问jsp页面并进行测试

提交前：

![image-20210221001336392](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210221001336392.png)

提交后，控制台输出：

```
VO{userList=[User{username='zhangsan', age=18}, User{username='lisi', age=22}]}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般都是这样使用的，虽然有点麻烦。遇到某些特殊情况就可以使用简单的方法，即形参直接写集合。

② 特殊情况（ajax）

![SpringMVC获取请求参数4](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数4.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@requestBody注解常用来处理content-type不是默认的application/x-www-form-urlcoded编码的内容，比如说：application/json或者是application/xml等。一般情况下来说常用其来处理application/json类型。或者参考https://blog.csdn.net/xhf852963/article/details/94353491

1.创建js目录并将jquery文件复制进去

2.创建ajax.jsp并在其内引入jquery

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <script src="${pageContext.request.contextPath}/js/jquery-1.7.2.js"></script>
    <script>
        var userList = new Array();
        userList.push({username:"zhangsan",age:"18"});
        userList.push({username:"lisi",age:"28"});

        $.ajax({
            type:"POST",
            url:"${pageContext.request.contextPath}/user/quick15",
            data:JSON.stringify(userList),
            contentType:"application/json;charset=utf-8"
        });

    </script>
</head>
<body>

</body>
</html>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;补充：JSON.stringify() 方法用于将 JavaScript 值转换为 **JSON** 字符串。

3.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/ajax.jsp”

报错：

![image-20210221010044525](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210221010044525.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是后面要讲的***静态资源访问权限问题（需要访问webapp的静态资源）***，后面再具体讲解。现在先解决问题

4.在spring-mvc.xml里面增加如下配置

```xml
<mvc:resources mapping="/js/**" location="/js/"/>
```

5.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/ajax.jsp”

控制台输出：

```
[User{username='zhangsan', age=18}, User{username='lisi', age=28}]
```

#### 7.1.静态资源访问权限开启

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先我们知道我们现在是在使用**SpringMVC**，它有一个**核心控制器DispatcherServle**t：

```xml
<!--配置SpringMVC的前端控制器-->
<servlet>
  <servlet-name>DispatcherServlet</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <init-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:spring-mvc.xml</param-value>
  </init-param>
  <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
  <servlet-name>DispatcherServlet</servlet-name>
  <url-pattern>/</url-pattern>
</servlet-mapping>
```

它帮助我们实现虚拟路径匹配，比如注解@RequestMapping(value = "/quick15")，所以我们在Controller中给方法配置一个注解就能把地址映射到该方法上。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同样，***我们在访问ajax.jsp是需要请求jquery文件的，就回去找@RequestMapping，显然我们没有配置，是找不到的！***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**①** 所以要在SpringMVC框架当中**开放对哪些资源的访问权限**。一般是静态资源。即这些资源不需要SpringMVC框架帮我们去找。

 spring-mvc.xml:(注意要引入mvc命名空间) 

```xml
<!--开放资源的访问权限-->
<mvc:resources mapping="/js/**" location="/js/"/>
```

mapping表示映射地址（访问地址），这里表示/js目录下面的所有资源；location表示是哪些资源开放的（具体资源所在的目录）。

**② 让原始容器（Tomcat）找**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将①中的配置的标签换成

```xml
<mvc:default-servlet-handler/>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;表示SpringMVC在访问资源时找不到@RequestMapping，就交由原始容器，而这里的原始容器就是Tomcat，即交给Tomcat，让它内部的机制去找资源。

所以现在再去访问”http://localhost:8080/itheima_spring_mvc_war_exploded/ajax.jsp“也是可以的。

#### 7.2.请求数据乱码问题解决

访问http://localhost:8080/itheima_spring_mvc_war_exploded/form.jsp并输入数据（含有中文）：

![image-20210221171524406](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210221171524406.png)

控制台输出：

```
VO{userList=[User{username='??????', age=18}, User{username='??????', age=22}]}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以看到出现了***中文乱码问题***。

来解决。但是这里设置一个过滤器来解决。

![SpringMVC获取请求参数5](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数5.png)

**① 在web.xml配置;**

```xml
<!--配置全局过滤的filter(字符集过滤器)-->
<filter>
  <filter-name>CharacterEncodingFilter</filter-name>
  <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
  <init-param>
    <param-name>encoding</param-name>
    <param-value>UTF-8</param-value>
  </init-param>
</filter>
<filter-mapping>
  <filter-name>CharacterEncodingFilter</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>
```

再进行测试就不会乱码了。

**② 使用注解@RequestMapping订单produces属性（在方法上注解）**

```java
@RequestMapping(value = "/quick7",produces = {"text/html;charset=UTF-8"})//produces解决中文乱码
```

#### 7.3.参数绑定注解@RequestParam

![SpringMVC获取请求参数6](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数6.png)

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick16")
@ResponseBody
public void save16(@RequestParam("name") String username) {
    System.out.println(username);
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick16?name=%E5%BC%A0%E4%B8%89”（注意访问的参数叫name而不是username）（那后面的乱码中文是“张三”，只是复制过来这里没有显示中文）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;控制台能正确打印张三。

**@RequestParam的其他参数**

![SpringMVC获取请求参数7](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数7.png)

1.在UserController中修改方法

```java
@RequestMapping(value = "/quick16")
@ResponseBody
public void save16(@RequestParam(value = "name",required = false,defaultValue = "某人") String username) {
    System.out.println(username);
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick16”

控制台输出：某人

#### 7.4.获得Resful风格的参数

![SpringMVC获取请求参数8](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数8.png)

![SpringMVC获取请求参数9](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数9.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实就是URL请求地址可以不写指定的参数名了，可以直接在地址后面加“/”+请求参数的值，同时要使用注解@PathVariable。就不用向以前一样在地址后面+“?”+键值对的形式了。

![SpringMVC获取请求参数10](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数10.png)

1.在UserController中增加方法

```java
//请求时：//localhost:8080/工程名/user/quick17/zhangsan
@RequestMapping(value = "/quick17/{username}")
@ResponseBody
public void save17(@PathVariable(value = "username",required = false) String username) {
    System.out.println(username);
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick17/zhangsan”

控制台就会输出：zhangsan

#### 7.5.自定义类型转换器

![SpringMVC获取请求参数11](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数11.png)

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick18/")
@ResponseBody
public void save18(Date date) {
    System.out.println(date);
}
```

2.测试：

- 访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick18?date=2021/2/21”

```
Sun Feb 21 00:00:00 CST 2021
```

- 访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick18?date=2021-2-21”

![image-20210221232832158](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210221232832158.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日期格式有不同的写法习惯，第一种服务器可以转换，但是第二种就无法转换，格式不匹配。如果要用第二种的格式就要用到**自定义类型转换器**。

1.创建conerter.DateConverter，并实现converter接口

```java
package com.itheima.converter;

import org.springframework.core.convert.converter.Converter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
public class DateConverter implements Converter<String, Date> {
    @Override
    public Date convert(String dateStr) {
        //日期的字符串转换成日期对象并返回
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        Date date = null;
        try {
            date = format.parse(dateStr);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return date;
    }
}
```

2.在配置文件（spring-mvc.xml）中声明转换器，并在mvc注解驱动标签增加属性

```xml
<!--mvc的注解驱动-->
<mvc:annotation-driven conversion-service="conversionService"/>
<!--声明转换器-->
<bean id="conversionService" class="org.springframework.context.support.ConversionServiceFactoryBean">
    <property name="converters">
        <list>
            <bean class="com.itheima.converter.DateConverter"></bean>
        </list>
    </property>
</bean>
```

3.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick18?date=2021-2-21”

```
Sun Feb 21 00:00:00 CST 2021
```

#### 7.6.获得Servlet相关API

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick19")
@ResponseBody
public void save19(HttpServletRequest request, HttpServletResponse response, HttpSession session) {
    System.out.println(request);
    System.out.println(response);
    System.out.println(session);
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick19”

```
org.apache.catalina.connector.RequestFacade@621d73f7
org.apache.catalina.connector.ResponseFacade@758c2d98
org.apache.catalina.session.StandardSessionFacade@eecc98f
```

#### 7.7.获得请求头信息

![GET请求HTTP协议](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/GET请求HTTP协议.png)

![image-20210222002926153](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210222002926153.png)

注意：[不管什么请求都可以把参数放在URL 里面 不过post 有请求体可以form raw 等传数据](https://www.zhihu.com/question/64099450)

**（1）@RequestHeader**

![SpringMVC获取请求参数12](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数12.png)

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick20")
@ResponseBody
public void save20(@RequestHeader(value = "User-Agent",required = false)String user_agent) {
    System.out.println(user_agent);
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick20”

```
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36
```

![image-20210222014639212](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210222014639212.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以看到它们是相同的。

**（2）@CookieValue**

![SpringMVC获取请求参数13](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC获取请求参数13.png)

1.在UserController中增加方法

```java
@RequestMapping(value = "/quick21")
@ResponseBody
public void save21(@CookieValue(value = "JSESSIONID",required = false)String jsessionid) {
    System.out.println(jsessionid);
}
```

2.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/user/quick21”

控制台输出：11E33AC006C9E3BF871C7FB4D0131C89 和前面请求头里面的一致。

### 8.文件上传

![SpringMVC文件上传](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC文件上传.png)

步骤和以前**javaweb阶段**一样：

①、要有一个 form 标签，method=post 请求 

②、***form 标签的 encType 属性值必须为 multipart/form-data 值*** 

③、在 form 标签中使用 input type=file 添加上传的文件 

④、编写服务器代码（Servlet 程序）接收，处理上传的数据。 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;encType=multipart/form-data 表示提交的数据，以多段（每一个表单项一个数据段）的形式进行拼 

接，然后以二进制流的形式发送给服务器

在服务端以前web阶段需要导入第三方jar包：

**commons-fileupload.jar** **需要依赖** **commons-io.jar** **这个包，所以两个包我们都要引入。** 

**第一步，就是需要导入两个** **jar** **包：** 

```
commons-fileupload-1.2.1.jar 

commons-io-1.4.jar 
```

**commons-fileupload.jar** **和** **commons-io.jar** **包中，我们常用的类有哪些？** 

ServletFileUpload 类，用于解析上传的数据。 

FileItem 类，表示每一个表单项。 

```java
boolean ServletFileUpload.*isMultipartContent*(HttpServletRequest request); 
```

判断当前上传的数据格式是否是多段的格式。 

```java
public List<FileItem> parseRequest(HttpServletRequest request) 
```

解析上传的数据 

```java
boolean FileItem.isFormField() 
```

判断当前这个表单项，是否是普通的表单项。还是上传的文件类型。 

true 表示普通类型的表单项 

false 表示上传的文件类型 

```java
String FileItem.getFieldName() 
```

获取表单项的 name 属性值String FileItem.getString() 

获取当前表单项的值。 

```java
String FileItem.getName(); 
```

获取上传的文件名 

```java
void FileItem.write( file ); 
```

将上传的文件写到 参数 file 所指向抽硬盘位置 。

![文件上传](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/文件上传.png)

​	现在**SpringMVC**他应经将这些封装好了，我们使用更加简便了。

**（1）单文件上传步骤**

① 导入fileupload和io坐标

② **配置文件上传解析器**

③ 编写上传代码



1.创建upload.jsp页面

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
        <form action="${pageContext.request.contextPath}/user/quick22" method="post" enctype="multipart/form-data">
            名称：<input type="text" name="username" /> <br/>
            文件：<input type="file" name="upload" />  <br/>
            <input type="submit" value="上传">
        </form>
</body>
</html>
```

2.在pom.xml导入坐标

```xml
<dependency>
  <groupId>commons-fileupload</groupId>
  <artifactId>commons-fileupload</artifactId>
  <version>1.3.1</version>
</dependency>
<dependency>
  <groupId>commons-io</groupId>
  <artifactId>commons-io</artifactId>
  <version>2.3</version>
</dependency>
```

3.**配置文件spring-mvc.xml上传解析器**

```xml
<!--配置文件上传解析器-->
<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
    <property name="defaultEncoding" value="UTF-8"/>
    <property name="maxUploadSize" value="500000"/>
</bean>
```

4.在UserController中增加文件上传方法（只是测试用途，后面会完善）

```java
@RequestMapping(value = "/quick22")
@ResponseBody
public void save22(String username, MultipartFile upload) {
    System.out.println(username);
    System.out.println(upload);//看看是不是null，不空表示上传成功
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意参数MultipartFile的变量名要和文件上传表单项的name属性值一致。

5.访问“http://localhost:8080/itheima_spring_mvc_war_exploded/upload.jsp”

![image-20210222161111852](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210222161111852.png)

提交后控制台输出：

```
admin
org.springframework.web.multipart.commons.CommonsMultipartFile@52bc146
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由打印结果可知：文件是可以上传到服务器端了，下面就要进行保存了。

- 修改4.中的代码：

```java
@RequestMapping(value = "/quick22")
@ResponseBody
public void save22(String username, MultipartFile upload) throws IOException {
    System.out.println(username);
    //获得上传文件的名称
    String originalFilename = upload.getOriginalFilename();
    //存文件
    upload.transferTo(new File("D:\\output\\" + originalFilename));
}
```

- 访问原来的页面，再次提交。

上传前：

![image-20210222162920299](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210222162920299.png)

上传后：

![image-20210222163113210](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210222163113210.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同时控制台输出：admin；打开文件可以发现内容是一致的。

**（2）多文件上传**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多文件上传即有多个表单项要上传文件。

**方法一：**

1.修改upload.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
        <form action="${pageContext.request.contextPath}/user/quick22" method="post" enctype="multipart/form-data">
            名称：<input type="text" name="username" /> <br/>
            文件：<input type="file" name="upload" />  <br/>
            文件：<input type="file" name="upload2" />  <br/>
            <input type="submit" value="上传">
        </form>
</body>
</html>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以根据单文件上传方法的写法，直接在方法上加个形参MultipartFile，并且名称就叫“upload2”。

2.修改上传方法save22

```java
@RequestMapping(value = "/quick22")
@ResponseBody
public void save22(String username, MultipartFile upload,MultipartFile upload2) throws IOException {
    System.out.println(username);
    //获得上传文件的名称
    String originalFilename = upload.getOriginalFilename();
    upload.transferTo(new File("D:\\output\\" + originalFilename));
    String originalFilename2 = upload2.getOriginalFilename();
    upload2.transferTo(new File("D:\\output\\" + originalFilename2));
}
```

**方法二：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实方法都一样，就是这里方法的形参是用**数组**来接，而不是使用多个不同名称的MultipartFile参数。但是页面里的表单项的name属性都要**同名**。

1.修改upload.jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <form action="${pageContext.request.contextPath}/user/quick23" method="post" enctype="multipart/form-data">
        名称：<input type="text" name="username" /> <br/>
        文件：<input type="file" name="uploadFile" />  <br/>
        文件：<input type="file" name="uploadFile" />  <br/>
        <input type="submit" value="上传">
    </form>
        <form action="${pageContext.request.contextPath}/user/quick22" method="post" enctype="multipart/form-data">
            名称：<input type="text" name="username" /> <br/>
            文件：<input type="file" name="upload" />  <br/>
            文件：<input type="file" name="upload2" />  <br/>
            <input type="submit" value="上传">
        </form>
</body>
</html>
```

2.在UserController中增加文件上传方法

```java
@RequestMapping(value = "/quick23")
@ResponseBody
public void save23(String username, MultipartFile[] uploadFile) throws IOException {
    System.out.println(username);
    for (MultipartFile multipartFile : uploadFile) {
        String originalFilename = multipartFile.getOriginalFilename();
        multipartFile.transferTo(new File("D:\\output\\" + originalFilename));
    }
}
```

运行无误。

### 9.SpringMVC拦截器

![SpringMVC拦截器](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC拦截器.png)

#### 9.1.拦截器和过滤器的区别

![SpringMVC拦截器2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC拦截器2.png)

注意：***拦截器***配置在SpringMVC的配置文件spring-mvc.xml中，如：（***如下配置访问webapp/index.html也会拦截，因为拦截器只对action请求起作用，而过滤器则对所有请求起作用（包括jsp页面请求jQuery文件也过滤，而拦截器则无法拦截这类访问静态资源的请求，但是注意通过通过url访问静态资源的请求还是会拦截的）***）

拦截器不拦截jsp页面，且比过滤器使用更灵活，过滤器只能在请求前作用。

```xml
<!--配置拦截器-->
<mvc:interceptors>
    <mvc:interceptor>
        <!--对哪些资源执行拦截操作-->
        <mvc:mapping path="/*"/>
        <bean class="com.hugo.interceptor.MyInterceptor2"/>
    </mvc:interceptor>
    <mvc:interceptor>
        <!--对哪些资源执行拦截操作-->
        <mvc:mapping path="/*"/>
        <bean class="com.hugo.interceptor.MyInterceptor"/>
    </mvc:interceptor>
</mvc:interceptors>
```

***过滤器***配置在web.xml中，如以前javaweb：

![image-20220110015208907](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20220110015208907.png)

并且如果是spring，spring-mvc.xml还是要**开启静态资源权限（有两种方法，详情请看7.2）**：

```xml
<!--静态资源权限开放-->
<mvc:default-servlet-handler/>
```

#### 9.2.快速入门

创建如下项目：

![image-20210223005729553](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210223005729553.png)

spring-mvc.xml:(看到这里前面的又忘了1.为什么要配置组件扫描？——因为要使用注解开发，所以需要在applicationContext.xml中配置组件扫描，作用是指定哪个包及其子包下的Bean需要进行扫描一遍识别使用注解配置的类、字段和方法。2.为什么要在spring-mvc.xml里面另外配置controller的扫描而不是在applicationContext.xml中统一全部配置组件扫描？——虽然可以配置在applicationContext.xml里面，但是SpringMVC相关配置还是专门配置到spring-mvc.xml里面比较”好“)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context  http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/mvc  http://www.springframework.org/schema/mvc/spring-mvc.xsd
">

    <!--Controller的组件扫描-->
    <context:component-scan base-package="com.hugo.controller"/>

    <!--配置内部资源视图解析器-->
    <bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <!--配置地址前缀-->
        <property name="prefix" value="/"></property>
        <!--配置地址的后缀-->
        <property name="suffix" value=".jsp"></property>
    </bean>


    <!--mvc的注解驱动-->
    <mvc:annotation-driven/>

    <!--静态资源权限开放-->
    <mvc:default-servlet-handler/>

</beans>
```

index.jsp:

```jsp
<html>
<body>
<h2>Hello World!${name}</h2>
</body>
</html>
```

web.xml中配置前端控制器并修改xml文件版本：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
  <display-name>Archetype Created Web Application</display-name>
  <!--配置SpringMVC的前端控制器-->
  <servlet>
    <servlet-name>DispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:spring-mvc.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
  </servlet>
  <servlet-mapping>
    <servlet-name>DispatcherServlet</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>
</web-app>
```

**自定义拦截器**步骤：

① 创建拦截器实现HanderInterceptor接口

1.创建interceptor.HandlerInterceptor并***实现HandlerInterceptor接口***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意该接口的方法都是使用***default修饰***（通过default关键字定义的方法，集成该接口的方法不需要去实现该方法）的，但里面是空实现。所以要我们手动实现其中的方法。

```java
    package com.hugo.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyInterceptor implements HandlerInterceptor {
    /**
     * 在目标方法执行之前执行
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("preHandle......");
        return false;//返回true代表放行，false表示不放行
    }

    /**
     * 在目标方法执行之后，视图返回之前执行
     * @param request
     * @param response
     * @param handler
     * @param modelAndView
     * @throws Exception
     */
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("postHandle......");
    }

    /**
     * 在整个流程都执行完毕后执行
     * @param request
     * @param response
     * @param handler
     * @param ex
     * @throws Exception
     */
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        System.out.println("afterCompletion......");
    }
}
```

② 在spring-mvc.xml中配置拦截器

```xml
<!--配置拦截器-->
<mvc:interceptors>
    <mvc:interceptor>
        <!--对哪些资源执行拦截操作-->
        <mvc:mapping path="/*"/>
        <bean class="com.hugo.interceptor.MyInterceptor"/>
    </mvc:interceptor>
</mvc:interceptors>
```

③ 测试拦截器的拦截效果

1.访问“http://localhost:8080/itheima_spring_interceptor_war_exploded/target”

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此时页面一片空白，控制台只输出：preHandle......

2.将preHandle()方法的返回值修改为true,而不是false

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页面能正常显示和跳转，同时控制台输出：

```
preHandle......
目标资源执行。。。。。。
postHandle......
afterCompletion......
```

#### 9.3.拦截器的三个方法应用

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创建错误提示页面/error.jsp用来后续测试。

（1）preHandle方法在资源方法之前执行，可以进行请求转发

```java
public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    System.out.println("preHandle......");
    String param = request.getParameter("param");
    if("yes".equals(param)){
        return true;
    }else{
        request.getRequestDispatcher("/error.jsp").forward(request, response);
        return false;
    }
}
```

（2）postHandle方法在资源方法执行之后视图返回之前执行，可以修改返回的ModelAndView

```java
public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
    modelAndView.addObject("name", "lisi");
    System.out.println("postHandle......");
}
```

（3）afterCompletion方法是在整个流程都执行完毕后执行，可以处理一些异常

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就不举例了。

#### 9.4.总结与补充

（1）有多个拦截器

1.interceptor.MyInterceptor2拦截器，内容只有控制台输出并且没有拦截和转发到其他页面

2.在spring-mvc.xml配置拦截器：

```xml
<!--配置拦截器-->
<mvc:interceptors>
    <mvc:interceptor>
        <!--对哪些资源执行拦截操作-->
        <mvc:mapping path="/*"/>
        <bean class="com.hugo.interceptor.MyInterceptor"/>
    </mvc:interceptor>
    <mvc:interceptor>
        <!--对哪些资源执行拦截操作-->
        <mvc:mapping path="/*"/>
        <bean class="com.hugo.interceptor.MyInterceptor2"/>
    </mvc:interceptor>
</mvc:interceptors>
```

3.看控制台打印就知道输出结果

```
preHandle......
preHandle22222......
目标资源执行。。。。。。
postHandle2222222......
postHandle......
afterCompletion2222222......
afterCompletion......
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;并且多个拦截器的执行顺序是配置顺序。

**（2）拦截器方法说明**

![SpringMVC拦截器3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC拦截器3.png)

**（3）自定义拦截器步骤：**

① 创建拦截器实现HanderInterceptor接口

② 在spring-mvc.xml中配置拦截器

③ 测试拦截器的拦截效果

## <h2 align = "center">十.Spring、SpringMVC综合练习</h2>

### 1.练习环境搭建

①创建工程（Project&Module）

②导入静态页面（见资料jsp页面）

③导入需要坐标（见资料中的pom.xml）

④创建包结构（controller、service、dao、domain、utils）

⑤导入数据库脚本（见资料test.sql）

⑥创建POJO类（见资料User.java和Role.java）

创建配置文件（applicationContext.xml,spring-mvc.xml,jdbc.properties,log4j.properties）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**spring通过ContextLoaderListener和web达成关系，web.xml有如下配置：(为项目提供了spring支持，初始化了Ioc容器，可以获取应用上下文对象)**

```xml
<!--全局初始化参数-->
<context-param>
  <param-name>contextConfigLocation</param-name>
  <param-value>classpath:applicationContext.xml</param-value>
</context-param>

<!--配置监听器-->
<listener>
  <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**SpringMVC通过前端控制器DispatcherServlet和web达成关系，web.xml有如下配置：（这样就可以在方法上直接进行地址映射）**

```xml
<!--配置SpringMVC的前端控制器-->
<servlet>
  <servlet-name>DispatcherServlet</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <init-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:spring-mvc.xml</param-value>
  </init-param>
  <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
  <servlet-name>DispatcherServlet</servlet-name>
  <url-pattern>/</url-pattern>
</servlet-mapping>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**关于配置文件applicationContext.xml里面是配置Bean的，交给spring容器去产生；spring-mvc.xml是SpringMVC的核心配置文件(web层的组件扫描也在这配，其他的在appliactionContext.xml里面配置)；jdbc.properties配置数据库连接信息；log4j.properties是日志配置文件（不需要会写）**

笔记就不详细写搭建过程了，必要的时候会提一下。

配置文件：

（1）web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

  <!--全局初始化参数-->
  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:applicationContext.xml</param-value>
  </context-param>
  <!--Spring的监听器-->
  <listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
  </listener>


  <!--SpringMVC的前端控制器-->
  <servlet>
    <servlet-name>DispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:spring-mvc.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
  </servlet>
  <servlet-mapping>
    <servlet-name>DispatcherServlet</servlet-name>
    <!-- / 表示所有的资源都要找他，所以要开放静态资源访问权限-->
    <url-pattern>/</url-pattern>
  </servlet-mapping>

</web-app>
```

（2）applicationContext.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
">

    <!--1.加载jdbc.properties-->
    <context:property-placeholder location="classpath:jdbc.properties"/>
    <!--2.配置数据源对象-->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"/>
        <property name="jdbcUrl" value="${jdbc.url}"/>
        <property name="user" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>
    </bean>

    <!--3.配置JdbcTemplate对象-->
    <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
        <property name="dataSource" ref="dataSource"/>
    </bean>

</beans>
```

（3）spring-mvc.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc.xsd
">

    <!--1.mv注解驱动-->
    <mvc:annotation-driven/>

    <!--2.配置视图解析器-->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/pages/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

    <!--3.静态资源访问权限开放-->
    <mvc:default-servlet-handler/>

</beans>
```

### 2.jsp页面列表展示数据业务

![Spring练习-列表展示业务](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring练习-列表展示业务.png)

（1）编写web层代码

```java
package com.itheima.controller;

import com.itheima.domain.Role;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/role")
public class RoleController {
    //要调用service层的方法，通过注入获得(先使用配置文件方式，后面再使用注解)
    @Autowired//只有这Controller层的才使用注解注入，其他层的使用配置文件
    private RoleService roleService;

    public void setRoleService(RoleService roleService) {
        this.roleService = roleService;
    }

    @RequestMapping("/list")
    public ModelAndView List(){
        ModelAndView modelAndView = new ModelAndView();
        //添加数据和视图
        //1.调用RoleService的方法(获取数据)
        List<Role> roleList = roleService.list();
        //2.设置模型
        modelAndView.addObject("roleList", roleList);
        //3.设置视图
        modelAndView.setViewName("role-list");
        return modelAndView;
    }
}
```

（2）service层

- 创建RoleService接口和List方法

```java
public interface RoleService {
    public List<Role> list();
}
```

- 创建和编写其实现类RoleServiceImpl代码

```java
package com.itheima.service.impl;

import com.itheima.domain.Role;
import com.itheima.service.RoleService;

import java.util.List;

public class RoleServiceImpl implements RoleService {
    //调用dao层方法
    private  RoleDao roleDao;
    //设置setter方法才能进行注入
    public void setRoleDao(RoleDao roleDao) {
        this.roleDao = roleDao;
    }

    @Override
    public List<Role> list() {
        List<Role> roleList = roleDao.findAll();
        return roleList;
    }
}
```

（3）dao层

- 创建RoleDao接口和findAll方法

```java
public interface RoleDao {
    List<Role> findAll();
}
```

- 创建和编写其实现类RoleDaoImpl代码

```java
package com.itheima.dao.impl;

import com.itheima.dao.RoleDao;
import com.itheima.domain.Role;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class RoleDaoImpl implements RoleDao {
    //要靠模板对象操作数据库
    private JdbcTemplate jdbcTemplate;
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Role> findAll() {
        //查询数据库并返回
        List<Role> roleList = jdbcTemplate.query("select * from sys_role", new BeanPropertyRowMapper<>(Role.class));
        return roleList;
    }
}
```

（4）配置实现

- 在spring-mvc.xml配置web层的组件扫描

```xml
<!--4.组件扫描 扫描Controller-->
<context:component-scan base-package="com.itheima.controller"/>
```

- 在applicationContext.xml里面配置各层的Bean并注入依赖

```xml
<!--配置RoleService-->
<bean id="roleService" class="com.itheima.service.impl.RoleServiceImpl">
    <property name="roleDao" ref="roleDao"/>
</bean>
<!--配置RoleDao-->
<bean id="roleDao" class="com.itheima.dao.impl.RoleDaoImpl">
    <!--前面配置了jdbcTemplate，直接可以引用-->
    <property name="jdbcTemplate" ref="jdbcTemplate"/>
</bean>
```

（5）编写jsp页面展示数据代码

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的步骤完成后，已经将数据存到modelAndView当中并转发到roleList页面了，所以现在就是要在roleList.jsp页面使用JSTL和EL表达式来展示数据了。

- 引入JSTL标签库

```jsp
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

- 遍历输出展示

  ​	先看看每一项以前是怎么展示的：

  ```jsp
  <tr>
     <td><input name="ids" type="checkbox"></td>
     <td>1</td>
     <td>院长</td>
     <td>java学院整体工作管理</td>
     <td class="text-center">
        <a href="#" class="btn bg-olive btn-xs">删除</a>
     </td>
  </tr>
  ```

  ​	修改后：

```jsp
<c:forEach items="${roleList}" var="role">
   <tr>
      <td><input name="ids" type="checkbox"></td>
      <td>${role.id}</td>
      <td>${role.roleName}</td>
      <td>${role.roleDesc}</td>
      <td class="text-center">
         <a href="#" class="btn bg-olive btn-xs">删除</a>
      </td>
   </tr>
</c:forEach>
```

（6）测试

- 数据库数据

![image-20210226173647140](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210226173647140.png)

- 点击菜单“角色管理”后页面显示

![image-20210226173837424](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210226173837424.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;角色管理其实就是访问“http://localhost:8080/spring_tx_war_exploded/role/list”。

### 3.角色添加操作业务

- 实现后效果：

![Spring练习-角色添加业务](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Spring练习-角色添加业务.png)

- 步骤：

  ① 点击列表页面新建按钮跳转到角色添加页面
  ② 输入角色信息，点击保存按钮，表单数据提交服务器
  ③ 编写RoleController的save()方法
  ④ 编写RoleService的save()方法
  ⑤ 编写RoleDao的save()方法
  ⑥ 使用JdbcTemplate保存Role数据到sys_role
  ⑦ 跳转回角色列表页面

（1）修改role-add.jsp页面里面的表单跳转链接

```jsp
<form action="${pageContext.request.contextPath}/role/save" method="post">
```

同时要注意里面表单项的name属性，因为后面要获取参数。这两个属性的名字就是Role对象的属性名。

```jsp
<div class="panel-heading">角色信息</div>
<div class="row data-type">

   <div class="col-md-2 title">角色名称</div>
   <div class="col-md-4 data">
      <input type="text" class="form-control" name="roleName"
         placeholder="角色名称" value="">
   </div>
   <div class="col-md-2 title">角色描述</div>
   <div class="col-md-4 data">
      <input type="text" class="form-control" name="roleDesc"
         placeholder="角色描述" value="">
   </div>
               

</div>
```

（2）在RoleController当中创建save()方法

```java
@RequestMapping("/save")
public String save(Role role){
    roleService.save(role);
    return "redirect:/role/list";//重定向
}
```

​		***请求转发***用”forward“，**默认就是forward跳转**

（3）RoleServiceImpl中增加save()

```java
@Override
public void save(Role role) {
    roleDao.save(role);
}
```

（4）RoleDaoImpl中增加save()

```java
@Override
public void save(Role role) {
    jdbcTemplate.update("insert into sys_role value(?,?,?)", null,role.getRoleName(),role.getRoleDesc());
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编写代码的顺序不要反了，这样的顺序才是最快最舒服的。写完上述步骤，现在新建一个角色：就业指导，负责学生的就业工作。

结果为：

![image-20210226184132958](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210226184132958.png)

数据库内容显示也不正常：

![image-20210226184257933](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210226184257933.png)

**解决乱码问题：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;问题就在于***POST乱码***，此处的form表单是POST方式提交的，所以要解决中文乱码问题。方法前面也有提过。在这配置一个全局的***字符集过滤器***：

web.xml:

```xml
<!--解决中文乱码的过滤器-->
<filter>
  <filter-name>CharacterEncodingFilter</filter-name>
  <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
  <init-param>
    <param-name>encoding</param-name>
    <param-value>UTF-8</param-value>
  </init-param>
</filter>
<filter-mapping>
  <filter-name>CharacterEncodingFilter</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>
```

**补充：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果修改后出现全是？号，就修改jdbc.properties里的jdbc.url=jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf8

### 4.多表查询后的列表展示

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前面的列表数据展示都是单表查询后直接返回一个List数据就可以了（一行就是一个Role对象），但现在是多表查询后在同一行展示。

![image-20210226224124967](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210226224124967.png)

**步骤：**

① 点击用户管理菜单发送请求到服务器端（修改用户管理菜单的url地址）
		② 创建RoleController和showList()方法
		③ 创建RoleService和showList()方法
		④ 创建RoleDao和findAll()方法
		⑤ 使用JdbcTemplate完成查询操作
		⑥ 将查询数据存储到Model中
		⑦ 转发到user-list.jsp页面进行展示

**（1）修改菜单里面的“用户管理”的访问地址**

```jsp
<li><a
   href="${pageContext.request.contextPath}/user/list"> <i
      class="fa fa-circle-o"></i> 用户管理
</a></li>
```

**（2）修改User实体代码**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;原来的User和Role的属性都是和数据库相应表里的数据名称相同，但是现在**用户列表要展示的时候既要展示User表有的内容还要关联Role表对应的角色**。（还要提一下的就是：**User表和Role是多对多的关系**，所以他们之间还要有一个**中间表**来记录他们两者之间的关系，该中间表的内容就是两个id,一个是User的一个是Role的id）

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过上述分析，我们需要在User实体类中增加一个属性(roles)并生成它的getter和setter方法，该属性是一个List，里面记录的就是该User对象具有的角色。

(这里只展示数据部分)

```java
private Long id;
private String username;
private String email;
private String password;
private String phoneNum;

//当前用户具备哪些角色
private List<Role> roles;
```

**（3）创建UserController和list方法**

```java
package com.itheima.controller;

import com.itheima.domain.User;
import com.itheima.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/list")
    public ModelAndView list(){
        List<User> userList = userService.list();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("userList", userList);
        modelAndView.setViewName("user-list");
        return modelAndView;
    }
}
```

**（4）创建UserService接口和其实现**

- UserService接口

```java
package com.itheima.service;

import com.itheima.domain.User;

import java.util.List;

public interface UserService {
    List<User> list();
}
```

- 实现类UserServiceImpl和list()

```java
package com.itheima.service.impl;

import com.itheima.dao.UserDao;
import com.itheima.domain.User;
import com.itheima.service.UserService;

import java.util.List;

public class UserServiceImpl implements UserService {

    private UserDao userDao;
    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }//使用配置文件注入就要创建setter方法

    @Override
    public List<User> list() {
        List<User> userList = userDao.findAll();
        return userList;
    }
}
```

**（5）创建UserDao接口和其实现**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;步骤和（4）一样，所以就不写接口了，直接给出实现类代码和方法了。

```java
package com.itheima.dao.impl;

import com.itheima.dao.UserDao;
import com.itheima.domain.User;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class UserDaoImpl implements UserDao {

    private JdbcTemplate jdbcTemplate;
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<User> findAll() {
        List<User> userList = jdbcTemplate.query("select from sys_user", new BeanPropertyRowMapper<>(User.class));
        return userList;//？！
    }
}
```

（6）在applicationContext.xml配置Bean

```xml
<!--配置UserService-->
<bean id="userService" class="com.itheima.service.impl.UserServiceImpl">
    <property name="userDao" ref="userDao"/>
</bean>
<!--配置UserDao-->
<bean id="userDao" class="com.itheima.dao.impl.UserDaoImpl">
    <property name="jdbcTemplate" ref="jdbcTemplate"/>
</bean>
```

（7）编写jsp页面展示数据代码

- 引入JSTL标签库

```jsp
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

- 遍历输出展示

  ​	先看看每一项以前是怎么展示的：

```jsp
<tr>
   <td><input name="ids" type="checkbox"></td>
   <td>1</td>
   <td>张三</td>
   <td>zhangsan@itcast.cn</td>
   <td>13888888888</td>
   <td class="text-center">
      课程研究员&nbsp;讲师&nbsp;
   </td>
   <td class="text-center">
      <a href="javascript:void(0);" class="btn bg-olive btn-xs">删除</a>
   </td>
</tr>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改后：

```jsp
<c:forEach items="${userList}" var="user">
   <tr>
      <td><input name="ids" type="checkbox"></td>
      <td>${user.id}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.phoneNum}</td>
      <td class="text-center">
         课程研究员&nbsp;讲师&nbsp;
      </td>
      <td class="text-center">
         <a href="javascript:void(0);" class="btn bg-olive btn-xs">删除</a>
      </td>
   </tr>
</c:forEach>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很明显该用户“具有角色”目前是查不出来的，所以先不测试了。

**（4）修改UserServiceImpl的list()**

- 看service层UserServiceImpl:

```java
@Override
public List<User> list() {
    List<User> userList = userDao.findAll();
    //封装userList中的每一个User的roles数据
    return userList;
}
```

我们要把userList中每一个User对象的roles(List)属性填进去，就可以在这里对查到的userList进行遍历，然后再通过user的id查用户和角色中间表，将得到的数据注入到roles中即可！

- 修改UserServiceImpl

  ​	因为要查角色表Role，所以用用到RoleDao，就要增加一个属性。同时要使用配置文件进行注入，所以要设置setter方法，配置文件的修改就不展示了。

```java
@Override
public List<User> list() {
    List<User> userList = userDao.findAll();
    //封装userList中锋每一个User的roles数据
    for (User user : userList) {
        //获得每一个user的id
        Long id = user.getId();
        //将id作为参数查询中间表获得当前userId对应的Roles集合数据
        List<Role> roles= roleDao.findRoleByUserId(id);
        //得到数据后注进去即可
        user.setRoles(roles);
    }
    return userList;
}
```

**（5）在roleDaoImpl增加findRoleByUserId方法**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在就是查询数据库，通过userId来查中间表和role表，最后返回Role对象。那就要使用到多表查询了。

```java
@Override
public List<Role> findRoleByUserId(Long id) {
    List<Role> roles = jdbcTemplate.query("select * from sys_user_role ur,sys_role r where ur.roleid = r.id and ur.userId = ?", new BeanPropertyRowMapper<>(Role.class),id);
    return roles;
}
```

**（6）编写jsp页面展示数据代码**

```jsp
<c:forEach items="${userList}" var="user">
   <tr>
      <td><input name="ids" type="checkbox"></td>
      <td>${user.id}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td>${user.phoneNum}</td>
      <td class="text-center">
         <c:forEach items="${user.roles}" var="role">
            &nbsp;${role.roleDesc}
         </c:forEach>
      </td>
      <td class="text-center">
         <a href="javascript:void(0);" class="btn bg-olive btn-xs">删除</a>
      </td>
   </tr>
</c:forEach>
```

**（7）测试：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据库中间表和角色表内容如下：

![image-20210227023101198](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210227023101198.png)

![image-20210227023030511](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210227023030511.png)

页面展示效果：

![image-20210227023311329](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210227023311329.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有个小问题：“具有角色”那一列应该显示角色名，在jsp页面简单修改一下即可，这里不改了。

### 5.用户添加操作业务

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单表添加是很简单的，但是涉及到添加一个用户后需要修改多个表，而且最先插入的表的主键还是自增的这样的操作就有点麻烦了。像本项目的，添加用户后，不仅需要将某些数据保存到user表，而且user表的主键userId是自增的，即插入后你无法知道刚刚插入的user的主键userId是多少，但是接下来要修改的表（中间表要记录该用户的角色）需要用到userId，这就是一个棘手的问题了。

效果展示：

![image-20210227135735781](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210227135735781.png)

**步骤分析：**

① 点击列表页面新建按钮跳转到角色添加页面
		② 输入角色信息，点击保存按钮，表单数据提交服务器
		③ 编写UserController的save()方法
		④ 编写UserService的save()方法
		⑤ 编写UserDao的save()方法
		⑥ 使用JdbcTemplate保存Role数据到sys_role
		⑦ 跳转回角色列表页面

**（1）新建保存页面显示所有角色**

- user-list.jsp

```jsp
<button type="button" class="btn btn-default" title="新建" onclick="location.href='${pageContext.request.contextPath}/user/saveUI'">
   <i class="fa fa-file-o"></i> 新建
</button>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**其实这里直接跳到添加页面也是可以的为什么还要再搞一个controller方法呢？**

因为跳转到新建用户页面里面有“用户角色”，在这个页面要把所有的角色显示出来供大家选择。

- 修改UserController

  1.增加一个RoleService属性，因为要查询Role表

```java
@Autowired
private RoleService roleService;
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.增加save方法

```java
@RequestMapping("/saveUI")
public ModelAndView saveUI(){
    ModelAndView modelAndView = new ModelAndView();
    //需要所有的角色数据
    List<Role> roleList = roleService.list();
    //保存到域中
    modelAndView.addObject("roleList", roleList);
    //设置视图
    modelAndView.setViewName("user-add");
    return modelAndView;
}
```

- 编写user-add.jsp页面展示数据代码

  ​	记得导标签库。

以前展示代码：

```jsp
<input class="" type="checkbox" name="roleId" value="1">院长
```

修改后：

```jsp
<c:forEach items="${roleList}" var="role">
<input class="" type="checkbox" name="roleIds" value="${role.id}">${role.roleName}
</c:forEach>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意name的属性值roleIds，后面/user/save要用数组接收的。其他表单项的name属性值必须要和数据库user的属性名相同，不然无法自动注入到user对象当中。

- 测试：（点击“新建按钮后”）

![image-20210227143847871](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210227143847871.png)

**（2）将数据保存到数据库**

- **修改表单“保存”按钮的提交地址**

```jsp
<form action="${pageContext.request.contextPath}/user/save"
   method="post">
```

- **编写UserController的save()方法**

```java
/**
 * 将获得的数据保存到数据库（保存到user表和中间表）调用userService的save方法实现
 * @param user user的四个基本信息
 * @param roleIds 保存的是用户角色的value值，即roleId (有多个角色)
 * @return 重定向到用户展示页面
 */
@RequestMapping("/save")
public String save(User user,Long[] roleIds){
    userService.save(user,roleIds);
    return "redirect:/user/list";
}
```

- 编写UserService的save()方法

```java
@Override
public void save(User user, Long[] roleIds) {
    //1.向sys_user表中存储数据
    userDao.save(user);
    //2.向sys_user_role关系表中存储多条数据(一个用户有多个角色)
    userDao.saveUserRoleRel(user.getId(),roleIds);
}
```

- 编写UserDao的save()和**saveUserRoleRel()方法**

```java
@Override
public void save(User user) {
    jdbcTemplate.update("insert into sys_user value(?,?,?,?,?)", null,user.getUsername(),user.getEmail(),user.getPassword(),user.getPhoneNum());
}

@Override
public void saveUserRoleRel(Long userId, Long[] roleIds) {
    //因为一个用户可能有多个数据，所以要循环执行多次
    for (Long roleId : roleIds) {
        jdbcTemplate.update("insert into sys_user_role value(?,?)", userId,roleId);
    }
}
```

（7）测试：

![image-20210227155342529](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210227155342529.png)

点击保存后，报错500：

![image-20210227155441945](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210227155441945.png)

解决方法：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将新建的user录入到数据库中，userId属性是数据库自增的，参数填null即可，但是页面传给服务器是没有userId属性的，所以controller层的save()参数里的user对象里的userId都是空的。再看service层代码：

```java
@Override
public void save(User user, Long[] roleIds) {
    //1.向sys_user表中存储数据
    userDao.save(user);
    //2.向sys_user_role关系表中存储多条数据(一个用户有多个角色)
    userDao.saveUserRoleRel(user.getId(),roleIds);//即这里的user.getId()不能为null，因为要根据id插入角色到数据库
}
```

那么很明显，userId为空的问题报错就出现在这。因为controller里面接收的User里的userId是空的，所以上面代码的user.getId()就是空的！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在我就要在上面代码之间获得插入后，该user的userId值是多少。

- 修改UserDaoImpl的save方法，让其返回userId**（未完）**

```java
@Override
public Long save(User user) {
    jdbcTemplate.update("insert into sys_user value(?,?,?,?,?)", null,user.getUsername(),user.getEmail(),user.getPassword(),user.getPhoneNum());

    return 0L;//返回当前保存的用户的id该id是数据库自动生成的
}
```

- **修改UserServiceImpl的save方法**

```java
@Override
public void save(User user, Long[] roleIds) {
    //1.向sys_user表中存储数据
    Long userId = userDao.save(user);
    //2.向sys_user_role关系表中存储多条数据(一个用户有多个角色)
    userDao.saveUserRoleRel(userId,roleIds);
}
```

**问题又来了，怎么获取当前保存的用户的id呢？**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个又要用到JdbcTemplate了，前面没有提，因为有点麻烦复杂。学了Mybatis后简单配置一下，就能返回那个自动生成的id。

- **修改UserDaoImpl的save方法：**

```java
@Override
public Long save(User user) {
    //创建PreparedStatementCreator
    PreparedStatementCreator creator = new PreparedStatementCreator() {
        @Override
        public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
            //使用原始jdbc完成有个PreparedStatementCreator的组件
            PreparedStatement preparedStatement = connection.prepareStatement("insert into sys_user value(?,?,?,?,?)", PreparedStatement.RETURN_GENERATED_KEYS);
            preparedStatement.setObject(1,null);
            preparedStatement.setObject(2,user.getUsername());
            preparedStatement.setObject(3,user.getEmail());
            preparedStatement.setObject(4,user.getPassword());
            preparedStatement.setObject(5,user.getPhoneNum());
            return preparedStatement;
        }
    };
    //jdbcTemplate.update("insert into sys_user value(?,?,?,?,?)", null,user.getUsername(),user.getEmail(),user.getPassword(),user.getPhoneNum());
    //创建KeyHolder
    GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
    jdbcTemplate.update(creator,keyHolder);
    //获得生成的主键
    long userId = keyHolder.getKey().longValue();//.longValue是因为主键是long类型
    return userId;//返回当前保存的用户的id该id是数据库自动生成的
}
```

**测试：**

![image-20210228010454534](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210228010454534.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**其实本节就是解决：如何获得刚刚插入数据库的自增主键的值。**

### 6.删除用户操作业务

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先分析一下，一个用户的数据不只是user表里面的数据，还具有角色，即role表的信息，而且这两个表要有正确的关系还得依赖中间表记录，所以删除一个用户不仅仅只是删除一个user表里面的一条记录了，还要删除中间表的多条记录。而且**由两个表约束关系可知，删除也有先后顺序**，这里要先删除中间表，然后才是删除user表。

实现效果：

![image-20210228012348951](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210228012348951.png)

**步骤：**

① 点击用户列表的删除按钮，发送请求到服务器端
		② 编写UserController的deleteById()方法
		③ 编写UserService的deleteById()方法
		④ 编写UserDao的deleteById()方法
		⑤ 编写UserDao的deleteRelByUid()方法
		⑥ 跳回当前用户列表页面

**（1）修改页面“删除”按钮的访问地址**

- 原来

```jsp
<td class="text-center">
   <a href="javascript:void(0);" class="btn bg-olive btn-xs">删除</a>
</td>
```

- 修改后

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击“删除”按钮，要有”确认删除“提示，所以要实现一个点击事件delUser()

```jsp
<script type="text/javascript">
   function delUser(userId) {
      if(confirm("您确认要删除吗？")){
         location.href = "${pageContext.request.contextPath}/user/del/" + userId;//Resful风格
      }
   }
</script>
```

```jsp
<td class="text-center">
   <a href="javascript:void(0);" onclick="delUser(${user.id})" class="btn bg-olive btn-xs">删除</a>
</td>
```

**（2）编写UserController的del方法**

```java
@RequestMapping("/del/{userId}")
public String del(@PathVariable("userId") Long userId){
    userService.del(userId);
    return "redirect:/user/list";
}
```

**（3）编写UserService的del方法**

```java
@Override
public void del(Long userId) {
    //1.删除sysy\_user_role关系表
    userDao.delUserRoleRel(userId);
    //2.删除sys_user关系表
    userDao.del(userId);
}
```

**（4）编写UserDao的del方法**

```java
@Override
public void del(Long userId) {
    //1.删除sysy\_user_role关系表
    userDao.delUserRoleRel(userId);
    //2.删除sys_user关系表
    userDao.del(userId);
}
```

**（5）编写UserDao的delUserRoleRel()和del方法**

```java
@Override
public void delUserRoleRel(Long userId) {
    jdbcTemplate.update("delete from sys_user_role where userId = ?", userId);
}

@Override
public void del(Long userId) {
    jdbcTemplate.update("delete from sys_user where id = ?", userId);
}
```

**（6）测试**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经测试是成功的，结果就不在这里展示了。需要注意的是上面那么多的业务实现都没有用到事务，可以参考前面事务控制进行配置。

### 7.用户登录权限控制(拦截器)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系统要求是要登录后才能使用的，如果没有登录就去访问某些页面，系统就跳转（重定向）到登录页面，让用户进行登录。

![拦截器实现用户登录权限控制](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/拦截器实现用户登录权限控制.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;即需要在拦截器的preHandle方法中判断用户是否登录。所以需要一个判断用户登录的标志，可以看session当中是否有user对象。这是不做集群的做法。如果要做集群，就可以把该数据存到Redis当中做数据共享。

**一、拦截器**

**（1）创建拦截器interceptor.PrivilegeInterceptor**

```java
public class PrivilegeInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //逻辑：判断用户是否登录 本质：判断session中有没有user
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        if (user == null){//没有登录，重定向到登录页面
            response.sendRedirect(request.getContextPath() + "/login.jsp");
            return false;//不放行
        }
        return true;//放行 访问目标资源
    }
}
```

**（2）在spring-mvc.xml配置拦截器地址**

```xml
<!--配置权限拦截器-->
<mvc:interceptors>
    <mvc:interceptor>
        <mvc:mapping path="/**"/>
        <bean class="com.itheima.interceptor.PrivilegeInterceptor"/>
    </mvc:interceptor>
</mvc:interceptors>
```

* ***注意：***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;拦截器的地址要写“/ ** ”，而不是" / * "；否则无法拦截。/*表示当前目录下的所有地址，/**表示当前以及下面所有文件包括下级目录的所有文件(过滤器的地址含义又不相同)。

还有一点/**会把静态webapp目录下的静态资源如一些页面js都拦截了，所以这样配会导致页面的css和js等静态资源无法加载所以要把js,css和图片目录，排除拦截，如：

```xml
<!--拦截器会把静态资源也拦截-->
<mvc:exclude-mapping path="/css/**"/>
<mvc:exclude-mapping path="/plugins/**"/>
<mvc:exclude-mapping path="/img/**"/>
```

**二、登录功能**

**（1）修改login.jsp里的表单提交地址**

- 修改前：

```jsp
<form action="${pageContext.request.contextPath}/pages/main.jsp" method="post">
```

- 修改后：

```java
<form action="${pageContext.request.contextPath}/user/login" method="post">
```

**（2）编写UserController的login方法**

```java
@RequestMapping("/login}")
public String login(String username, String password, HttpSession session){
    User user = userService.login(username,password);
    if(user!=null){//登录成功 将user存储到session域中
        //将登录的user保存到session域中，因为要权限管理
        session.setAttribute("user", user);
        return "redirect:/index.jsp";
    }
    return "redirect:/login.jsp";
}
```

**（3）编写UserServiceImpl的login方法**

```java
@Override
public User login(String username, String password) {
    User user = userDao.findByUsernameAndPassword(username,password);
    return user;
}
```

**（4）编写UserDaoImpl的findByUsernameAndPassword方法**

```java
@Override
public User findByUsernameAndPassword(String username, String password) {
    User user = jdbcTemplate.queryForObject("select * from sys_user where username = ? and password = ?", new BeanPropertyRowMapper<>(User.class), username, password);
    return user;
}
```

（5）测试

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;输入账号密码后，点击登录页面没有反应：

![image-20210228184919245](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210228184919245.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;回顾一下前面（一.(2)）中配置的拦截器的地址为 /**。显然要改拦截器的地址，登录"/user/login"不能拦截。不然用户还怎么登录？

```xml
<!--配置权限拦截器-->
<mvc:interceptors>
    <mvc:interceptor>
        <!--配置对哪些资源执行拦截操作-->
        <mvc:mapping path="/**"/>
        <!--配置哪些资源排除拦截操作(可以配置多个)-->
        <mvc:exclude-mapping path="/user/login"/>
        <!--拦截器会把静态资源也拦截-->
        <mvc:exclude-mapping path="/css/**"/>
        <mvc:exclude-mapping path="/plugins/**"/>
        <mvc:exclude-mapping path="/img/**"/>
        <bean class="com.itheima.interceptor.PrivilegeInterceptor"/>
    </mvc:interceptor>
</mvc:interceptors>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;按照以上操作后可以实现正确登录和权限控制。但是当密码输出错误的时候，页面就会报错500。

![image-20210228191313194](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210228191313194.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;看来错误信息后可知是**空的结果数据访问的异常**。再通过控制台可以发现是：

```java
public User findByUsernameAndPassword(String username, String password) {
    User user = jdbcTemplate.queryForObject("select * from sys_user where username = ? and password = ?", new BeanPropertyRowMapper<>(User.class), username, password);
    return user;
}
```

***这里报的错；queryForObject()方法如果用户名和密码都正确它会返回一个User，如果是错误的，即没有查到数据就会抛出一个异常，而不是返回一个null。看控制台和页面显示可以知道，该异常叫EmptyResultDataAccessException。***

**三、密码错误**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过上面的分析我们知道，现在只要处理一下EmptyResultDataAccessException异常并返回null就可以了。

**（1）修改UserDaoImpl的findByUsernameAndPassword方法**

```java
@Override
public User findByUsernameAndPassword(String username, String password) throws EmptyResultDataAccessException {
    User user = jdbcTemplate.queryForObject("select * from sys_user where username = ? and password = ?", new BeanPropertyRowMapper<>(User.class), username, password);
    return user;
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实在哪里处理异常都无所谓，但是一般在业务层处理异常，下面就在业务层捕获。也可以统一抛给框架处理异常，下一节就会说。

**（2）修改UserServiceImpl的login方法进行异常捕获**

```java
@Override
public User login(String username, String password) {
    User user = null;
    try {
        user = userDao.findByUsernameAndPassword(username,password);
    } catch (EmptyResultDataAccessException e) {
        user = null;//没查到说明密码不正确，返回null
    }
    return user;
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经测试可以实现想要的功能就不展示结果了。

### 8.SpringMVC异常处理机制

环境搭建：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新建一个项目，此项目就是用来处理异常的主要有DemoController，DemoServiceImpl和自定义异常MyException。其他的文件就不解释了，资料也有。

①DemoController 里面调用DemoServiceImpl的方法

```java
package com.itheima.controller;

import com.itheima.exception.MyException;
import com.itheima.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.FileNotFoundException;

@Controller
public class DemoController {

    @Autowired
    private DemoService demoService;

    @RequestMapping(value = "/show")
    public String show() throws FileNotFoundException, MyException {
        System.out.println("show running......");
        //demoService.show1();
        //demoService.show2();
        //demoService.show3();
        //demoService.show4();
        demoService.show5();
        return "index";
    }

}
```

② DemoServiceImpl里面的方法都是模拟产生各种异常的

```java
package com.itheima.service.impl;

import com.itheima.exception.MyException;
import com.itheima.service.DemoService;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

public class DemoServiceImpl implements DemoService {
    public void show1() {
        System.out.println("抛出类型转换异常....");
        Object str = "zhangsan";
        Integer num = (Integer)str;
    }

    public void show2() {
        System.out.println("抛出除零异常....");
        int i = 1/0;
    }

    public void show3() throws FileNotFoundException {
        System.out.println("文件找不到异常....");
        InputStream in = new FileInputStream("C:/xxx/xxx/xxx.txt");
    }

    public void show4() {
        System.out.println("空指针异常.....");
        String str = null;
        str.length();
    }

    public void show5() throws MyException {
        System.out.println("自定义异常....");
        throw new MyException();
    }
}
```

③ 自定义异常MyException

```java
package com.itheima.exception;

public class MyException extends Exception {

}
```

**问题分析：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以前我们处理异常都是try...catch...处理的，或者抛出去。有什么缺点吗？主要就是业务代码和捕获异常处理代码耦合死了。其次就是代码重复了，比如我不同的地方可能抛出的异常是相同的，所以处理异常的代码也是相同的，所以就需要抽取。

#### 8.1.异常处理思路

![SpringMVC异常处理](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC异常处理.png)

![SpringMVC异常处理2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC异常处理2.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前一种看名字就知道只能简单的处理异常，就是遇到某种异常后设置跳转到某一指定页面。后者是自定义的，所以捕获异常后你可以编写异常处理代码。

#### 8.2.SimpleMappingException

![SpringMVC异常处理3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC异常处理3.png)

- 在spring-mvc.xml配置

```xml
<!-- 配置异常处理器-->
<bean class="org.springframework.web.servlet.handler.SimpleMappingExceptionResolver">
    <property name="defaultErrorView" value="error"/>
</bean>
```

- 在webapp下创建error.jsp页面

  ​	里面就是显示错误提示的。

```jsp
<h1>通用的错误提示页面</h1>
```

- 测试

  我们再次访问有异常的/show，此时显示的页码就是error.jsp。

![image-20210302142836763](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210302142836763.png)

控制台输出：

```
show running......
抛出类型转换异常....
```

该方法为：

```java
public void show1() {
    System.out.println("抛出类型转换异常....");
    Object str = "zhangsan";
    Integer num = (Integer)str;
}
```

SimpleMappingExceptionResolver是SpringMVC自带的简单异常处理器：

```xml
<!-- 配置异常处理器-->
<bean class="org.springframework.web.servlet.handler.SimpleMappingExceptionResolver">
    <property name="defaultErrorView" value="error"/>
    <property name="exceptionMappings">
        <map>
            <entry key="java.lang.ClassCastException" value="error1"/>
            <entry key="com.itheima.exception.MyException" value="error2"/>
        </map>
    </property>
</bean>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;具体是某些已有的异常还是自定义异常，都可以配在maps里面，value就是发生异常时你要跳转的页面。

#### 8.3.自定义异常处理器

- 自定义异常处理类resolver.MyExceptionResolver实现HandlerExceptionResolver接口

```java
package com.itheima.resolver;

import com.itheima.exception.MyException;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class MyExceptionResolver implements HandlerExceptionResolver {

    /**
        参数Exception：异常对象
        返回值ModelAndView：跳转到错误视图信息
     */
    public ModelAndView resolveException(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) {
        ModelAndView modelAndView = new ModelAndView();
		//逐一对比
        if(e instanceof MyException){
            modelAndView.addObject("info","自定义异常");
        }else if(e instanceof ClassCastException){
            modelAndView.addObject("info","类转换异常");
        }

        modelAndView.setViewName("error");

        return modelAndView;
    }
}
```

- 在spring-mvc.xml配置

  ​	为该异常处理器配置一个bean标签就行了。（同时要把前面配置的简单异常处理器注释掉）

- 在error.jsp页面展示错误信息

```jsp
<h1>${info}</h1>
```

#### 8.4.总结

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以以后代码再要处理异常时，就往上抛，并且最上层的web还要往外抛，直到抛给框架。

![SpringMVC异常处理4](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/SpringMVC异常处理4.png)

# <h1 align = "center">Mybatis心得与笔记</h1>

## 一.Mybatis简介

![Mybatis简介](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis简介.png)

![Mybatis简介1](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis简介1.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以看到上面的代码是有很多相同的，比如：注册驱动、获得连接等。这些代码都是结构化的，就是模板代码，是可以优化提取的。而且连接资源用一次要创建一次，用完就毁掉，这样是很消耗计算机资源的；还耦合死了。

![Mybatis简介2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis简介2.png)

![Mybatis简介3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis简介3.png)

## 二.Mybatis快速入门

![Mybatis简介4](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis简介4.png)

### 2.1.添加MyBatis坐标

```xml
<dependencies>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.11</version>
    <scope>test</scope>
  </dependency>
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.32</version>
  </dependency>
  <dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.4.6</version>
  </dependency>
  <!--日志-->
  <dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
  </dependency>
</dependencies>
```

### 2.2.创建user数据表

![image-20210302232217298](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210302232217298.png)

### 2.3.编写User实体类

```java
package com.itheima.domain;

public class User {
    private int id;
    private String username;
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
```

### 2.4.编写映射文件UserMapper.xml

- 在resources创建目录和文件：

![image-20210302233309941](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210302233309941.png)

- 引入映射配置文件并配置：

![image-20210302234236377](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210302234236377.png)

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="userMapper">
    <!--namespace就是给当前文件取一个命名空间-->
    <!--要调用此文件里面的sql语句时：userMapper.findAll;Maybatis就会去执行，-->
    <!--执行得到结果集会帮我们封装到某一实体集当中,resultType就是指定该结果集的-->
    <select id="findAll" resultType="com.itheima.domain.User">
        select * from user
    </select>

</mapper>
```

***在2.5编写MyBatisTest类中调用时就写sqlSession.selectList("userMapper.findAll")，注意这样用是因为Mybatis没有与SpringMVC集成，集成后要写成对应的dao下的接口名，如“com.itheima.dao.UserMapper"***

### 2.5.编写核心文件SqlMapConfig.xml

- 引入核心配置文件约束头

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
```

- 配置configuration里面的environments标签

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!--数据源环境-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/test"/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>
    </environments>
        <!--加载映射文件-->
    <mappers>
        <mapper resource="com.itheima.mapper/UserMapper.xml"></mapper>
    </mappers>

</configuration>
```

### 2.6.测试

![Mybatis简介快速入门](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis简介快速入门.png)

**1.在test/java下创建类com.itheima.test.MyBatisTest**

```java
package com.itheima.test;

import com.itheima.domain.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class MyBatisTest {
    @Test
    public void test1() throws IOException {
        //获得核心配置文件
        InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
        //获得session工厂对象
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
        //获得session会话对象
        SqlSession sqlSession = sqlSessionFactory.openSession();
        //执行操作 参数：namespace.id
        List<User> userList = sqlSession.selectList("userMapper.findAll");
        //测试：打印数据
        System.out.println(userList);
        //释放资源session
        sqlSession.close();
    }
}
```

2.测试结果：

```
[User{id=1, username='zhangsan', password='123'}, User{id=2, username='lisi', password='123'}, User{id=3, username='wangwu', password='123'}, User{id=4, username='admin', password='123'}]

Process finished with exit code 0
```

3.总结

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面测试代码还是可以优化的，后面集成了spring后使用就很简单了。

## 三.映射文件概述

![Mybatis映射文件概述](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis映射文件概述.png)

### 3.1.插入数据操作

- 在映射文件UserMapper.xml里面配置insert标签

```xml
<!--插入操作-->
<!--parameterType是参数类型;#{这里填该参数里的属性名}-->
<insert id="save" parameterType="com.itheima.domain.User">
    insert into user value (#{id},#{username},#{password})
</insert>
```

- 在MyBatisTest中编写测试方法

```java
@Test
public void test2() throws IOException {
    //模拟user对象
    User user = new User();
    user.setUsername("tom");
    user.setPassword("abc");
    //获得核心配置文件
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    //获得session工厂对象
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    //获得session会话对象
    SqlSession sqlSession = sqlSessionFactory.openSession();
    //执行操作
    sqlSession.insert("userMapper.save",user);
    //释放资源session
    sqlSession.close();
}
```

- 运行测试方法

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运行后控制台不报错，数据库刷新多次还是没有显示刚刚插入的数据。运行test1()也查不到该数据。原始的jdbc操作数据库时默认会进行事务提交的，但是Mybatis是默认不提交事务的。所以insert后，数据库查不到信息。

- mybatis执行更新操作，要提交事务

```java
@Test
public void test2() throws IOException {
    //模拟user对象
    User user = new User();
    user.setUsername("tom");
    user.setPassword("abc");
    //获得核心配置文件
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    //获得session工厂对象
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    //获得session会话对象
    SqlSession sqlSession = sqlSessionFactory.openSession();
    //执行操作
    sqlSession.insert("userMapper.save",user);

    //mybatis执行更新操作，要提交事务才保存
    sqlSession.commit();

    //释放资源session
    sqlSession.close();
}
```

- 注意事项

![Mybatis映射文件概述1](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis映射文件概述1.png)

### 3.2.修改和删除操作

**（1）修改操作**

- 在映射文件中编写更新的sql语句

```xml
<!--修改操作-->
<update id="update" parameterType="com.itheima.domain.User">
    update user set username = #{username},password = #{password} where id = #{id}
</update>
```

- 在MyBatisTest中编写测试方法

```java
@Test
//修改操作
public void test3() throws IOException {
    //模拟user对象
    User user = new User();
    user.setId(7);
    user.setUsername("lucy");
    user.setPassword("123");
    //获得核心配置文件
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    //获得session工厂对象
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    //获得session会话对象
    SqlSession sqlSession = sqlSessionFactory.openSession();
    //执行操作
    sqlSession.update("userMapper.update",user);

    //mybatis执行更新操作，要提交事务才保存
    sqlSession.commit();

    //释放资源session
    sqlSession.close();
}
```

- 测试无误和总结

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改语句使用update标签
  ​&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改操作使用的API是sqlSession.update(“命名空间.id”,实体对象);

**（2）删除操作**

- 在映射文件中编写删除的sql语句

```xml
<!--删除操作-->
<!--#{}里面写成id是为了可读性，因为参数是一个简单类型-->
<delete id="delete" parameterType="java.lang.Integer">
    delete from user where id = #{id}
</delete>
```

- 在MyBatisTest中编写测试方法

```java
@Test
//删除操作
public void test4() throws IOException {
    //获得核心配置文件
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    //获得session工厂对象
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    //获得session会话对象
    SqlSession sqlSession = sqlSessionFactory.openSession();
    //执行操作
    sqlSession.delete("userMapper.delete",7);

    //mybatis执行更新操作，要提交事务才保存
    sqlSession.commit();

    //释放资源session
    sqlSession.close();
}
```

- 测试无误和总结

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除语句使用delete标签
  ​&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sql语句中使用#{任意字符串}方式引用传递的单个参数
  ​&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;删除操作使用的API是sqlSession.delete(“命名空间.id”,Object);

### 3.3.知识小结

![Mybatis映射文件概述2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis映射文件概述2.png)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="userMapper">
    <!--namespace就是给当前文件取一个命名空间-->
    <!--要调用此文件里面的sql语句时：userMapper.findAll;Maybatis就会去执行，-->
    <!--执行得到结果集会帮我们封装到某一实体集当中,resultType就是指定该结果集的-->
    <select id="findAll" resultType="com.itheima.domain.User">
        select * from user
    </select>

    <!--插入操作-->
    <!--parameterType是参数类型;#{这里填该参数里的属性名}-->
    <insert id="save" parameterType="com.itheima.domain.User">
        insert into user value (#{id},#{username},#{password})
    </insert>
    
    <!--修改操作-->
    <update id="update" parameterType="com.itheima.domain.User">
        update user set username = #{username},password = #{password} where id = #{id}
    </update>

    <!--删除操作-->
    <!--#{}里面写成id是为了可读性，因为参数是一个简单类型-->
    <delete id="delete" parameterType="java.lang.Integer">
        delete from user where id = #{id}
    </delete>

</mapper>
```

## 四.核心配置文件概述

![Mybatis核心配置文件概述](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件概述.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本节只讲前面提到的部分，其他的后面会讲。

### 4.1.environments标签

![Mybatis核心配置文件概述1](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件概述1.png)

![Mybatis核心配置文件概述2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件概述2.png)

### 4.2.mapper标签

![Mybatis核心配置文件概述3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件概述3.png)

### 4.3.properties标签

![Mybatis核心配置文件概述4](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件概述4.png)

- jdbc.properties

```properties
jdbc.driver = com.mysql.jdbc.Driver
jdbc.url = jdbc://mysql://localhost:3306/test
jdbc.username = root
jdbc.password = 123456
```

- sqlMapConfig.xml

```xml
<!--通过properties标签加载外部properties文件-->
<properties resource="jdbc.properties"></properties>

<!--数据源环境-->
<environments default="development">
    <environment id="development">
        <transactionManager type="JDBC"></transactionManager>
        <dataSource type="POOLED">
            <property name="driver" value="${jdbc.driver}"/>
            <property name="url" value="${jdbc.url}"/>
            <property name="username" value="${jdbc.username}"/>
            <property name="password" value="${jdbc.password}"/>
        </dataSource>
    </environment>
</environments>
```

### 4.4.typeAliases标签

![Mybatis核心配置文件概述5](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件概述5.png)

![Mybatis核心配置文件概述6](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件概述6.png)

- 前面userMapper.xml里面的代码也可以改为

```xml
<delete id="delete" parameterType="int">
    delete from user where id = #{id}
</delete>
```

下面就来测试：

**1.userMapper.xml:**

```xml
<select id="findAll" resultType="user">
    select * from user
</select>
```

**2.sqlMapConfig.xml:**

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--通过properties标签加载外部properties文件-->
    <properties resource="jdbc.properties"></properties>

    <!--数据源环境-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <!--加载映射文件-->
    <mappers>
        <mapper resource="com.itheima.mapper/UserMapper.xml"></mapper>
    </mappers>

    <!--自定义别名-->
    <typeAliases>
        <typeAlias type="com.itheima.domain.User" alias="user"></typeAlias>
    </typeAliases>

</configuration>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;按这样的顺序写是会报错的，**dtd有相应的标签顺序规则**，如下：

![image-20210303135358362](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210303135358362.png)

**应改为：**

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--通过properties标签加载外部properties文件-->
    <properties resource="jdbc.properties"></properties>

    <!--自定义别名-->
    <typeAliases>
        <typeAlias type="com.itheima.domain.User" alias="user"></typeAlias>
    </typeAliases>

    <!--数据源环境-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <!--加载映射文件-->
    <mappers>
        <mapper resource="com.itheima.mapper/UserMapper.xml"></mapper>
    </mappers>

</configuration>
```

### 4.5.知识小结

![Mybatis核心配置文件概述7](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件概述7.png)

![Mybatis核心配置文件概述8](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件概述8.png)

## 五.Mybatis相应API

### 5.1.SqlSessionFactoryBuilder

![Mybatis相关API](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis相关API.png)

### 5.2.SqlSessionFactory

![Mybatis相关API1](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis相关API1.png)

### 5.3.SqlSession

![Mybatis相关API2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis相关API2.png)

- userMapper.xml

```xml
<!--根据id进行查询-->
<select id="findById" resultType="user" parameterType="int">
    select * from user where id = #{id}
</select>
```

- 在MyBatisTest中编写测试方法

```java
@Test
//查询一个对象
public void test5() throws IOException {
    //获得核心配置文件
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    //获得session工厂对象
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    //获得session会话对象
    SqlSession sqlSession = sqlSessionFactory.openSession();
    //执行操作
    User o = sqlSession.selectOne("userMapper.findById", 1);
    System.out.println(o);

    //释放资源session
    sqlSession.close();
}
```

- 测试结果

```
User{id=1, username='zhangsan', password='123'}
```

## 六.Mybatis的Dao层实现

### 6.1.传统方式

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就是把前面test方法里面调用的UserMapper.xml文件里的SQL语句的语句写到某一dao.impl里面某一方法内，然后给service层调用。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;也就是说，以前在javaweb阶段，我们编写dao层代码的时候都必须先创建某个dao接口，然后编写接口方法；接着编写该接口的实现类，最后在实现类中实现SQL操作。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是截至到我们现在学到的Mybatis后，我们使用的步骤仍然和上面的web阶段步骤一样，仍然需要编写dao层接着实现其impl类。所以能不能不用这么麻烦，比如**只编写dao层接口，而不用编写具体的impl类和其方法**呢？当然你至少需要编写UserMapper.xml文件吧~

![Mybatis的Dao层实现](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis的Dao层实现.png)

- 创建Dao层接口

```java
package com.itheima.dao;

import com.itheima.domain.User;

import java.util.List;

public interface UserMapper {
    public List<User> findAll();
}
```

- 编写UserMapper实现类UserMapperImpl及其方法

```java
package com.itheima.dao.impl;

import com.itheima.dao.UserMapper;
import com.itheima.domain.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class UserMapperImpl implements UserMapper {
    @Override
    public List<User> findAll() throws IOException {
        InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
        SqlSessionFactory sessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
        SqlSession sqlSession = sessionFactory.openSession();
        List<User> userList = sqlSession.selectList("userMapper.findAll");
        return userList;
    }
}
```

- 创建service.ServiceDemo充当service层测试调用dao层

```java
package com.itheima.service;

import com.itheima.dao.UserMapper;
import com.itheima.dao.impl.UserMapperImpl;
import com.itheima.domain.User;

import java.io.IOException;
import java.util.List;

public class ServiceDemo {
    public static void main(String[] args) throws IOException {
        //创建dao层对象 当前dao是手动创建的，只是为了测试方便
        UserMapper userMapper = new UserMapperImpl();
        List<User> userList = userMapper.findAll();
        System.out.println(userList);
    }
}
```

- 测试结果与分析

```
[User{id=1, username='zhangsan', password='123'}, User{id=2, username='lisi', password='123'}, User{id=3, username='wangwu', password='123'}]
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这种方法就是前面的测试方法只不过进行了一次封装，使用过程还是一样的繁琐。

### 6.2.代理开发方式

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们看前面的代码与流程，创建对象的代码（sqlSession对象等）都是固定的模板代码。后面会讲优化；创建dao接口UserMapper和该dao接口的实现类UserMapperImpl的流程是重复的过程，就可以使用本节的代理方式。只有sqlSession的某个方法的执行是不固定的。所以框架就帮我们实现了那些重复固定的步骤，所以我们要遵循一些规范，才能使用代理开发方式，即**我们写一个dao的接口（里面有声明的方法）不用写它的实现，Mybatis会帮我们实现**。

![Mybatis的Dao层实现2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis的Dao层实现2.png)

![Mybatis的Dao层实现3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis的Dao层实现3.png)

![Mybatis的Dao层实现4](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis的Dao层实现4.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;获得该dao接口的Mybatis框架提供的实现类的方法就是UserMapper userMapper = sqlSession.getMapper(UserMapper.class)

**代码演示1：**

- 把前面写的dao.impl.UserMapperImpl和impl包都删掉
- 把ServiceDemo的main清空
- 修改映射文件userMapper.xml的namespace为com.itheima.dao.UserMapper(接口全限定名)

```xml
<mapper namespace="com.itheima.dao.UserMapper"><mapper>
```

- UserMapper接口方法名和userMapper.xml中定义的每个statement的id相同
- UserMapper接口方法的输出参数类型和usermapper.xml中定义的每个sql的resultType的类型相同

```xml
<select id="findAll" resultType="user">
    select * from user
</select>
```

```java
public interface UserMapper {
    public List<User> findAll() throws IOException;
}
```

- 测试

  ​	注意dao层的UserMapper是没有实现类的。

在ServiceDemo里的main方法里面编写测试代码：

```java
public static void main(String[] args) throws IOException {
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();
    UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
    List<User> all = userMapper.findAll();
    System.out.println(all);
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运行结果和前面是一样的。

**代码演示2：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;刚刚演示的是没有参数的，现在演示有参数的，步骤还是一样的。就只给出映射文件的select标签和UserMapper接口代码了。

```xml
<!--根据id进行查询-->
<select id="findById" resultType="user" parameterType="int">
    select * from user where id = #{id}
</select>
```

```java
package com.itheima.dao;

import com.itheima.domain.User;

import java.io.IOException;
import java.util.List;

public interface UserMapper {
    public List<User> findAll() throws IOException;

    public User findById(int id);
}
```

**总结：**

![Mybatis的Dao层实现5](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis的Dao层实现5.png)

## 七.映射文件深入(动态sql)

![Mybatis映射文件深入](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis映射文件深入.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就是在映射文件的sql标签中加入逻辑语句。

### 7.1.环境搭建

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resources目录下复制上一个项目的文件和目录，还要导入日志配置文件，有不同会单独写出来；com.itheima.domain.User也是上一个项目的User；

- 创建接口com.itheima.mapper.UserMapper

```java
package com.itheima.mapper;

import com.itheima.domain.User;

import java.util.List;

public interface UserMapper {

    public List<User> findByCondition(User user);

}
```

- 编写映射文件userMapper.xml

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itheima.mapper.UserMapper">
    
    <select id="findByCondition" parameterType="user" resultType="user">
        select * from user where 
    </select>
    
</mapper>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的sql语句是没有写完的，因为不知道查询条件有几个。下面先建测试

- 创建测试com.itheima.test.MapperTest

```java
package com.itheima.test;

import com.itheima.domain.User;
import com.itheima.mapper.UserMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class MapperTest {
    @Test
    public void test1() throws IOException {
        InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
        SqlSession sqlSession = sqlSessionFactory.openSession();
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

        //模拟条件user
        User condition = new User();
        condition.setId(1);
        condition.setUsername("zhangsan");
        condition.setPassword("123");

        List<User> userList = userMapper.findByCondition(condition);
        System.out.println(userList);
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在的模拟参数condition的三个参数都有值，三个条件都得查，即都得写。所以补全前面的映射文件：

```xml
<select id="findByCondition" parameterType="user" resultType="user">
    select * from user where id = #{id} and username = #{username} and password = #{password}
</select>
```

- 修改日志配置文件

```properties
log4j.rootLogger=debug, stdout
```

- 测试

  ​	控制台输出如下，由于加入了日志并且日志为debug模式，所以可以看到执行的sql语句和参数值。

![image-20210306113750520](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210306113750520.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**这是模拟参数condition三个参数都齐全时，sql查询条件为三个的情况，但是在实际开发当中，这个数据可能是帅选表单提交的，即不是每个参数都是有数据的，只是某些属性有值，sql的查询语句只是有值的属性。**

### 7.2.动态sql-if标签

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实就像是字符串拼接。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;再来分析一下需求，就是多条件查询，如果某个属性为空就不查该属性。我们接着上面的代码继续做。

- 修改映射文件userMapper.xml

```xml
<select id="findByCondition" parameterType="user" resultType="user">
    select * from user where 1=1
    <if test="id!=0">
        and id = #{id}
    </if>
    <if test="username!=null">
        and username = #{username}
    </if>
    <if test="password!=null">
        and password = #{password}
    </if>
</select>
```

- 修改测试代码

  ​	把setPassword()注释掉了，即password属性是空的。

```java
@Test
public void test1() throws IOException {
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();
    UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

    //模拟条件user
    User condition = new User();
    condition.setId(1);
    condition.setUsername("zhangsan");
    //condition.setPassword("123");

    List<User> userList = userMapper.findByCondition(condition);
    System.out.println(userList);
}
```

- 测试结果

![image-20210306120654925](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210306120654925.png)

**修改映射文件的sql语句，让代码更优雅：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;where语句：where 1=1 这样看起来不太优雅，使用where标签替代。[优雅永不过时]

```xml
<select id="findByCondition" parameterType="user" resultType="user">
    select * from user
    <where>
        <if test="id!=0">
            and id = #{id}
        </if>
        <if test="username!=null">
            and username = #{username}
        </if>
        <if test="password!=null">
            and password = #{password}
        </if>
    </where>
</select>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还有就是假如三个条件都是空的话，就是查询全部数据。

### 7.3.动态sql-foreach标签

![Mybatis映射文件深入2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis映射文件深入2.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的sql其实也可以用or关键词实现而不是使用in；**foreach标签里面的collection属性的值：如果参数是数组就写array，是List集合就写list**；item表示集合中的每一项；separator表示分隔符。(补充java基础：数组array是定长，list是自动增长)

- 在UserMapper接口里面添加方法

```java
public List<User> findByIds(List<Integer> ids);
```

- 在userMapper.xml添加sql语句

```xml
<select id="findByIds" parameterType="list" resultType="user">
    select * from user
    <where>
        <foreach collection="list" open="id in(" close=")" item="id" separator=",">
            #{id}
        </foreach>
    </where>
</select>
```

- 编写测试方法

```java
@Test
public void test1() throws IOException {
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();
    UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

    //模拟ids数据
    List<Integer> ids = new ArrayList<Integer>();
    ids.add(1);
    List<User> userList = userMapper.findByIds(ids);

    System.out.println(userList);
}
```

- 测试结果

![image-20210306142246682](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210306142246682.png)

### 7.4.SQL片段抽取

![Mybatis映射文件深入3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis映射文件深入3.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;就是为了解耦，假如后期要修改查询的表不再是User，或者查询的不再是*。如果使用了片段抽取就不用逐一修改每一个sql语句了。

- 将上面的映射文件抽取后

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itheima.mapper.UserMapper">

    <!--sql语句收取-->
    <sql id="selectUser">select * from user</sql>

    <select id="findByCondition" parameterType="user" resultType="user">
        <include refid="selectUser"></include>
        <where>
            <if test="id!=0">
                and id = #{id}
            </if>
            <if test="username!=null">
                and username = #{username}
            </if>
            <if test="password!=null">
                and password = #{password}
            </if>
        </where>
    </select>

    <select id="findByIds" parameterType="list" resultType="user">
        <include refid="selectUser"></include>
        <where>
            <foreach collection="list" open="id in(" close=")" item="id" separator=",">
                #{id}
            </foreach>
        </where>
    </select>

</mapper>
```

### 7.5.知识小结

![Mybatis映射文件深入4](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis映射文件深入4.png)

## 八.核心配置文件深入

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;先来看看目前配置的核心配置文件sqlMapConfig.xml:

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--通过properties标签加载外部properties文件-->
    <properties resource="jdbc.properties"></properties>

    <!--自定义别名-->
    <typeAliases>
        <typeAlias type="com.itheima.domain.User" alias="user"></typeAlias>
    </typeAliases>

    <!--数据源环境-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <!--加载映射文件-->
    <mappers>
        <mapper resource="com.itheima.mapper/UserMapper.xml"></mapper>
    </mappers>

</configuration>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面来说一下没有提到的标签

### 8.1.typeHandlers标签（类型转化）

![Mybatis核心配置文件深入](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件深入.png)

- 搭建环境

  ​	项目几乎都是复制上一个项目的，特殊的会提出来。代码主要有domain.User和mapper.UserMapper。由于要测试日期Date和毫秒数的相互转化。所以在User里面增加Date属性和gettersetter方法。

  1.User：

  ```java
  package com.itheima.domain;
  
  import java.util.Date;
  
  public class User {
      private int id;
      private String username;
      private String password;
      private Date birthday;
  
      public Date getBirthday() {
          return birthday;
      }
  
      public void setBirthday(Date birthday) {
          this.birthday = birthday;
      }
  
      public int getId() {
          return id;
      }
  
      public void setId(int id) {
          this.id = id;
      }
  
      public String getUsername() {
          return username;
      }
  
      public void setUsername(String username) {
          this.username = username;
      }
  
      public String getPassword() {
          return password;
      }
  
      public void setPassword(String password) {
          this.password = password;
      }
  
      @Override
      public String toString() {
          return "User{" +
                  "id=" + id +
                  ", username='" + username + '\'' +
                  ", password='" + password + '\'' +
                  '}';
      }
  }
  ```

  2.在数据库user表中添加birthday

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虽然数据库也有date属性，但是我们的需求是记录毫秒，然后相互转化。

  ![image-20210306212213317](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210306212213317.png)

  ![image-20210306212326689](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210306212326689.png)

  3.在接口UserMapper中添加方法

  ```java
  package com.itheima.mapper;
  
  import com.itheima.domain.User;
  
  public interface UserMapper {
  
      public void save(User user);
  
  }
  ```

  4.编写映射文件userMapper.xml

  ```xml-dtd
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE mapper
          PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
          "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
  <mapper namespace="com.itheima.mapper.UserMapper">
      
      <insert id="save" parameterType="user">
          insert into user values(#{id},#{username},#{password},#{birthday})
      </insert>
  
  </mapper>
  ```

  5.编写测试方法

  ```java
  package test;
  
  import com.itheima.domain.User;
  import com.itheima.mapper.UserMapper;
  import org.apache.ibatis.io.Resources;
  import org.apache.ibatis.session.SqlSession;
  import org.apache.ibatis.session.SqlSessionFactory;
  import org.apache.ibatis.session.SqlSessionFactoryBuilder;
  import org.junit.Test;
  
  import java.io.IOException;
  import java.io.InputStream;
  import java.util.Date;
  
  public class MapperTest {
      @Test
      public void test1() throws IOException {
          InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
          SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
          SqlSession sqlSession = sqlSessionFactory.openSession();
          UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
          //创建user
          User user = new User();
          user.setUsername("ceshi");
          user.setPassword("abc");
          user.setBirthday(new Date());//设置为当前时间
          //执行保存操作
          userMapper.save(user);
          sqlSession.commit();
          sqlSession.close();
      }
  }
  ```

- 执行上面的测试方法会报错

  ​	因为没法自动将Date类型的数据转换为数据库的bigint(即java的Long)。

  ```java
  Cause: java.sql.SQLException: Column count doesn't match value count at row 1
  ```

  所以就需要***我们自定义转换器，然后配置给Mybatis，让它帮我们将时间Date转成毫秒值Long再插入到数据库当中。***

**开发步骤：**

![Mybatis核心配置文件深入1](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件深入1.png)

- 创建自定义类型处理器handel.DateTypeHandler继承BaseTypeHandler并覆盖4个方法

```java
package com.itheima.handler;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

public class DateTypeHandler extends BaseTypeHandler<Date> {
    /**
     * 将java类型 转换成 数据库需要的类型
     * @param preparedStatement 可以设置sql语句参数
     * @param i 参数位置
     * @param date 需要转换的java类型参数
     * @param jdbcType 数据库类型
     * @throws SQLException
     */
    @Override
    public void setNonNullParameter(PreparedStatement preparedStatement, int i, Date date, JdbcType jdbcType) throws SQLException {
        long time = date.getTime();//Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this Date object
        preparedStatement.setLong(i,time);
    }
    //后面三个方法作用都是:将数据库中类型 转换成java类型
    //就是Mybatis在不同的情况下会调用不同的函数，全覆盖重新就行了
    /**
     * 获取的结果集转化成java的数据类型
     * @param resultSet 查询出的结果集
     * @param s 数据库表中要转换的字段的名称
     * @return  转换后的数据（在此处是Date）
     * @throws SQLException
     */
    @Override
    public Date getNullableResult(ResultSet resultSet, String s) throws SQLException {
        //获取结果集中需要的数据（Long）将其转换成Date类型返回
        long aLong = resultSet.getLong(s);//毫秒值
        Date date =new Date(aLong);
        return date;
    }

    @Override
    public Date getNullableResult(ResultSet resultSet, int i) throws SQLException {
        long aLong = resultSet.getLong(i);//这里是通过位置获取，上面是通过字段获取
        Date date =new Date(aLong);
        return date;
    }

    @Override
    public Date getNullableResult(CallableStatement callableStatement, int i) throws SQLException {
        long aLong = callableStatement.getLong(i);
        Date date = new Date(aLong);
        return date;
    }
}
```

- 在Mybatis核心配置文件中注册

  ​	注意标签是有先后顺序的。

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--通过properties标签加载外部properties文件-->
    <properties resource="jdbc.properties"></properties>

    <!--自定义别名-->
    <typeAliases>
        <typeAlias type="com.itheima.domain.User" alias="user"></typeAlias>
    </typeAliases>

    <!--注册自定义类型处理器-->
    <typeHandlers>
        <typeHandler handler="com.itheima.handler.DateTypeHandler"></typeHandler>
    </typeHandlers>

    <!--数据源环境-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <!--加载映射文件-->
    <mappers>
        <mapper resource="com.itheima.mapper/UserMapper.xml"></mapper>
    </mappers>

</configuration>
```

- 再次运行前面的测试方法

```java
package test;

import com.itheima.domain.User;
import com.itheima.mapper.UserMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.Date;

public class MapperTest {
    @Test
    public void test1() throws IOException {
        InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
        SqlSession sqlSession = sqlSessionFactory.openSession();
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
        //创建user
        User user = new User();
        user.setUsername("ceshi");
        user.setPassword("abc");
        user.setBirthday(new Date());//设置为当前时间
        //执行保存操作
        userMapper.save(user);
        sqlSession.commit();
        sqlSession.close();
    }
}
```

执行后数据表：

![image-20210306223248510](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210306223248510.png)

**还有一步：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至此我们可以将java的Date类型的数据插入到数据库表的bigint(Long)当中了，但是反向，即从数据库查bigint(Long)的类型到java的Date类型我们还没测试。现在进行测试：

- 在userMapper.xml中增加查询

```xml
<select id="findById" parameterType="int" resultType="user">
    select * from user where id = #{id}
</select>
```

- 在UserMapper中添加findById方法

```java
public User findById(int id);
```

- 创建测试方法test2()查询数据库

```java
@Test
public void test2() throws IOException {
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();
    UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
    //
    User user = userMapper.findById(4);
    System.out.println("user中的birthday:" + user.getBirthday() );

    sqlSession.commit();
    sqlSession.close();
}
```

- 运行结果

```
user中的birthday:Sat Mar 06 22:31:58 CST 2021
```

### 8.3.plugins标签

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;看名字就知道是插件，可以用来扩展功能。

![Mybatis核心配置文件深入2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件深入2.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在正式使用分页助手插件实现分页前，我们先做一个查询全部的功能。

- 在接口UserMapper中增加方法findAll

```java
public List<User> findAll();
```

- 在映射文件userMapper.xml中增加查询

```xml
<select id="findAll" resultType="user">
    select * from user
</select>
```

- 增加测试方法test3()

```java
@Test
public void test3() throws IOException {
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();
    UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

    List<User> userList = userMapper.findAll();
    //使用for循环打印输出看此处查询全部的顺序
    for (User user : userList) {
        System.out.println(user);
    }

    sqlSession.commit();
    sqlSession.close();
}
```

- **查询全部的输出结果**

```
User{id=1, username='zhangsan', password='123'}
User{id=2, username='lisi', password='123'}
User{id=3, username='wangwu', password='123'}
User{id=4, username='ceshi', password='abc'}
```

**plugins标签的简单使用：**

- 导两个坐标

```xml
<dependency>
  <groupId>com.github.pagehelper</groupId>
  <artifactId>pagehelper</artifactId>
  <version>3.7.5</version>
</dependency>
<dependency>
  <groupId>com.github.jsqlparser</groupId>
  <artifactId>jsqlparser</artifactId>
  <version>0.9.1</version>
</dependency>
```

- 在核心配置文件sqlConfig.xml中配置plugins标签

```xml
<!--配置分页助手插件-->
<plugins>
    <!--核心功能类-->
    <plugin interceptor="com.github.pagehelper.PageHelper">
        <!--指定dialect(方言)参数，因为每种数据库使用的sql语句可能是不同的,比如：mysql使用的关键词是limit,oracle是rownumb-->
        <property name="dialect" value="mysql"/>
    </plugin>
</plugins>
```

- 修改上一个查询全部的测试方法test4()

  ​	即在查询全部前加一个分页，看看输出的结果

```java
@Test
public void test3() throws IOException {
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();
    UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

    //设置分页相关参数 当前页 + 每页显示的条数
    PageHelper.startPage(1,3);

    List<User> userList = userMapper.findAll();
    for (User user : userList) {
        System.out.println(user);
    }

    sqlSession.commit();
    sqlSession.close();
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试方法里设置了当前页和每页显示的条数，在查询前看看数据库的user表的内容：

![image-20210306223248510](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210306223248510.png)

- 测试结果

![image-20210307004234857](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210307004234857.png)

**获得与分页相关的参数**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如获得上/下一页的数据等等。

- 编写获取分页相关参数的测试代码

```java
@Test
public void test3() throws IOException {
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();
    UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

    //设置分页相关参数 当前页 + 每页显示的条数
    PageHelper.startPage(2,3);

    List<User> userList = userMapper.findAll();
    for (User user : userList) {
        System.out.println(user);
    }

    //获得与分页相关参数
    PageInfo<User> pageInfo = new PageInfo<User>(userList);
    System.out.println("当前页：" + pageInfo.getPageNum());
    System.out.println("每页显示的条数：" + pageInfo.getPageSize());
    System.out.println("总条数：" + pageInfo.getTotal());
    System.out.println("总页数：" + pageInfo.getPages());
    System.out.println("上一页：" + pageInfo.getPrePage());
    System.out.println("下一页：" + pageInfo.getNextPage());
    System.out.println("是否是第一页：" + pageInfo.isIsFirstPage());
    System.out.println("是否是最后一页：" + pageInfo.isIsLastPage());

    sqlSession.commit();
    sqlSession.close();
}
```

- 运行结果

![image-20210307005840592](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210307005840592.png)

### 8.4.知识小结

![Mybatis核心配置文件深入3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis核心配置文件深入3.png)

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--通过properties标签加载外部properties文件-->
    <properties resource="jdbc.properties"></properties>

    <!--自定义别名-->
    <typeAliases>
        <typeAlias type="com.itheima.domain.User" alias="user"></typeAlias>
    </typeAliases>

    <!--注册自定义类型处理器-->
    <typeHandlers>
        <typeHandler handler="com.itheima.handler.DateTypeHandler"></typeHandler>
    </typeHandlers>

    <!--配置分页助手插件-->
    <plugins>
        <!--核心功能类-->
        <plugin interceptor="com.github.pagehelper.PageHelper">
            <!--指定dialect(方言)参数，因为每种数据库使用的sql语句可能是不同的,比如：mysql使用的关键词是limit,oracle是rownumb-->
            <property name="dialect" value="mysql"/>
        </plugin>
    </plugins>

    <!--数据源环境-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <!--加载映射文件-->
    <mappers>
        <mapper resource="com.itheima.mapper/UserMapper.xml"></mapper>
    </mappers>

</configuration>
```

## 九.多表操作

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;***数据库两张的表的关系有：一对一、一对多、多对多的关系。每一种都有对应的建表原则***。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一对一：1.使用同一个主键。2.外键约束。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一对多：在多的一方有一个外键与一的一方的主键相关系。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多对多：一张中间表来维护两张主表的主键。



**环境搭建：**

1.引入相关坐标

2.复制上一个项目的User和UserMapper并创建相关的包，User的toString加上了birthday；UserMapper里面是空的

3.resources下的全部复制上一个项目的文件；核心配置文件里面只是一些基本的配置（相当于前一个项目的）

- 在数据库中创建订单表orders

  ​	资料里有sql语句，执行前必须把数据库的其他表删除掉，执行后：（因为order是数据库关键字，所以加个s）

![image-20210307114558063](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210307114558063.png)

- 创建order实体

```java
package com.itheima.domain;

import java.util.Date;

public class Order {

    private int id;
    private Date ordertime;
    private double total;//金额

    //使用面向对象的思想：当前订单属于哪个用户
    private User user;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(Date ordertime) {
        this.ordertime = ordertime;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", ordertime=" + ordertime +
                ", total=" + total +
                ", user=" + user +
                '}';
    }
}
```

- 创建接口OrderMapper

```java
package com.itheima.mapper;

public interface OrderMapper {
}
```

- 在resources/com.itheima.mapper下创建映射文件OrderMapper.xml

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itheima.mapper.OrderMapper">
    

</mapper>
```

- 在核心配置文件sqlConfig.xml中引入OrderMapper.xml

```xml
<mappers>
    <mapper resource="com.itheima.mapper/UserMapper.xml"></mapper>
    <mapper resource="com.itheima.mapper/OrderMapper.xml"></mapper>
</mappers>
```

### 9.1.一对一查询

![Mybatis多表查询](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis多表查询.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实从表的关系看，多个订单可以对应一个用户，就是一对多的关系。但是单从“一个订单对应一个用户”的角度可以看成是一对一的关系。不用纠结那么多，我们就从这个角度去查询就可以了。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需求：查询orders表和user表，获得订单和该订单对应的user信息。

![image-20210307134112295](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210307134112295.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面的查询不是很直观，改为下面的方式：

![image-20210307134611209](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210307134611209.png)

- 将上面的sql查询语句写进映射文件OrderMapper.xml

```xml
<select id="findAll" resultType="order">
    SELECT *,o.id oid FROM orders o,`user` u WHERE o.uid=u.id
</select>
```

- 跳过其他步骤（重复机械的步骤）

- 编写测试方法

```java
package test;

import com.itheima.domain.Order;
import com.itheima.domain.User;
import com.itheima.mapper.OrderMapper;
import com.itheima.mapper.UserMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class MapperTest {
    @Test
    public void test3() throws IOException {
        InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
        SqlSession sqlSession = sqlSessionFactory.openSession();

        OrderMapper orderMapper = sqlSession.getMapper(OrderMapper.class);
        List<Order> orderList = orderMapper.findAll();
        for (Order order : orderList) {
            System.out.println(order);
        }

        sqlSession.commit();
        sqlSession.close();
    }
}
```

- 运行结果

![image-20210307140012950](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210307140012950.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实不用运行都知道Order类里面的User属性是不会封装进去的，Mybatis只会根据名字帮你封装进Order，故user=null。如果你想要的Mybatis帮你连同Order里面的User属性也给你也一起封装进去的话就要配置。**照应开头：**一个Order里面的User属性就对应一个user表的一条属性，所以叫一对一模型！！！

**Mybatis配置实现封装实体类里面的另一个实体属性：**

方法一:

- 编写映射文件OrderMapper.xml

```xml
<resultMap id="orderMap" type="order">
    <!--手动指定字段与实体属性的映射关系
        column:数据表的字段名称(就是该语句在数据库查询的结果集中的字段)
        property:实体（在这里指order）的属性名称
    -->
    <id column="oid" property="id"/>
    <!--主键用id标签，其他字段用result标签-->
    <result column="ordertime" property="ordertime"/>
    <result column="total" property="total"/>
    <!--剩下的属性都是封装到user里的-->
    <result column="uid" property="user.id"/>
    <result column="username" property="user.username"/>
    <result column="password" property="user.password"/>
    <result column="birthday" property="user.birthday"/>
</resultMap>

<select id="findAll" resultMap="orderMap">
    SELECT *,o.id oid FROM orders o,`user` u WHERE o.uid=u.id
</select>
```

- 运行测试方法test3()

![image-20210307142519696](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210307142519696.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以看到Order实体里面的User实体属性也封装进去了！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**其实就是在多表查询时，结果集的某些字段无法自动对上号，所以就需要我们使用resultMap标签手动绑定结果集字段和属性。**

方法二：

- 修改映射文件OrderMapper.xml

```xml
<resultMap id="orderMap" type="order">
    <!--手动指定字段与实体属性的映射关系
        column:数据表的字段名称(就是该语句在数据库查询的结果集中的字段)
        property:实体（在这里指order）的属性名称
    -->
    <id column="oid" property="id"/>
    <!--主键用id标签，其他字段用result标签-->
    <result column="ordertime" property="ordertime"/>
    <result column="total" property="total"/>
    <!--剩下的属性都是封装到user里的-->
    <!--<result column="uid" property="user.id"/>
    <result column="username" property="user.username"/>
    <result column="password" property="user.password"/>
    <result column="birthday" property="user.birthday"/>-->

    <!--
        property:当前实体(Order)中的属性名称(private User user)
        javaType:当前实体(Order)中的属性的类型(User)
    -->
    <association property="user" javaType="user">
        <!--内部和上面一样，进行字段绑定-->
        <id column="uid" property="id"/>
        <id column="username" property="username"/>
        <id column="password" property="password"/>
        <id column="birthday" property="birthday"/>
    </association>
</resultMap>

<select id="findAll" resultMap="orderMap">
    SELECT *,o.id oid FROM orders o,`user` u WHERE o.uid=u.id
</select>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;和方法一本质上没有区别，只是一个分开写，一个合着写。结果还是一样的就不展示了。

### 9.2.一对多查询

![Mybatis多表查询2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis多表查询2.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上一小节是order->user是一对一，现在反向查就是一对多的关系。也就是多表查询时User实体里面有一个记录多个Order实体的属性List< Order >。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需求：查询每一个用户下的所有订单。

**前期准备：**

- 在UserMapper接口里面添加方法

```java
package com.itheima.mapper;

import com.itheima.domain.User;

import java.util.List;

public interface UserMapper {

    public List<User> findAll();

}
```

- 编写映射文件UserMapper.xml

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itheima.mapper.UserMapper">

    <select id="findAll" resultType="user">
        select * from user
    </select>

</mapper>
```

- 测试方法

```java
@Test
public void test4() throws IOException {
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();

    UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
    List<User> userList = userMapper.findAll();
    for (User user: userList) {
        System.out.println(user);
    }

    sqlSession.close();
}
```

- 测试结果

```
User{id=1, username='lucy', password='123', birthday=Wed Dec 12 00:00:00 CST 2018}
User{id=2, username='haohao', password='123', birthday=Thu Dec 12 00:00:00 CST 2019}
```

**实现：**

- 在User里面添加属性、增加Getter和Setter方法和修改toString

  ​	因为一个User可能对应多个Order，所以增加的是List< Order >；修改toString是为了输出新的属性。

```java
package com.itheima.domain;

import java.util.Date;
import java.util.List;

public class User {
    private int id;
    private String username;
    private String password;
    private Date birthday;

    //描述的是当前用户存在哪些订单
    private List<Order> orderList;

    public List<Order> getOrderList() {
        return orderList;
    }

    public void setOrderList(List<Order> orderList) {
        this.orderList = orderList;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", birthday=" + birthday +
                ", orderList=" + orderList +
                '}';
    }
}
```

- 确定多表查询语句和返回的结果集

![image-20210307212807843](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210307212807843.png)

- 修改映射文件UseeMapper.xml并进行映射配置（字段绑定）

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itheima.mapper.UserMapper">
    
    <resultMap id="userMap" type="user">
        <id column="uid" property="id"/>
        <result column="username" property="username"/>
        <result column="password" property="password"/>
        <result column="birthday" property="birthday"/>
        <!--配置集合信息
              property:集合名称
              ofType:当前集合中的数据类型
        -->
        <collection property="orderList" ofType="order">
            <!--封装order的数据-->
            <id column="oid" property="id"/>
            <result column="ordertime" property="ordertime"/>
            <result column="total" property="total"/>
            <!--因为我们查的是单向的，order里面的user属性就不封了-->
        </collection>
    </resultMap>

    <select id="findAll" resultMap="userMap">
        SELECT *,o.id oid FROM `user` u,orders o WHERE u.id=o.uid
    </select>

</mapper>
```

- 运行test4()后

```
User{id=1, username='lucy', password='123', birthday=Wed Dec 12 00:00:00 CST 2018, orderList=[Order{id=1, ordertime=Wed Dec 12 00:00:00 CST 2018, total=3000.0, user=null}, Order{id=2, ordertime=Wed Dec 12 00:00:00 CST 2018, total=4000.0, user=null}]}
User{id=2, username='haohao', password='123', birthday=Thu Dec 12 00:00:00 CST 2019, orderList=[Order{id=3, ordertime=Wed Dec 12 00:00:00 CST 2018, total=5000.0, user=null}]}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以看到User里面的List封装进去了数据了。

### 9.3.多对多查询

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需求：查询每一个用户和该用户所具有的所有角色。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前面不管是一对一模型还是一对多模型，都是两张表，多对多模型有三张表，多了一个中间表。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是！其实这三种模型不是关键，关键只是封装的属性类型是普通的Bean还是集合！

![Mybatis多表查询3](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis多表查询3.png)

- 根据数据库表sys_role创建实体Role

![image-20210307220810358](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210307220810358.png)

```java
package com.itheima.domain;

public class Role {

    private int id;
    private String roleName;
    private String roleDesc;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleDesc() {
        return roleDesc;
    }

    public void setRoleDesc(String roleDesc) {
        this.roleDesc = roleDesc;
    }

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", roleName='" + roleName + '\'' +
                ", roleDesc='" + roleDesc + '\'' +
                '}';
    }
}
```

- **在User中增加List< Role >** 以及其Getter和Setter方法并且修改toString

```java
//描述当前用户具备哪些属性
private List<Role> roleList;

public List<Role> getRoleList() {
    return roleList;
}

public void setRoleList(List<Role> roleList) {
    this.roleList = roleList;
}
```

```java
@Override
public String toString() {
    return "User{" +
            "id=" + id +
            ", username='" + username + '\'' +
            ", password='" + password + '\'' +
            ", birthday=" + birthday +
            ", roleList=" + roleList +
            '}';
}
```

- 在UserMApper接口中增加方法

```java
public List<User> findUserAndRoleAll();
```

- 在数据库确定多表查询语句和返回的结果集

![image-20210307223114442](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210307223114442.png)

- 在映射文件UserMapper.xml中配置并在sqlConfig.xml添加Role的别名

```xml-dtd
<resultMap id="userRoleMap" type="user">
    <!--1.user的信息-->
    <id column="userid" property="id"/>
    <result column="username" property="username"/>
    <result column="password" property="password"/>
    <result column="birthday" property="birthday"/>
    <!--2.user内部的roleList信息-->
    <collection property="roleList" ofType="role">
        <id column="roleid" property="id"/>
        <result column="rolename" property="roleName"/>
        <result column="roleDesc" property="roleDesc"/>
    </collection>
</resultMap>

<select id="findUserAndRoleAll" resultMap="userRoleMap">
    SELECT * FROM `user` u,sys_user_role ur,sys_role r WHERE u.id=ur.userid AND ur.roleid=r.id
</select>
```

- 编写测试方法test5()

```java
@Test
public void test5() throws IOException {
    InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
    SqlSession sqlSession = sqlSessionFactory.openSession();

    UserMapper mapper = sqlSession.getMapper(UserMapper.class);
    List<User> userAndRoleAll = mapper.findUserAndRoleAll();
    for (User user : userAndRoleAll) {
        System.out.println(user);
    }

    sqlSession.close();
}
```

- 测试结果

```
User{id=1, username='lucy', password='123', birthday=Wed Dec 12 00:00:00 CST 2018, roleList=[Role{id=1, roleName='CTO', roleDesc='CTO'}, Role{id=2, roleName='COO', roleDesc='COO'}]}
User{id=2, username='haohao', password='123', birthday=Thu Dec 12 00:00:00 CST 2019, roleList=[Role{id=1, roleName='CTO', roleDesc='CTO'}, Role{id=2, roleName='COO', roleDesc='COO'}]}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;跟前面的数据库的查询结果对比可知输出的结果就是我们想要的，并且User里面的List< Role >封装进去了。还有就是不要不区分resultMap标签里的id标签和result标签，看看最后输出的数据就知道了（相当于给我们聚合了，且能提高效率）。

### 9.4.知识小结

![Mybatis多表查询4](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis多表查询4.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实不用在意这什么三种模型，三种模型本质上就是两点不同：1.建表原则不同；2.查询的sql语句不同。而我们要关注的只是：封装的数据是普通java类型，是普通的Bean，还是集合类型，并使用resultMap标签进行数据表字段和JavaBean属性的绑定。

## 十.Mybatis的注解开发

![Mybatis的常用注解](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis的常用注解.png)

### 10.1.单表操作

- **环境搭建：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在这只展示关键的代码和文件，其他默认配置和搭建完成。测试类的后面提到再说。

1.核心配置文件sqlMapConfig.xml:

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--通过properties标签加载外部properties文件-->
    <properties resource="jdbc.properties"></properties>

    <!--自定义别名-->
    <typeAliases>
        <typeAlias type="com.com.itheima.domain.User" alias="user"></typeAlias>
    </typeAliases>

    <!--数据源环境-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <!--加载映射文件-->
    <mappers>
        <mapper resource="com.itheima.mapper/UserMapper.xml"></mapper>
    </mappers>

</configuration>
```

2.映射文件UserMapper.xml

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itheima.mapper.UserMapper">

    <insert id="save" parameterType="user">
        insert into user value (#{id},#{username},#{password},#{birthday})
    </insert>

    <update id="update" parameterType="user">
        update user set username = #{username},password =#{password} where id=#{id}
    </update>

    <delete id="delete" parameterType="int">
        delete from user where id = #{id}
    </delete>

    <select id="findById" parameterType="int" resultType="user">
        select * from user where id = #{id}
    </select>

    <select id="findAll" resultType="user">
        select * from user
    </select>

</mapper>
```

3.dao层接口-mapper.UserMapper

```java
package com.itheima.mapper;

import com.itheima.domain.User;

import java.util.List;

public interface UserMapper {

    public void save(User user);

    public void update(User user);

    public void delete(int id);

    public User findById(int id);

    public List<User> findAll();

}
```

**3.编写测试类MyBatisTest，并抽取重复代码**

|    junit4    |   junit5    |                           特点                           |
| :----------: | :---------: | :------------------------------------------------------: |
| @BeforeClass | @BeforeAll  |  在当前类的所有测试方法之前执行。注解在【静态方法】上。  |
| @AfterClass  |  @AfterAll  | 在当前类中的所有测试方法之后执行。注解在【静态方法】上。 |
|   @Before    | @BeforeEach |     在每个测试方法之前执行。注解在【非静态方法】上。     |
|    @After    | @AfterEach  |     在每个测试方法之后执行。注解在【非静态方法】上。     |

```java
package com.itheima.test;

import com.itheima.domain.User;
import com.itheima.mapper.UserMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;

public class MyBatisTest {

    private UserMapper mapper;

    @Before
    public void before() throws IOException {
        InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
        SqlSession sqlSession = sqlSessionFactory.openSession(true);
        mapper = sqlSession.getMapper(UserMapper.class);
    }

    @Test
    public void testSave(){
        User user = new User();
        user.setUsername("tom");
        user.setPassword("abc");
        mapper.save(user);
    }

}
```

**4.测试结果：**

![image-20210320215521672](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210320215521672.png)

![image-20210320215549418](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210320215549418.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其他方法类似，就不在这展示了，在后面将某个注解时候再说。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些测试方法，都是通过xml文件配置的，下面就使用注解的方式去完成。

- **注解开发：**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在上面的基础上对项目作出如下修改：

​			1.删除映射文件UserMapper.xml

​			2.修改核心配置文件sqlConfig.xml

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因为删除了UserMapper.xml,就要把“加载映射文件”的配置代码去掉。

```xml
<!--加载映射文件-->
<mappers>
    <mapper resource="com.itheima.mapper/UserMapper.xml"></mapper>
</mappers>
```

去掉后使用注解（替代映射文件）开发时，怎么加载映射关系，代替映射文件呢？

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以此处就要配置“**加载映射关系**”：

```xml
<!--加载映射关系-->
<mappers>
    <!--指定接口所在的包 注意不是类！！！-->
    <package name="com.itheima.mapper"/>
</mappers>
```

3.在mapper.UserMapper接口的方法增加相关注解：

#### @Insert

​	在接口UserMapper的方法上增加@Insert注解，并在里面编写前面写在映射文件里对应标签的sql语句。

```java
@Insert("insert into user value (#{id},#{username},#{password},#{birthday})")
public void save(User user);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;测试方法不用改，直接就可以运行。下面三个标签的代码的测方法都不用改。以前用配置文件的时候使用的测试方法怎么样，使用注解后测试方法不用改就能运行。测试方法：

```java
@Test
public void testSave(){
    User user = new User();
    user.setUsername("tom");
    user.setPassword("abc");
    mapper.save(user);
}
```

#### @Update

```java
@Update("update user set username = #{username},password =#{password} where id=#{id}")
public void update(User user);
```

测试方法：

```java
@Test
public void testUpdate(){
    User user = new User();
    user.setId(4);
    user.setUsername("zhangsan");
    user.setPassword("123");
    mapper.update(user);
}
```

#### @Delete

```java
@Delete("delete from user where id = #{id}")
public void delete(int id);
```

测试方法：

```java
@Test
public void testDelete(){
    mapper.delete(4);
}
```

#### @Select

```java
@Select("select * from user where id = #{id}")
public User findById(int id);

@Select("select * from user")
public List<User> findAll();
```

测试方法：

```java
@Test
public void testFindById(){
    User user = mapper.findById(2);
    System.out.println(user);
}

@Test
public void testFindAll(){
    List<User> all = mapper.findAll();
    for (User user : all) {
        System.out.println(user);
    }
}
```

### 10.2.多表复杂查询

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前面演示的都是单表简单操作，也就是数据库可以直接到封装到某个JavaBean操作。现在就来演示前面"九.多表操作"的三种情况的JavaBean封装。

![Mybatis注解实现复杂开发](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis注解实现复杂开发.png)

![Mybatis注解实现复杂开发2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/Mybatis注解实现复杂开发2.png)

- 创建domain.Order

```java
package com.itheima.domain;

import java.util.Date;

public class Order {

    private int id;
    private Date ordertime;
    private double total;//金额

    //使用面向对象的思想：当前订单属于哪个用户
    private User user;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getOrdertime() {
        return ordertime;
    }

    public void setOrdertime(Date ordertime) {
        this.ordertime = ordertime;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", ordertime=" + ordertime +
                ", total=" + total +
                ", user=" + user +
                '}';
    }
}
```

#### 一对一查询(@One)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一对一模型和相关概念请看“9.1.一对一查询”。***其实@One和@Many可以理解为将一个多表查询分解为两次查询，@one表示”第二次“查询结果为一个，@Many表示“第二次”查询结果为多个***

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需求：查询orders表和user表，获得订单和该订单对应的user信息。

- 创建接口mapper.OrderMapper

```java
public interface OrderMapper {

    @Select("select *,o.id oid from orders o,user u where o.uid = u.id")
    public List<Order> findAll();

}
```

- 把上面的SQL放到数据库执行-确定执行的SQL语句和查看结果集字段

![image-20210321222435651](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210321222435651.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从查询结果可以知道我们无法直接封装到Order中，因为Order中还有一个User。这就需要我们进行**人为封装**！

- ***使用@Results和@Result（用“id = true”标记主键）***

```java
public interface OrderMapper {

    @Select("select *,o.id oid from orders o,user u where o.uid = u.id")
    @Results({
            @Result(id = true,column = "oid",property = "id"),
            @Result(column = "ordertime",property = "ordertime"),
            @Result(column = "total",property = "total"),
            @Result(column = "uid",property = "user.id"),
            @Result(column = "username",property = "user.username"),
            @Result(column = "password",property = "user.password")
    }
    )
    public List<Order> findAll();

}
```

- 测试

```java
@Test
public void test1(){
    List<Order> all = mapper.findAll();
    for (Order order : all) {
        System.out.println(order);
    }
}
```

![image-20210321222526959](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210321222526959.png)

**其他写法:**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前面用映射文件一对一查询配置中有association标签：

```xml-dtd
<resultMap id="orderMap" type="order">
    <!--手动指定字段与实体属性的映射关系
        column:数据表的字段名称(就是该语句在数据库查询的结果集中的字段)
        property:实体（在这里指order）的属性名称
    -->
    <id column="oid" property="id"/>
    <!--主键用id标签，其他字段用result标签-->
    <result column="ordertime" property="ordertime"/>
    <result column="total" property="total"/>
    <!--剩下的属性都是封装到user里的-->
    <!--<result column="uid" property="user.id"/>
    <result column="username" property="user.username"/>
    <result column="password" property="user.password"/>
    <result column="birthday" property="user.birthday"/>-->

    <!--
        property:当前实体(Order)中的属性名称(private User user)
        javaType:当前实体(Order)中的属性的类型(User)
    -->
    <association property="user" javaType="user">
        <!--内部和上面一样，进行字段绑定-->
        <id column="uid" property="id"/>
        <id column="username" property="username"/>
        <id column="password" property="password"/>
        <id column="birthday" property="birthday"/>
    </association>
</resultMap>

<select id="findAll" resultMap="orderMap">
    SELECT *,o.id oid FROM orders o,`user` u WHERE o.uid=u.id
</select>
```

注解有对应的**@One**

```java
@Select("select * from orders")
@Results({
        @Result(column = "id",property = "id"),
        @Result(column = "ordertime",property = "ordertime"),
        @Result(column = "total",property = "total"),
        @Result(
                property = "user",//要封装的属性名称
                column = "uid",//根据哪个字段去查询user表的数据
                javaType = User.class,//要封装的实体类型
                //select属性 代表查询那个接口的方法获得数据
                one = @One(select = "com.itheima.mapper.UserMapper.findById")
        )
}
)
public List<Order> findAll();
```

提到的接口方法为：

```java
@Select("select * from user where id = #{id}")
public User findById(int id);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里的思路就是，先查一个表Orders表，然后根据查询的结果集的uid属性去查user表。用了这个标签后SQL语句编写就简单多了。

#### 一对多查询(@Many)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一对多模型和相关概念请看“9.2.一对多查询”。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需求：查询每一个用户和该用户的所有订单。

- 在User实体中增加属性和其Getter、Setter和toString方法

```java
//描述的是当前用户具有的订单
private List<Order> orderList;//所谓的一对多也体现在这里

public List<Order> getOrderList() {
    return orderList;
}

public void setOrderList(List<Order> orderList) {
    this.orderList = orderList;
}
@Override
public String toString() {
    return "User{" +
            "id=" + id +
            ", username='" + username + '\'' +
            ", password='" + password + '\'' +
            ", birthday=" + birthday +
            ", orderList=" + orderList +
            '}';
}
```

- 在UserMapper接口里面添加方法和注释

```java
@Select("select * from user")
public List<User> findUserAndOrderAll();
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面只是查询出了每一个用户，但是每一个用户对应的订单我们还要查出来（根据uid在orders表查询该用户对应的所有订单）。

- 在OrderMapper接口里面创建方法和注释

```java
@Select("select * from orders where uid = #{uid}")
public List<Order> findByUid(int uid);
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这两个查询还能完整获取我们所需要的所有信息。接下来就是组装的事了，也就是将结果集的字段和我们的JavaBean属性进行绑定。

- **@Many 一对多绑定**

```java
@Select("select * from user")
@Results({
        @Result(id = true,column = "id",property = "id"),
        @Result(column = "username",property = "username"),
        @Result(column = "password",property = "password"),
        @Result(
                property = "orderList",
                column = "id",
                javaType = List.class,
                many = @Many(select = "com.itheima.mapper.OrderMapper.findByUid")
        )
}
)
public List<User> findUserAndOrderAll();
```

- 测试

```java
public class MyBatisTest3 {

    private UserMapper mapper;

    @Before
    public void before() throws IOException {
        InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
        SqlSession sqlSession = sqlSessionFactory.openSession(true);
        mapper = sqlSession.getMapper(UserMapper.class);
    }

    @Test
    public void test3(){
        List<User> userAndOrderAll = mapper.findUserAndOrderAll();
        for (User user : userAndOrderAll) {
            System.out.println(user);
        }
    }

}
```

- 测试结果

```
User{id=1, username='lucy', password='123', birthday=Wed Dec 12 00:00:00 CST 2018, orderList=[Order{id=1, ordertime=Wed Dec 12 00:00:00 CST 2018, total=3000.0, user=null}, Order{id=2, ordertime=Wed Dec 12 00:00:00 CST 2018, total=4000.0, user=null}]}
User{id=2, username='haohao', password='123', birthday=Thu Dec 12 00:00:00 CST 2019, orderList=[Order{id=3, ordertime=Wed Dec 12 00:00:00 CST 2018, total=5000.0, user=null}]}

Process finished with exit code 0
```

#### 多对多查询(@Many)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一对多模型和相关概念请看“9.3.多对多查询”。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;需求：查询每一个用户的信息和该用户具有的所有角色信息。

- 创建Role实体

```java
package com.itheima.domain;

public class Role {

    private int id;
    private String roleName;
    private String roleDesc;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleDesc() {
        return roleDesc;
    }

    public void setRoleDesc(String roleDesc) {
        this.roleDesc = roleDesc;
    }

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", roleName='" + roleName + '\'' +
                ", roleDesc='" + roleDesc + '\'' +
                '}';
    }
}
```

- 修改User（List< Role > roleList）

```java
package com.itheima.domain;

import java.util.Date;
import java.util.List;

public class User {
    private int id;
    private String username;
    private String password;
    private Date birthday;

    //当前用户具备哪些角色
    private List<Role> roleList;

    public List<Role> getRoleList() {
        return roleList;
    }

    public void setRoleList(List<Role> roleList) {
        this.roleList = roleList;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", birthday=" + birthday +
                ", roleList=" + roleList +
                '}';
    }
}
```

- 在UserMapper接口中增加方法

  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先我们要知道多对多是有三张表的，在注解开发时我们可以分为两步（因为第一步我们要注入User的基本属性，第二步就要注入roleList）：1.查出所有用户的信息，其中就包括用户id；2.中间表和role表进行多表查询（中间表roleid=role.id），并加一个“用户id=中间表userid”的限制。

```java
@Select("select * from user")
@Results({
        @Result(id = true,column = "id",property = "id"),
        @Result(column = "username",property = "username"),
        @Result(column = "password",property = "password"),
        @Result(
                property = "roleList",
                column = "id",
                javaType = List.class,
                many = @Many(select = "com.itheima.mapper.RoleMapper.findByUserId")
        )
})
public List<User> findUserAndRoleAll();
```

- 创建RoleMapper接口和方法

```java
public interface RoleMapper {
    @Select("select * from sys_user_role ur,sys_role r where ur.roleid = r.id and ur.userid = #{uid}")
    public List<Role> findByUserId(int uid);

}
```

- 测试

```java
public class MyBatisTest4 {

    private UserMapper mapper;

    @Before
    public void before() throws IOException {
        InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
        SqlSession sqlSession = sqlSessionFactory.openSession(true);
        mapper = sqlSession.getMapper(UserMapper.class);
    }

    @Test
    public void test4(){
        List<User> userAndOrderAll = mapper.findUserAndRoleAll();
        for (User user : userAndOrderAll) {
            System.out.println(user);
        }
    }

}
```

- 结果

```
User{id=1, username='lucy', password='123', birthday=Wed Dec 12 00:00:00 CST 2018, roleList=[Role{id=1, roleName='CTO', roleDesc='CTO'}, Role{id=2, roleName='COO', roleDesc='COO'}]}
User{id=2, username='haohao', password='123', birthday=Thu Dec 12 00:00:00 CST 2019, roleList=[Role{id=1, roleName='CTO', roleDesc='CTO'}, Role{id=2, roleName='COO', roleDesc='COO'}]}

Process finished with exit code 0
```

# <h1 align = "center">SSM框架整合</h1>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mybatis是第三方框架，它本身不属于Spring生态系统当中的成员，所以要进行额外的整合。Spring和SpringMVC的整合在“十.Spring、SpringMVC综合练习”的环境搭建中有进行说明。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实我们也可以不用进行所谓的整合，使用我们前面所有的操作，我们就可以完成“原始的整合”了。在前面到此为止，这三个框架各司其职，各自负责某一层的职责：Mybatis是负责dao层的功能；SpringMVC负责web层；Spring就相当于粘合剂将负责管理三层产生的Bean；SpringMVC负责web层，当用户请求时负责封装数据和指派视图。但是spring跟Mybatis契合度不是太高，所以要进行额外进行整合。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以本章先用原始的整合方式，然后找出不足，最后解决这些问题。也就是解决了以前原始整合方式的不足，我们真正的SSM整合也就完成了。

## 一.原始整合(准备工作)

### 1.1.数据库和account表的创建

```sql
create database ssm;
create table account(
    id int primary key auto_increment,
    name varchar(100),
    money double(7,2)
);
```

### 1.2.创建Maven工程并导入坐标

```xml
<dependencies>
  <!--spring相关-->
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.0.5.RELEASE</version>
  </dependency>
  <dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.8.7</version>
  </dependency>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>5.0.5.RELEASE</version>
  </dependency>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-tx</artifactId>
    <version>5.0.5.RELEASE</version>
  </dependency>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>5.0.5.RELEASE</version>
  </dependency>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>5.0.5.RELEASE</version>
  </dependency>

  <!--servlet和jsp-->
  <dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>servlet-api</artifactId>
    <version>2.5</version>
  </dependency>
  <dependency>
    <groupId>javax.servlet.jsp</groupId>
    <artifactId>jsp-api</artifactId>
    <version>2.0</version>
  </dependency>

  <!--mybatis相关-->
  <dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.4.5</version>
  </dependency>
  <dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>1.3.1</version>
  </dependency>
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.6</version>
  </dependency>
  <dependency>
    <groupId>c3p0</groupId>
    <artifactId>c3p0</artifactId>
    <version>0.9.1.2</version>
  </dependency>

  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
  </dependency>
  <dependency>
    <groupId>jstl</groupId>
    <artifactId>jstl</artifactId>
    <version>1.2</version>
  </dependency>
</dependencies>
```

### 1.3.编写实体类domain.Account

```java
package com.itheima.domain;

public class Account {

    private Integer id;
    private String name;
    private Double money;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getMoney() {
        return money;
    }

    public void setMoney(Double money) {
        this.money = money;
    }
}
```

### 1.4.编写Mapper接口mapper.AccountMapper

```java
package com.itheima.mapper;
public interface AccountMapper {

    public void save(Account account);

    public List<Account> findAll();

}
```

### 1.5.编写service接口AccountService和其实现类

```java
package com.itheima.service;
public interface AccountService {

    public void save(Account account);

    public List<Account> findAll();

}
```

```java
import com.itheima.service.AccountService;
public class AccountServiceImpl implements AccountService {

    @Override
    public void save(Account account) {
        
    }

    @Override
    public List<Account> findAll() {
        return null;
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实现类AccountServiceImpl里面的方法先不写，先把整体框架搭起来。后面再补具体的方法。

### 1.6.编写web层controller.AccountController

```java
package com.itheima.controller;
public class AccountController {

    //保存成功后打印字符串
    public String save(Account account){
        return null;
    }

    //查询完毕后把数据放到域当中，然后转发到某个视图
    public ModelAndView findAll(){
        return null;
    }

}
```

### 1.7.编写添加和展示数据的页面

（1）添加页面：

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>添加账户信息表单</h1>
    <form name="accountFrom" action="${pageContext.request.contextPath}/account/save" method="post">
        账户名称：<input type="text" name="name"><br/>
        账户金额：<input type="text" name="money"><br/>
        <input type="submit" value="保存"><br/>
    </form>
</body>
</html>
```

（2）数据展示列表页面：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个页面不需要能够直接访问，所以在***WEB-INF下创建一个pages目录***，里面创建accountList.jsp:

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>展示账户数据列表</h1>
    <table>
        <tr>
            <th>账户id</th>
            <th>账户名称</th>
            <th>账户金额</th>
        </tr>
        <!--下面的只是暂时用于展示数据，后面要改-->
        <tr>
            <td>1</td>
            <td>zhangsan</td>
            <td>5000</td>
        </tr>
    </table>
</body>
</html>
```

### 1.8.配置文件

- Spring配置文件：applicationContext.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/tx
http://www.springframework.org/schema/tx/spring-tx.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">


</beans>
```

- SprngMVC配置文件：spring-mvc.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/mvc
http://www.springframework.org/schema/mvc/spring-mvc.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">


</beans>
```

- MyBatis映射文件：AccountMapper.xml

  ​	在resources目录下创建目录com/itheima/mapper（创建这样的目录结构是为了和包对应），并在里面创建AccountMapper.xml：

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itheima.mapper.AccountMapper">

</mapper>
```

- MyBatis核心文件：sqlMapConfig.xml

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>


</configuration>
```

- 数据库连接信息文件：jdbc.properties

```properties
jdbc.driver = com.mysql.jdbc.Driver
jdbc.url = jdbc:mysql://localhost:3306/ssm
jdbc.username = root
jdbc.password = 123456
```

- Web.xml文件：web.xml

  ​	**要把默认的版本改成2.5或以上**，并进行以下配置，如果对相关配置的意义不熟悉可以到Spring、SpringMVC综合练习的练习环境搭建或其他前面提到的相关部分进行查看：

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

  <!--Spring监听器-和Spring绑定(获取ApplicationContext对象)-->

  <!--SpringMVC的前端控制器-和SpringMVC绑定-->

  <!--解决中文乱码的过滤器-->

</web-app>
```

- 日志文件：log4j.properties

```properties
### direct log messages to stdout ###
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.out
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d{ABSOLUTE} %5p %c{1}:%L - %m%n

### direct messages to file mylog.log ###
log4j.appender.file=org.apache.log4j.FileAppender
log4j.appender.file.File=c:/mylog.log
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=%d{ABSOLUTE} %5p %c{1}:%L - %m%n

### set log levels - for more verbose logging change 'info' to 'debug' ###

log4j.rootLogger=all, stdout
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在环境的架子就搭建好了，下面就把内部没写的东西等填充一下，让它跑起来。

## 二.项目细节填充

### 2.1.配置文件

**（1）Mybatis**

- 核心文件：sqlMapConfig.xml

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--加载properties文件-->
    <properties resource="jdbc.properties"></properties>

    <!--定义别名-->
    <typeAliases>
        <!--<typeAlias type="com.itheima.domain.Account" alias="account"></typeAlias>-->
        <package name="com.itheima.domain"></package><!--自动给这个包下面所有的类取一个别名-->
    </typeAliases>

    <!--环境-->
    <environments default="developement">
        <environment id="developement">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"></property>
                <property name="url" value="${jdbc.url}"></property>
                <property name="username" value="${jdbc.username}"></property>
                <property name="password" value="${jdbc.password}"></property>
            </dataSource>
        </environment>
    </environments>

    <!--加载映射-->
    <mappers>
        <!--<mapper resource="com/itheima/mapper/AccountMapper.xml"></mapper>-->
        <package name="com.itheima.mapper"></package>
        <!--将resources下的这个com.itheima.mapper包下的所有映射文件都加进来-->
    </mappers>


</configuration>
```

- 映射文件：AccountMapper.xml

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itheima.mapper.AccountMapper">
    <insert id="save" parameterType="account">
        insert into account values(#{id},#{name},#{money})
    </insert>
    <select id="findAll" resultType="account">
        select * from account
    </select>
</mapper>
```

**（2）Spring和SpringMVC**

- srping-mvc.xml

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/mvc
http://www.springframework.org/schema/mvc/spring-mvc.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">

    <!--组件扫描  主要扫描controller-->
    <context:component-scan base-package="com.itheima.controller"></context:component-scan>
    <!--配置mvc注解驱动-->
    <mvc:annotation-driven></mvc:annotation-driven>
    <!--内部资源视图解析器-->
    <bean id="resourceViewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/pages/"></property>
        <property name="suffix" value=".jsp"></property>
    </bean>
    <!--开发静态资源访问权限-->
    <mvc:default-servlet-handler></mvc:default-servlet-handler>

</beans>
```

- applicationContext.xml

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/tx
http://www.springframework.org/schema/tx/spring-tx.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">

    <!--组件扫描 扫描service和mapper-->
    <context:component-scan base-package="com.itheima">
        <!--排除controller的扫描,让springMVC去扫描-->
        <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"></context:exclude-filter>
    </context:component-scan>


</beans>
```

**（3）web.xml**

```xml-dtd
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

  <!--Spring监听器-和Spring绑定(获取ApplicationContext对象)-->
  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:applicationContext.xml</param-value>
  </context-param>
  <listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
  </listener>

  <!--SpringMVC的前端控制器-和SpringMVC绑定-->
  <servlet>
    <servlet-name>DispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:spring-mvc.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
  </servlet>
  <servlet-mapping>
    <servlet-name>DispatcherServlet</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>

  <!--解决中文乱码的过滤器-->
  <filter>
    <filter-name>CharacterEncodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
      <param-name>encoding</param-name>
      <param-value>UTF-8</param-value>
    </init-param>
  </filter>
  <filter-mapping>
    <filter-name>CharacterEncodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
  </filter-mapping>

</web-app>
```

### 2.2.业务代码

**（1）save.jsp**

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>添加账户信息表单</h1>
    <form name="accountFrom" action="${pageContext.request.contextPath}/account/save" method="post">
        账户名称：<input type="text" name="name"><br/>
        账户金额：<input type="text" name="money"><br/>
        <input type="submit" value="保存"><br/>
    </form>
</body>
</html>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;看上面的页面我们知道，该地址和方法都还没配置和编写，下面进行编写。

- AccountController

```java
package com.itheima.controller;

import com.itheima.domain.Account;
import com.itheima.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;/*变量爆红表示其实现类还没配置Bean*/

    //保存成功后打印字符串
    @RequestMapping("/save")
    @ResponseBody//表示返回的是字符串，而不是页面
    public String save(Account account){
        accountService.save(account);
        return "数据保存成功";
    }

    //查询完毕后把数据放到域当中，然后转发到某个视图
    public ModelAndView findAll(){
        List<Account> accountList = accountService.findAll();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("accountList", accountList);
        modelAndView.setViewName("accountList");
        return modelAndView;
    }

}
```

- AccountServiceImpl

```java
package com.itheima.service.impl;

import com.itheima.domain.Account;
import com.itheima.mapper.AccountMapper;
import com.itheima.service.AccountService;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
@Service("accountService")
public class AccountServiceImpl implements AccountService {

    @Override
    public void save(Account account) {
        //需要mapper
        try {
            InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
            SqlSession sqlSession = sqlSessionFactory.openSession();
            AccountMapper mapper = sqlSession.getMapper(AccountMapper.class);
            mapper.save(account);
            sqlSession.commit();
            sqlSession.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Account> findAll() {
        try {
            InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
            SqlSession sqlSession = sqlSessionFactory.openSession();
            AccountMapper mapper = sqlSession.getMapper(AccountMapper.class);
            List<Account> accountList = mapper.findAll();
            sqlSession.close();
            return accountList;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现在基本的业务代码写完了，就要进行测试了。

- 测试

1.启动成功

![image-20210401003743667](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210401003743667.png)

2.访问save.jsp并提交如下信息

![image-20210401004807107](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210401004807107.png)

3.页面显示结果

![image-20210401004843672](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210401004843672.png)

4.数据表内容

![image-20210401004924983](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210401004924983.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明数据插入进数据库去了，***返回页面的字符出现中文乱码***。前面在web.xml设置的中文乱码过滤器是设置的是请求数据的编码，修改AccountController里的save方法上的RequestMapping注解：

```java
@RequestMapping(value = "/save",produces = "text/html;charset=UTF-8")
```

5.重启项目并提交数据后，页面显示正常

![image-20210401005624415](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210401005624415.png)

**（2）accountList.jsp**

1.在AccountController里的findAll方法上的添加RequestMapping注解

```java
@RequestMapping("/findAll")
```

2.在显示页面accountList.jsp，引入JSTL，并展示查询到的数据

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h1>展示账户数据列表</h1>
    <table>
        <tr>
            <th>账户id</th>
            <th>账户名称</th>
            <th>账户金额</th>
        </tr>

        <c:forEach items="${accountList}" var="account">
            <tr>
                <td>${account.id}</td>
                <td>${account.name}</td>
                <td>${account.money}</td>
            </tr>
        </c:forEach>

    </table>
</body>
</html>
```

- 测试

  直接访问该查询方法http://localhost:8080/ssm_up/account/findAll

![image-20210401010845520](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210401010845520.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;到此看到两个方法都是可以正常使用的，这也说明原始的整合方式就是如此了，不过这种方式还是存在弊端的，下面就进行分析并进行整合。

## 三.ssm整合模板

### 1.分析

- 业务层

```java
package com.itheima.service.impl;

@Service("accountService")
public class AccountServiceImpl implements AccountService {

    @Override
    public void save(Account account) {
        //需要mapper
        try {
            InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
            SqlSession sqlSession = sqlSessionFactory.openSession();
            AccountMapper mapper = sqlSession.getMapper(AccountMapper.class);
            mapper.save(account);
            sqlSession.commit();
            sqlSession.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<Account> findAll() {
        try {
            InputStream resourceAsStream = Resources.getResourceAsStream("sqlMapConfig.xml");
            SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resourceAsStream);
            SqlSession sqlSession = sqlSessionFactory.openSession();
            AccountMapper mapper = sqlSession.getMapper(AccountMapper.class);
            List<Account> accountList = mapper.findAll();
            sqlSession.close();
            return accountList;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们先来上面业务层的代码，我们可以看到sqlSessionFactory每一个方法里都要创建来创建Mapper。在Service层中我们是需要操作dao层的，即所以**sqlSessionFactory和Mapper**都是需要的，但是没必要多次创建，直接交给Spring IOC容器，然后注入即可。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;并且每次还要进行**事务的控制**，并且前面Mybatis里面也没有提到如何进行事务控制。我们可以使用前面spring提供的声明式事务控制，就不用自己在过滤器或其他地方进行try……catch……了。

### 2.Spring整合Mybatis

![ssm整合1](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/ssm整合1.png)

![ssm整合2](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/ssm整合2.png)

- 在resources文件夹下**创建sqlMapConfig-spring.xml**（**原来的sqlMapConfig.xml就不要了**）

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--定义别名-->
    <typeAliases>
        <!--<typeAlias type="com.itheima.domain.Account" alias="account"></typeAlias>-->
        <package name="com.itheima.domain"></package><!--自动给这个包下面所有的类取一个别名-->
    </typeAliases>

</configuration>
```

- 在applicationContext.xml中**配置SqlSessionFactoryBean**并注入相关参数同时**扫描mapper所在的包,为mapper创建实现类**

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/tx
http://www.springframework.org/schema/tx/spring-tx.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">

    <!--组件扫描 扫描service和mapper-->
    <context:component-scan base-package="com.itheima">
        <!--排除controller的扫描,让springMVC去扫描-->
        <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"></context:exclude-filter>
    </context:component-scan>

    <!--加载propeties文件-->
    <context:property-placeholder location="classpath:jdbc.properties"></context:property-placeholder>

    <!--配置数据源信息-->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"></property>
        <property name="jdbcUrl" value="${jdbc.url}"></property>
        <property name="user" value="${jdbc.username}"></property>
        <property name="password" value="${jdbc.password}"></property>
    </bean>

    <!--配置sessionFactory-->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <!--因为涉及到事务的提交和连接的关闭，所以需要数据源-->
        <property name="dataSource" ref="dataSource"></property>
        <!--加载mybatis核心文件-->
        <property name="configLocation" value="classpath:sqlMapConfig-spring.xml"></property>
    </bean>

    <!--扫描mapper所在的包 为mapper创建实现类(在service就可以直接注入mapper接口了)-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="basePackage" value="com.itheima.mapper"></property>
    </bean>

</beans>
```

- 修改service代码

```java
@Service("accountService")
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountMapper accountMapper;

    @Override
    public void save(Account account) {
        accountMapper.save(account);
    }

    @Override
    public List<Account> findAll() {
        return accountMapper.findAll();
    }
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经测试上面的步骤是可以成功运行的。现在就差事务的控制了。

### 3.事务控制

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实就是使用前面spring里学的声明式事务控制，在applicationContext.xml里面配置DataSourceTransactionManager的bean、事务增强和事务的aop织入

```xml-dtd
<!--声明式事务控制-->
<!--平台事务管理器-->
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"></property>
</bean>

<!--配置事务增强-->
<tx:advice id="txAdvice">
    <tx:attributes>
        <tx:method name="*"/>
    </tx:attributes>
</tx:advice>

<!--事务的aop织入-->
<aop:config>
    <aop:advisor advice-ref="txAdvice" pointcut="execution(* com.itheima.service.impl.*.*(..))"></aop:advisor>
</aop:config>
```

- 测试

（1）录入如下数据

![image-20210402222830976](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210402222830976.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;结果：

![image-20210402223020037](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210402223020037.png)

![image-20210402223003738](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210402223003738.png)

（2）在save方法里面加个错误再测试

```java
@Override
public void save(Account account) {
    accountMapper.save(account);
    int i=10/0;//加个错误
}
```

![image-20210402223416183](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210402223416183.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页面显示结果：

![image-20210402223505225](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210402223505225.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据库没有录入数据：

![image-20210402223554597](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/image-20210402223554597.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以上测试说明事务管理生效了，因为在save方法里向数据库插入数据完成后，继续执行报除零错误，所以数据库进行回滚，取消了数据的录入。

### 4.最终模板

#### 4.1.目录

![项目目录](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/项目目录.png)

##### pom.xml

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这里只给出相关依赖包的坐标

```xml
<dependencies>
  <!--spring相关-->
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.0.5.RELEASE</version>
  </dependency>
  <dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.8.7</version>
  </dependency>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>5.0.5.RELEASE</version>
  </dependency>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-tx</artifactId>
    <version>5.0.5.RELEASE</version>
  </dependency>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>5.0.5.RELEASE</version>
  </dependency>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>5.0.5.RELEASE</version>
  </dependency>

  <!--servlet和jsp-->
  <dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>servlet-api</artifactId>
    <version>2.5</version>
  </dependency>
  <dependency>
    <groupId>javax.servlet.jsp</groupId>
    <artifactId>jsp-api</artifactId>
    <version>2.0</version>
  </dependency>

  <!--mybatis相关-->
  <dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.4.5</version>
  </dependency>
  <dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>1.3.1</version>
  </dependency>
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.6</version>
  </dependency>
  <dependency>
    <groupId>c3p0</groupId>
    <artifactId>c3p0</artifactId>
    <version>0.9.1.2</version>
  </dependency>

  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
  </dependency>
  <dependency>
    <groupId>jstl</groupId>
    <artifactId>jstl</artifactId>
    <version>1.2</version>
  </dependency>
</dependencies>
```

##### web.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

  <!--Spring监听器-和Spring绑定(获取ApplicationContext对象)-->
  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:applicationContext.xml</param-value>
  </context-param>
  <listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
  </listener>

  <!--SpringMVC的前端控制器-和SpringMVC绑定-->
  <servlet>
    <servlet-name>DispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath:spring-mvc.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
  </servlet>
  <servlet-mapping>
    <servlet-name>DispatcherServlet</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>

  <!--解决中文乱码的过滤器-->
  <filter>
    <filter-name>CharacterEncodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
      <param-name>encoding</param-name>
      <param-value>UTF-8</param-value>
    </init-param>
  </filter>
  <filter-mapping>
    <filter-name>CharacterEncodingFilter</filter-name>
    <url-pattern>/**</url-pattern>
  </filter-mapping>

</web-app>
```

#### 4.2.代码

![代码目录](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/代码目录.png)

##### controller

```java
package com.itheima.controller;

import com.itheima.domain.Account;
import com.itheima.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/account")
public class AccountController {

    @Autowired
    private AccountService accountService;/*变量爆红表示其实现类还没配置Bean*/

    //保存成功后打印字符串
    @RequestMapping(value = "/save",produces = "text/html;charset=UTF-8")
    @ResponseBody//表示返回的是字符串，而不是页面
    public String save(Account account){
        accountService.save(account);
        return "数据保存成功";
    }

    //查询完毕后把数据放到域当中，然后转发到某个视图
    @RequestMapping("/findAll")
    public ModelAndView findAll(){
        List<Account> accountList = accountService.findAll();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("accountList", accountList);
        modelAndView.setViewName("accountList");
        return modelAndView;
    }

}
```

##### domain

```java
package com.itheima.domain;

public class Account {

    private Integer id;
    private String name;
    private Double money;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getMoney() {
        return money;
    }

    public void setMoney(Double money) {
        this.money = money;
    }
}
```

##### mapper

```java
package com.itheima.mapper;

import com.itheima.domain.Account;

import java.util.List;

public interface AccountMapper {

    public void save(Account account);

    public List<Account> findAll();

}
```

##### service

```java
package com.itheima.service;

import com.itheima.domain.Account;

import java.util.List;

public interface AccountService {

    public void save(Account account);

    public List<Account> findAll();

}
```

service.impl

```java
package com.itheima.service.impl;

import com.itheima.domain.Account;
import com.itheima.mapper.AccountMapper;
import com.itheima.service.AccountService;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
@Service("accountService")
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountMapper accountMapper;

    @Override
    public void save(Account account) {
        accountMapper.save(account);
    }

    @Override
    public List<Account> findAll() {
        return accountMapper.findAll();
    }
}
```

#### 4.3.resources

![资源目录](https://xuanmai-typora.oss-cn-shenzhen.aliyuncs.com/资源目录.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;但是***sqlMapConfig.xml是不需要的了***，因为已经sqlMapConfig-spring.xml已经将spring和Mybatis整合了。

##### 映射文件(AccountMapper.xml)

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itheima.mapper.AccountMapper">
    <insert id="save" parameterType="account">
        insert into account values(#{id},#{name},#{money})
    </insert>
    <select id="findAll" resultType="account">
        select * from account
    </select>
</mapper>
```

##### spring配置文件(applicationContext.xml)

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/tx
http://www.springframework.org/schema/tx/spring-tx.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">

    <!--组件扫描 扫描service和mapper-->
    <context:component-scan base-package="com.itheima">
        <!--排除controller的扫描,让springMVC去扫描-->
        <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"></context:exclude-filter>
    </context:component-scan>

    <!--加载propeties文件-->
    <context:property-placeholder location="classpath:jdbc.properties"></context:property-placeholder>

    <!--配置数据源信息-->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"></property>
        <property name="jdbcUrl" value="${jdbc.url}"></property>
        <property name="user" value="${jdbc.username}"></property>
        <property name="password" value="${jdbc.password}"></property>
    </bean>

    <!--配置sessionFactory - 与Mybatis集成 -->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <!--因为涉及到事务的提交和连接的关闭，所以需要数据源-->
        <property name="dataSource" ref="dataSource"></property>
        <!--加载mybatis核心文件-->
        <property name="configLocation" value="classpath:sqlMapConfig-spring.xml"></property>
		<!--以下一句为我自己补充的，详情看文末"补充"-->
        <property name="mapperLocations" value="classpath:com.hugo.mapper/*Mapper.xml"></property>
    </bean>

    <!--扫描mapper所在的包 为mapper创建实现类(在service就可以直接注入mapper接口了)-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="basePackage" value="com.itheima.mapper"></property>
    </bean>


    <!--声明式事务控制-->
    <!--平台事务管理器-->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <property name="dataSource" ref="dataSource"></property>
    </bean>

    <!--配置事务增强-->
    <tx:advice id="txAdvice">
        <tx:attributes>
            <tx:method name="*"/>
        </tx:attributes>
    </tx:advice>

    <!--事务的aop织入-->
    <aop:config>
        <aop:advisor advice-ref="txAdvice" pointcut="execution(* com.itheima.service.impl.*.*(..))"></aop:advisor>
    </aop:config>

</beans>
```

druid连接池数据源配置

```xml
<bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
    <property name="driverClassName" value="${jdbc.driver}"></property>
    <property name="url" value="${jdbc.url}"></property>
    <property name="username" value="${jdbc.username}"></property>
    <property name="password" value="${jdbc.password}"></property>
    <property name="initialSize" value="5"></property>
    <property name="maxActive" value="10"></property>
</bean>
```

##### jdbc.properties

```properties
jdbc.driver = com.mysql.jdbc.Driver
jdbc.url = jdbc:mysql://localhost:3306/ssm?useUnicode=true&characterEncoding=utf8
jdbc.username = root
jdbc.password = 123456
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注意要将账号密码修改成自己的，还有修改连接的数据库url。

##### log4j.properties

```properties
### direct log messages to stdout ###
log4j.appender.stdout=org.apache.log4j.ConsoleAppender
log4j.appender.stdout.Target=System.out
log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
log4j.appender.stdout.layout.ConversionPattern=%d{ABSOLUTE} %5p %c{1}:%L - %m%n

### direct messages to file mylog.log ###
log4j.appender.file=org.apache.log4j.FileAppender
log4j.appender.file.File=c:/mylog.log
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=%d{ABSOLUTE} %5p %c{1}:%L - %m%n

### set log levels - for more verbose logging change 'info' to 'debug' ###

log4j.rootLogger=all, stdout
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果想看SQL语句或其他详细的运行过程，可以设置为debug模式：

```properties
log4j.rootLogger=debug, stdout
```

##### spring-mvc.xml

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/mvc
http://www.springframework.org/schema/mvc/spring-mvc.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">

    <!--组件扫描  主要扫描controller-->
    <context:component-scan base-package="com.itheima.controller"></context:component-scan>
    <!--配置mvc注解驱动-->
    <mvc:annotation-driven></mvc:annotation-driven>
    <!--内部资源视图解析器-->
    <bean id="resourceViewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/pages/"></property>
        <property name="suffix" value=".jsp"></property>
    </bean>
    <!--开发静态资源访问权限-->
    <mvc:default-servlet-handler></mvc:default-servlet-handler>


</beans>
```

​		***需要注意的就是如果返回的是重定向或请求转发，则前后缀不起作用。***

##### sqlMapConfig-spring.xml

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>

    <!--定义别名-->
    <typeAliases>
        <!--<typeAlias type="com.itheima.domain.Account" alias="account"></typeAlias>-->
        <package name="com.itheima.domain"></package><!--自动给这个包下面所有的类取一个别名-->
    </typeAliases>

</configuration>
```

### 补充：

1.applicationContext.xml里面的配置sessionFactory应该还要配置加载映射文件

2.applicationContext.xml里面如果使用druid连接池请看注释掉的部分

```xml-dtd
<?xml version="1.0" encoding="UTF-8" ?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/tx
http://www.springframework.org/schema/tx/spring-tx.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">

    <!--组件扫描 扫描service和mapper-->
    <context:component-scan base-package="com.hugo">
        <!--排除controller的扫描,让springMVC去扫描-->
        <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"></context:exclude-filter>
    </context:component-scan>

    <!--加载propeties文件-->
    <context:property-placeholder location="classpath:jdbc.properties"></context:property-placeholder>

    <!--配置数据源信息-->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"></property>
        <property name="jdbcUrl" value="${jdbc.url}"></property>
        <property name="user" value="${jdbc.username}"></property>
        <property name="password" value="${jdbc.password}"></property>
    </bean>
<!--    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="driverClassName" value="${jdbc.driver}"></property>
        <property name="url" value="${jdbc.url}"></property>
        <property name="username" value="${jdbc.username}"></property>
        <property name="password" value="${jdbc.password}"></property>
        <property name="initialSize" value="5"></property>
        <property name="maxActive" value="10"></property>
    </bean>-->

    <!--配置sessionFactory - 与Mybatis集成 -->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <!--因为涉及到事务的提交和连接的关闭，所以需要数据源-->
        <property name="dataSource" ref="dataSource"></property>
        <!--加载mybatis核心文件-->
        <property name="configLocation" value="classpath:sqlMapConfig-spring.xml"></property>
        <!--加载映射文件-->
        <property name="mapperLocations" value="classpath:com.hugo.mapper/*Mapper.xml"></property>
    </bean>

    <!--扫描mapper所在的包 为mapper创建实现类(在service就可以直接注入mapper接口了)-->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="basePackage" value="com.hugo.mapper"></property>
    </bean>


    <!--声明式事务控制-->
    <!--平台事务管理器-->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <property name="dataSource" ref="dataSource"></property>
    </bean>

    <!--配置事务增强-->
    <tx:advice id="txAdvice">
        <tx:attributes>
            <tx:method name="*"/>
        </tx:attributes>
    </tx:advice>

    <!--事务的aop织入-->
    <aop:config>
        <aop:advisor advice-ref="txAdvice" pointcut="execution(* com.hugo.service.impl.*.*(..))"></aop:advisor>
    </aop:config>

</beans>
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;完结撒花，感恩这一路上遇到的所有人以及所有bug~