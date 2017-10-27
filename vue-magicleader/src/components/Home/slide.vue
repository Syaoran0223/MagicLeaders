<template lang="html">
    <div id='home-slide'>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='s in slideList'><img :src="s.src" alt="" /></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slideList: [
                {
                    src:'static/images/home/slide1.jpg'
                },
                {
                    src:'static/images/home/slide2.jpg'
                },
                {
                    src:'static/images/home/slide3.jpg'
                },

            ]
        }
    },
    mounted() {
        this.swiper()
    },
    methods: {
        swiper:()=> {
            new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false,
                loop : true,
            });
        }
    }
}
</script>

<style lang="css">
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
}
.swiper-slide img {
    width: 100%;
    height: 100%;
}

</style>
