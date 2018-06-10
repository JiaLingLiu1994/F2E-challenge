<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo d-flex justify-content-center"
    mode="horizontal"
    @select="handleSelect"
    background-color="#4A90E2"
    text-color="#00408B"
    active-text-color="#FFFFFF">
    <router-link to="/">
      <el-menu-item index="1">My Tasks</el-menu-item>
    </router-link>

    <router-link to="/in-progress">
      <el-menu-item index="2">In Progress</el-menu-item>
    </router-link>
    
    <router-link to="/completed">
      <el-menu-item index="3">Completed</el-menu-item>
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
  .el-menu-demo {
    .el-menu-item {
      width: 160px;

      &:hover {
        background-color: #3982D7 !important;
      }
    }
    
    .is-active {
      font-weight: 700;
      border-bottom-color: #00408B !important;
    }
  }
</style>
