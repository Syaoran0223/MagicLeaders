<template lang="html">
    <div id='id-teacherNav'>
        <div class="teacherNav-container">
            <div class="teacherNav-container-part" v-for='t in teacherNavList' >
                <router-link :to="t.path" >
                    <div class="teacherNav-container-img" >
                        <img :src="t.imgSrc" alt="">
                        <!-- <transition name='slide-fade'> -->
                            <div class="teacherNav-animation-container " v-if='show'>
                                <div class="teacherNav-animation-bg"></div>
                                <div class="teacherNav-animation-type">
                                    {{ t.type}}
                                </div>
                            </div>
                        <!-- </transition> -->
                    </div>
                    <div class="teacherNav-container-title">
                        {{ t.title}}
                    </div>
                    <div class="teacherNav-part-bg">

                    </div>
                </router-link>
            </div>
            <!-- 动画测试 -->
            <!-- <div class="" @mouseenter='test =true' @mouseleave='show = false'>
                <transition name="fade">
                    <p v-if="show">hello</p>
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
            show: true,
            teacherNavList: [
                {
                    imgSrc: this.$store.state.imgPath + '/teacher/73/avatar-73.png',
                    title: '73',
                    path: '/teacher/73',
                    type: '2D',
                },
                {
                    imgSrc: this.$store.state.imgPath + '/teacher/yz/avatar-yz.png',
                    title: 'YZ',
                    path: '/teacher/yz',
                    type: '2D'
                },
                {
                    imgSrc: this.$store.state.imgPath + '/teacher/gd/avatar-gd.png',
                    title: '調調',
                    path: '/teacher/gd',
                    type: '2D',
                },
                {
                    imgSrc: this.$store.state.imgPath + '/teacher/xy/avatar-xy.png',
                    title: '逍遥',
                    path: '/teacher/xy',
                    type: '3D',
                },
                {
                    imgSrc: this.$store.state.imgPath + '/teacher/tm/avatar-tm.png',
                    title: 'Mr.TM',
                    path: '/teacher/home',
                    type: '3D',
                },
            ],
        }
    },
    mounted() {

    },
    methods: {
        isShow() {
            let _this = this
            // $('.teacherNav-part-bg').on('mouseover', {
            //     this.show = _this.show
            // })
            // $('.teacherNav-part-bg').on('mouseout', {
            //     _this.show = !_this.show
            // })
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
        width: 30%;
        color: white;
        margin: 0 auto;
        text-align: center;
        display: flex;
        justify-content: space-around;
    }
    .teacherNav-container-part {
        width: 50px;
        height: 70px;
        margin: 10px auto;
        position: relative;
    }
    .teacherNav-container-part a {
        color: white;
        text-decoration: none;
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
    /* 动画相关 */
    .teacherNav-container-part:hover .teacherNav-animation-container {
        display: inline;
    }
    .teacherNav-animation-container {
        display: none;
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
    .teacherNav-animation-type {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        line-height: 50px;
        z-index: 120;
    }
    .teacherNav-part-bg {

    }
    .teacherNav-animation-type {
        font-weight: bolder;
    }

    /* vue 动画 */
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
      opacity: 0
    }





</style>
