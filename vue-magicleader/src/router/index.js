import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import About from '@/components/About/About'
import Teacher from '@/components/Teacher/Teacher'
import TeacherHome from '@/components/Teacher/teacher-home'
import TeacherList from '@/components/Teacher/teacher-list'
import Education from '@/components/Education/Education'
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

    ]
})
