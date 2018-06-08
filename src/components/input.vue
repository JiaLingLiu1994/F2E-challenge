<template>
  <div 
    :class="inputClass">
    <el-input
      :placeholder="placeholderTxt"
      v-model="inputVal"
      :value="txtValue"
      :prefix-icon="prefixIcon"
      :suffix-icon="suffixIcon"
      @focus="focus"
      @blur="blur">
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
    txtValue: {
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
  created() {
    this.inputVal = this.txtValue;
  },
  methods: {
      focus() {
        this.$emit('focusInput');
      },
      blur() {
        this.$emit('blur', this.inputVal);
      }
  }
}
</script>

<style lang="scss" scoped>
</style>