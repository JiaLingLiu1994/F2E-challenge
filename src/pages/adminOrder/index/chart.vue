<template>
    <div class="bg-white mt-3">
        <label class="pt-32px pl-32px font-24 font-weight-bold">Activity</label>
        <line-chart
            class="p-32px"
            :data="datacollection"
            :options="{responsive: true, maintainAspectRatio: false}">
        </line-chart>
    </div>
</template>

<script>
import LineChart from '@/pages/adminOrder/index/lineChart.js';

export default {
    components: {
        LineChart
    },
    data() {
        return {
            datacollection: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .font-24 {  
        font-size: 24px;
    }
</style>