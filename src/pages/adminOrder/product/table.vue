<template>
    <div class="product-table pt-4">
        <el-table
            :data="tableData"
            :span-method="arraySpanMethod"
            stripe
            style="width: 100%">
            <el-table-column
                label="Product"
                label-class-name="pl-32px text-left"
                width="250">
                <template slot-scope="scope">
                    <div class="d-flex flex-row prdouct-frame">
                        <label class="mb-0 ml-2 d-inline-block position-relative align-self-center checkbox">
                            <input type="checkbox" class="d-inline-block position-absolute">
                            <span class="d-inline-block position-relative">
                                <i class="fas fa-check position-absolute text-center"/>
                            </span>
                        </label>
                        <div class="image-frame align-self-center">
                            <img class="product-img" :src="scope.row.imageSrc"/>
                        </div>
                        <div class="ml-2 name align-self-center">{{ scope.row.product }}</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                prop="original"
                label="Original"
                label-class-name="text-center"
                width="100">
            </el-table-column>
            <el-table-column
                prop="discount"
                label="Discount"
                label-class-name="text-center"
                width="100">
            </el-table-column>
            <el-table-column
                label="Size"
                label-class-name="text-center"
                width="90">
                <template slot-scope="scope">
                    <div class="d-flex flex-column">
                        <div
                            v-for="i in scope.row.size"
                            :key="i"
                            class="line d-flex flex-row height-52px">
                            <div class="width-95px">{{ i }}</div>
                            <div class="width-95px">
                                <div
                                    v-for="color in scope.row.color"
                                    :key="color">
                                    {{ color }}
                                </div>
                            </div>
                            <div class="width-95px">
                                <div>15</div>
                                <div>20</div>
                            </div>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                prop="color"
                label="Color"
                label-class-name="text-center"
                width="100">
            </el-table-column>
            <el-table-column
                prop="inventory"
                label="Inventory"
                label-class-name="text-center"
                width="100">
            </el-table-column>
            <el-table-column
                label="Status"
                label-class-name="text-center">
                <template slot-scope="scope">
                    <div class="dropdown mr-3 postion-absolute">
                        <button
                            :class="scope.row.status === 'PUBLISHED' ? 'btn-yellow-green' : 'btn-nobel-grey'"
                            class="btn dropdown-toggle" type="button" id="statusButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            UNPUBLISHED
                        </button>
                        <div class="dropdown-menu" aria-labelledby="statusButton">
                            <a class="dropdown-item" href="#">PUBLISHED</a>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import Faker from 'vue-faker';
import 'element-ui/lib/theme-chalk/table.css';

Vue.use(ElementUI);
Vue.use(Faker, {locale: 'en_US'});

export default {
    components: {
    },
    data () {
        return {
            tableData: [
                {
                    product: this.$faker().commerce.productName(),
                    imageSrc: this.$faker().image.imageUrl(),
                    original: '$' + this.$faker().commerce.price(),
                    discount: '$' + this.$faker().commerce.price(),
                    size: ['L', 'M', 'S'],
                    color: [this.$faker().commerce.color(), this.$faker().commerce.color()],
                    inventory: this.$faker().random.number(),
                    status: 'PUBLISHED'
                },
                {
                    product: this.$faker().commerce.productName(),
                    original: '$' + this.$faker().commerce.price(),
                    discount: '$' + this.$faker().commerce.price(),
                    size: ['L', 'M', 'S'],
                    color: [this.$faker().commerce.color(), this.$faker().commerce.color()],
                    inventory: this.$faker().random.number(),
                    status: 'PUBLISHED'
                },
                {
                    product: this.$faker().commerce.productName(),
                    original: '$' + this.$faker().commerce.price(),
                    discount: '$' + this.$faker().commerce.price(),
                    size: ['L', 'M', 'S'],
                    color: [this.$faker().commerce.color(), this.$faker().commerce.color()],
                    inventory: this.$faker().random.number(),
                    status: 'UNPUBLISHED'
                },
                {
                    product: this.$faker().commerce.productName(),
                    original: '$' + this.$faker().commerce.price(),
                    discount: '$' + this.$faker().commerce.price(),
                    size: ['L', 'M', 'S'],
                    color: [this.$faker().commerce.color(), this.$faker().commerce.color()],
                    inventory: this.$faker().random.number(),
                    status: 'UNPUBLISHED'
                }
            ]
        }
    },
    methods: {
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 3) {
                return [1, 3];
            } else if (columnIndex === 4 || columnIndex === 5) {
                return [0, 0];
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .product-table {
        .el-table_1_column_1 > .cell {
            .checkbox {
                padding-top: 36px !important;
                height: 200px;
                padding-top: (34px - 20px) / 2;

                > input[type="checkbox"]:checked {
                    + span {
                        background-color: #9B9B9B;
                        border: 1px solid #9B9B9B;
                        

                        i {
                            color: rgba(255, 255, 255, 1.0);
                        }
                    }
                }
            }

            .image-frame {
                position: relative;
                overflow: hidden;
                min-width: 58px;
                height: 200px;
            
                .product-img {
                    position: absolute;
                    width: 50px;
                    height: 50px;
                    top: 20px;
                    left: 8px;
                }
            }

            .name {
                padding-top: 32px;
                height: 200px;
                align-self: center;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }

        .el-table_1_column_4 > .cell {
            .line {
                border-bottom: 1px solid #FFFFFF;
            }
        }
        
        .dropdown {
            top: 140px;
        }

        .width-95px {
            width: 95px;
            padding-left: 10px;
            padding-right: 10px;
        }
        
        .height-52px {
            height: 52px;
        }
    }

    .checkbox {
        $wh: 15px;
        width: $wh;
        height: $wh;
        cursor:  pointer;
        
        > input[type="checkbox"] {
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
            border: 1px solid rgba(255, 255, 255, 1.0);
            background-color: rgba(255, 255, 255, 1.0);
            border-radius: 2px;

            > i {
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                font-size: 14px;
                display: none;
            }
        }
    }
</style>
<style lang="scss">
    .product-table {
        .el-table__row {
            height: 83px;
            background-color: #F2F2F2;

            td {
                padding: 0px !important;

                > .cell {
                    position: relative;
                    overflow: hidden;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 200px;
                }
            }
        }

        .el-table__row--striped  {
            td {
                background: #EBEBEB !important;
            }
        }

        td.el-table_1_column_4 > .cell, td.el-table_1_column_3 > .cell, td.el-table_1_column_2 > .cell {
            padding-top: 32px !important;
        }

        td.el-table_1_column_7 > .cell {
            text-align: center;
        }
    }
</style>