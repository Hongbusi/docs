#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .

date=`date '+%Y-%m-%d %H:%M:%S'`
git commit -m "deploy ${date}"

git push
