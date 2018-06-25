<template>
    <div class="mt-3 d-flex">
        <div class="px-42px pt-32px pb-2 mr-3 bg-white flex-fill">
            <div class="font-24 font-weight-bold mb-2">Transaction Website</div>
            <transaction-list
                mainIcon="facebook"
                name="Facebook.com"
                num="45,836"
                rate="20%"
                tipView="899"/>
            <transaction-list
                mainIcon="google"
                name="google.com"
                num="23,582"
                rate="12%"
                tipView="600"/> 
            <transaction-list
                mainIcon="shopping-cart"
                name="Shopify.com"
                num="2,489"
                rate="15%"
                tipView="702"
                nagative/>
            <transaction-list
                mainIcon="wordpress"
                name="Wordpress.com"
                num="1,057"
                rate="30%"
                tipView="793"
                :bottomBorder="false"
                nagative/>
        </div>

        <div class="px-32px pt-32px pb-4 bg-white flex-fill">
            <div class="font-24 font-weight-bold">Latest Orders</div>
            <order-list
                img="https://cdn2.digitalartsonline.co.uk/cmsdata/slideshow/3513552/polybreno_1500.jpg"
                name="Vintage T-shirt"
                orderTime="2018/6/13  13:42"
                seller="Belle Willis"
                price="3,200"/>
            <order-list
                img="https://cdn2.digitalartsonline.co.uk/cmsdata/slideshow/3513552/polybreno_1500.jpg"
                name="Cowboy Jacket"
                orderTime="2018/6/13  10:45"
                seller="Adrian Cummings"
                price="2,800"/>
            <order-list
                img="https://cdn2.digitalartsonline.co.uk/cmsdata/slideshow/3513552/polybreno_1500.jpg"
                name="Coach Coat"
                orderTime="2018/6/13  8:26"
                seller="Lura Holland"
                price="1,800"
                :bottomBorder="false"/>
        </div> 
    </div>
</template>

<script>
import TransactionList from '@/pages/adminOrder/index/transactionList';
import OrderList from '@/pages/adminOrder/index/orderList';

export default {
    components: {
        TransactionList,
        OrderList
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
    .font-24 {  
        font-size: 24px;
    }
</style>