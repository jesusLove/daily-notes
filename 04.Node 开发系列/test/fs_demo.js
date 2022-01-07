const fs = require('fs')
const path = require('path')
// 创建文件夹
const folderName = path.join(__dirname, 'test')
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (error) {
  console.log(error)
}
// 读取内容：文件和文件夹
const paths = fs.readdirSync(__dirname).map(fileName => {
  return path.join(__dirname, fileName)
})
console.log(paths)

// 过滤文件夹
const filePath = paths.filter(path => {
  return fs.lstatSync(path).isFile()
})
console.log(filePath)