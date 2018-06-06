<template>
  <div class="mb-4 px-72px float-left w-100 d-block">
        <icon-label 
            class="text-left"
            iconName="calendar"
            width="16"
            height="16"
            color="#000000"
            labelTxt="Deadline"/>

        <div class="mt-2 d-flex flex-row">
            <el-date-picker
                class="d-flex flex-row"
                v-model="dateValue"
                type="date"
                placeholder="yyyy/mm/dd"
                size="mini">
            </el-date-picker>
            <el-time-select
                class="ml-2"
                v-model="timeValue"
                :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:00'
                }"
                placeholder="hh:mm"
                size="mini">
            </el-time-select>
        </div>

        <icon-label 
            class="mt-4 text-left"
            iconName="file"
            width="16"
            height="16"
            color="#000000"
            labelTxt="File"/> 

        <el-upload
            class="upload-task-files text-left mt-2"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button 
                class="btn-very-light-grey px-0"
                size="small"><i class="fas fa-plus"/></el-button>
            <div slot="tip" class="el-upload__tip">Upload jpg/png files which are less than 500kb.</div>
        </el-upload>

        <icon-label 
            class="mt-4 text-left"
            iconName="comment"
            width="16"
            height="16"
            color="#000000"
            labelTxt="Comment"/> 

        <el-input
            class="mt-2"
            type="textarea"
            :rows="2"
            placeholder="Type your memo here…"
            v-model="textarea">
        </el-input>


  </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import IconLabel from '@/components/iconLabel';
import 'element-ui/lib/theme-chalk/date-picker.css';
import 'element-ui/lib/theme-chalk/time-select.css';
import 'element-ui/lib/theme-chalk/upload.css';

Vue.use(ElementUI);

export default {
  components: {
    IconLabel
  },
  data () {
    return {
        dateValue: '',
        timeValue: '',
        dialogImageUrl: '',
        dialogVisible: false,
        fileList: [],
        textarea: ''
    }
  },
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，
        共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
  }
}
</script>

<style lang="scss">
    .task-list {
        .el-date-editor{
            width: 160px;
            
            .el-input__inner {
                border: none;
            }
        }

        .upload-task-files {
            .btn-very-light-grey {
                width: 32px;
                height: 32px;
                border-radius: 2px;
                color: white;

                &:hover {
                    background-color: #4A90E2;
                    border-color: #4A90E2;
                }
            }
        }
    }
</style>

<style lang="scss" scoped>
    .card {
        border-radius: 0;
        border-top: 2px solid #C8C8C8;
        box-shadow: 0 4px 4px 0 #C8C8C8;
    }
</style>