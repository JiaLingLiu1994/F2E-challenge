<template>
    <div class="admin-order-index py-32px px-42px text-left">
        <label class="font-24 font-weight-bold">OVERVIEW</label>
        <div class="float-right">2018/6/6 2018/6/6 Weekly</div>

        <statistics/>

        <chart/>

        <last-section/>
    </div>
</template>

<script>
import Statistics from '@/pages/adminOrder/index/statistics';
import Chart from '@/pages/adminOrder/index/chart';
import LastSection from '@/pages/adminOrder/index/lastSection';

export default {
    components: {
        Statistics,
        Chart,
        LastSection
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
    .admin-order-index {
        .font-24 {
            font-size: 24px;
        }
    }
</style>