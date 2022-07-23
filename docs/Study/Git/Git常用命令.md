# Git常用命令

## 生成密钥

步骤如下：

1. 先安装git
2. 使用ssh-keygen命令生成密钥，其中-t表示类型是rsa类型（非对称加密），-C为邮箱地址

```bash
ssh-keygen -t rsa -C "xxx@qq.com"
```

执行完之后就会在~/.ssh目录下生成两个文件：

- id_rsa：私钥
- id_rsa.pub：对应公钥

在仓库上（github、gitlab...）新增SSH Key，将公钥设置成id_rsa.pub文件里的内容。

3. 设置用户名和邮箱

```bash
git config --global user.name "用户名"
git config --global user.email "邮箱"
```

## 切换

