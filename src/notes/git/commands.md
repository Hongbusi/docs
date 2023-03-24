# Commands

## Initialize a new git repository

``` bash
git init
```

## Set configuration values for your username and email

``` bash
git config --global user.name <your-name>
git config --global user.email <your-email>
```

## Clone a repository

``` bash
git clone <repository-url>
```

## Add a file to the staging area

``` bash
git add <file>
```

## Add all files changes to the staging area

``` bash
git add
```

## Check the unstaged changes

``` bash
git diff
```

## Commit the staged changes

``` bash
git commit -m "message"
```

## Reset staging area to the last commit

``` bash
git reset
```

## Check the state of the working directory and the staging area

``` bash
git status
```

## Remove a file from the index and working directory

``` bash
git rm ‹file>
```

## List the commit history

``` bash
git log
```

## Check the metadata and content changes of the commit

``` bash
git show <commit-hash>
```

## Lists all local branches

``` bash
git branch
```

## Create a new branch

``` bash
git branch <branch-name>
```

## Rename the current branch

``` bash
git branch -m <new-branch-name>
```

## Delete a branch

``` bash
git branch -d <branch-name>
```

## Switch to another branch

``` bash
git checkout <branch-name>
```

## Merge specified branch into the current branch

``` bash
git merge <branch-name>
```

## Create a new connection to a remote repository

``` bash
git remote add <name> <repository-url>
```

## Remove connection to a remote repository

``` bash
git remote remove <name>
```

## Update connection to a remote repository

``` bash
git remote set-url <name> <repository-url>
```

## View connection to a remote repository

``` bash
git remote get-url <name>
```

## Push the committed changes to a remote repository

``` bash
git push <remote> <branch>
```

## Download the content from a remote repository

``` bash
git pull <remote>
```

## Cleanup unnecessary files and optimize the local repository

``` bash
git gc
```

## Temporarily remove uncommitted changes and save them for later use

``` bash
git stash
```

## Reapply previously stashed changes

``` bash
git stash apply
```
