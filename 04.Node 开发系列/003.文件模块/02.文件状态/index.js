const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, './test.md')

// 异步
// fs.stat(filePath, (errr, stat) => {
//   console.log('文件状态 =>', stat)
// })

/**
 * 
Stats {
  dev: 112778308,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 3377699725246204,
  size: 13,
  blocks: 0,
  atimeMs: 1642499207952.6682,
  mtimeMs: 1642499207949.6213,
  ctimeMs: 1642499207949.6213,
  birthtimeMs: 1642498968668.7039,
  atime: 2022-01-18T09:46:47.953Z,
  mtime: 2022-01-18T09:46:47.950Z,
  ctime: 2022-01-18T09:46:47.950Z,
  birthtime: 2022-01-18T09:42:48.669Z
}
 * */

// 同步
const stat = fs.statSync(filePath)
console.log('文件状态 =>', stat.isFile())
console.log('文件夹 =>', stat.isDirectory())
