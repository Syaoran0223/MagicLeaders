<template lang="html">
    <div id='id-about'>
        <!-- 原版 banner -->
        <!-- <div class="about-container">
            <img :src="aboutImageSrc" alt="">
        </div> -->
        <!-- 新版图文 banner -->
        <div class="about-container">
            <div class="about-img about-img-1">
                <img src="static/images/about/about-1.png" alt="">
            </div>
            <div class="about-text">
                <div class="about-text-title">
                    公司简介
                </div>
                <p>曼奇立德成立于2012年，隶属于福州曼极文化传播有限公司。</p>
                <p>自成立以来，曼奇立德一直秉承以人为本、技艺优先、服务至上的教学宗旨，</p>
                    <p>致力于做一个有内容、有深度、有温度的优秀培训机构。</p>
                <p>同时，结合行业发展方向，最有效地实现，设计和艺术创意力量的聚集。</p>
            </div>
            <div class="about-img about-img-2">
                <img src="static/images/about/about-2.png" alt="">
            </div>
            <div class="about-text">
                <div class="about-text-title">
                    我们的优势
                </div>
                <p>在曼奇立德，无论是创始人还是管理层，都是原画界的资深设计教师；</p>
                <p>核心成员业界资历10年以上，从业经验丰富，绘画功底扎实，设计理念与时俱进；</p>
                <p>依靠精准的市场定位、高质量的课程体系、和严格规范的教学管理，</p>
                <p>为国内一批热爱原画的朋友提供了一个交流互动的学习平台。</p>
                <!-- <div class="about-text-title-vice">
                    ———— OUR ADVANTAGES ————
                </div> -->

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            aboutImageSrc: 'static/images/about/about.jpg'
        }
    },
}
</script>

<style lang="css">

    #id-about {
        margin: 0;
        padding: 0;
        font-family: ruizi;
    }
    /*.about-container {
        height: 100%;
        width: 100%;
    }
    .about-container img {
        width: 100%;
        height: 100%;
    }*/
    /*图文版*/
    .about-container {
        width: 80%;
        margin: 40px auto 120px auto;
    }
    .about-container img {
        width: 100%;
    }
    .about-img-1 {
        width: 29%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .about-img-2 {
        width: 36%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    .about-text {
        text-align: center;
        width: 80%;
        margin: 40px auto;
        font-size: 1.35rem;
        /*font-weight: bold;*/
    }
    .about-text-title {
        font-size: 2rem;
        font-weight: bolder;
        margin-bottom: 40px;
    }
    .about-text p {
        margin: 13px auto;
    }
    /*.about-text-title-vice {
        margin-top: 13px;
        color: #A2A2A2;
        font-size: 1.3rem;
    }*/
    @media only screen and (max-width:800px) {
        .about-container {
            width: 80%;
            margin: 40px auto 60px auto;
        }
        .about-img {
            width: 80%;
        }
        .about-text-title {
            font-size: 2rem;
            font-weight: bolder;
            margin-bottom: 40px;
        }
        .about-text {
            text-align: center;
            width: 70%;
            margin: 40px auto;
            font-size: 1.15rem;
        }
        .about-text p {
            margin: 10px auto;
        }
    }

</style>
