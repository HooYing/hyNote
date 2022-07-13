# windbg相关

Argument可以设置命令行参数

symbol：srv*c:\mysymbol*http://msdl.microsoft.com/download/symbols

## 标准命令

- g 运行
- t 单步步入
- p 单步步过
- r 查看和修改寄存器

## 元命令

- .reload 重新载入符号
- .reboot 重启目标机器
- .restart 重启调试器
- .logfile 显示信息

def 导出dll

导出函数形式：

```cpp
extern "C" int __stdcall CreateObject(void** pImpl, int nID);
/*
在c在函数是通过函数名来识别的，而在C++中，由于存在函数的重载问题，函数的识别方式通函数名，函数的返回类型，函数参数列表三者组合来完成的。因此上面两个相同的函数，经过C，C++编绎后会产生完全不同的名字。
当C编绎器遇到extern "C"的时候就用传统的C函数编译方法对该函数进行编译。
__stdcall调用类型：该调用只是通过堆栈来push和pop参数。push参数时，顺序是从右到左。
*/
```


```
GetCurrentDirectory:返回当前工程目录
GetModuleFileName：返回exe文件的绝对路径 
```

```cpp
    //去除路径的参数
    PathRemoveArgs
    //去除路径最后的反斜杠”\”
    PathRemoveBackslash
    //在路径最后加上反斜杠”\”
    PathAddBackslash
    //去除路径前后的空格
    PathRemoveBlanks
    //在文件路径后面加上扩展名
    PathAddExtension
    //去除文件路径扩展名
    PathRemoveExtension
    //更改文件路径扩展名
    PathRenameExtension
    //去除文件名,得到目录
    PathRemoveFileSpec
    //去除路径中的首尾空格
    PathUnquoteSpaces
    //判断路径中是否有空格,有的话,就是用”“引号把整个路径包含起来
    PathQuoteSpaces
    //将一个路径追加到另一个路径后面
    PathAppend
    //合并两个路径
    PathCombine
    //去掉路径中的磁盘符或UNC部分
    PathSkipRoot
    //去掉路径中的目录部分,得到文件名
    PathStripPath
    //去掉路径的文件部分,得到根目录
    PathStripToRoot
    //根据像素值生成符合长度的路径
    PathCompactPath
    //如原始路径: C:\path1\path2\sample.txt
    //根据120像素截断后为: C:\pat…\sample.txt
    //根据25像素截断后为: …\sample.txt
    //根据字符个数来生成符合长度的路径
    PathCompactPathEx
    //将路径数据设置到对话框的子控件上
    PathSetDlgItemPath
    //去除路径中的修饰
    PathUndecorate
    //将路径中部分数据替换为系统环境变量格式
    PathUnExpandEnvStrings
    //从路径中查找路径
    PathFindOnPath
    //查找路径的扩展名
    PathFindExtension
    //获取路径的文件名
    PathFindFileName
    //查找匹配路径
    PathFindNextComponent
    //查找给定的文件名是否有给定的后缀
    PathFindSuffixArray
    //获取路径参数
    PathGetArgs
    //获取路径字符类型
    PathGetCharType
    //根据逻辑盘符返回驱动器序号
    PathGetDriveNumber
    //创建一个路径到另一个路径的相对路径。
    PathRelativePathTo
    //将一个相对路径或绝对路径转换为一个合格的路径
    PathResolve
    //规范化路径。将格式比较乱的路径整理成规范的路径格式
    PathCanonicalize
    //根据给定的磁盘序号创建根目录路径
    PathBuildRoot
    //创建目录
    CreateDirectory
    //将长路径转为8.3格式的短路径格式
    GetShortPathName
    //将短路径格式转为长路径。
    GetLongPathName
    //将长路径转为短路径格式（8.3格式）
    PathGetShortPath
    //将URL路径转为MS-DOS格式
    PathCreateFromUrl
    //把路径全部转为小写,增加可读性
    PathMakePretty
    //给路径增加系统属性
    PathMakeSystemFolder
    //去除路径中的系统属性
    PathUnmakeSystemFolder
    //从模板创建统一的路径格式
    PathMakeUniqueName
    //生成一个可执行的路径,比如有参数的,会自动将路径用”“包含
    PathProcessCommand
    //去除路径中不合法的字符
    PathCleanupSpec
    //比较并提取两个路径相同的前缀
    PathCommonPrefix
    //验证路径是否存在
    PathFileExists
    //判断路径是否匹配制定的扩展名
    PathMatchSpec
    //判断路径是否是一个有效的目录
    PathIsDirectory
    //验证路径是否一个文件名（有可能是一个路径）
    PathIsFileSpec
    //验证路径是否是可执行文件
    PathIsExe
    //注意:不仅仅是.exe,还有.bat、.com、.src等
    //路径是否为根路径
    PathIsRoot
    //判断路径是否是相对路径
    PathIsRelative
    //检测文件是否为制定类型
    PathIsContentType
    //例如:
    PathIsContentType(“hello.txt”,”text/plain”) 返回TRUE
    PathIsContentType(“hello.txt”,”image/gif”) 返回FALSE

    //判断路径是否是html文件类型——根据系统注册类型判断
    PathIsHTMLFile
    //判断路径是否是长路径格式
    PathIsLFNFileSpec
    //判断路径是否是一个网络路径。
    PathIsNetworkPath
    //判断路径是否含有指定前缀
    PathIsPrefix
    //判断路径是否有相同根目录
    PathIsSameRoot
    //判断路径是否是一个高度延迟的网络连接
    PathIsSlow
    //判断路径是否有系统属性（属性可以自己设定）
    PathIsSystemFolder
    //路径是否是UNC格式（网络路径）
    PathIsUNC
    //路径是否是UNC服务器
    PathIsUNCServer
    //路径是否仅仅是UNC的共享路径格式
    PathIsUNCServerShare
    //路径是否是http格式。
    PathIsURL
    //基于已存在的文件,自动创建一个唯一的文件名。比如存在”新建文件”,此函数会创建文件名”新建文件(2)”
    PathYetAnotherMakeUniqueName 

```

