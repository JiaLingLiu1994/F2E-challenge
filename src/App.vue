<template>
  <div id="app">
    <!-- <to-do-list class="bg-white-smoke-light"/> -->
    <search-filter class="bg-white-smoke pb-4"/>
  </div>
</template>

<script>
import ToDoList from '@/pages/todolist';
import SearchFilter from '@/pages/filter';

export default {
  name: 'app',
  components: {
    ToDoList,
    SearchFilter
  },
  data () {
    return {
    }
  },
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
