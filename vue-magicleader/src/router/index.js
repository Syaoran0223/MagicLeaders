import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import About from '@/components/About/About'
import Teacher from '@/components/Teacher/Teacher'
import TeacherHome from '@/components/Teacher/teacher-home'
import TeacherList from '@/components/Teacher/teacher-list'
import Teacher73 from '@/components/Teacher/73'
// 学生作品列表
import StudentList from '@/components/Student/StudentList'
// 学生作品 2d
import Student2d from '@/components/Student/Student2d'
// 学生作品 3d
import Student3d from '@/components/Student/Student3d'
// 助教作品
import AssistantTeacher from '@/components/AssistantTeacher/AssistantTeacher'
// 教学环境
import Education from '@/components/Education/Education'
// 招班动态
import Admissions from '@/components/Admissions/Admissions'

// 更新标题 API
import changeTitle from '@/components/API/changeTitle'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                title: '曼奇立德'
            },
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            meta: {
                title: '公司介绍'
            },
        },
        {
            path: '/teacher/:id',
            name: 'Teacher',
            component: Teacher,
            meta: {
                title: '师资介绍'
            },
            // children: [
            //     {
            //         path: 'home',
            //         name: 'teacherHome',
            //         component: TeacherHome,
            //     },
            //     {
            //         path: '73',
            //         name: 'teacher73',
            //         component: Teacher73,
            //     },
            // ]
        },
        {
            path: '/studentList',
            name: 'studentList',
            component: StudentList,meta: {
                title: '学生作品'
            },
            children: [
                {
                    path: 'student2d',
                    name: 'student2d',
                    component: Student2d,
                    meta: {
                        title: '2D研修班'
                    },
                },
                {
                    path: 'student3d',
                    name: 'student3d',
                    component: Student3d,
                    meta: {
                        title: '3D艺核班'
                    },
                },

            ]
        },
        {
            path: '/assistantTeacher',
            name: 'AssistantTeacher',
            component: AssistantTeacher,
            meta: {
                title: '助教作品'
            },
        },
        {
            path: '/education',
            name: 'Education',
            component: Education,
            meta: {
                title: '教学环境'
            },
        },
        {
            path: '/admissions',
            name: 'Admissions',
            component: Admissions,
            meta: {
                title: '招班动态'
            },
        },
        {
          path:'*',
          redirect: '/'
      },

    ]
})
// 页面自动更新标题
　router.beforeEach((to, from, next) => {
    changeTitle(to.meta.title);
    // document.title = title;

    next();
});

export default router
