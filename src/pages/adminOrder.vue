<template>
    <div class="admin-order bg-white-smoke pb-4">
        <navbar/>
        <router-view/>
    </div>
</template>

<script>
import Navbar from '@/pages/adminOrder/navbar';

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

<style lang="scss" scoped>
    .admin-order {
        min-height: 100vh;
    }
</style>