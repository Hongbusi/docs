#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .

date=`date +%Y-%m-%d`
git commit -m "update ${date}"

git push
