<template>
    <div class="border-radius-100px border">
        {{ name }}
        <span @click="removeTag(name)">
            <svgicon
                v-if="icon !== ''"
                :name="icon"
                :width="width"
                :height="height"
                :color="color"/>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'close-circle'
        },
        width: {
            type: String,
            default: '14'
        },
        height: {
            type: String,
            default: '14'
        },
        color: {
            type: String,
            default: '#000000'
        },
        name: {
            type: String,
            required: true
        }
    },
    data () {
        return {
        }
    },
    methods: {
        removeTag(name) {
            this.$emit('removeTag', name);
        }
    }
}
</script>

<style lang="scss" scoped>
    .border-radius-100px {
        border-radius: 100px;
    }
</style>