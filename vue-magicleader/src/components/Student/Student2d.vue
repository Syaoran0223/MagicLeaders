<template lang="html">
    <div id='id-student2d'>
        <!-- <div class="student2d-load" v-if='isLoad'>
            图片加载中...
        </div> -->
        <div class="waterfall-container">
            <waterfall :line-gap="300" :max-line-gap="400" :min-line-gap="200" :watch="student2dList" auto-resize='true'>
                <div class="">
                <waterfall-slot class='waterfall-slot'
                    v-for="(s, index) in student2dList"
                    :width="s.w"
                    :height="s.h"
                    :order="index"
                    :key="index"
                  >
                  <div class="img-box">
                        <img class="preview-img"  :src="s.src"  @click="$preview.open(index, student2dList)">
                  </div>

                </waterfall-slot>
            </div>
            </waterfall>
            <infinite-loading @infinite="infiniteHandler" >
                <!-- force-use-infinite-wrapper="true" -->
                <!-- <span slot="no-more">
                    没有更多了...
                </span> -->
            </infinite-loading>
        </div>
    </div>
</template>

<script>
// 引入无限加载插件
import InfiniteLoading from 'vue-infinite-loading';
// 引入瀑布流插件
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
export default {
    data() {
        return {
            line: 'h',
            aboutImageSrc: 'static/images/about/about.jpg',
            student2dList: '11',
            isLoad: true,
            startIndex: 0,
            loadingIndex: 10,
            addIndex: 20,
            totalLength: '1',
        }
    },
    created() {
        this.getStudent2dList()

    },
    mounted() {
        // this.formatInit()
    },
    methods: {
        // 获取 图片列表
        getStudent2dList() {
            let state = this.$store.state
            let url = state.path + '/student2dList'
            console.log('url', url);
            let imgList = state.student2dList
            if (imgList != '') {
                this.isLoad = false
                this.student2dList = imgList.slice(this.startIndex, this.loadingIndex)
                return
            }
            // 确认 vuex 内没有作品信息后显示 加载中...
            this.isLoad = true
            let _this = this
            console.log('开始执行读取图片了');
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
                // 随机排序
                arr = _.shuffle(arr)
                this.isLoad = false
                this.student2dList = arr.slice(this.startIndex, this.loadingIndex)
                this.$store.commit('student2dListSave', arr)
            })
            console.log('this.student2dList', this.student2dList)
        },
        // 根据滚动条加载图片
        infiniteHandler($state) {
            setTimeout(() => {
                this.loadingIndex += this.addIndex
                this.startIndex += this.addIndex
                let startIndex = this.startIndex
                let loadingIndex = this.loadingIndex
                let img = this.$store.state.student2dList.slice(startIndex, loadingIndex)
                if (img.length != 0) {
                    this.student2dList = this.student2dList.concat(img)
                    $state.loaded()
                    console.log('img,length', img.length);
                } else if(this.$store.state.student2dList.length != 0 && img.length == 0){
                    $state.complete()
                    console.log('完成', this.student2dList.length);
                }
            }, 1000);
        },


    },
    updated() {
        // this.infiniteHandler($state)
    console.log('更新了2d');
    if (this.$store.state.student2dList.length != undefined) {
        console.log('2d作品进度', this.student2dList.length, '/' ,this.$store.state.student2dList.length);
    }

    },
    components: {
        Waterfall,
        WaterfallSlot,
        InfiniteLoading,
    },
}
</script>

<style lang="css">
    #id-student2d {
        background: #E7E6E5;
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
    .vue-waterfall{
        width: 79%;
        margin: 0 auto;
    }
    .img-box {
        margin: 10px;
        border: 5px solid white;
        /*background: red;*/

    }
    .waterfall-slot {
        margin: 10px;
    }
    .waterfall-slot img {
        z-index: 100;
        width: 100%;
    }
    /*.loading-default {
        display: none;
        opacity: 0;
    }*/
    .infinite-status-prompt {
        display: none;
    }
</style>
