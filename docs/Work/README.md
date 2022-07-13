# 工作

CentOS 8 之后的版本的包已经不支持，所以虚拟机采用CentOS 7的版本

gitlab大文件采用LFS传输，所以本机上要下载git-lfs，这样lfs传输的文件才能克隆下来。



```cpp
string重新赋值函数assign
string &assign(const char *s);
//用c类型字符串s赋值
string &assign(const char *s,int n);
//用c字符串s开始的n个字符赋值
string &assign(const string &s);
//把字符串s赋给当前字符串
string &assign(int n,char c);
//用n个字符c赋值给当前字符串
string &assign(const string &s,int start,int n);
//把字符串s中从start开始的n个字符赋给当前字符串
string &assign(const_iterator first,const_itertor last);
//把first和last迭代器之间的部分赋给字符串


// 数组初始化
wchar_t sz_path[MAX_PATH] = { 0 };

// 函数参数可以加个 IN 和 OUT 来表示是输入参数还是输出参数
void func(IN int a, OUT int& b);


//char类型的字符串以’\0’结尾,wchar_t类型的字符串以’\0\0’结尾

/*
wchar_t是C/C++的字符数据类型，是一种扩展的字符存储方式。
wchar_t类型主要用在国际化程序的实现中，但它不等同于Unicode编码。Unicode编码的字符一般以wchar_t类型存储。
char是8位字符类型，最多只能包含256种字符，许多外文字符集所含的字符数目超过256个，char型无法表示。


函数介绍：
wcslen()   类似与char*类型作参数的strlen()函数      用来获取wchar_t*变量的长度（不包含终结符）
wcscpy()  类似与char*类型作参数的strcpy()函数      用来进行wchar_t*变量之间的复制
同样的还有  wcsncpy()
wcscmp()  类似与char*类型的strcmp()函数      用来对比两个wchar_t*变量的大小
wmemset()  类似与char*类型的memset()函数     用来初始化内存
wprintf()  类似与char*类型的printf()函数        用来输出wchar_t*字符串
*/

//vs2019 wcout输出中文
std::wcout.imbue(locale("chs"));

```



