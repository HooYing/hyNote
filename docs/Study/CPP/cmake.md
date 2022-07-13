# cmake
## 安装
需要提前先安装g++编译器
sudo yum install gcc—c++
还依赖于openssl
ubuntu: apt-get install libssl-dev
centos: yum install openssl-devel
```bash
# 下载
wget https://cmake.org/files/v3.21/cmake-3.21.0.tar.gz

# 解压
tar -zxvf cmake-3.21.0.tar.gz

cd cmake-3.21.0

./bootstrap
make
sudo make install
```


## CMakeLists.txt详解

```cmake
# CMakeList.txt: 在此处包括源代码并定义
# 项目特定的逻辑。
# 声明使用的最低版本
cmake_minimum_required (VERSION 3.4)

# 指定工程名
project ("Test")

# set指令显示地定义变量
set(OUT_NAME "Test.so")

set(CMAKE_CXX_FLAGS "-pthread -fpie -g -pie -std=c++11 ${CMAKE_CXX_FLAGS}")


set(include_path "../../../include")

set(lib_path "../../../../lib/boost_1_68_0/lib64-linux-static")

set(common "../../../../../include/")

# 向工程添加多个特定的头文件搜索路径
include_directories(${include_path})

# 向工程添加多个特定的库文件搜索路径
link_directories(${lib_path})

set(all_files ${PROJECT_SOURCE_DIR}/pch.cpp
    ${PROJECT_SOURCE_DIR}/main.cpp
	${PROJECT_SOURCE_DIR}/test/test1.cpp
	../sqlite/sqlite3.c
    )

set(boost_filesystem.a
    boost_locale.a
    boost_system.a
    boost_regex.a
    dl
    pthread
    )


# 生成动态库
add_library(${OUT_NAME} SHARED ${all_files})

# 设置目标的属性，列出想要更改的所有目标，然后提供接下来要设置的值
# PREFIX：添加前缀 SUFFIX：添加后缀 OUTPUT_NAME：重命名
set_target_properties(${OUT_NAME} PROPERTIES PREFIX "")
set_target_properties(${OUT_NAME} PROPERTIES SUFFIX "")

# 将库文件链接到可执行文件
target_link_libraries(${OUT_NAME} ${link_files})

# 执行没有输出文件的自定义操作
# POST_BUILD 在执行给定目标的所有规则之后运行
# COMMAND 需要执行的命令
# strip 缩小程序体积
if (CMAKE_BUILD_TYPE MATCHES "Release")
    add_custom_command(
        TARGET ${OUT_NAME}
        POST_BUILD
        COMMAND strip ${OUT_NAME}
        )
else()
endif(CMAKE_BUILD_TYPE MATCHES "Release")


```

