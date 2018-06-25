<template>
    <div class="admin-orders py-32px px-42px">
        <div class="info text-left">
            <label class="mb-0 d-inline-block position-relative checkbox">
                <input type="checkbox" class="d-inline-block position-absolute">
                <span class="d-inline-block position-relative">
                    <i class="fas fa-check position-absolute text-center"/>
                </span>
            </label>
            <a class="px-3 float-right d-inline-block bg-black text-white font-weight-bold add">
                ADD NEW PRODUCT<i class="fas fa-plus ml-2"></i>
            </a>
        </div>

        <product-table/>
    </div>
</template>

<script>
import ProductTable from '@/pages/adminOrder/product/table';

export default {
    components: {
        ProductTable
    },
    data () {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
    .admin-orders {
        .info {
            > * {
                height: 34px;
            }

            .checkbox {
                padding-top: (34px - 20px) / 2;

                > input[type="checkbox"]:checked {
                    + span {
                        background-color: rgba(0, 0, 0, 1.0);

                        i {
                            color: rgba(255, 255, 255, 1.0);
                        }
                    }
                }
            }

            .add {
                font-size: 14px;
                line-height: 34px;
                text-decoration: none;
                border-radius: 4px;
            }
        }
    }

    .checkbox {
        $wh: 20px;
        width: $wh;
        height: $wh;
        cursor:  pointer;
        
        > input[type="checkbox"] {
            left: 0;
            top: 0;
            z-index: 1;
            opacity: 0;

            &:checked {
                + span {
                    i {
                        display: inline-block;
                    }
                }
            }
        }

        > span {
            width: $wh;
            height: $wh;
            line-height: $wh;
            z-index: 2;
            border: 1px solid rgba(0, 0, 0, 1.0);
            border-radius: 2px;

            > i {
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                font-size: 16px;
                display: none;
            }
        }
    }
</style>