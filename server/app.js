// 引入 express 并且创建一个 express 实例赋值给 app
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const fs = require('fs')
// var jsonParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())

// 配置 跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 配置静态文件目录
app.use(express.static('../vue-magicleader/dist'))

// log
const log = console.log.bind(console, '---debug---')

// 返回页面
var sendHtml = function(path, response) {
    var options = {
        encoding: 'utf-8'
    }
    fs.readFile(path, options, function(err, data){
        console.log(`读取的html文件 ${path} 内容是`, data)
        response.send(data)
    })
}

// 返回 JSON 格式数据
var sendJSON = function(response, data) {
    var r = JSON.stringify(data, null, 2)
    response.send(r)
}

// 读取学生 2d 3d作品 教师作品 文件列表
var imgPath = '../vue-magicleader/images/'
var student2dList = []
var student3dList = []
var assistantTeacherList = []
// save
var saveJsonList = function(name, list) {
    const initData = JSON.stringify(list, null, 2)
    const path = `./db/${name}.json`
    fs.writeFileSync(path, initData, 'utf-8')
}
var getWorksList = function(typeName, arr) {
    // 路径根据 app.js 当前位置决定
    const path = imgPath + typeName
    const readTeacherDir = fs.readdirSync(path)
    for (var i = 0; i < readTeacherDir.length; i++) {
        list = readTeacherDir[i]
        const obj = {}
        obj.name = list
        obj.number = i
        arr.push(obj)
    }
    saveJsonList(typeName, arr)
}
getWorksList('assistantTeacherWorks',assistantTeacherList)
getWorksList('studentWorks2d',student2dList)
getWorksList('studentWorks3d',student3dList)
/*
    用 get 定义一个给用户访问的网址
    request 是浏览器发送的请求
    response 是我们要发给浏览器的响应
*/
app.get('/', function(request, response) {
    var path = './index.html'
    sendHtml(path, response)
})

// 发送 post 返回数组
app.get('/student2d', function(request,response){
    var r = fs.readFileSync('./db/studentWorks2d.json')
    response.send(r)
})
app.get('/student3d', function(request,response){
    var r = fs.readFileSync('./db/studentWorks3d.json')
    response.send(r)
})
app.post('/assistantTeacher', function(request,response){
    var r = fs.readFileSync('./db/assistantTeacherWorks.json')
    response.send(r)
})
// 1024 以下的端口是系统保留端口，需要管理员权限才能使用
var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port

  log("应用实例，访问地址为 http://localhost",
    host, port)
})