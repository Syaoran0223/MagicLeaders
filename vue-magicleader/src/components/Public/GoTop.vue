<template lang="html">
    <div id="goTop">
        <scroll-to target="top">
            <div  class='topButton showTop   hidden-sm hidden-xs' >
                <div class='topImg'>
                    <img class=''src="static/images/public/gotop.png">
                </div>
                <div class='erweima'>
                    <img src='static/images/public/erweima.png'>
                </div>
                <div class='topInfo'>
                    微信公众号
                </div>
            </div>
        </scroll-to>
        <scroll-to target="top">
            <div class='mTopButton mShowTop  hidden-lg hidden-md' >
                <img class=''src="static/images/public/mGoTop.png">
            </div>
        </scroll-to>

    </div>
</template>

<script>
export default {
    data() {
        return {
            timer: '',
            currentPosition: '',
        }
    },
    methods: {

    },
}
</script>

<style lang="css">
.topButton {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 78px;
    height: 130px;
    text-align: center;
    /*background: white;*/
}

.topImg {
    display: flex;
    width: 78px;
    height: 28px;
    background: #FBFBFB;
    border: 1px solid #E7E7E7;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
}
.topImg img {
    width: 22%;
}
.erweima {
    width: 78px;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #E7E7E7;
    border-left: 1px solid #E7E7E7;
    border-right: 1px solid #E7E7E7;
    background: #FBFBFB;
}
.erweima img {
    width: 92%;
}
.topInfo {
    width: 78px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #E7E7E7;
    background: #FBFBFB;
    font-size: 13px;
    color: black;
}
/* 移动端 */

.mShowTop {
    display: block;
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    height: 50px;
}
.mShowTop img{
    width: 100%;
}
.top-bg-line {
    border-bottom: 1px solid #B4B4B4;
    margin: 15px auto;
    width: 80%;
}
</style>
