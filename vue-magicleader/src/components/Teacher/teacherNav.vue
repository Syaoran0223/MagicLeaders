<template lang="html">
    <div id='id-teacherNav' class="container-fluid">
        <div class="teacherNav-container col-md-5 col-lg-4 col-sm-6 col-xs-11">
            <div class="teacherNav-container-part" v-for='(t, index) in teacherNavList' >
                <div class="teacher-animation" @mouseenter='mouseEnter(t.teacherId, index)' @mouseleave='mouseLeave(t.teacherId, index)'>
                <router-link :to="t.path" >
                    <div class="teacherNav-container-img" >
                        <img :src="t.imgSrc" alt="">
                        <div class="">
                            <transition name='slide-fade'>
                                <div class="teacherNav-animation-container " v-if='t.show'>
                                    <div class="teacherNav-animation-bg"></div>
                                    <div class="teacherNav-animation-type">
                                        {{ t.type}}
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="teacherNav-container-title">
                        {{ t.title}}
                    </div>
                    <div class="teacherNav-part-bg">

                    </div>
                </router-link>
            </div>
            </div>
            <!-- 动画测试 -->
            <!-- <div class="" @mouseenter='test =true' @mouseleave='show = false'>
                <transition name="fade">
                    <p v-if="show">hell1111111111o</p>
                </transition>
            </div> -->
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            test: true,
            // show: true,
            teacherNavList: [
                {
                    imgSrc: this.$store.state.imgPath + '/teacher/73/avatar-73.png',
                    title: '73',
                    path: '/teacher/73',
                    type: '2D',
                    show: false,
                    teacherId: 0,

                },
                {
                    imgSrc: this.$store.state.imgPath + '/teacher/yz/avatar-yz.png',
                    title: 'YZ',
                    path: '/teacher/yz',
                    type: '2D',
                    show: false,
                    teacherId: 1,
                },
                {
                    imgSrc: this.$store.state.imgPath + '/teacher/gd/avatar-gd.png',
                    title: '調調',
                    path: '/teacher/gd',
                    type: '2D',
                    show: false,
                    teacherId: 2,
                },
                {
                    imgSrc: this.$store.state.imgPath + '/teacher/xy/avatar-xy.png',
                    title: '逍遥',
                    path: '/teacher/xy',
                    type: '3D',
                    show: false,
                    teacherId: 3,
                },
                {
                    imgSrc: this.$store.state.imgPath + '/teacher/tm/avatar-tm.png',
                    title: 'Mr.TM',
                    path: '/teacher/home',
                    type: '3D',
                    show: false,
                    teacherId: 4,

                },
            ],
        }
    },
    mounted() {

    },
    methods: {
        mouseEnter(id, index) {
            this.teacherNavList.forEach((t)=> {
                if (id === t.teacherId) {
                    t.show = true
                } else {
                    t.show = false
                }
            })
        },
        mouseLeave(id, index) {
            this.teacherNavList.forEach((t) => {
                    t.show = false
            })
        }
    },
}
</script>

<style lang="css">
    #id-teacherNav {
        height: 90px;
        width: 100%;
        background: black;
        position: relative;
    }
    .teacherNav-container {
        /*width: 30%;*/
        color: white;
        margin: 0 auto;
        text-align: center;
        display: flex;
        justify-content: space-around;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .teacherNav-container-part {
        width: 50px;
        height: 70px;
        margin: 15px auto 5px auto;
        position: relative;

    }
    .teacherNav-container-part a {
        color: white;
        text-decoration: none;
    }
    .teacherNav-container-title {
        font-size: 14px;
        /*font-weight: bold;*/
    }
    .teacherNav-container-part a:hover .teacherNav-container-title{
        color: #B8B8B8;
        text-decoration: none;
    }
    .teacherNav-container-img {
        height: 50px;
        width: 50px;
        position: relative;
    }

    .teacherNav-container-img img {
        width: 100%;
        height: 100%;
    }
    .teacherNav-animation-container {
        position: absolute;
        top: -0px;
    }
    .teacherNav-animation-bg {
        height: 50px;
        width: 50px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        background: black;
        border-radius: 50%;
        opacity: 0.5;
    }
    /* 动画内容 */
    .teacherNav-animation-type {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        line-height: 50px;
        z-index: 120;
        font-weight: bolder;
        color:#66FFFF;
    }
    .teacherNav-part-bg {

    }


    .teacher-animation {
        position: absolute;;
    }
    /* vue 动画 */
    .slide-fade-enter-active {
      transition: all 0.5s ;
      position: absolute;
      top: 0;
    }
    .slide-fade-leave-active {
      transition: all 0.5s ;
      position: absolute;
      top: 0;
    }
    .slide-fade-enter
    /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateX(-10px);
      opacity: 0;
      position: absolute;
      top: 0;
    }
     .slide-fade-leave-to {
         transform: translateX(10px);
         opacity: 0;
         position: absolute;
         top: 0;
     }




</style>
