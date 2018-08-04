<template lang="html">
    <div id='id-admissions'>
        <div class="admissions-container">
            <!-- <div class="admissions-img">
                <img :src="admissionsImgList[0]">
            </div>
            <div class="admissions-img" >
                    <a href="http://blog.sina.com.cn/s/blog_8c2294c70102wwbb.html" target="_blank">
                    <img :src="admissionsImgList[1]">
                </a>
            </div>
            <div class="admissions-img">
                <a href="http://blog.sina.com.cn/s/blog_8c2294c70102x0mm.html" target="_blank">
                    <img :src="admissionsImgList[2]">
                </a>
            </div>
            <div class="admissions-img" >
                <a href="http://blog.sina.com.cn/s/blog_8c2294c70102wtes.html" target="_blank">
                    <img :src="admissionsImgList[3]">
                </a>
            </div> -->

            <div class="admissions-img" v-for="(ad, index) in admissionsImgList" v-if="admissionsImgList && srcList">
                <a :href="srcList[index]" target="_blank" v-if="srcList[index] != ''">
                    <img :src="admissionsImgList[index]">

                </a>
                <img :src="admissionsImgList[index]" alt="" v-else>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            admissionsImgList: '',
            // srcList: [
            //     '',
            //     'http://blog.sina.com.cn/s/blog_8c2294c70102xbck.html',
            //     'http://blog.sina.com.cn/s/blog_8c2294c70102x0mm.html',
            //     'http://blog.sina.com.cn/s/blog_8c2294c70102wtes.html',
            //     'http://blog.sina.com.cn/s/blog_8c2294c70102wwbb.html',
            // ]
            srcList:'',
        }
    },
    mounted() {
        this.getImageList()
    },
    methods: {
        getImageList() {
            let state = this.$store.state
            let url = state.path + '/admissionsList'
            let urlSrc = state.path + '/admissionsSrc'
            let data = ''
            let imgList = state.admissionsImgList
            if (imgList != '') {
                this.admissionsImgList = imgList
                return
            }
            let _this = this
            $.post(urlSrc, data, (srcList) => {
                this.srcList = JSON.parse(srcList)                
            }).then((srcList)=> {
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
                    this.log('图片列表', arr);
                    this.$store.commit('admissionsImgListSave', arr)
                })
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
