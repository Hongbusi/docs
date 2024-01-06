# Docker 常用命令

记录常用 docker 命令。

``` bash
# 查看镜像
$ docker images
# 构建镜像
$ docker build -t <name>:<tag> .
# 删除镜像
$ docker rmi <image-id>


# 查看容器
$ docker ps -a
# 运行一个容器
$ docker run --net=server_default -p 3000:80 -d <name>:<tag>
# 删除容器
$ docker rm <container-id>
#在运行中的容器中执行命令
$ docker exec -it <container-id> /bin/bash

# 列出所有的网络
$ docker network ls
# 查看网络详情
$ docker network inspect <network-name>
```
