<template lang="html">
    <div id='nav'>
        <div class="nav-bg"></div>
        <div class="nav-container">
            <div class="nav-logo">
                <router-link :to="navLogo.path">
                    <li><img :src="navLogo.img" alt=""></li>
                </router-link>
            </div>
            <div class="nav-list" v-for='n in navlist'>
                <router-link :to="n.path">
                    <li>{{ n.title }} </li></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
                    title: '招办动态',
                    path: '/admissions',
                },
                {
                    title: '学生作品',
                    path: '/studentWork',
                },
                {
                    title: '助教作品',
                    path: '/teacherWork',
                },
                {
                    title: '教学环境',
                    path: '/education',
                },

            ]
        }
    }
}
</script>

<style lang="css">
    #nav {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #323232;
        color: white;
        position: relative;
    }
    #nav a {
        color: white;
        text-decoration: none;
        width: 100%;
        /*font-size: 10px;*/
    }
    #nav a:hover {
        color: #B8B8B8;
        /*background: #B8B8B8;*/
    }
    #nav li {
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

</style>
