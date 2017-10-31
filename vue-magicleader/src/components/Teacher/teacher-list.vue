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
                        {{ teacher.name }}
                    </div>
                    <div class="teacher-weibo">
                        <a :href="weibo">{{ weibo }}</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="teacher-work-list">
            <div class="teacher-work" v-for='t in teacher.thumb'>
                <img :src="t" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '',
            isHome: true,
            homeImg: '',
            teacherList: '',
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
        }
    },
    created() {
        this.formatHomeImg()
        this.formatTeacherList()


    },
    mounted() {
        // this.formatTeacherList()

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
        watchRoute(id) {
            let teacherList = this.$store.state.teacherImgList
            console.log('debug teacherList', teacherList);
            if (id == 'home' || id == 'tm') {
                console.log('home || tm', id);
                this.teacher = ''
                this.isHome = true
            } else {
                this.isHome = false
                this.teacher = teacherList[id]
                // console.log('teacherList', this.teacherList);
                // console.log('this.teacher', this.teacher);
                // this.name = id
                this.weibo = this.teacherWeibo[id]
            }
            console.log('this.isHome' , this.isHome);
        }
    },
    beforeUpdate() {
        let id = this.id
        console.log('beforeUpdate', this.id);
        this.watchRoute(id)

    },
    watch: {
        $route() {
            // 监听路由 替换内容
            let path = this.$route.path
            console.log('watch path', path);
            let id = this.$route.params.id
            if (path.includes('teacher')) {
                this.id = id
                this.watchRoute(id)
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
    #id-teacherList img  {
        width: 100%;
        height: 100%;
    }

    .teeacher-home {
        width: 100%;
        height: 100%;
    }
    .teacher-contianer  {
        margin: 0 auto;
    }
    .teacher-banner-container {
        position: relative;
    }
    .teacher-banner {


    }
    .teacher-info {
        position: absolute;
        left: 0;
        bottom:3em;
        width: 100%;
        text-align: center;
        color: white;
        font-size: 10px;
    }
    .teacher-avatar {
        margin: 0 auto;
        width: 170px;
        height: 170px;
        /*width: 21rem;*/
    }
    .teacher-name {
        font-size: 1.8em;
    }
    .teacher-weibo {
        color: blue;
        height: 16px;
        line-height: 16px;
        font-weight: bolder;
        font-size: 1.6rem;
    }
    .teacher-work-list {
        display: flex;
    }
    .teacher-work {
        width: 100%;
    }
    .teacher-work img{
        width: 100%;
    }

</style>
