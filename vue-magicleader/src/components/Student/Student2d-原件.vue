<template lang="html">
    <div id='id-student2d'>
        <!-- {{ student2dList }} -->
        <div class="student2d-load" v-if='isLoad'>
            图片加载中...
        </div>
        <div class="imgFlag " id='my-gallery-container' v-for="(s, index) in student2dList" >
            <img  class="preview-img":src="s.src" alt="" @click="$preview.open(index, student2dList)">
        </div>
        <!-- <div class="" v-for='s in student2dList'> -->
            <!-- <img class="preview-img" v-for="(s, index) in student2dList" :src="s.src"  @click="$preview.open(index, student2dList)"> -->
            <!-- <img :src="s.src" alt=""> -->
        <!-- </div> -->
    </div>
</template>

<script>
// 引入瀑布流插件
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
    data() {
        return {
            aboutImageSrc: 'static/images/about/about.jpg',
            test: '1',
            student2dList: '11',
            isLoad: true,
        }
    },
    created() {
        this.getStudent2dList()
        this.formatInit()
    },
    methods: {
        getStudent2dList() {
            let state = this.$store.state
            let url = state.path + '/student2dList'
            console.log('url', url);
            let imgList = state.student2dList
            if (imgList != '') {
                this.isLoad = false
                this.student2dList = imgList
                return
            }
            // 确认 vuex 内没有作品信息后显示 加载中...
            this.isLoad = true
            let _this = this
            $.post(url, (res)=> {
                console.log('开始读取图片了');
                let initData = JSON.parse(res)
                let arr = []
                initData.forEach((e) => {
                    if (e.src.includes('.DS_Store')) {
                        return
                    }
                    let src = e
                    arr.push(src)
                })
                this.isLoad = false
                this.student2dList = arr.slice(1, 20)
                this.$store.commit('student2dListSave', arr)
            })
            console.log('this.student2dList', this.student2dList)
        },
        // 使用瀑布流
        formatInit() {
            console.log('1');
        }
    }
}
</script>

<style lang="css">
    #id-student2d img{
        width: 20%;
        height: 20%;
    }
    .student2d-load {
        /*width: 200px;*/
        font-size: 30px;
        text-align: center;
        line-height: 30px;
        margin: 100px 0px;
    }
    .imgFlag {
        display: inline;
        padding: 0;
        margin: 0;
    }
    .imgFlag img {
        z-index: 100;
    }
</style>
