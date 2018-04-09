<template lang="html">
    <div id='id-student3d'>
        <div class="student3d-load" v-if='isLoad'>
            图片加载中...
        </div>
        <div class="waterfall-container">
            <waterfall :line-gap="300" :max-line-gap="400" :min-line-gap="200" :watch="student3dList" auto-resize='true'>
                <div class="">
                <waterfall-slot class='waterfall-slot'
                    v-for="(s, index) in student3dList"
                    :width="s.w"
                    :height="s.h"
                    :order="index"
                    :key="index"
                  >
                  <div class="img-box">
                        <img class="preview-img"  :src="s.src"  @click="$preview.open(index, student3dList)">
                  </div>
                </waterfall-slot>
            </div>
            </waterfall>
            <infinite-loading @infinite="infiniteHandler">
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
            student3dList: '11',
            isLoad: true,
            startIndex: 0,
            loadingIndex: 10,
            addIndex: 10,
            totalLength: '1',

        }
    },
    created() {
        this.getStudent3dList()

    },
    mounted() {
    },
    methods: {
        getStudent3dList() {
            let state = this.$store.state
            let url = state.path + '/student3dList'
            // console.log('url', url);
            let imgList = state.student3dList
            if (imgList != '') {
                this.isLoad = false
                this.student3dList = imgList.slice(0, this.loadingIndex)
                return
            }
            // 确认 vuex 内没有作品信息后显示 加载中...
            this.isLoad = true
            let _this = this
            console.log('开始执行读取图片了');
            $.post(url, (res)=> {
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
                this.student3dList = arr.slice(0, this.loadingIndex)
                this.$store.commit('student3dListSave', arr)
            })
            console.log('this.student3dList', this.student3dList)
        },
        infiniteHandler( $state) {
            setTimeout(() => {
                this.loadingIndex += this.addIndex
                this.startIndex += this.addIndex
                let startIndex = this.startIndex
                let loadingIndex = this.loadingIndex
                let img = this.$store.state.student3dList.slice(startIndex, loadingIndex)
                console.log('img,length', img.length, startIndex, loadingIndex);
                if (img.length != 0) {

                    this.student3dList = this.student3dList.concat(img)
                    $state.loaded()

                } else if(this.$store.state.student3dList.length != 0 && img.length == 0){
                    $state.complete()
                    console.log('完成', this.student3dList.length);
                }
            }, 1000);
        },
    },
    updated() {
        if (this.$store.state.student2dList.length != undefined) {
                console.log('3d作品进度', this.student3dList.length, '/' ,this.$store.state.student3dList.length);
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
    #id-student3d {
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
