<template>
    <div>
        <el-select 
            v-model="value"
            placeholder="Taiwan"
            @change="selectChange">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled">
            </el-option>
        </el-select>
    </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/select.css';
import 'element-ui/lib/theme-chalk/select-dropdown.css';
import 'element-ui/lib/theme-chalk/popper.css';
import 'element-ui/lib/theme-chalk/option.css';
import 'element-ui/lib/theme-chalk/scrollbar.css';

Vue.use(ElementUI);

export default {
    props: {
        options: {
            type: Array,
            default: []
        }
    },
    data () {
        return {
            value: ''
        }
    },
    methods: {
        selectChange(selectedvalue) {
            this.$emit('selecterChanged', selectedvalue);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>