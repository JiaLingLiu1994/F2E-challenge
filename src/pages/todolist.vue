<template>
  <div class="to-do-list">
    <navbar/>

    <i-input
      inputClass="mt-4 d-flex justify-content-center adding-bar"
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
    .adding-bar {
      .el-input {
        width: 480px;
      }

      .el-input__inner {
        border: 2px solid #c8c8c8;
      }
    }
  }
</style>
