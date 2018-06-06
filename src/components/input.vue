<template>
  <div 
    :class="inputClass">
    <el-input
      :placeholder="placeholderTxt"
      v-model="inputVal"
      :prefix-icon="prefixIcon"
      :suffix-icon="suffixIcon"
      @focus="focus">
    </el-input>
  </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/input.css';

Vue.use(ElementUI);

export default {
  props: {
    inputClass: {
      type: String,
      default: ''
    },
    placeholderTxt: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
        inputVal: ''
    }
  },
  methods: {
      focus() {
          console.log('1')
      }
  }
}
</script>

<style lang="scss" scoped>
</style>