<template>
  <div id="app" class="bg-white-smoke-light">
    <to-do-list/>
  </div>
</template>

<script>
import ToDoList from '@/pages/todolist';

export default {
  name: 'app',
  components: {
    ToDoList
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss">
@import '../scss/custom';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Roboto Medium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
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
