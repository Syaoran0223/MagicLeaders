<template>
  <div id="app">
    <v-nav></v-nav>
        <!-- <keep-alive> -->
            <router-view/>
        <!-- </keep-alive> -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import Nav from '@/components/Public/Nav'
import Footer from '@/components/Public/Footer'
export default {
  name: 'app',
  components: {
        'v-nav': Nav,
        'v-footer': Footer,
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
@font-face {
    font-family: LanTingXiHei;
    src: url('../static/jscss/LanTingXiHei.ttf');
}
html, body {
    font-family: LanTingXiHei;
    font-size: 10px;
}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/
</style>
