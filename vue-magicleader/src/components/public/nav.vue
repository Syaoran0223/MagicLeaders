<template lang="html">
    <div id='nav'>
        <div id='table-nav'class=" hidden-sm hidden-xs" >
            <div class="nav-bg"></div>
            <div class="nav-container">
                <div class="nav-logo" @mouseenter='logoEnter()' @mouseleave='logoLeave()'>
                    <router-link :to="navLogo.path">
                        <li><img class='logo' :src="navLogo.img" alt=""></li>
                    </router-link>
                </div>
                <div class="nav-list" v-for='n in navlist'>
                    <router-link :to="n.path">
                        <li>{{ n.title }} </li>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- 移动端 -->
        <div class="mobile-nav-container hidden-lg hidden-md" @click="mNavShow = !mNavShow">
            <div class="mobile-nav-title">
                MagicLeader
            </div>
            <div class="mobile-nav ">
                <el-collapse-transition>
                    <div v-show="mNavShow">
                        <div class="mobile-nav-list">
                            <router-link to="/">
                                <li> 首页 </li>
                            </router-link>
                        </div>
                        <div class="mobile-nav-list" v-for='n in navlist'>

                            <router-link :to="n.path">
                                <li>{{ n.title }} </li>
                            </router-link>
                        </div>
                    </div>
                </el-collapse-transition>

            </div>
        </div>
        <div class="" v-show='mNavShow'>
            <div class="mobile-nav-bg"  @click='mNavShow = !mNavShow'>
            </div>
        </div>


  </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mNavShow: false,
            // show3: true,
            navLogo: {
                img:'static/images/public/logo.png',
                path: '/',
            },
            navlist: [
                {
                    title: '公司介绍',
                    path: '/about',
                },
                {
                    title: '师资介绍',
                    path: '/teacher/home',
                },
                {
                    title: '招班动态',
                    path: '/admissions',
                },
                {
                    title: '学生作品',
                    path: '/studentList/student2d',
                },
                {
                    title: '助教作品',
                    path: '/assistantTeacher',
                },
                {
                    title: '教学环境',
                    path: '/education',
                },
            ],
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        logoEnter() {
            let logo = document.querySelector('.logo')
            logo.src = 'static/images/public/logoHover.png'
        },
        logoLeave() {
            let logo = document.querySelector('.logo')
            logo.src = 'static/images/public/logo.png'
        },
        backNav() {
            this.mNavShow = false
        }

    }
}
</script>

<style lang="css">
    #table-nav {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #323232;
        color: white;
        position: relative;
        font-size: 14px;
        font-weight: bolder;
    }
    #table-nav a {
        color: white;
        text-decoration: none;
        width: 100%;
        /*font-size: 10px;*/
    }
    #table-nav a:hover {
        color: #B8B8B8;
        /*background: #B8B8B8;*/
    }
    #table-nav li {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
    }
    .nav-logo {
        height: 16px;
        width: 100%;
        text-align: center;
    }
    .nav-logo img {
        height: 16px;
        width: 70px;
        line-height: 40px;
        /*background: red;*/
    }
    .nav-container {
        position: absolute;
        height: 40px;
        width: 70%;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
    }
    .nav-list {
        color: white;
        width: 100%;
        text-align: center;
    }

    /* 移动端导航栏 */
    .mobile-nav-container {
        background: black;
        color: white;
        /*height: 40px;*/
        /*line-height: 40px;*/
        font-size: 14px;
        text-align: center;
        list-style: none;
        font-weight: bolder;
    }

    .mobile-nav-container a {
        color: white;
        text-decoration: none;
    }
    .mobile-nav-title {
        height: 30px;
        line-height: 30px;
        /*font-weight: bolder;*/
    }
    .mobile-nav {
        position: absolute;
        z-index: 1000;
        text-align: center;
        width: 100%;
        background: black;
        z-index: 10000;
    }

    .mobile-nav-list {
        height: 30px;
        line-height: 30px;
        z-index: 150;
    }
    .mobile-nav {
        opacity: 0.85;
    }
    /* 点击空白返回顶部 */
    .mobile-nav-bg {
        position: absolute;
        /*bottom: 0;*/
        height: 2000px;
        width: 100%;
        bottom: 0;
        /*background: red;*/
        /*visibility: hidden;*/
        z-index: 9999;
        opacity: 0;

    }


</style>
