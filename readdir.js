// 读取 studentWorks 内图片 写入到 studentWorks.js 内
// html 引入 studentWorks.js 添加文本到 页面中
const fs = require('fs')
const readDir = fs.readdirSync('./images/teahcerWork')
const lists = []
for (var i = 0; i < readDir.length; i++) {
    list = readDir[i]
    const obj = {}
    obj.name = list
    obj.number = i
    lists.push(obj)
}
console.log('debug lists', lists.length);
const stringify = JSON.stringify(lists, null, 2)
const content = `const teacherWorks = ${stringify}`
const path = './js/teacherWorks.js'
fs.writeFileSync(path, content, 'utf-8')

// 读取 teacherWork 内图片 写入到 studentWorks.js 内
// html 引入 studentWorks.js 添加文本到 页面中
const readTeacherDir = fs.readdirSync('./images/teacherWork')
const teacherLists = []
for (var i = 0; i < readTeacherDir.length; i++) {
    list = readDir[i]
    const obj = {}
    obj.name = list
    obj.number = i
    teacherLists.push(obj)
}
console.log('debug lists', lists.length);
const teacherStringify = JSON.stringify(lists, null, 2)
const teacherContent = `const teacherWorks = ${stringify}`
const teacherPath = './js/teacherWorks.js'
fs.writeFileSync(path, content, 'utf-8')
