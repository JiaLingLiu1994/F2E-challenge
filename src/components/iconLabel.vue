<template>
    <div>
        <svgicon :name="iconName" :width="width" :height="height" :color="color"></svgicon>
        <span>{{ labelTxt }}</span>
    </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    labelTxt: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>