<template lang="html">
    <div id='id-admissions'>
        <div class="admissions-container">
            <div class="admissions-img" v-for='a in admissionsImgList'>
                <img :src="a">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            admissionsImgList: '',
        }
    },
    mounted() {
        this.getImageList()
    },
    methods: {
        getImageList() {
            let state = this.$store.state
            let url = state.path + '/admissionsList'
            let data = ''
            let imgList = state.admissionsImgList
            if (imgList != '') {
                this.admissionsImgList = imgList
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
                    arr.push(src)
                })
                this.admissionsImgList = arr
                console.log('arr', arr);
                this.$store.commit('admissionsImgListSave', arr)
            })
        },
    },
}
</script>

<style lang="css">
.admissions-container {
    margin: 0 auto;
    width: 80%;
    height: 100%;
}
.admissions-container img {
    width: 100%;
    height: 100%;
}

</style>
