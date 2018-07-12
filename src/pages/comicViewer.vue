<template>
    <div>
        <navbar/>
        <router-view/>
    </div>
</template>

<script>
import Navbar from '@/pages/comicViewer/navbar.vue';

export default {
    components: {
        Navbar
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
</style>