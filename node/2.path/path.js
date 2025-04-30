const path = require('node:path');

console.log(path.sep)

const filePath = path.join('node', '2.path', 'path.js')
console.log(filePath)

const base = path.basename("tmp/test.txt")
console.log(base)

const fileName = path.basename("tmp/test.txt", ".txt")
console.log(fileName)

const extension = path.extname("tmp/test.txt")
console.log(extension)

const isAbsolute = path.isAbsolute("tmp/test.txt")
console.log(isAbsolute)




