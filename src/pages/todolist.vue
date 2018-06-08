<template>
  <div class="to-do-list">
    <navbar/>

    <i-input
      v-if="!isOnFocus"
      inputClass="mt-4 d-flex justify-content-center adding-bar"
      placeholderTxt="Add Task"
      prefix-icon="el-icon-plus"
      v-on:focusInput="focusInput"/>

    <new-task 
      v-if="isOnFocus"
      v-on:closeNewTask="focusInput"/>

    <task-list 
      v-for="(i, index) in sortedLists"
      :key="index"
      :taskId="i.id"
      :taskObj="i"
      v-on:highlight="highlight($event)"/>

    <div class="mt-2 d-flex justify-content-center">
      <p class="text-left text-very-light-grey summary-field"> {{ lists.length }} tasks left</p>
    </div>
  </div>
</template>

<script>
import Navbar from '@/pages/todolist/navbar';
import TaskList from '@/pages/todolist/taskList';
import NewTask from '@/pages/todolist/newTask';
import Iuput from '@/components/input';

export default {
  components: {
    Navbar,
    TaskList,
    NewTask,
    'i-input': Iuput
  },
  data () {
    return {
      lists: {
        '1': {'id': 1, 'name': 'Task One', 'highlight': false},
        '2': {'id': 2, 'name': 'Task Two', 'highlight': true},
        '3': {'id': 3, 'name': 'Task Three', 'highlight': false},
        '4': {'id': 4, 'name': 'Task Four', 'highlight': false}
      },
      isOnFocus: false
    }
  },
  computed: {
    sortedLists() {
      return _.orderBy(this.lists, ['highlight'], ['desc']);
    }
  },
  methods: {
    highlight(evt) {
      this.lists[evt.id].highlight = evt.highlight;
    },
    focusInput() {
      this.isOnFocus = !this.isOnFocus;
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
<style lang="scss" scoped>
  .to-do-list {
    .summary-field {
      width: 420px;
    }
  }
</style>