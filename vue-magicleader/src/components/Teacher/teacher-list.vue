<template lang="html">
    <div id='id-teacherList'>
        <div class="teacher-home" v-if='isHome == true'>
            <img :src='homeImg' alt="">
        </div>
        <div class="teacher-contianer" v-show='isHome == false'>
            <div class="teacher-banner-container">
                <div class="teacher-banner">
                    <img :src="teacher.banner" alt="">
                </div>
                <div class="teacher-info">
                    <div class="teacher-avatar">
                        <img :src="teacher.avatar" alt="">
                    </div>
                    <div class="teacher-name">
                        {{ teacherName[teacher.name] }}
                    </div>
                    <div class="teacher-weibo">
                        <a :href="weibo">{{ weibo }}</a>
                    </div>
                </div>
                <div class="teahcer-bannerbg"></div>
            </div>
        </div>
        <div class="teacher-work-title" v-if='isHome == false'>
            Exhibition of works
        </div>
        <div class="teacher-work-list ">
            <span class="teacher-work" v-for='(t, index) in teacher.thumb' >
                <!-- <img :src="t.src" alt=""> -->
                <img class="preview-img"  :src="t.src"  @click="$preview.open(index, teacher.img)">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '',
            isHome: true,
            homeImg: 'static/images/teacher/public/index.jpg',
            // teacherList: {
            //   "73": {
            //     "img": [
            //       "static/images/teacher/73/op-73-1.jpg",
            //       "static/images/teacher/73/op-73-2.jpg",
            //       "static/images/teacher/73/op-73-3.jpg",
            //       "static/images/teacher/73/op-73-4.jpg",
            //       "static/images/teacher/73/op-73-5.jpg"
            //     ],
            //     "thumb": [
            //       "static/images/teacher/73/thumb-73-1.jpg",
            //       "static/images/teacher/73/thumb-73-2.jpg",
            //       "static/images/teacher/73/thumb-73-3.jpg",
            //       "static/images/teacher/73/thumb-73-4.jpg",
            //       "static/images/teacher/73/thumb-73-5.jpg"
            //     ],
            //     "banner": "static/images/teacher/73/73banner.jpg",
            //     "avatar": "static/images/teacher/73/avatar-73.png",
            //     "name": "73"
            //   },
            //   "cy": {
            //     "img": [
            //       "static/images/teacher/cy/op-cy-1.jpg"
            //     ],
            //     "thumb": [
            //       "static/images/teacher/cy/thumb-cy-03.jpg",
            //       "static/images/teacher/cy/thumb-cy-05.jpg",
            //       "static/images/teacher/cy/thumb-cy-06.jpg",
            //       "static/images/teacher/cy/thumb-cy-07.jpg",
            //       "static/images/teacher/cy/thumb-cy-08.jpg",
            //       "static/images/teacher/cy/thumb-cy-09.jpg",
            //       "static/images/teacher/cy/thumb-cy-10.jpg",
            //       "static/images/teacher/cy/thumb-cy-11.jpg",
            //       "static/images/teacher/cy/thumb-cy-12.jpg"
            //     ],
            //     "avatar": "static/images/teacher/cy/avatar-cy.png",
            //     "banner": "static/images/teacher/cy/banner-cy.jpg",
            //     "name": "cy"
            //   },
            //   "gd": {
            //     "img": [
            //       "static/images/teacher/gd/op-gd-01.jpg",
            //       "static/images/teacher/gd/op-gd-02.jpg",
            //       "static/images/teacher/gd/op-gd-03.jpg",
            //       "static/images/teacher/gd/op-gd-04.jpg",
            //       "static/images/teacher/gd/op-gd-05.jpg"
            //     ],
            //     "thumb": [
            //       "static/images/teacher/gd/thumb-gd-01.jpg",
            //       "static/images/teacher/gd/thumb-gd-02.jpg",
            //       "static/images/teacher/gd/thumb-gd-03.jpg",
            //       "static/images/teacher/gd/thumb-gd-04.jpg",
            //       "static/images/teacher/gd/thumb-gd-05.jpg"
            //     ],
            //     "avatar": "static/images/teacher/gd/avatar-gd.png",
            //     "banner": "static/images/teacher/gd/gdbanner.jpg",
            //     "name": "gd"
            //   },
            //   "tm": {
            //     "img": [],
            //     "thumb": [],
            //     "avatar": "static/images/teacher/tm/avatar-tm.png",
            //     "name": "tm"
            //   },
            //   "xy": {
            //     "img": [
            //       "static/images/teacher/xy/op-xy-01.jpg",
            //       "static/images/teacher/xy/op-xy-02.jpg",
            //       "static/images/teacher/xy/op-xy-03.jpg",
            //       "static/images/teacher/xy/op-xy-04.jpg",
            //       "static/images/teacher/xy/op-xy-05.jpg"
            //     ],
            //     "thumb": [
            //       "static/images/teacher/xy/thumb-xy-01.jpg",
            //       "static/images/teacher/xy/thumb-xy-02.jpg",
            //       "static/images/teacher/xy/thumb-xy-03.jpg",
            //       "static/images/teacher/xy/thumb-xy-04.jpg",
            //       "static/images/teacher/xy/thumb-xy-05.jpg"
            //     ],
            //     "avatar": "static/images/teacher/xy/avatar-xy.png",
            //     "banner": "static/images/teacher/xy/xybanner.jpg",
            //     "name": "xy"
            //   },
            //   "yz": {
            //     "img": [
            //       "static/images/teacher/yz/op-yz-01.jpg",
            //       "static/images/teacher/yz/op-yz-02.jpg",
            //       "static/images/teacher/yz/op-yz-03.jpg",
            //       "static/images/teacher/yz/op-yz-04.jpg",
            //       "static/images/teacher/yz/op-yz-05.jpg"
            //     ],
            //     "thumb": [
            //       "static/images/teacher/yz/thumb-yz-01.jpg",
            //       "static/images/teacher/yz/thumb-yz-02.jpg",
            //       "static/images/teacher/yz/thumb-yz-03.jpg",
            //       "static/images/teacher/yz/thumb-yz-04.jpg",
            //       "static/images/teacher/yz/thumb-yz-05.jpg"
            //     ],
            //     "avatar": "static/images/teacher/yz/avatar-yz.png",
            //     "banner": "static/images/teacher/yz/yzbanner.jpg",
            //     "name": "yz"
            //   }
            // },
            teacherList: {},
            thumb: {},
            teacher: '',
            name: '',
            weibo: '',
            teacherWeibo: {
                '73': 'http://weibo.com/73art',
                'yz': '',
                'gd': 'http://weibo.com/diaodiaotiaotiao',
                'xy': 'https://xjxxx2002.artstation.com/',
                'tm': '',
            },
            teacherName: {
                '73': '73',
                'yz': 'YZ',
                'gd': '調調',
                'xy': '逍遥',
                'tm': 'Mr.Tm',
            },
            bannerbg: 'www.syaoran.cc:3000/images/public/bannerbg.png'
        }
    },
    created() {
        // this.formatHomeImg()
        this.formatTeacherList()

        // 初始化页面, 刷新后跳转到达正确位置
        let path = this.$route.path
        console.log('watch path', path);
        let id = this.$route.params.id
        if (path.includes('/teacher/')) {
            this.id = id
            this.watchRoute(id)
        }
    },
    mounted() {
        this.formatTeacherList()
        // this.getJsonFile()
    },
    methods: {
        formatHomeImg() {
            let state = this.$store.state.imgPath + '/teacher'
            let home = [
                {
                    img: state + '/public/index.jpg'
                },
            ]
            this.homeImg = home[0].img
        },
        formatTeacherList() {
            let url = this.$store.state.path + '/teacherList'
            let teacherImgList = this.$store.state.teacherList
            let id = this.$route.params.id
            console.log('第一次请求ajax', teacherImgList);
            if (teacherImgList != undefined) {
                this.teacherList = teacherImgListSave
                this.watchRoute(id)
                return
            }
            $.post(url, (res)=> {
                let initData = JSON.parse(res)
                this.teacherList = initData
                this.$store.commit('teacherImgListSave', initData)
                console.log('ajax', initData);
                console.log('debug id', id);
                this.watchRoute(id)
            })
        },
        // 监听路由
        watchRoute(id) {
            let teacherList = this.teacherList
            console.log('debug teacherList', teacherList);
            if (id == 'home' || id == 'tm') {
                console.log('home || tm', id);
                this.teacher = ''
                this.isHome = true
            } else {
                this.isHome = false
                this.teacher = teacherList[id]

                // this.thumb = teacherList[id]['thumb']
                // console.log('this.thumb', this.thumb);
                // console.log('teacherList', this.teacherList);
                console.log('this.teacher', this.teacher);
                // this.name = id
                this.weibo = this.teacherWeibo[id]
            }
            console.log('this.isHome' , this.isHome);
        },
        imgSize(event) {
            console.log('this', event.target);
            let img = event.target
            console.log('img', img);
            // let newImg = img.replace('thumb', 'op')
            // console.log('newImg', newImg);
            let width = img.naturalWidth
            let height = img.naturalHeight
            console.log('width', width);
            console.log('height', height);
        },
    },
    watch: {
        $route() {
            // 监听路由 替换内容
            let path = this.$route.path
            console.log('watch path', path);
            let id = this.$route.params.id
            if (path.includes('/teacher/')) {
                this.id = id
                this.watchRoute(id)
                // location.reload()
            }
        }
    }
}
</script>

<style lang="css">
    #id-teacherList {
        margin: 0;
        padding: 0;
    }
    .teacher-banner img  {
        /*width: 100%;*/
        max-height: 600px;
        min-height: 500px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        max-width: 5000px;
    }
    .teeacher-home {
        width: 100%;
        height: 100%;
    }
    .teacher-home img {
        width: 100%;
    }
    .teacher-contianer  {
        margin: 0 auto;

    }
    .teacher-banner-container {
        position: relative;
        width: 100%;
        overflow-x:hidden;
    }
    /* 添加 banner 阴影 */
    /*.teahcer-bannerbg {
        height: 200px;
        background: black;
        width: 100%;
        position: absolute;
        bottom: 0px;
        z-index: 200;
        background: linear-gradient(360deg,black, #ffffff);
        opacity: 0.9;
    }*/
    .teacher-banner{
        position: relative;
    }
    .teacher-banner img {
        z-index: 100;
        /*background-image: url('@/static/images/teacher/public/bannerbg.png')
        background-repeat: repeat-x;
        background-size: 100%, 100%;*/
    }

    .teacher-info {
        position: absolute;
        left: 0;
        bottom:4em;
        width: 100%;
        text-align: center;
        color: white;
        font-size: 10px;
        z-index: 1000;
    }
    .teacher-info img {
        width: 100%;
        height: 100%;
    }
    .teacher-avatar {
        position: relative;
        margin: 0 auto;
        width: 170px;
        height: 170px;
        /*width: 21rem;*/
    }
    .teacher-name {
        position: relative;
        top: 15px;
        font-size: 3.5em;
        font-weight: bolder;
        text-align: center;
        width: 100%;
    }
    .teacher-weibo {
        position: relative;
        top: 25px;
        color: blue;
        height: 16px;
        line-height: 16px;
        font-weight: bolder;
        font-size: 1.6rem;
        color: #26A3DD;
    }
    .teacher-weibo a {
        color: #26A3DD;
    }
    /* 作品标题 */
    .teacher-work-title {
        position: relative;
        width: 100%;
        text-align: center;
        background: #373434;
        color: white;
        height: 3.0rem;
        line-height: 3.0rem;
        font-size: 1.6rem;
        font-weight: bolder;
    }
    /* 作品列表 */
    .teacher-work-list {
        display: flex;
        width: 100%;
    }
    .teacher-work-list span {
        display: inline-block;
    }
    .teacher-work {
        width: 100%;
    }
    .teacher-work img{
        width: 100%;
    }

    .teacher-work:hover {
        cursor: pointer;
    }

    @media only screen and (max-width:800px) {
        .teacher-work-list {
            width: 100%;
            display: block;
        }
        .teacher-work {
            width: 100%;
        }
        .teacher-work img {
            width: 100%;
        }

    }
</style>
