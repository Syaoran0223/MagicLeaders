<template lang="html">
    <div id='id-home'>
        <!-- 轮播图 -->
        <slide></slide>
        <guide></guide>
    </div>
</template>

<script>
import Slide from '@/components/Home/slide.vue'
import Guide from '@/components/Home/guide.vue'
export default {
    components: {
        'slide':Slide,
        'guide':Guide,
    },
}
</script>

<style lang="css">
</style>
