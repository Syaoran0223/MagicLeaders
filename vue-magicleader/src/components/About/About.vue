<template lang="html">
    <div id='id-about'>

        <div class="about-container">
            <img :src="aboutImageSrc" alt="">
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
    }
    .about-container {
        height: 100%;
        width: 100%;
    }
    .about-container img {
        width: 100%;
        height: 100%;
    }

</style>
