<template lang="html">
    <div class="">
        <div id='id-student-nav'>
            <div class="student-nav-container">
                <div class="student-nav-list" v-for='n in navList'>
                    <router-link :to="n.path">
                        <div>{{ n.title }} </div>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- <keep-alive> -->
            <router-view></router-view>
        <!-- </keep-alive> -->
    </div>

</template>

<script>
import student2d from '@/components/Student/Student2d'
import student3d from '@/components/Student/Student3d'
export default {
    data() {
        return {
            path: 'student2d',
            navList: [
                {
                    title: '2D研修班',
                    path: '/studentList/student2d',
                },
                {
                    title: '3D艺核班',
                    path: '/studentList/student3d'
                }
            ],
        }
    },
    updated() {
        let path = this.$route.path
        console.log('切换了页面', path);
        if (path.includes('studentList')) {
            console.log('xx', document.documentElement.clientHeight);
        }



    },
    component: {
        student2d,
        student3d,
    }
}
</script>

<style lang="css">
    #id-student-nav {
        width: 100%;
        background: black;
    }
    #id-student-nav a {
        color: white;
        text-decoration: none;
    }
    #id-student-nav a:hover {
        color: #B8B8B8;
        text-decoration: none;
    }
    .student-nav-container {
        height: 100%;
        width: 15%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        text-align: center;
        background: black;
    }
    .student-nav-list {
        height: 40px;
        background: black;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        text-decoration: none;
    }
</style>
