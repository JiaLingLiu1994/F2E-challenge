<template>
  <div class="to-do-list">
    <navbar/>
    <i-input
      inputClass="mt-4 d-flex justify-content-center"
      placeholderTxt="Add Task"
      prefix-icon="el-icon-plus"/>
    <task-list/>
  </div>
</template>

<script>
import Navbar from '@/pages/todolist/navbar';
import TaskList from '@/pages/todolist/taskList';
import Iuput from '@/components/input';

export default {
  components: {
    Navbar,
    TaskList,
    'i-input': Iuput
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  .to-do-list {
    .el-input {
      width: 480px;
    }
  }
</style>
