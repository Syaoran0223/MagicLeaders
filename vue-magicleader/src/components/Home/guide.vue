<template lang="html">
    <div id='id-guide'>
        <div class="guide-container container-fluid">
            <div class="row">
                <div class="guide-part col-lg-3 col-md-3 col-sm-6 col-xs-6" v-for='g in guideList'>
                    <div class="" v-if=" g.href != ''">
                        <a :href="g.href" target="_blank">
                            <div class="guide-part-bg"></div>
                        </a>
                        <img :src="g.imgSrc" alt="">
                    </div>
                    <div class="" v-else>
                        <div class="guide-part-bg"></div>
                        <img :src="g.imgSrc" alt="">
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
                    href:'https://weibo.com/u/6409416360?is_hot=1',
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
    #id-guide {
        width: 100%;
    }
    #id-guide div {
        margin: 0;
        padding: 0;
    }
    .guide-container {
        width: 100%
    }
    .guide-part {
        position: relative;
    }
    .guide-part img {
        width: 100%;
        height: 100%;
    }
    .guide-part a {
        z-index: 100;
    }
    .guide-part-bg {
        position: absolute;
        top: 0;
        margin: 0;
        width: 100%;
        height: 100%;
    }
    .guide-part-bg:hover {
        background: black;
        opacity: 0.2;
    }
</style>
