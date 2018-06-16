<template>
    <div>
        <el-checkbox
            :allChecked="allChecked"
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange">{{ allCheckOption }}</el-checkbox>
        <el-checkbox-group v-model="checkOptions" @change="handleCheckedOptionsChange">
        <el-checkbox 
            v-for="item in options"
            class="d-flex flex-row ml-0"
            :label="item" 
            :key="item">{{ item }}
        </el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/select.css';

Vue.use(ElementUI);
const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
    props: {
        allChecked: {
            type: Boolean,
            default: true
        },
        allCheckOption: {
            type: String,
            default: 'All'
        },
        allOptions: {
            type: Array,
            default: []
        }
    },
    data () {
        return {
            checkAll: false,
            checkOptions: [],
            options: [],
            isIndeterminate: true
        }
    },
    created() {
        this.options = this.allOptions;
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkOptions = val ? this.allOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedOptionsChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.options.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length;
        }
    }
}
</script>

<style lang="scss" scoped>
</style>