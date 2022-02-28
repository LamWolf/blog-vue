<template>
  <div id="app">
    <TopNarBar />
    <BackTop />
  </div>
</template>

<script>
import BackTop from './components/BackTop.vue'
import TopNarBar from './components/layout/TopNavBar.vue'

export default {
  name: 'App',
  components: {
    BackTop,
    TopNarBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
