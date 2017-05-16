<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <ya-map></ya-map>
  </div>
</template>

<script>
import Hello from './components/Hello'
import YaMap from './components/YaMap.vue'

export default {
  name: 'app',
  components: {
    Hello,
    YaMap
  }
}

</script>


<style>
  html, body {
    width: 100%; height: 100%; padding: 0; margin: 0;
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
