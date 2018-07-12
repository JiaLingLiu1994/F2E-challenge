<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo d-flex justify-content-center"
    mode="horizontal"
    @select="handleSelect"
    background-color="#000000"
    text-color="#50FF44"
    active-text-color="#50FF44">
    <router-link class="align-self-center" to="/ComicViewer">
      <el-menu-item index="1">Comicomic</el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/menu.css';

Vue.use(ElementUI);

export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
    }
  }
}
</script>

<style lang="scss" scoped>
@import './main.scss';

  .el-menu-demo {
    .is-active {
      font-weight: 700;
      font-style: italic;
      font-size: 36px;
      border-bottom: none;
    }
  }
</style>
<style lang="scss">
    .el-menu-demo {
        height: 74px;
    }
</style>