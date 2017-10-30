<template>
    <div id="id-teacher">
        <teacher-nav></teacher-nav>
        <keep-alive>
            <teacher-list></teacher-list>
        </keep-alive>
    </div>

</template>

<script>
import TeacherNav from '@/components/Teacher/teacherNav'
import TeacherList from '@/components/Teacher/teacher-list'
export default {
    data () {
      return {
            teacherList: '',
            test: '111',
      }
    },
    mounted() {
        // this.params()
    },
    methods: {
        params() {
            console.log('params', this.$route)
        },
    },
    components: {
        'teacher-nav':TeacherNav,
        'teacher-list': TeacherList,
    },
}
</script>
<style>
    #id-teacher {
        margin: 0 auto;
    }

</style>
