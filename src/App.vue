<template>
  <div id="app">
    <navbar/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar';

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto Medium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
