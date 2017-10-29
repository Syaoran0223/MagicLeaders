<template>
    <div id="id-teacher">
        <teacher-nav></teacher-nav>
        <div class="teacher-container">
            <router-view/>
        </div>
    </div>

</template>

<script>
import TeacherNav from '@/components/Teacher/teacherNav'
export default {
    data () {
      return {

      }
    },
    components: {
        'teacher-nav':TeacherNav,
    }
  }
</script>
<style>
    .teacher-container {
        width: 80%;
        margin: 0 auto;
    }
    .teacher-container img {
        width: 100%;
        height: 100%;
    }
</style>
