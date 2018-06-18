<template>
    <div class="main-content mx-auto pr-md-32px px-lg-32px d-flex flex-row">
        <div class="w-300px bg-whisper text-left py-32px">
            <h5 class="px-32px text-black">Location</h5>
            <selecter 
                class="px-32px"
                :options="locations"
                v-on:selecterChanged="selecterChanged($event)"/>

            <hr class="my-4">

            <h5 class="px-32px text-black">Date</h5>
            
            <div class="d-flex flex-row px-32px">
                <span class="date-label mt-2 pl-1 pr-2">from</span>
                <el-date-picker
                    class=""
                    v-model="startDate"
                    type="date"
                    placeholder="yyyy/mm/dd">
                </el-date-picker>
            </div>
            <div class="d-flex flex-row px-32px mt-2">
                <span class="date-label mt-2 pl-1 pr-2">to</span>
                <el-date-picker
                    class=""
                    v-model="endDate"
                    type="date"
                    placeholder="yyyy/mm/dd">
                </el-date-picker>
            </div>

            <hr class="my-4">

            <h5 class="px-32px text-black">Categories</h5>
            <checkbox-group 
                class="px-32px categories-checkboxs"
                :allOptions="allOptions"
                v-on:optionsChange="optionsChange"/>
            
        </div>

        <div class="lists-field pl-32px py-4">
            <div
                v-if="filterAttractions"
                class="font-24px font-weight-bold text-left">
                Showing <span class="text-purple-light">{{ filterAttractions.length }}</span> results by…
            </div>
            <div
                v-if="!filterAttractions"
                class="bg-whisper default-block"/>
    
            <div class="d-flex flex-row flex-wrap tag-list">
                <tag
                    v-for="i in checkedOptions"
                    :key="i"
                    :name="i"
                    class="px-3 py-1 mr-2 mt-2 border-purple-light text-purple-light font-italic"
                    color="#9013FE"
                    v-on:removeTag="removeTag($event)"/>
            </div>
            <data-card
                v-for="i in filterAttractions"
                :key="i.id"
                :item="i"/>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions, mapGetters } from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import Selecter from '@/components/selecter';
import CheckboxGroup from '@/components/checkboxGroup';
import Tag from '@/components/tag';
import DataCard from '@/pages/filter/dataCard';
import kaohsiungcities from '@/assets/config/kaohsiung';

Vue.use(BootstrapVue);

export default {
    components: {
        Selecter,
        CheckboxGroup,
        Tag,
        DataCard
    },
    data () {
        return {
            startDate: '',
            endDate: '',
            allOptions: ['免付費景點', '全天候開放'],
            checkedOptions: ['免付費景點', '全天候開放'],   // default check all
            locations: kaohsiungcities
        }
    },
    computed: {
        ...mapState({
            attractions: state => state.Attractions.attractions
        }),
        ...mapGetters([
            'filterAttractions'
        ])
    },
    created() {
        this.$store.dispatch('getAttractions');
        this.$store.dispatch('setFilters', {
                name: 'checkboxs',
                value: this.checkedOptions
            });
    },
    methods: {
        ...mapActions([
        ]),
        removeTag(event) {
            console.log(event);
        },
        selecterChanged(evt) {
            this.$store.dispatch('setFilters', {
                name: 'location',
                value: evt
            });
        },
        optionsChange(evt) {
            this.checkedOptions = evt;
            this.$store.dispatch('setFilters', {
                name: 'checkboxs',
                value: evt
            });
        }
    }
}
</script>

<style lang="scss">
    .main-content {
        .el-select {
            width: 100%;
        }

        .el-date-editor {
            width: 100%;

            .el-input__inner {
                padding-left: 15px;
            }

            .el-input__prefix, .el-input__suffix {
                display: none;
            }
        }

        .categories-checkboxs {
            .el-checkbox__label {
                font-size: 16px;
            }
        }
    }
</style>

<style lang="scss" scoped>
    .main-content {
        max-width: 1200px;

        .w-300px {
            min-width: 300px;
        }

        .font-24px {
            font-size: 24px;
        }

        hr {
            border-top: 1px solid #D7D7D7;
        }

        .date-label {
            min-width: 45px;
            text-align: right;
        }

        .lists-field {
            max-width: 655px;

            .default-block {
                height: 36px;
            }

            .tag-list {
                min-height: 42px;
            }
        }
    }
</style>
