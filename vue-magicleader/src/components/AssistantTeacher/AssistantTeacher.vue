<template lang="html">
    <div id='id-assistantTeacher' v-if="assistantTeacherList != ''">
        <div class="waterfall-container">
            <waterfall :line-gap="300" :max-line-gap="400" :min-line-gap="200" :watch="assistantTeacherList" auto-resize='true'>
                <div class="">
                <waterfall-slot class='waterfall-slot'
                    v-for="(s, index) in assistantTeacherList"
                    :width="s.w"
                    :height="s.h"
                    :order="index"
                    :key="index"
                  >
                  <div class="img-box">
                        <img class="preview-img"  :src="s.src"  @click="$preview.open(index, assistantTeacherList)">
                  </div>

                </waterfall-slot>
            </div>
            </waterfall>
            <infinite-loading @infinite="infiniteHandler" >

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
            assistantTeacherList: '',
            isLoad: true,
            startIndex: 0,
            loadingIndex: 10,
            addIndex: 20,
            totalLength: '1',
        }
    },
    created() {
        this.getAssistantTeacherList()

    },
    mounted() {
        // this.formatInit()
    },
    methods: {
        // 获取助教作品列表
        getAssistantTeacherList() {
            let state = this.$store.state
            let url = state.path + '/assistantTeacher'
            // this.log('url', url);
            let imgList = state.assistantTeacherList
            if (imgList != '') {
                this.isLoad = false
                this.assistantTeacherList = imgList.slice(0, this.loadingIndex)
                return
            }
            // 确认 vuex 内没有作品信息后显示 加载中...
            this.isLoad = true
            let _this = this
            $.post(url, (res)=> {
                let initData = JSON.parse(res)
                let arr = []
                initData.forEach((e) => {
                    if (e.src.includes('.DS_Store')) {
                        return
                    }
                    let src = e
                    this.log('src', e.src);
                    arr.push(src)
                })
                // 随机排序
                arr = _.shuffle(arr)
                this.isLoad = false
                this.assistantTeacherList = arr.slice(0, this.loadingIndex)
                this.log('读取到的图片', this.assistantTeacherList);
                this.$store.commit('assistantTeacherListSave', arr)
            })
            this.log('this.assistantTeacherList', this.assistantTeacherList)
        },
        infiniteHandler($state) {
            setTimeout(() => {
                this.loadingIndex += this.addIndex
                this.startIndex += this.addIndex
                let startIndex = this.startIndex
                let loadingIndex = this.loadingIndex
                let img = this.$store.state.assistantTeacherList.slice(startIndex, loadingIndex)
                if (img.length != 0) {
                    this.assistantTeacherList = this.assistantTeacherList.concat(img)
                    $state.loaded()
                    this.log('img,length', img.length);
                } else if(this.$store.state.assistantTeacherList.length != 0 && img.length == 0){
                    $state.complete()
                    this.log('完成', this.assistantTeacherList.length);
                }
            }, 1000);
        },
    },
    updated() {
        // this.infiniteHandler($state)
    this.log('更新了教师作品列表');
    if (this.$store.state.assistantTeacherList.length != undefined) {
                this.log('助教作品进度', this.assistantTeacherList.length , '/', this.$store.state.assistantTeacherList.length);
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
    #id-assistantTeacher {
        background: #E7E6E5;
    }
    .assistantTeacher-load {
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
</style>
