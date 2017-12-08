<template lang="html">
    <div id='id-education'>
        <!-- <div class="education-container">
            <div class="education-img" v-for='e in educationImgList'>
                <img :src="e">
            </div>
        </div> -->
        <div class="education-container">
            <div class="container">
                <div class="row">
                    <!-- 教学环境 - 部分开始 -->
                    <div class="edu-img-box col-lg-6 col-md-6 col-sm-12 col-xs-12 " v-for='(t, index) in educationImgList'
                    :width="t.w"
                    :height="t.h"
                    :order="index"
                    :key="index">
                        <img class="preview-img"  :src="t.src" @click="$preview.open(index, educationImgList)">
                    </div>
                    <!-- 宽度100% -->
                    <!-- <div class="img-box col-lg-12 col-md-12 con-sm-12 col-xs-12" :class='half'v-for='(t, index) in educationImgList.slice(3, 4)'
                    :width="t.w"
                    :height="t.h"
                    :order="4"
                    :key="4">
                        <div class="">
                              <img class="preview-img"  :src="t.src"  @click="$preview.open(4, educationImgList.slice(0,4))">
                        </div>
                    </div> -->
                    <!-- 教学环境 - 部分结束 -->
                </div>


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
            half: ['col-sm-lg-6', 'col-md-12', 'col-xs-12', 'col-sm-12'],
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
                    arr.push(e)
                })
                this.educationImgList = arr
                console.log('arr', arr);
                this.$store.commit('educationImgListSave', arr)
            })
            console.log('this.educationImgList', this.educationImgList)
        },
    },
}
</script>

<style lang="css">
    #id-education img{
        width: 100%;
    }
    .education-container {
        margin: 50px auto;
        width: 80%;
    }
    .container {
        margin: 0 auto;
        padding: 0;
        text-align: center;
    }

    .edu-img-box {
        margin: 30px auto;
        max-height: 25rem;
        /*height: 20em;*/
        /*height: 100%;*/
        text-align: center;
    }

    @media only screen and (max-width:800px) {
        .edu-img-box {
            margin: 10px auto;
            height: 100%;
            text-align: center;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>
