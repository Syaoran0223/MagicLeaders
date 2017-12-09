<template lang="html">
    <div id='id-education'>
        <div class="education-container">
            <div class="container">
                <div class="row">
                    <div class="edu-img-box col-lg-6 col-md-6 col-sm-12 col-xs-12 " v-for='(t, index) in educationImgList'
                    :width="t.w"
                    :height="t.h"
                    :order="index"
                    :key="index">
                        <img class="preview-img"  :src="t.src" @click="$preview.open(index, educationImgList)">
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
        margin: 50px -3px;
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
