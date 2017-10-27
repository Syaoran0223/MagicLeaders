// 需要安装 mongodb 模块
// yarn add mongodb
const { MongoClient } = require('mongodb')
const fs = require('fs')

// mongo 数据库的地址, 主机是本机, 端口是默认的端口, node 是数据库的名称
const mongoUrl = () => {
    const url = 'mongodb://localhost:27017/magicleader'
    return url
}


// save
var saveJsonList = function(name, list) {
    const initData = JSON.stringify(list, null, 2)
    const path = `./db/${name}.json`
    fs.writeFileSync(path, initData, 'utf-8')
}

// 读取文件夹
var imgPath = '../vue-magicleader/images/'

var assistantTeacherList = []
var getWorksList = function(typeName, arr) {
    // 路径根据 app.js 当前位置决定
    const path = imgPath + typeName
    const readTeacherDir = fs.readdirSync(path)
    for (var i = 0; i < readTeacherDir.length; i++) {
        list = readTeacherDir[i]
        const obj = {}
        obj.name = {
            name: list,
            unique: true
        }
        obj.number = i

        arr.push(obj)
    }
    saveJsonList(typeName, arr)
    // insert(db, data, )
    return assistantTeacherList
}


// 随机返回两个数字之间的数字
const randint = (a, b) => {
    const r = Math.random()
    const n = r * (b - a) + a
    const i = Math.floor(n)
    return i
}

// 插入信息
const insert =  (db, data,  callback) => {
    const collection = db.collection('demoAdd')
    // const d = [
    //     {
    //         content: '吃饭',
    //         user_id: 1,
    //         username: 'gua',
    //     },
    //     {
    //         content: '搓炉石',
    //         done: true,
    //         username: 'gua2',
    //     },
    // ]
    // data.forEach((e) => {
    //     e.unique = true
    //     // e.number =
    // })

    console.log('insert debug', data, '长度', data.length)

    //
    // const t1 = {
    //     content: '玩游戏',
    // }
    collection.insertMany(data, (error, result) => {
        console.log('insert 1 document into the collection')
        callback(result)
    })

}

// 查找
const find = (db, callback) => {
    const collection = db.collection('demoAdd')
    // find 查询的结果是一个 cursor 实例
    // 使用 toArray 方法将结果转换成数组, 这样我们就可以直接使用
    // collection.find({}).toArray((error, result) => {
    //     console.log('error', error)
    //     console.log('result', result.length, result)
    // 查找 随机值 为 14 的所有数据
    const query1 = {
        random: {
            $gt:10,
        }
    }
    collection.find(query1).toArray((error, result) => {
        console.log('random大于10', result)
    })
        callback()
}

// 更新信息
const update= (db, callback)  => {
    const collection = db.collection('demoAdd')

    const query = {
        "user_id" : 1,
    }
    const form = {
        $set: {
            content: '圣光会脏死你',
            date: new Date(),
        }
    }
    collection.updateMany(query, form, (error, result)=> {
        collection.find(query).toArray((error, result) => {
             console.log('修改后', result)
         })
    })
}

// 逻辑删除 _deleted = true
const remove = (db, callback)  => {
    const collection = db.collection('demoAdd')
    const query = {
        name: 'gua'
    }
    const form = {
        $set: {
            '_deleted' : true
        }
    }
    collection.updateMany(query, form, (error, result)=> {
        collection.find(query).toArray((error, result) => {
             console.log('删除', result)
         })
    })
    callback()
}

// 连接数据库
const connect = async () => {
    // 连接 mongodb 数据库
    const url = mongoUrl()
    MongoClient.connect(url, (error, db) => {
        console.log('老子终于连上了！')
        var data = getWorksList('assistantTeacherWorks',assistantTeacherList).slice(0, 10)


         insert(db, data, () => {
            db.close()
        })

        // find(db, () => {
        //     db.close()
        // })

        // update(db, () => {
        //     db.close()
        // })

        // remove(db, () => {
        //     db.close()
        // })
    })
}

const test = () => {
    connect()
}

if (require.main === module) {
    test()
}
