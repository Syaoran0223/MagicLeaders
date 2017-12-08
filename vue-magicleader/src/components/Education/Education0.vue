<template lang="html">
    <div id='id-education'>
        <!-- <div class="education-container">
            <div class="education-img" v-for='e in educationImgList'>
                <img :src="e">
            </div>
        </div> -->
        <div class="education-container">
            <div class=" container-fluid">
                <!-- 教学环境 - 部分开始 -->
                <div class="img-box col-lg-6 col-md-6 con-sm-12 col-xs-12 education-title">
                    <img class='education-title-bg':src="test[0].src" alt="">
                    <div class="education-info">
                        <div class="education-sanjiao">
                            <img class="" src="static/images/education/sanjiao.png" alt="">
                        </div>
                        <div class="education-info-text">
                            教学环境， Teachering environment
                        </div>
                    </div>
                </div>
                <div class="img-box col-lg-6 col-md-6 col-xs-12 col-sm-12" v-for='(t, index) in test.slice(1, 4)'
                :width="t.w"
                :height="t.h"
                :order="index"
                :key="index">
                    <div class="" v-if='index <= 3'>
                          <img class="preview-img"  :src="t.src"  @click="$preview.open(index, test)">
                    </div>
                </div>
                <!-- 教学环境 - 部分结束 -->
                <!-- 办公区 - 部分开始 -->
                <div class="img-box col-lg-6 col-md-6 con-sm-12 col-xs-12 education-title">
                    <img class='education-title-bg':src="test[0].src" alt="">
                    <div class="education-info">
                        <div class="education-sanjiao">
                            <img class="" src="static/images/education/sanjiao.png" alt="">
                        </div>
                        <div class="education-info-text">
                            办公区, Office area
                        </div>
                    </div>
                </div>
                <div class="img-box col-lg-6 col-md-6 col-xs-12 col-sm-12" v-for='(t, index) in test.slice(1, 4)'
                :width="t.w"
                :height="t.h"
                :order="index"
                :key="index">
                    <div class="" v-if='index <= 3'>
                          <img class="preview-img"  :src="t.src"  @click="$preview.open(index, test)">
                    </div>
                </div>
                <!-- 办公区 - 部分结束 -->
                <!-- 休闲区 - 部分开始 -->
                <div class="img-box col-lg-6 col-md-6 con-sm-12 col-xs-12 education-title">
                    <img class='education-title-bg':src="test[0].src" alt="">
                    <div class="education-info">
                        <div class="education-sanjiao">
                            <img class="" src="static/images/education/sanjiao.png" alt="">
                        </div>
                        <div class="education-info-text">
                            休闲区， Leisure Area
                        </div>
                    </div>
                </div>
                <div class="img-box col-lg-6 col-md-6 col-xs-12 col-sm-12" v-for='(t, index) in test.slice(1, 4)'
                :width="t.w"
                :height="t.h"
                :order="index"
                :key="index">
                    <div class="" v-if='index <= 3'>
                          <img class="preview-img"  :src="t.src"  @click="$preview.open(index, test)">
                    </div>
                </div>
                <!-- 休闲区 - 部分结束 -->
                <!-- 宿舍 - 部分开始 -->
                <div class="img-box col-lg-6 col-md-6 con-sm-12 col-xs-12 education-title">
                    <img class='education-title-bg':src="test[0].src" alt="">
                    <div class="education-info">
                        <div class="education-sanjiao">
                            <img class="" src="static/images/education/sanjiao.png" alt="">
                        </div>
                        <div class="education-info-text">
                            宿舍环境， Dormitory enviroment
                        </div>
                    </div>
                </div>
                <div class="img-box col-lg-6 col-md-6 col-xs-12 col-sm-12" v-for='(t, index) in test.slice(1, 4)'
                :width="t.w"
                :height="t.h"
                :order="index"
                :key="index">
                    <div class="" v-if='index <= 3'>
                          <img class="preview-img"  :src="t.src"  @click="$preview.open(index, test)">
                    </div>
                </div>
                <!-- 宿舍 - 部分结束 -->
            </div>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            educationImgList: [],
            test: [
                {
                    src: 'static/images/home/index1.jpg',
                    h: '300',
                    w: '500'
                },
                {
                    src: 'static/images/home/index1.jpg',
                    h: '300',
                    w: '500'
                },
                {
                    src: 'static/images/home/index1.jpg',
                    h: '300',
                    w: '500'
                },
                {
                    src: 'static/images/home/index1.jpg',
                    h: '300',
                    w: '500'
                },
                {
                    src: 'static/images/home/index2.jpg',
                    h: '300',
                    w: '200'
                },
                {
                    src: 'static/images/home/index2.jpg',
                    h: '300',
                    w: '200'
                },
                {
                    src: 'static/images/home/index3.jpg',
                    h: '300',
                    w: '200'
                },
            ]
        }
    },
    mounted() {
        this.getImageList()
    },
    methods: {
        getImageList() {
            let state = this.$store.state
            let url = state.path + '/educationList'
            console.log('url', url);
            let data = ''
            let imgList = state.educationImgList
            if (imgList != '') {
                this.educationImgList = imgList
                return
            }
            let _this = this
            $.post(url, data, (res)=> {
                let initData = JSON.parse(res)
                let arr = []
                initData.forEach((e) => {
                    if (e.src.includes('.DS_Store')) {
                        return
                    }
                    let src = e.src
                    console.log('e', src)
                    arr.push(src)
                })
                this.educationImgList = arr
                this.$store.commit('educationImgListSave', arr)
            })
            console.log('this.educationImgList', this.educationImgList)
        },
    },
}
</script>

<style lang="css">
    /*.education-container {
        width: 100%;
        height: 100%;
    }
    .education-container img {
        width: 100%;
        height: 100%;
    }*/
    /*.education-img {
        width: 100%;
        height: 100%;
    }
    .education-img img {
        width: 100%;
        height: 100%;
    }*/
    /*  测试重做部分 */
    #id-education img{
        width: 100%;
    }
    .education-container {
        /*width: 80%;*/
        margin: 50px auto;
        background: lightgreen;
        width: 80vw;
        flex-wrap: wrap;
        align-content: space-between;
    }
    .img-box {
        margin: 0;
        border: 0;
        margin: 10px auto;
    }
    /* 填充背景图片 - 隐藏 */
    .education-title-bg {
        position: relative;
        visibility: hidden;

    }
    .education-title {

    }
    .education-info {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        text-align: center;
        width: 100%;
    }
    .education-sanjiao {
        display: inline-block;
        width: 1.5rem;
        /*height: 2rem;*/
        position: relative;
        top: -0.15rem;
        right: 10px;
    }
    .education-info-text {
        display: inline-block;
        font-size: 1.5rem;
        line-height: 1.5rem;
        /*font-weight: bold;*/
    }
</style>
