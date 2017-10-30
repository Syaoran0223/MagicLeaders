<template lang="html">
    <div id='id-teacherList'>
        <div class="teacher-home" v-show='isHome == true'>
            <img :src='homeImg' alt="">
        </div>
        <div class="teacher-contianer" v-show='isHome ==false '>
            <div class="teacher-banner-container">
                <div class="teacher-banner">
                    <img :src="teacher.banner" alt="">
                </div>
                <div class="teacher-info">
                    <div class="teacher-avatar">
                        <img :src="teacher.avatar" alt="">
                    </div>
                    <!-- <div class="teacher-name">

                    </div>
                    <div class="teacher-weibo">

                    </div> -->
                </div>
            </div>
        </div>
        <!-- <div class="teacher-work-list">
            <div class="teacher-work" v-for='t in teacher.img'>
                <img :src="t" alt="">
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: '',
            isHome: false,
            homeImg: '',
            teacherList: '',
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
        this.watchRoute()
        this.formatTeacherList()

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
            $.post(url, (res)=> {
                let initData = JSON.parse(res)
                this.teacherList = initData
                this.$store.commit('teacherImgoListSave', initData)
                console.log('ajax', initData);
            })
        },
        watchRoute(id='73') {
            console.log('id', id)
            if (id == 'home' || id == 'tm') {
                console.log('home || tm', id);
                this.teacher = ''
                this.isHome = true
            } else {
                this.isHome = false
                this.teacher = this.teacherList[id]
                console.log('teacherList', this.teacherList);
                console.log('this.teacher', this.teacher);
                // this.name = id
                // this.weibo = this.teacherWeibo[id]
            }
            console.log('this.isHome' , this.isHome);
        }
    },
    watch: {
        $route() {
            // 监听路由 替换内容
            let id = this.$route.params.id
            this.id = id
            this.watchRoute(id)
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
    .teacher-info {

    }
</style>
