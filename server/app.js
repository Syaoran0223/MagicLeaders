// 引入 express 并且创建一个 express 实例赋值给 app
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const fs = require('fs')
// 端口号
let port = 80
// 服务器地址
// let serverIp = 'http://192.168.1.103'
let serverIp = 'http://www.syaoran.cc'
// var jsonParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())

// 配置静态文件目录
app.use(express.static('../vue-magicleader/dist/'))

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

/*
    用 get 定义一个给用户访问的网址
    request 是浏览器发送的请求
    response 是我们要发给浏览器的响应
*/
app.get('/', function(request, response) {
    var path = './dist/index.html'
    sendHtml(path, response)
})


// 1024 以下的端口是系统保留端口，需要管理员权限才能使用
var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port

  log("应用实例，访问地址为 http://localhost",
    host, port)
})
