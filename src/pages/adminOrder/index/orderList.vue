<template>
    <div
        :class="{'bottom-line': bottomBorder}"
        class="pb-2 pt-4 d-flex justify-content-between list">
        <div class="mr-3 first">
            <img :src="img"/>
        </div>
        <div class="d-flex flex-column second">
            <div class="mt-2 font-20">{{ name }}</div>
            <icon-label
                class="text-sonic-sliver mt-1"
                iconName="clock"
                width="10"
                height="10"
                color="#757575"
                :labelTxt="orderTime"/>
            <icon-label
                class="text-sonic-sliver mt-1"
                iconName="people"
                width="10"
                height="18"
                color="#757575"
                :labelTxt="seller"/>
        </div>

        <div class="mb-1 d-flex flex-column align-self-end text-right third">
            <div class="mt-2 font-14">Total</div>
            <div class="font-20 font-weight-bold">{{ price }}</div>
        </div>
    </div>
</template>

<script>
import IconLabel from '@/components/iconLabel';

export default {
    props: {
        img: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: '100'
        },
        height: {
            type: String,
            default: '100'
        },
        name: {
            type: String,
            required: true
        },
        orderTime: {
            type: String,
            required: true
        },
        seller: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        bottomBorder: {
            type: Boolean,
            default: true
        }
    },
    components: {
        IconLabel
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
    .font-14 {  
        font-size: 14px;
    }

    .font-20 {
        font-size: 20px;
    }

    .list {
        &.bottom-line {
            border-bottom: 1px solid #EBEBEB;
        }

        .first {
            position: relative;
            overflow: hidden;
            min-width: 100px;
            height: 100px;

            img {
                position: absolute;
                width: 100%;
                height: 100%; 
            }
        }

        .second {
            width: 200px;
        }
    }
</style>