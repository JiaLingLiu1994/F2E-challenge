<template>
  <div id="app">
    <div v-if="pathCheck">
      <!-- <router-link to="/ToDoList">Go to ToDoList</router-link>
      <router-link to="/SearchFilter">Go to SearchFilter</router-link>
      <router-link to="/AdminOrder">Go to AdminOrder</router-link> -->
    </div>
    <!-- <float-button/> -->
    <router-view/>
  </div>
</template>

<script>
import FloatButton from '@/components/floatButton';

export default {
  name: 'app',
  components: {
    FloatButton
  },
  data () {
    return {
    }
  },
  computed: {
    pathCheck() {
      const array = window.location.href;
      console.log(array);
      return true;
    }
  }
}
</script>

<style lang="scss">
// @import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Roboto Medium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  overflow-x: hidden;
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
</style>
