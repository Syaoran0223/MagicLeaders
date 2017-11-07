<template lang="html">
    <div id='73'>
        <div class="teacher-contianer">
            <div class="teacher-banner-container">
                <div class="teacher-banner">
                    <!-- <img :src="teacher.banner" alt=""> -->
                </div>
                <div class="teacher-info">
                    <div class="teacher-avatar">
                        <img :src="teacher.avatar" alt="">
                    </div>
                    <div class="teacher-name">
                        {{ teacher.name }}
                    </div>
                    <div class="teacher-weibo">
                        <!-- <a :href="weibo">{{ weibo }}</a> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="teacher-work-list">
            <div class="teacher-work" v-for='t in teacher.thumb'>
                <img :src="t" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            teacher: {
                  "img": [
                    "static/images/teacher/73/op-73-1.jpg",
                    "static/images/teacher/73/op-73-2.jpg",
                    "static/images/teacher/73/op-73-3.jpg",
                    "static/images/teacher/73/op-73-4.jpg",
                    "static/images/teacher/73/op-73-5.jpg"
                  ],
                  "thumb": [
                    "static/images/teacher/73/thumb-73-1.jpg",
                    "static/images/teacher/73/thumb-73-2.jpg",
                    "static/images/teacher/73/thumb-73-3.jpg",
                    "static/images/teacher/73/thumb-73-4.jpg",
                    "static/images/teacher/73/thumb-73-5.jpg"
                  ],
                  "banner": "static/images/teacher/73/73banner.jpg",
                  "avatar": "static/images/teacher/73/avatar-73.png",
                  "name": "73"
            },
        }
    },
    mounted() {

    },
    methods:{

    },
}
</script>

<style lang="css">
</style>
