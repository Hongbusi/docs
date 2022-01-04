# fs-extra

[fs-extra](https://github.com/jprichardson/node-fs-extra) 是 `fs` 的一个扩展，提供了非常多的便利 `API`，并且继承了 `fs` 所有方法和为 `fs` 方法添加了 `promise` 的支持。
 
## copy

[查看详细介绍](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy.md)

``` js
const fs = require('fs-extra')

// With a callback:
fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {
  if (err) return console.error(err)
  console.log('success!')
}) // copies file

fs.copy('/tmp/mydir', '/tmp/mynewdir', err => {
  if (err) return console.error(err)
  console.log('success!')
}) // copies directory, even if it has subdirectories or files

// With Promises:
fs.copy('/tmp/myfile', '/tmp/mynewfile')
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example () {
  try {
    await fs.copy('/tmp/myfile', '/tmp/mynewfile')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example()
```

## copySync

[查看详细介绍](https://github.com/jprichardson/node-fs-extra/blob/master/docs/copy-sync.md)

``` js
const fs = require('fs-extra')

// copy file
fs.copySync('/tmp/myfile', '/tmp/mynewfile')

// copy directory, even if it has subdirectories or files
fs.copySync('/tmp/mydir', '/tmp/mynewdir')
```

## emptyDir

[查看详细介绍](https://github.com/jprichardson/node-fs-extra/blob/master/docs/emptyDir.md)

``` js
const fs = require('fs-extra')

// assume this directory has a lot of files and folders
// With a callback:
fs.emptyDir('/tmp/some/dir', err => {
  if (err) return console.error(err)
  console.log('success!')
})

// With Promises:
fs.emptyDir('/tmp/some/dir')
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example () {
  try {
    await fs.emptyDir('/tmp/some/dir')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example()
```

## emptyDirSync

[查看详细介绍](https://github.com/jprichardson/node-fs-extra/blob/master/docs/emptyDir-sync.md)

``` js
const fs = require('fs-extra')

// assume this directory has a lot of files and folders
fs.emptyDirSync('/tmp/some/dir')
```
