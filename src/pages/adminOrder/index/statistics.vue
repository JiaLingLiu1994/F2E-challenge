<template>
    <div class="d-flex text-center font-weight-bold">
        <div class="flex-fill bg-white py-32px mr-3">
                <icon-label
                    iconName="hand-holding-usd"
                    width="30"
                    height="18"
                    color="#000000"
                    labelTxt="TOTAL REVENUE"/>
                <p class="mb-0 mt-3 h2 text-yellow-green">
                    54,540
                </p>
        </div>
        <div class="flex-fill bg-white py-32px mr-3">
            <icon-label
                iconName="boxes"
                width="30"
                height="18"
                color="#000000"
                labelTxt="TOTAL COST"/>
            <p class="mb-0 mt-3 h2 text-venetian-red">
                12,660
            </p>
        </div>
        <div class="flex-fill bg-white py-32px">
            <icon-label
                iconName="money-bill"
                width="30"
                height="15"
                color="#000000"
                labelTxt="NET INCOME"/>
            <p class="mb-0 mt-3 h2 text-cornflower-blue">
                41,880
            </p>
        </div>
    </div>
</template>

<script>
import IconLabel from '@/components/iconLabel';

export default {
  components: {
    IconLabel
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>