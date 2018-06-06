<template>
  <div class="mt-4 d-flex justify-content-center">
    <div class="task-list bg-white-smoke py-4 px-32px d-flex flex-row">
        <el-checkbox 
            class="mt-1"
            v-model="checked"></el-checkbox>
        <div class="ml-3 d-flex flex-column flex-fill text-left">
            <div>
                <span class="task-name">Task Name</span>
                <div class="mt-2 float-right">
                    <svgicon class="cursor-pointer mr-32px" name="star" width="20" height="20" color="#000000"></svgicon>
                    <svgicon class="cursor-pointer" name="edit" width="20" height="20" color="#000000"></svgicon>
                </div>
            </div>
            

            <div>
                <svgicon name="calendar" width="16" height="16" color="#757575"></svgicon>
                <span class="calendar-time">06/15</span>
                <svgicon name="file" width="16" height="16" color="#757575"></svgicon>
                <svgicon name="comment" width="16" height="16" color="#757575"></svgicon>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/checkbox.css';
import '@/icons'

Vue.use(ElementUI);

export default {
  data () {
    return {
        checked: false
    }
  },
  methods: {
      editTask() {
          console.log("edit");
      }
  }
}
</script>

<style lang="scss">
    .task-list {
        .el-checkbox__label {
            font-size: 20px;
        }
        
        .el-checkbox__inner {
            width: 20px;
            height: 20px;
        }
    }
</style>
<style lang="scss" scoped>
    .task-list {
        width: 480px;
        min-height: 76px;
        border-radius: 5px;

        .task-name {
            font-size: 24px;
        }

        .calendar-time {
            font-size: 16px;
        }
    }
</style>