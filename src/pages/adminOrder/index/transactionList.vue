<template>
    <div
        :class="{'bottom-line': bottomBorder}"
        class="pb-4 pt-4 d-flex flex-row list">
        <div class="mr-3 first">
            <svgicon :name="mainIcon" :width="width" :height="height" :color="color"/>
        </div>
        <div class="text-nobel-grey align-self-center second">{{ name }}</div>
        <div class="mr-3 font-weight-bold font-20 align-self-center third">{{ num }}</div>
        <div class="align-self-center fourth">
            <svgicon
                :class="{'rotate': nagative}"
                name="arrow-up"
                width="18"
                height="18"
                :color="nagative ? '#D0021B' : '#7ED321'"/>
            <span
                :class="nagative ? 'text-venetian-red' : 'text-yellow-green'"
                class="percentage">{{ rate }}
                <div class="tip position-absolute text-center bg-black">
                    <div class="text-white d-inline-block w-100">
                        {{ nagative ? 'DECREASE' : 'INCREASE'}} 
                        <b :class="nagative ? 'text-venetian-red' : 'text-yellow-green'">{{ tipView }}</b>
                        VIEWS
                    </div>
                    <i class="mt-2 d-inline-block w-100 text-nobel-grey">last week: 44,937</i>
                </div>
                </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        mainIcon: {
            type: String,
            required: true
        },
        width: {
            type: String,
            default: '45'
        },
        height: {
            type: String,
            default: '45'
        },
        color: {
            type: String,
            default: '#000000'
        },
        name: {
            type: String,
            required: true
        },
        num: {
            type: String,
            required: true
        },
        rate: {
            type: String,
            required: true
        },
        bottomBorder: {
            type: Boolean,
            default: true
        },
        nagative: {
            type: Boolean,
            default: false
        },
        tipView: {
            type: String,
            required: true
        }
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

    .font-20 {
        font-size: 20px;
    }

    .list {
        &.bottom-line {
            border-bottom: 1px solid #EBEBEB;
        }

        .first {
            width: 61px;
        }

        .second {
            width: calc(100% - 61px - 72px - 70px);
        }

        .third {
            width: 72px;
        }

        .fourth {
            width: 70px;

            .rotate {
                transform: rotate(180deg);
            }

            .percentage {
                position: relative;
                cursor: pointer;

                &:hover {
                    .tip {
                        display: inline-block;
                    }
                }
            }

            .tip {
                display: none;
                bottom: calc(100% + 16px);
                right: -67px;
                width: 186px;
                height: 88px;
                border-radius: 3px;

                div {
                    font-size: 14px;
                    margin-top: 20px;
                    height: 22px;
                    line-height: 22px;

                    b {
                        font-size: 18px;
                    }
                }

                i {
                    margin-top: 8px;

                }

                &:after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: calc(50% - 10px / 2);
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    background-color: rgba(0, 0, 0, 1.0);
                    transform: rotate(45deg);
                }
            }
        }
    }
</style>