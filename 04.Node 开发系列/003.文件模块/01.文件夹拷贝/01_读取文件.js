const fs = require('fs/promises')
const path = require('path')
const { existsSync } = require('fs')

// 将 test 文件夹中所有的 js 文件复制到 demo 文件中。
const fromDirPath = path.resolve(__dirname, './test/')

const toDirPath = path.resolve(__dirname, './demo/')

async function copyFiles(fromPath, toPath) {
  try {
    const files = await fs.readdir(fromPath, { withFileTypes: true })
    // 检测是否存在目标文件夹
    if (!existsSync(toPath)) {
      await fs.mkdir(toPath)
    }
    // 遍历读取的 files
    files.forEach(async (file) => {
      const fromSubPath = path.resolve(fromPath, `./${file.name}`)
      const toSubPath = path.resolve(toPath, `./${file.name}`)
      // 文件复制
      if (file.isFile()) {
        // 只拷贝 js 文件
        if (!file.name.endsWith('.js')) return
        await fs.copyFile(fromSubPath, toSubPath)
      }
      // 文件夹递归
      if (file.isDirectory()) {
        copyFiles(fromSubPath, toSubPath)
      }
    })
  } catch (error) {
    console.error(error)
  }
}
// copyFiles(fromDirPath, toDirPath)

// fs.cp 函数 v16.7.0 中的 API
// 整个文件夹拷贝，会递归子文件和文件

async function copyDirs(fromPath, toPath) {
  try {
    await fs.cp(fromPath, toPath, {
      recursive: true
    })
  } catch (error) {
    console.log(error)
  }
}
copyDirs(fromDirPath, toDirPath)
