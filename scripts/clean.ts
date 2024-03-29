import path from 'path'
import del from 'del'

import { findPackages } from './findPackages'

async function run() {
  const rootPath = path.dirname(__dirname)
  const packages = await findPackages()

  const files = ['dist', 'es', 'lib', '*.tsbuildinfo']

  const filesAndDirectories = packages.map(pkg => {
    return files.map(name => path.resolve(pkg.location, name))
  })

  const deletedFilePaths = await del(filesAndDirectories.flat(), {
    cwd: rootPath
  })

  if (deletedFilePaths.length === 0) {
    console.log('[clean] 未匹配任何文件或文件夹')
    return
  }

  function relativePath(file: string): string {
    return path.relative(rootPath, file)
  }

  console.info()
  console.info(
    '[clean] 已删除:\n',
    deletedFilePaths.map(relativePath).join('\n')
  )
}

run()
