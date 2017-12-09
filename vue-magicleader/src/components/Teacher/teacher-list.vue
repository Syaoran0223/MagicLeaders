<template lang="html">
    <div id='id-teacherList'>



        <!-- PC -->
        <!-- <div class=""v-for='t in teacherList[teacher.name].banner'> -->
            <!-- <img :src="t.src" alt=""> -->
        <!-- </div> -->
        <div class="teacherList-table hidden-xs hidden-sm">
            <div class="teacher-home" v-if='isHome == true'>
                <img :src='homeImg' alt="">
            </div>
            <div class="" v-else>
                <!-- banner 开始 -->
                <div class="teacher-table-banner">
                    <div class="teacher-swiper-container" id='teacher-swiper-container'>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide " v-for='t in banner'>
                                <img :src="t" alt="">
                            </div>
                        </div>
                        <!-- <div class="swiper-pagination"></div> -->
                        <!-- 教师介绍 -->
                        <div class="table-teacherInfo">
                            <div class="table-teacherInfo-container">
                                <div class="table-teacher-avatar">
                                    <img :src="teacher.avatar" alt="">
                                </div>
                                <div class="table-teacher-name">
                                    {{ teacherName[teacher.name] }}
                                </div>
                                <div class="table-teacher-info">
                                    <p class="table-teacher-info-detail" v-for='i in teacherInfo[teacher.name]'>
                                        {{i}}
                                    </p>

                                </div>
                                <div class="table-teacher-weibo">
                                    <a :href="weibo">{{ weibo }}</a>
                                </div>
                                <div class="table-teacher-logo">
                                    <img src="static/images/teacher/public/teacher-logo.png" alt="">
                                </div>
                            </div>
                            <div class="table-teacherInfo-bg"></div>
                        </div>
                        <!-- 教师介绍结束 -->
                    </div>
                </div>
                <!-- banner 结束 -->
                <div class="teacher-work-title" v-if='isHome == false'>
                    作  品  节  选
                </div>
                <!-- 作品 -->
                <div class="teacher-waterfall-container">
                    <waterfall :line-gap="500" :max-line-gap="800" :min-line-gap="400" :watch="teacher.img" auto-resize='true'>
                        <div class="">
                            <waterfall-slot class='waterfall-slot'
                                v-for="(s, index) in teacher.img"
                                :width="s.w"
                                :height="s.h"
                                :order="index"
                                :key="index"
                              >
                              <div class="img-box">
                                    <img class="preview-img"  :src="s.src"  @click="$preview.open(index, teacher.img)">
                              </div>
                            </waterfall-slot>
                    </div>
                    </waterfall>
                </div>
            </div>
        </div>
        <!-- 移动端 -->
        <div class="teacherList-mobile hidden-lg hidden-md">
            <div class="teacher-home" v-if='isHome == true'>
                <img :src='homeImg' alt="">
            </div>
            <div class="teacher-contianer" v-else>
                <div class="teacher-banner-container">
                    <div class="teacher-banner">
                        <img :src="teacher.banner[0]" alt="">
                        <!-- <img :src="bannerbg" alt=""> -->
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
                <span class="teacher-work" v-for='(t, index) in teacher.mt':width="t.w"
                :height="t.h"
                :order="index"
                :key="index" >
                    <img class="preview-img"  :src="t.src"  @click="$preview.open(index, teacher.m)">
                </span>
            </div>
        </div>
    </div>



            <!-- <div class="teacher-work-list ">
                <span class="teacher-work" v-for='(t, index) in teacher.thumb' >
                    <img class="preview-img"  :src="t.src"  @click="$preview.open(index, teacher.img)">
                </span>
            </div> -->
            <!-- </div>

        </div> -->

    </div>
</template>

<script>
// 引入无限加载插件
import InfiniteLoading from 'vue-infinite-loading';
// 引入瀑布流插件
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
export default {
    data() {
        return {
            id: '',
            isHome: true,
            homeImg: 'static/images/teacher/public/index.jpg',
            mobileTeacherList: {
              "73": {
                "img": [
                    {src: 'static/images/teacher/73/op-73-1.jpg',
                    h: '1200',
                    w: '768'},
                  "static/images/teacher/73/op-73-2.jpg",
                  "static/images/teacher/73/op-73-3.jpg",
                  "static/images/teacher/73/op-73-4.jpg",
                  "static/images/teacher/73/op-73-5.jpg"
                ],
                "thumb": [
                  {src: 'static/images/teacher/73/thumb-73-1.jpg',
                  h: '1200',
                  w: '768'},

                  "static/images/teacher/73/thumb-73-2.jpg",
                  "static/images/teacher/73/thumb-73-3.jpg",
                  "static/images/teacher/73/thumb-73-4.jpg",
                  "static/images/teacher/73/thumb-73-5.jpg"
                ],
                "banner": "static/images/teacher/73/73banner.jpg",
                "avatar": "static/images/teacher/73/avatar-73.png",
                "name": "73"
              },
              "cy": {
                "img": [
                  "static/images/teacher/cy/op-cy-1.jpg"
                ],
                "thumb": [
                  "static/images/teacher/cy/thumb-cy-03.jpg",
                  "static/images/teacher/cy/thumb-cy-05.jpg",
                  "static/images/teacher/cy/thumb-cy-06.jpg",
                  "static/images/teacher/cy/thumb-cy-07.jpg",
                  "static/images/teacher/cy/thumb-cy-08.jpg",
                  "static/images/teacher/cy/thumb-cy-09.jpg",
                  "static/images/teacher/cy/thumb-cy-10.jpg",
                  "static/images/teacher/cy/thumb-cy-11.jpg",
                  "static/images/teacher/cy/thumb-cy-12.jpg"
                ],
                "avatar": "static/images/teacher/cy/avatar-cy.png",
                "banner": "static/images/teacher/cy/banner-cy.jpg",
                "name": "cy"
              },
              "gd": {
                "img": [
                  "static/images/teacher/gd/op-gd-01.jpg",
                  "static/images/teacher/gd/op-gd-02.jpg",
                  "static/images/teacher/gd/op-gd-03.jpg",
                  "static/images/teacher/gd/op-gd-04.jpg",
                  "static/images/teacher/gd/op-gd-05.jpg"
                ],
                "thumb": [
                  "static/images/teacher/gd/thumb-gd-01.jpg",
                  "static/images/teacher/gd/thumb-gd-02.jpg",
                  "static/images/teacher/gd/thumb-gd-03.jpg",
                  "static/images/teacher/gd/thumb-gd-04.jpg",
                  "static/images/teacher/gd/thumb-gd-05.jpg"
                ],
                "avatar": "static/images/teacher/gd/avatar-gd.png",
                "banner": "static/images/teacher/gd/gdbanner.jpg",
                "name": "gd"
              },
              "tm": {
                "img": [],
                "thumb": [],
                "avatar": "static/images/teacher/tm/avatar-tm.png",
                "name": "tm"
              },
              "xy": {
                "img": [
                  "static/images/teacher/xy/op-xy-01.jpg",
                  "static/images/teacher/xy/op-xy-02.jpg",
                  "static/images/teacher/xy/op-xy-03.jpg",
                  "static/images/teacher/xy/op-xy-04.jpg",
                  "static/images/teacher/xy/op-xy-05.jpg"
                ],
                "thumb": [
                  "static/images/teacher/xy/thumb-xy-01.jpg",
                  "static/images/teacher/xy/thumb-xy-02.jpg",
                  "static/images/teacher/xy/thumb-xy-03.jpg",
                  "static/images/teacher/xy/thumb-xy-04.jpg",
                  "static/images/teacher/xy/thumb-xy-05.jpg"
                ],
                "avatar": "static/images/teacher/xy/avatar-xy.png",
                "banner": "static/images/teacher/xy/xybanner.jpg",
                "name": "xy"
              },
              "yz": {
                "img": [
                  "static/images/teacher/yz/op-yz-01.jpg",
                  "static/images/teacher/yz/op-yz-02.jpg",
                  "static/images/teacher/yz/op-yz-03.jpg",
                  "static/images/teacher/yz/op-yz-04.jpg",
                  "static/images/teacher/yz/op-yz-05.jpg"
                ],
                "thumb": [
                  "static/images/teacher/yz/thumb-yz-01.jpg",
                  "static/images/teacher/yz/thumb-yz-02.jpg",
                  "static/images/teacher/yz/thumb-yz-03.jpg",
                  "static/images/teacher/yz/thumb-yz-04.jpg",
                  "static/images/teacher/yz/thumb-yz-05.jpg"
                ],
                "avatar": "static/images/teacher/yz/avatar-yz.png",
                "banner": "static/images/teacher/yz/yzbanner.jpg",
                "name": "yz"
              }
            },
            // 总教师信息列表
            teacherList: {},
            thumb: {},
            banner: '',
            // 页面显示的教师信息
            teacher: '',
            name: '',
            weibo: '',
            banner: '',
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
            teacherInfo: {
                '73': ['曼奇立德高级讲师','资深游戏原画师/CG艺术家'],
                'yz': ['曼奇立德高级讲师','7年的游戏制作经验。曾长期担任主美职责，具有丰富的研发经验，擅长角色设计，插图制作等。'],
                'gd': ['曼奇立德高级讲师','好好画画'],
                'xy': ['曼奇立德高级讲师','从业经验丰富，在游戏美术的技术领域拥有大量的积累，精通各种3D游戏制作软件和商业渲染引擎，同时擅长角色制作和场景制作。'],
                'tm': '',
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
    updated() {
        this.bannerSwiper()
    },
    mounted() {
        this.formatTeacherList()
            this.bannerSwiper()

        // this.bannerSwiper()
        // this.formatTeacherList()
        // banner轮播图
        // this.getJsonFile()
    },
    methods: {
        bannerSwiper:()=> {
            new Swiper('#teacher-swiper-container', {
                pagination: '.swiper-pagination',
                // nextButton: '.swiper-button-next',
                // prevButton: '.swiper-button-prev',
                // wrapperClass: 'teacher-swiper-wrapper',
                // slideClass: 'teacher-swiper-slide',
                observer:true,
                observeParents:true,
                // paginationClickable: true,
                spaceBetween: 0,
                speed: 1000,
                effect : 'fade',
                crossFade:true,
                preloadImages: true,
                updateOnImagesReady : true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false,
                loop : true,
                initialSlide: 1,
            });
            console.log('执行了', );
        },
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
                id = this.$route.params.id
                console.log('新 id', id);
                this.watchRoute(id)
                // this.bannerSwiper()
                return
            }
            $.post(url, (res)=> {
                let initData = JSON.parse(res)
                this.teacherList = initData
                this.$store.commit('teacherImgListSave', initData)
                console.log('ajax', initData);
                console.log('debug id', id);
                this.watchRoute(id)
                // this.bannerSwiper()

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
                console.log('this.teacher', this.teacher);
                this.banner = this.teacher.banner
                this.weibo = this.teacherWeibo[id]
            }
            console.log('this.isHome' , this.isHome);
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
            }
        },
    },
    components: {
        Waterfall,
        WaterfallSlot,
        InfiniteLoading,
    },
}
</script>

<style lang="css">
    #id-teacherList {
        margin: 0;
        padding: 0;
        position: relative;
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
    .teacher-banner{
        position: relative;
    }
    .teacher-banner img {
        z-index: 100;
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
        /*font-weight: bolder;*/
        font-size: 1.6rem;
        color: #26A3DD;
    }
    .teacher-weibo a {
        color: #26A3DD;
    }
    /* PC端 banner轮播图 */
    .teacher-table-banner {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .teacher-swiper-container {
        width: 100%;
        height: 100%;
        /*width: 200px;*/
        /*height: 200px;*/
        overflow-x: hidden;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
    }
    .swiper-container img {
        width: 100%;
        height: 100%;
    }
    /* PC教师信息 */
    .table-teacherInfo {
        position: absolute;
        left: 7%;
        top: 0;
        width: 20rem;
        height: 100%;
        z-index: 500;
    }
    .table-teacherInfo-container {
        position: absolute;
        width: 80%;
        height: 80%;
        top: 10%;
        /*background: lightblue;*/
        left: 50%;
        transform: translateX(-50%);
        z-index: 600;
    }
    .table-teacher-avatar {
        position: relative;
        width: 9rem;
        left: 50%;
        transform: translateX(-50%);
        opacity: 1;
        z-index: 501;
    }
    .table-teacher-avatar img {
        width: 100%;
    }
    .table-teacher-name {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 501;
        position: relative;
        left: 50%;
        text-align: center;
        transform: translateX(-50%);
    }
    .table-teacher-info {
        color: white;
        text-align:center;
        font-size: 0.8rem;
        margin-top: 1rem;
    }
    .table-teacher-info p+p {
        margin-top: 1rem;
    }
    .table-teacher-weibo {
        position: relative;
        text-align: center;
        margin-top: 1rem;
    }
    .table-teacher-logo {
        width: 10rem;
        height: 7rem;
        /*position: absolute;*/
        position: relative;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .table-teacher-logo img{
        width: 100%;
    }
    /* PC banner 背景*/
    .table-teacherInfo-bg {
        position: absolute;
        top: 0;
        left: 0x;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.6;
        z-index: 500;
    }


    /* 作品标题 */
    .teacher-work-title {
        position: relative;
        width: 100%;
        text-align: center;
        background: #373434;
        color: white;
        height: 3.2rem;
        line-height: 3.2rem;
        font-size: 1.8rem;
        /*font-weight: bolder;*/
    }
    /* 移动端作品列表 */
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
    /* Pc端作品列表 */
    .teacher-waterfall-container {
        position: relative;
        width: 100%;
        height: 100%;
        background: #302E2E;
        /*background: #292929;*/
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .vue-waterfall{
        width: 79%;
        margin: 0 auto;
    }
    .img-box {
        margin: 10px;
        border: 5px solid white;
        /*background: red;*/

    }
    .waterfall-slot {
        margin: 10px;
    }
    .waterfall-slot img {
        z-index: 100;
        width: 100%;
    }
    .teacherList-mobile  {
        display: none;
    }
    @media only screen and (max-width:800px) {
        .teacherList-mobile  {
            display: block;
        }
        /*.teacherList-table {
            display: none;
        }*/
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
