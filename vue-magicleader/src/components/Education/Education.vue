<template lang="html">
    <div id='id-education'>
        <div class="education-container">
            <div class="education-img" v-for='e in educationImgList'>
                <img :src="e">
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
    .education-container {
        width: 100%;
        height: 100%;
    }
    .education-container img {
        width: 100%;
        height: 100%;
    }
    .education-img {
        width: 100%;
        height: 100%;
    }
    .education-img img {
        width: 100%;
        height: 100%;
    }
</style>
