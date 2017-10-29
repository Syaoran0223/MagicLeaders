import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import About from '@/components/About/About'
import Teacher from '@/components/Teacher/Teacher'
import Teacher73 from '@/components/Teacher/73'
import Education from '@/components/Education/Education'
import Admissions from '@/components/Admissions/Admissions'

Vue.use(Router)

export default new Router({
    mode: 'history',
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
            path: '/teacher',
            name: 'Teacher',
            component: Teacher,
            children: [
                {
                    path:'/home',
                    component: Teacher73,
                },
                {
                    path:'/73',
                    component: Teacher73,
                },
            ]
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
