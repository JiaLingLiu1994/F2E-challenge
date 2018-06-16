<template>
    <div class="search-filter">
        <navbar/>

        <main-section/>
    </div>
</template>

<script>
import Navbar from '@/pages/filter/navbar';
import MainSection from '@/pages/filter/mainSection';

export default {
    components: {
        Navbar,
        MainSection
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
    .search-filter {
        min-height: 100vh;
    }
</style>