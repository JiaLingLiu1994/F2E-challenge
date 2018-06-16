<template>
    <div class="mt-4 d-flex flex-row height-220px">
        <div class="attraction-img">
            <img 
                :src="item.Picture1"/>
        </div>
        
        <div class="bg-white max-width px-3 py-4 text-left">
            <h4 class="text-purple-light">{{ item.Name }}</h4>
            <p class="text-control">{{ item.Description }}</p>
            <div class="d-flex flex-row">
                <div class="font-16px font-weight-bold">{{ item.Zone | slash }}</div>
                <div class="font-16px font-weight-bold">{{ item.Ticketinfo | checkTicketInfo }}</div>
                <tag
                    class="px-3 ml-3 bg-light-grey border-light-grey text-white font-italic height-24px"
                    icon=""
                    name="Entertainment"
                    />
            </div>

            <div class="d-flex flex-row mt-3">
                <div class="text-nobel-grey font-16px mr-3 min-width-130px">
                    <i class="fas fa-map-marker-alt"></i>
                    Kaohsiung City
                </div>
                <div class="text-nobel-grey font-16px text-control-1 max-width-200px">
                    <i class="far fa-calendar-alt"></i>
                    {{ item.Opentime }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tag from '@/components/tag';

export default {
    components: {
        Tag
    },
    filters: {
        checkTicketInfo(val) {
            return (val.length > 0) ? val : '(無票價資訊)';
        },
        slash(val) {
            return val + '/'
        }
    },
    props: {
        item: {
            type: Object,
            default: {}
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
    .height-220px {
        height: 220px;

        .attraction-img {
            position: relative;
            overflow: hidden;
            min-width: 220px;
            height: 220px;

            img {
                position: absolute;
                left: 50%;
                top: 50%;
                height: 100%;
                width: 100%;
                -webkit-transform: translate(-50%,-50%);
                -ms-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
            }
        }

        .max-width {
            max-width: 560px;
        }

        .font-16px {
            font-size: 16px;
        }

        .height-24px {
            height: 24px;
        }

        .min-width-130px {
            min-width: 130px;
        }

        .max-width-200px {
            max-width: 200px;
        }
    }

    .text-control {
        text-overflow: ellipsis;
        overflow: hidden;
        // white-space: nowrap;
        display: -webkit-box;  
	    -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .text-control-1 {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
</style>