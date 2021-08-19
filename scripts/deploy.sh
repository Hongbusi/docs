yarn build

cd example/public

git init
git add -A
date=`date +%Y-%m-%d_%H:%M:%S`
git commit -m "deploy ${date}"

git push -f git@github.com:Hongbusi/Hongbusi.github.io.git master

rm -rf dist
