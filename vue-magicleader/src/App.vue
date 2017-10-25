<template>
  <div id="app">
    <v-nav></v-nav>
        <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/public/nav'

export default {
  name: 'app',
  components: {
      'v-nav': Nav
  }

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
