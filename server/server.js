// 引入 express 并且创建一个 express 实例赋值给 app
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// 读取图片大小
// const { promisify} = require('util')
// const sizeOf = promisify(require('image-size'))
const sizeOf = require('image-size')
const fs = require('fs')
// 端口号
let port = 3000
// 服务器地址
// let serverIp = 'http://192.168.1.100'
let serverIp = 'http://www.syaoran.cc'
// let serverIp = 'http://www.magicleaders.com'

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
app.use(express.static('../vue-magicleader/'))

// log
const log = console.log.bind(console, '---debug---')
// 辅助函数 时间
var currentTime = function() {
	var d = new Date()
	var nm = d.getFullYear()
    if (nm.length < 2) {
        nm = '0' + nm
    }
	var yt = d.getMonth() + 1
    if (yt.length < 2) {
        yt = '0' + yt
    }
	var ri = d.getDate()
    if (ri.length < 2) {
        ri = '0' + ri
    }
	var ui = d.getHours()
    if (ui.length < 2) {
        ui = '0' + ui
    }
	var ff = d.getMinutes()
    if (ff.length < 2) {
        ff = '0' + ff
    }
	var mc = d.getSeconds()
    if (mc.length < 2) {
        mc = '0' + mc
    }
	return `${nm}-${yt}-${ri} ${ui}:${ff}:${mc}`
}
// 辅助函数 api log
var apiLog = function(apiName, r) {
    log(currentTime())
    log(`api: ${apiName}`)
    log('返回数据', r.toString())
}
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
// 学生 2d 作品
var student2dList = []
// 学生3d 作品
var student3dList = []
// 助教作品
var teacherAssistantList = []
// var teacherAssistantList = []
// 教学环境
var educationList = []
// 招班动态
var admissionsList = []
// 教师文件夹列表
var teacherFiles = []
// 教师列表
var teacherList = {}
// 保存成 Json 格式
var saveJsonList = function(name, list) {
    const initData = JSON.stringify(list, null, 2)
    console.log('debug name', name);
    // if (name == 'teacherList') {
    //     path = `./db/${name}.json`
    // } else {
        path = `./db/${name}.json`
        // console.log('进来 path', path, 'name', name);
    // }
    console.log('path', path, 'name', name);
    fs.writeFileSync(path, initData, 'utf-8')
}

// 读取文件内容 储存进 db/xxxx.json
var getWorksList = function(typeName, arr) {
    // 路径根据 app.js 当前位置决定
    const result = []
    const serverPath= `${serverIp}:${port}/images/${typeName}/`
    const path = imgPath + typeName
    const readTeacherDir = fs.readdirSync(path)
    for (let i = 0; i < readTeacherDir.length; i++) {
        let fileName = readTeacherDir[i]
        if (fileName == '.DS_Store') {
            continue
        }
        let localSrc = `../vue-magicleader/images/${typeName}/${fileName}`
        const obj = {}
        obj.src = serverPath + fileName
        sizeOf(localSrc, function(err, img) {
            if (err) {
                console.log('图片错误,无法写入', localSrc);
                return
            }
        })
        let img = sizeOf(localSrc)
        obj.w = img.width
        obj.h = img.height
        arr.push(obj)
    }
        console.log('arr', arr);
        saveJsonList(typeName, arr)
}
getWorksList('assistantTeacherWorks', teacherAssistantList)
getWorksList('studentWorks2d', student2dList)
getWorksList('studentWorks3d', student3dList)
getWorksList('education', educationList)
getWorksList('admissions', admissionsList)
// 读取 teacher 内 多个教师文件夹
var getTeacherList = function() {
    // const serverPath= `${serverIp}:${port}/images/teacher/`
    const serverPath= `../vue-magicleader/static/images/teacher/`
    const path = imgPath + 'teacher/'
    const readTeacherDir = fs.readdirSync(path)
    let arr = []
    let j = 0
    for (var i = 0; i < readTeacherDir.length; i++) {
        list = readTeacherDir[i]
        if (list.includes('.') == true) {
            continue
        }
        arr.push(list)
    }
    return arr
}
// 循环读取教师文件夹内数据
var getTeacherInfo = function() {
    let teacherList = getTeacherList()
    console.log('列表', teacherList);
    let result = {}
    for (var i = 0; i < teacherList.length; i++) {
        let fileName = teacherList[i]
        if (fileName == 'public') {
            continue
        }
        // let serverPath= `${serverIp}:${port}/images/teacher/${fileName}/`
        let serverPath= `static/images/teacher/${fileName}/`
        let path = imgPath + 'teacher/' + fileName
        let fileList = fs.readdirSync(path)
        let o = {
            img: [],
            thumb: [],
        }
        for (var k = 0; k < fileList.length; k++) {
            let f = fileList[k]
            // console.log('f', f);
            let localSrc = `../vue-magicleader/images/teacher/${fileName}/${f}`
            let img = sizeOf(localSrc)
            // console.log('img', img);
            if (f.includes('banner')) {
                o.banner = serverPath + f
            }
            if (f.includes('avatar')) {
                o.avatar = serverPath + f
            }
            if (f.includes('thumb-')) {
                let data = {}
                data.src = serverPath + f
                data.width = img.width
                data.height = img.height
                o.thumb.push(data)
            }
            if (f.includes('op-')) {
                let data = {}
                data.src = serverPath + f
                data.w = img.width
                data.h = img.height
                o.img.push(data)
            }

        }
        // console.log('o', o.avatar);
        let name = o.avatar.split('avatar-')[1].split('.')[0]
        o.name = name
        result[name] = o
    }
    // console.log('result', result);
    saveJsonList('teacherList', result)
}
getTeacherInfo()

// 发送 post 返回数组
// 2d学生作品

// 2d学生作品
app.post('/student2dList', function(request,response){
    var r = fs.readFileSync('./db/studentWorks2d.json')
    apiLog('/student2d', r)
    response.send(r)
})
// 3d学生作品
app.post('/student3dList', function(request,response){
    var r = fs.readFileSync('./db/studentWorks3d.json')
    apiLog('/student3d', r)


    response.send(r)
})
// 助教作品
app.post('/assistantTeacher', function(request,response){
    var r = fs.readFileSync('./db/assistantTeacherWorks.json')
    apiLog('/assistantTeacher', r)

    response.send(r)
})
// 环境图片
app.post('/educationList', function(request,response){
    var r = fs.readFileSync('./db/education.json')
    apiLog('/educationList', r)
    response.send(r)
})
// 招班动态
app.post('/admissionsList', function(request,response){
    var r = fs.readFileSync('./db/admissions.json')
    apiLog('/admissionsList', r)

    response.send(r)
})
// 教师详情
app.post('/teacherList', function(request, response) {
    var r = fs.readFileSync('./db/teacherList.json')
    apiLog('/teacherList', r)
    response.send(r)
})
// 1024 以下的端口是系统保留端口，需要管理员权限才能使用
var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port

  log("应用实例，访问地址为 http://localhost",
    host, port)
})
