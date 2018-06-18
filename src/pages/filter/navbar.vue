<template>
    <b-navbar
        class="px-32px d-flex justify-content-center justify-content-sm-start"
        type="dark" variant="purple">

        <b-navbar-brand href="#">
            <img src="https://hexschool.github.io/THE_F2E_Design/week2-filter/assets/logo.svg"/>
        </b-navbar-brand>

        <b-navbar-nav class="d-none d-sm-inline justify-content-center">
            <b-nav-form>
                <b-input-group>
                    <b-input-group-prepend>
                        <svgicon 
                            class="" 
                            name="search" 
                            width="20" 
                            height="20" 
                            color="#FFFFFF"/>
                    </b-input-group-prepend>
                
                    <b-form-input 
                        size="sm" 
                        class="mr-sm-2 bg-transparent border-left-0 border-right-0 border-top-0 w-350px" 
                        type="text" 
                        placeholder="Explore your own activities"
                        v-model="keyword"
                        @change="change"/>
                </b-input-group>
            </b-nav-form>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

export default {
    data () {
        return {
        }
    },
    computed: {
        keyword: {
            get() {
                return this.$store.state.Attractions.filters.keyword;
            },
            set(value) {
                this.$store.commit('UPDATE_KEYWORD', value);
            }
        }
    },
    methods: {
        change(val) {
            this.$emit('inputChanged', val);
        }
    }
}
</script>

<style lang="scss">
    .search-filter {
        .navbar-nav {
            margin-left: 140px;
        }

        .form-inline {
            .input-group-prepend {
                border-bottom: 1px solid #FFFFFF;
            }

            input {
                border-bottom: 1px solid #FFFFFF;
                border-radius: 0;

                &::-webkit-input-placeholder {
                    color: rgba(255,255,255,0.50);
                    font-size: 20px;
                    font-style: italic;
                }

                &:focus {
                    box-shadow: none;
                }

                &::-webkit-autofill {
                    background-color: transparent;
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    .search-filter {
        .navbar {
            height: 92px;
        }

        .w-350px {
            width: 350px;
        }
    }
</style>
