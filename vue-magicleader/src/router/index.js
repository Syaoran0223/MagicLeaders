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

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/teacher/:id',
            name: 'Teacher',
            component: Teacher,
            children: [
                {
                    path: 'home',
                    name: 'teacherHome',
                    component: TeacherHome,
                },
                {
                    path: '73',
                    name: 'teacher73',
                    component: Teacher73,
                },
            ]
        },
        {
            path: '/studentList',
            name: 'studentList',
            component: StudentList,
            children: [
                {
                    path: 'student2d',
                    name: 'student2d',
                    component: Student2d,
                },
                {
                    path: 'student3d',
                    name: 'student3d',
                    component: Student3d,
                },
            ]
        },
        {
            path: '/assistantTeacher',
            name: 'AssistantTeacher',
            component: AssistantTeacher,
        },
        {
            path: '/education',
            name: 'Education',
            component: Education,
        },
        {
            path: '/admissions',
            name: 'Admissions',
            component: Admissions,
        },
        {
          path:'*',
          redirect: '/'
      },

    ]
})
