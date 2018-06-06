<template>
  <div class="mt-4 d-flex align-items-center flex-column">
    <div class="task-list bg-white-smoke border-right-0 border-left-0 border-bottom-0 ">
        <div class="d-flex flex-row pt-4 pb-2 px-32px">
            <el-checkbox 
                class="mt-1"
                v-model="checked"/>
                
            <div class="ml-3 d-flex flex-column flex-fill text-left">
                <div>
                    <span class="task-name">Task Name</span>
                    <div class="mt-1 float-right">
                        <svgicon class="cursor-pointer mr-32px" name="star" width="20" height="20" color="#000000"></svgicon>
                        <svgicon 
                            class="cursor-pointer" 
                            name="edit" 
                            width="20" 
                            height="20" 
                            color="#000000"
                            data-toggle="collapse" 
                            data-target="#collapseExample" 
                            aria-expanded="false" 
                            aria-controls="collapseExample"/>
                    </div>
                </div>
                
                <div class="mt-2">
                    <!-- <svgicon name="calendar" width="16" height="16" color="#757575"></svgicon>
                    <span class="calendar-time">06/15</span>
                    <svgicon name="file" width="16" height="16" color="#757575"></svgicon>
                    <svgicon name="comment" width="16" height="16" color="#757575"></svgicon> -->
                </div>
            </div>
        </div>
        
        <div class="pt-4 align-items-center collapse" id="collapseExample">
            <edit-panel/>
            <div class="row w-100 mx-0">
                <button href="#" class="btn btn-white text-venetian-red col"><i class="fas fa-times mr-3"></i>Cancel</button>
                <button href="#" class="btn btn-cornflower-blue col"><i class="fas fa-plus mr-3"></i>Add Task</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/checkbox.css';
import '@/icons';
import EditPanel from '@/pages/todolist/editPanel';

Vue.use(ElementUI);

export default {
  components: {
    EditPanel
  },
  data () {
    return {
        checked: false
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

            &::after {
                height: 12px;
                left: 7px;
            }
        }

        .collapse, .collapsing {
            border-top: 2px solid #C8C8C8;

            .btn {
                height: 50px;
                border-radius: 0;
                width: 100%;
                border: 0
            }
        }
    }
</style>
<style lang="scss" scoped>
    .task-list {
        width: 480px;
        min-height: 76px;
        border-radius: 4px;
        box-shadow: 0 4px 4px 0 #C8C8C8;

        .task-name {
            font-size: 20px;
        }

        .calendar-time {
            font-size: 16px;
        }
    }

    .task-edit {
        width: 480px;
    }
</style>