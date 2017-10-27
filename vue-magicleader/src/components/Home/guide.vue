<template lang="html">
    <div id='guide'>
        <div class="guide-container">
            <div class="guide-part" v-for='g in guideList'>
                <div class="guide-part-bg">
                </div>
                <router-link :to="g.href">
                    <img :src="g.imgSrc" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            guideList: [
                {
                    imgSrc:'static/images/home/index1.jpg',
                    href:'https://pan.baidu.com/s/1nvTxhIp?qq-pf-to=pcqq.c2c&errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0#list/path=%2F&parentPath=%2F',
                },
                {
                    imgSrc:'static/images/home/index2.jpg',
                    href:'https://pan.baidu.com/s/1nvTxhIp?qq-pf-to=pcqq.c2c&errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0#list/path=%2F&parentPath=%2F',
                },
                {
                    imgSrc:'static/images/home/index3.jpg',
                    href:'',
                },
                {
                    imgSrc:'static/images/home/index4.jpg',
                    href:'',
                },
            ],
        }
    },
}
</script>

<style lang="css">
    #guide {
        width: 100%;
    }
    .guide-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .guide-part-bg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 100;
    }
    .guide-part-bg:hover {
        background: black;
        opacity: 0.2;
    }
    .guide-part {
        width: 100%;
        position: relative;
    }
    .guide-part img {
        width: 100%;
    }

</style>
