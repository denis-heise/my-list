<template>
  <mainBlock/>
</template>

<script>
import mainBlock from './components/main-block.vue'

export default {
  name: 'App',
  components: {
    mainBlock
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
