<template>
    <div class="comic-viewer-reading">
        <div class="header d-flex justify-content-cente">
            <router-link to="/ComicViewer">
                My Hexschool
                <svgicon 
                    name="caret-right" 
                    width="20" 
                    height="20" 
                    color="#000000"/>
            </router-link>
            <svgicon 
                class="mr-2" 
                name="sun" 
                width="20" 
                height="20" 
                color="#000000"/>
            <el-switch
                v-model="value2"
                active-color="#000000"
                inactive-color="#000000">
            </el-switch>
            <svgicon 
                class="ml-2" 
                name="moon" 
                width="20" 
                height="20" 
                color="#000000"/>
        </div>
        
    </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/switch.css';

Vue.use(ElementUI);

export default {
    data () {
        return {
            value1: true,
            value2: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import './main.scss';

    a {
        text-decoration: none;
        color: #000000;
    }    
</style>
<style lang="scss">
</style>