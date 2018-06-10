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

    <router-view></router-view>
      <!-- <task-list 
        v-for="(i, index) in sortedLists"
        :key="index"
        :taskId="i.id"
        :taskObj="i"
        v-on:changeVal="changeVal($event)"/> -->

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
import Draggable from 'vuedraggable';

export default {
  components: {
    Navbar,
    TaskList,
    NewTask,
    'i-input': Iuput,
    Draggable
  },
  data () {
    return {
      lists: [
        {'id': 1, 'name': 'Task One', 'highlight': false, 'checked': false},
        {'id': 2, 'name': 'Task Two', 'highlight': true, 'checked': false},
        {'id': 3, 'name': 'Task Three', 'highlight': false, 'checked': false},
        {'id': 4, 'name': 'Task Four', 'highlight': false, 'checked': true}
      ],
      isOnFocus: false
    }
  },
  computed: {
    sortedLists() {
      this.lists = _.orderBy(this.lists, ['highlight'], ['desc']);
      return _.orderBy(this.lists, ['highlight'], ['desc']);
    }
  },
  methods: {
    changeVal(evt) {
      const index = _.findIndex(this.lists, {'id': evt.id});
      _.set(this.lists, [index, evt.type], evt.value);
    },
    focusInput() {
      this.isOnFocus = !this.isOnFocus;
    },
    dragEnd() {
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

    .ghost {
      opacity: 0.4;
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