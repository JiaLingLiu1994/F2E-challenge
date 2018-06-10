<template>
    <div class="mt-4 d-flex align-items-center flex-column">
    <div 
        :class="[taskObj.highlight ? 'bg-yellow-light' : 'bg-white-smoke']"
        class="task-list border-right-0 border-left-0 border-bottom-0 ">
        <div class="d-flex flex-row pt-4 pb-2 px-32px">
            <el-checkbox 
                class="mt-1"
                v-model="checked"/>

            <div class="ml-3 d-flex flex-column flex-fill text-left">
                <div>
                    <span 
                        :class="{'text-line-thru text-nobel-grey': checked}"
                        class="task-name">{{ taskObj.name }}</span>
                    <div class="mt-1 float-right">
                        <span @click="highlightEvt(taskId)">
                            <svgicon 
                                class="cursor-pointer mr-32px" 
                                name="star" 
                                width="20" 
                                height="20" 
                                :color="taskObj.highlight ? '#F5A623' : '#000000'"/>
                        </span>
                        
                        <span >
                            <svgicon 
                            :id="'edit-panel-' + taskId"
                            class="cursor-pointer" 
                            name="edit" 
                            width="20" 
                            height="20" 
                            :color="editMode(taskId) ? '#4A90E2' : '#000000'"
                            data-toggle="collapse" 
                            :data-target="'#'+ taskId"
                            aria-expanded="false" 
                            :aria-controls="taskId"/>
                        </span>
                    </div>
                </div>
                
                <div
                    v-if="!editMode(taskId)"
                    class="mb-2">
                    <svgicon name="calendar" width="16" height="16" color="#757575"></svgicon>
                    <span class="calendar-time">06/15</span>
                    <svgicon name="file" width="16" height="16" color="#757575"></svgicon>
                    <svgicon name="comment" width="16" height="16" color="#757575"></svgicon>
                </div>
            </div>
        </div>
        
        <div
            :id="taskId"
            class="pt-4 align-items-center bg-white-smoke collapse">
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
import Axios from 'axios';
import VueAxios from 'vue-axios';
import EditPanel from '@/pages/todolist/editPanel';
import 'element-ui/lib/theme-chalk/checkbox.css';
import '@/icons';

Vue.use(ElementUI);
Vue.use(VueAxios, Axios);

export default {
    components: {
        EditPanel
    },
    props: {
        taskId: {
            type: Number,
            required: true
        },
        taskObj: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            checked: false
        }
    },
    methods: {
        highlightEvt(id) {
            this.$emit('highlight', {'id': id, 'highlight': !this.taskObj.highlight});
        },
        editMode(id) {
            if (document.getElementById(`edit-panel-${id}`)) {
                return !document.getElementById(`edit-panel-${id}`).getAttribute('aria-expanded');
            }
            return false;
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