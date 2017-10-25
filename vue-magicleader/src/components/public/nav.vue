<template lang="html">
    <div class="nav">
        <div class="nav-list" v-for='n in navlist'>
            <router-link :to="n.path">{{n.title}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navlist: [
                {
                    title: '首页',
                    path: '/1111',
                },
                {
                    title: '公司介绍',
                    path: '/',
                },
                {
                    title: '师资介绍',
                    path: '/',
                },
                {
                    title: '招办动态',
                    path: '/',
                },
                {
                    title: '学生作品',
                    path: '/',
                },
                {
                    title: '助教作品',
                    path: '/',
                },
                {
                    title: '教学环境',
                    path: '/',
                },

            ]
        }
    }
}
</script>

<style lang="css">
    .nav {
        display: flex;
        justify-content: space-around;
        width: px;
        height: 40px;
        line-height: 40px;
        background: black;
    }
    .nav a {
        color: white;
        text-decoration: none;
        /*font-size: 10px;*/
    }
    .nav a:hover {
        color: #B8B8B8;
    }
    .nav-list {
        color: white;
    }

</style>
