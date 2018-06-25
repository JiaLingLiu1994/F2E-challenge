<template>
    <b-navbar
        class="px-32px d-flex justify-content-center justify-content-sm-start"
        type="dark" variant="black" toggleable="md">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#/AdminOrder" @click="active = 'home'">
            Shoptime
        </b-navbar-brand>
        
        <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
            <b-nav-item href="#/AdminOrder" :active="active === 'home'" @click="active = 'home'">HOME</b-nav-item>
            <b-nav-item href="#/AdminOrder/orders" :active="active === 'orders'" @click="active = 'orders'">ORDERS</b-nav-item>
            <b-nav-item href="#/AdminOrder/product" :active="active === 'product'" @click="active = 'product'">PRODUCT</b-nav-item>
        </b-navbar-nav>
        </b-collapse>

        <b-navbar-nav>
            <b-nav-item right>ADMIN</b-nav-item>
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
            active: 'home'
        }
    },
    created() {
        const array = window.location.href.split('/');
        switch (array.slice(-1)[0]) {
            case 'AdminOrder':
                this.active = 'home';
                break;
            case 'orders':
                this.active = 'orders';
                break;
            case 'product':
                this.active = 'product';
                break;
            default:
                this.active = 'home';
                break;
        }
    }
}
</script>

<style lang="scss">
    .admin-order {
        .navbar-brand {
            font-size: 24px;
            font-weight: 700;
        }

        .nav-link.active {
            border-bottom: 2px solid #FFFFFF; 
        }
    }
</style>
