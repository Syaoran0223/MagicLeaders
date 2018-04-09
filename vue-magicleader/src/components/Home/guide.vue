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
                    href:'https://pan.baidu.com/s/1LUiJMR_HAOjCUHu_edMGgw#list/path=%2F',

                },
                {
                    imgSrc:'static/images/home/index2.jpg',
                    href:'https://weibo.com/6409416360/profile?topnav=1&wvr=6&is_all=1',
                },
                {
                    imgSrc:'static/images/home/index3.jpg',
                    href:'http://blog.sina.com.cn/s/blog_8c2294c70102x1c8.html',
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
