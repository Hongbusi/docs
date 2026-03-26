---
title: Docker 常用命令
---

记录常用 docker 命令。

``` bash
# 查看镜像
$ docker images
# 构建镜像
$ docker build -t <name>:<tag> .
# 删除镜像
$ docker rmi <image_id_or_name>

# 查看容器
$ docker ps -a
# 运行一个容器
$ docker run --net=server_default -p 3000:80 -d <name>:<tag>
# 删除容器
$ docker rm <container_id_or_name>
#在运行中的容器中执行命令：-it 表示要以交互模式（interactive）和终端模式（tty）运行容器内的命令
$ docker exec -it <container_id_or_name> /bin/bash
# 停止运行容器
$ docker stop <container_id_or_name>
# 重启容器
$ docker restart <container_id_or_name>

# 列出所有的网络
$ docker network ls
# 查看网络详情
$ docker network inspect <network_id_or_name>
```

## 修改 Docker 时区

1. 进入容器：

```bash
$ docker exec -it <container_id_or_name> /bin/bash
```

请将 `<container_id_or_name>` 替换为你实际的容器 ID 或名称。

2. 在容器内修改时区配置：

首先备份当前的 `/etc/localtime` 文件，然后使用 `ln` 命令创建一个指向正确时区文件的符号链接。

```bash
$ cp /etc/localtime /etc/localtime_backup
$ ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

3. 退出容器：

``` bash
$ exit
```

4. 重新启动容器：

``` bash
$ docker restart <container_id_or_name>
```

请将 `<container_id_or_name>` 替换为你实际的容器 ID 或名称。

以上步骤后，容器的时区就成功地被修改了。
