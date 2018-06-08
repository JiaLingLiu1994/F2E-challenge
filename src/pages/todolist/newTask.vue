<template>
    <div class="mt-4 d-flex align-items-center flex-column">
    <div 
        :class="[highlight ? 'bg-yellow-light' : 'bg-white-smoke']"
        class="task-list border-right-0 border-left-0 border-bottom-0 ">
        <div class="d-flex flex-row py-3 pb-2 px-32px">
            <el-checkbox 
                class="mt-1"
                v-model="checked"/>

            <div class="ml-3 d-flex flex-column flex-fill text-left">
                <div class="d-flex flex-row justify-content-between">
                    <div
                        :class="{'text-line-thru text-nobel-grey': checked}"
                        class="task-name cursor-pointer">
                        <span
                            v-if="!editingName"
                            @click="editingName = !editingName;">{{ name | checkName }}</span>
                        <i-input 
                            v-if="editingName"
                            class="new-task"
                            :txtValue="name"
                            v-on:blur="blurEvt($event)"
                            v-model="name"/>
                    </div>
                    <div class="mt-1 float-right">
                        <span @click="highlightEvt()">
                            <svgicon 
                                class="cursor-pointer mr-32px" 
                                name="star" 
                                width="20" 
                                height="20" 
                                :color="highlight ? '#F5A623' : '#000000'"/>
                        </span>
                        
                        <svgicon 
                            name="edit" 
                            width="20" 
                            height="20" 
                            color="#4A90E2"
                            @click="click"/>
                    </div>
                </div>
            </div>
        </div>
        
        <div
            class="pt-4 align-items-center bg-white-smoke edit-area">
            <edit-panel/>

            <div class="row w-100 mx-0">
                <button 
                    class="btn btn-white text-venetian-red col"
                    @click="closeNewTask">
                    <i class="fas fa-times mr-3"></i>Cancel
                </button>
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
import Iuput from '@/components/input';
import 'element-ui/lib/theme-chalk/checkbox.css';
import '@/icons';

Vue.use(ElementUI);
Vue.use(VueAxios, Axios);

export default {
    components: {
        EditPanel,
        'i-input': Iuput
    },
    filters: {
        checkName(val) {
            return (val === '') ? 'Type Something Here...' : val;
        }
    },
    data () {
        return {
            name: '',
            checked: false,
            highlight: false,
            editingName: false
        }
    },
    methods: {
        highlightEvt(id) {
            this.highlight = !this.highlight;
        },
        click() {
            console.log("1")
        },
        closeNewTask() {
            this.$emit('closeNewTask');
        },
        blurEvt(evt) {
            this.name = evt;
            this.editingName = !this.editingName;

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

        .edit-area {
            border-top: 2px solid #C8C8C8;

            .btn {
                height: 50px;
                border-radius: 0;
                width: 100%;
                border: 0
            }
        }
    }

    .new-task {
        .el-input__inner {
            width: 250px;
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