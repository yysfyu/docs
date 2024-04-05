---
outline: deep
---

# Docker 笔记

### 1 Docker 简介

Docker 是一个虚拟环境容器，可以将开发环境、代码、配置文件等一并打包到这个容器中，并发布和应用到任意平台中。

### 2 Docker 架构

#### 2.1 架构

Docker 使用 Go 语言进行开发，使用的是客户端/服务器（C/S）架构的模式。

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240405212714.png)

- Docker 客户端：是主要的用户与 Docker 交互方式。它接收用户指令并且与背后的 Docker 守护进程通信。
- Docker 守护进程：用户并不直接和守护进程进行交互，而是通过 Docker 客户端间接和其通信。



#### 2.2 技术依赖

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240405212805.png)

Docker 依赖 linux kernel 三项最基本的技术。

- namespaces：命名空间，对 Docker 容器进行隔离。让容器拥有独立的 hostname，ip，pid;
- Cgroups：资源配额，是容器对宿主机资源进行核算并限制的关键功能。
- union FS：采用 copy-on-write 技术，让镜像共用某一层，对于某些差异层在差异的内存存储。
- Libcontainer：上面三项技术的封装库。
- Docker engine ：用来控制容器的运行，以及镜像文件的拉取。

##### 2.3 三种主要部件

1. **镜像**（Image）：包含有文件系统的只读模板，提供运行环境。镜像由层 (layers) 组成，有基础镜像、中间件镜像、应用镜像。一层一层构建，每层缓存。
2. **容器**（Container）：镜像创建容器，应用在容器中运行。容器之间相互隔离。容器从镜像启动时，Docker 在镜像的上层创建一个可写层，镜像本身只读。
3. **仓库**（Repository）：镜像仓库，用 tag 标示镜像。



### 3 Docker 安装

1、下载脚本并且安装 Docker 及依赖包

```
wget -qO- https://get.docker.com/ | sh
```

或

```
sudo apt-get install docker-engine
```

2、 启动 docker 后台服务

```
sudo service docker start #启动守护进程
sudo docker run hello-world #校验docker是否安装成功
sudo service docker stop #关闭守护进程
```



### 4 Docker使用

从仓库（一般为 DockerHub）下载（pull）一个镜像，Docker 执行 run 方法得到一个容器，用户在容器里执行各种操作。Docker 执行 commit 方法将一个容器转化为镜像。Docker 利用 login、push 等命令将本地镜像推送（push）到仓库。其他机器或服务器上就可以使用该镜像去生成容器，进而运行相应的应用程序了。

- docker info



#### 4.1 操作镜像

- docker search：从 DockerHub 搜索镜像
- docker pull：下载镜像
- docker images：查看当前系统中的 images 信息
- docker rmi：移除一个或多个镜像[需删除相关容器才可继续或 -f 强制删除]
- docker save -o：保存镜像
- docker load -i ：加载镜像
- docker commit：通过修改一个容器来构建镜像
- **Docker Build [选项] 路径**：使用 Dockerfile 构建一个镜像 –tag：给镜像命名和打标签，格式时 name:tag
  –rm：构建成功后移除临时容器
  –no-cache：构建镜像时不使用缓存
  –force-rm：总是移除临时容器(与 rm 相比失败也移除)



#### 4.2 操作容器

- docker run：基于镜像启动容器
  -i：打开并保持stdout
  -t：分配一个终端（pseudo-tty）。
  -d：后台运行，所有的stdout都输出到log
  -p [([<host_interface>:[host_port]])|(<host_port>):]：绑定端口到指定接口，默认不指定绑定 ip 则监听所有网络接口。
- docker start：启动容器
- docker stop ：停止容器
- docker restart ：重启容器
- docker attach：连接指定运行镜像，可进入后台容器
- docker exec：在运行中的容器中命令
- docker rm：删除容器
- 退出容器 exit：退出 ctrl+p ctrl+q ：后台运行



#### 4.3 操作仓库

- 镜像发布 （1）注册DockerHub账号
  （2）利用命令docker login登录DockerHub
  （3）docker push将本地的镜像推送到DockerHub上
  （4）docker pull下载镜像
- 镜像更新
  - 创建容器之后做更改，之后commit生成镜像，然后push到仓库中
  - 更新Dockerfile。在工作时一般建议这种方式，更简洁明了



### 5 Dockerfile



#### 5.1 Dockerfile 结构

DockerFile 分为四部分组成：基础镜像信息、构建者信息、镜像操作指令和容器启动时执行指令。

```
# 指明基础镜像
From ubutu
# 构建者信息
MAINTAINER wujun
# 镜像操作指令
apt/sourcelist.list
RUN apt-get update && apt-get install -y ngnix
RUN echo "\ndaemon off;">>/etc/ngnix/nignix.conf
#容器启动时执行指令
CMD /usr/sbin/ngnix
```



#### 5.2 Dockerfile 指令

Dockerfile 的基本指令有十三个

1. FROM
   指定基础源镜像。第一条必须为From指令。多个镜像时，可使用多个From指令。
2. MAINTAINER
   指定构建者信息。
3. RUN
   RUN “command” “param1” “param2”:在/bin/sh上执行
   Run [“executable” ,”Param1”, “param2”]:使用exec运行。例如：RUN [“/bin/bash”, “-c”,”echo hello”]
   一句RUN就是一层，每条run指令在当前基础镜像执行，并且提交新镜像。
4. CMD 支持三种格式：
   CMD [“executable” ,”Param1”, “param2”]使用exec执行，推荐
   CMD command param1 param2，在/bin/sh上执行
   CMD [“Param1”, “param2”] 提供给ENTRYPOINT做默认参数。
   每个容器只能执行一条CMD命令，多个CMD命令时，只最后一条被执行。
   在启动容器的时候提供一个默认的命令项。如果docker run的时候提供了命令项，就会覆盖掉这个命令。
5. EXPOSE
   EXPOSE […]
   告诉Docker服务器容器对外映射的容器端口号，在docker run -p的时候生效。
6. ENV
   EVN 只能设置一个
   EVN =允许一次设置多个
   指定一个环境变量，会被后续 RUN 指令使用，并在容器运行时保持。
7. ADD
   ADD
   复制本机文件、目录或远程文件，添加到指定的容器目录，支持GO的正则模糊匹配。如果源是一个目录，只会复制目录下的内容，目录本身不会复制。ADD命令会将复制的压缩文件夹自动解压，这也是与COPY命令最大的不同。
8. COPY
   COPY
   COPY除了不能自动解压，也不能复制网络文件。其它功能和ADD相同。
9. ENTRYPOINT
   ENTRYPOINT [“executable”, “param1”, “param2”]
   ENTRYPOINT command param1 param2 ：shell中执行
   和CMD命令一样，唯一的区别是不可被 docker run 提供的参数覆盖。
   如果要覆盖需要带上选项–entrypoint，如果有多个选项，只有最后一个会生效。
10. VOLUME
    VOLUME [“path”]
    在主机上创建一个挂载，挂载到容器的指定路径。docker run -v命令更强大。
11. USER
    USER daemon
    指定运行容器时的用户名或UID，后续的RUN、CMD、ENTRYPOINT也会使用指定的用户运行命令。
12. WORKDIR
    WORKDIR path
    为后续的 RUN 、 CMD 、 ENTRYPOINT 指令配置工作目录。
13. ONBUILD
    ONBUILD [INSTRUCTION]
    配置当所创建的镜像作为其它新创建镜像的基础镜像时，所先执行的操作指令。



### 6 Docker 持续集成、自动交付、自动部署

Docker 加上 github+jenkins（domeOS）+ registry 可以搭建一个完整的自动化流程。

![](https://gitee.com/codeyu98/bed/raw/master/vitepress/20240405212859.png)

1. RD 推送代码到 git 仓库或者 svn 等代码服务器上面，git 服务器就会通过 hook 通知 jenkins。
2. jenkine（或 domeOS） 克隆 git 代码到本地，并通过 dockerFile 文件进行编译 。
3. 打包生成一个新版本的镜像并推送到仓库 ，删除当前容器 ，通过新版本镜像重新运行。



### 7 Docker 自动扩容

一般的自动扩容的两种方式 docker 容量扩大：修改配置文件即可 docker 节点数扩充：简单的拷贝，运行



### 8 Dockerfile 例子

```dockerfile
FROM private-registry.wujun234.com/wujun234/maven:3-jdk-8-alpine AS buildserver
COPY . /code
#RUN ["sh", "-c" , "ls -al /code"]
WORKDIR /code
RUN mvn clean package -f pom.xml -Dmaven.test.skip=true -s /usr/share/maven/ref/settings-docker.xml

FROM pub.domeos.org/domeos/runimage-java:jre-8
RUN mkdir /opt/logs
ENV JAR_NAME auto-qagame-1.0.0-SNAPSHOT.jar
COPY --from=buildserver  /code/target/$JAR_NAME  .
RUN ["sh", "-c" , "ls -al ./"]
CMD java -jar ./$JAR_NAME --spring.profiles.active=${active} 
```

