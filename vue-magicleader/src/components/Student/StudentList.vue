<template lang="html">
  <div class="">
    <div id='id-student-nav'>
      <div class="student-nav-container ">
        <div class="student-nav-list col-md-1 col-lg-1" v-for='n in navList'>
          <router-link :to="n.path">
            <div>{{ n.title }}</div>
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
  import studentbase from '@/components/Student/StudentBase'

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
            title: '2D基础班',
            path: '/studentList/studentbase',
          },
          {
            title: '3D角色班',
            path: '/studentList/student3d',
          },

        ],
      }
    },
    updated() {
//      let path = this.$route.path
//      this.log('切换了页面', path)
//      if (path.includes('studentList')) {
//        this.log('xx', document.documentElement.clientHeight)
//      }


    },
    component: {
      student2d,
      student3d,
      studentbase,
    },
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
    margin: 0 auto;
    display: flex;
    justify-content: center;
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
    font-weight: bolder;
  }

  .teacherNav-container-title {
    font-weight: bolder;
  }
</style>
