---
title: Ubuntu 系统常用命令
---

## 系统信息查看

```bash
# 查看系统版本
lsb_release -a
cat /etc/os-release

# 查看内核版本
uname -a

# 查看系统资源使用情况
top
htop  # 需要安装：sudo apt install htop

# 查看内存使用情况
free -h

# 查看磁盘使用情况
df -h

# 查看当前目录磁盘使用情况
du -sh ./*
```

## 进程管理

```bash
# 查看进程
ps aux
ps -ef | grep process_name

# 结束进程
kill pid
kill -9 pid  # 强制结束进程

# 后台运行程序
# nohup 使命令不受终端关闭影响，>重定向标准输出到文件，2>&1将错误输出也重定向到同一文件，&使命令在后台运行
nohup command > output.log 2>&1 &

# 查看nohup运行的任务
ps aux | grep command  # 通过进程名查找
pgrep -f command       # 查找匹配的进程ID
tail -f output.log     # 查看输出日志

# 查看后台任务
jobs

# 将前台任务放到后台
Ctrl+Z  # 暂停当前任务
bg      # 在后台继续运行

# 将后台任务调到前台
fg [job_number]
```

## 网络管理

```bash
# 查看网络接口
ifconfig
ip addr show

# 测试网络连接
ping hostname
ping -c 4 hostname  # 只发送4个包

# 查看端口占用情况
netstat -tulpn
ss -tulpn

# 查看路由表
route -n
ip route show

# 防火墙管理(ufw)
sudo ufw status
sudo ufw enable
sudo ufw disable
sudo ufw allow 22/tcp  # 允许SSH连接
```

## 软件包管理

```bash
# 更新软件包列表
sudo apt update

# 升级已安装的软件包
sudo apt upgrade

# 安装软件包
sudo apt install package_name

# 卸载软件包
sudo apt remove package_name
sudo apt purge package_name  # 同时删除配置文件

# 搜索软件包
apt search keyword

# 查看已安装的软件包
apt list --installed
dpkg -l
```

## 系统服务管理

```bash
# 查看服务状态
systemctl status service_name

# 启动服务
systemctl start service_name

# 停止服务
systemctl stop service_name

# 重启服务
systemctl restart service_name

# 设置开机自启
systemctl enable service_name

# 禁止开机自启
systemctl disable service_name
```
