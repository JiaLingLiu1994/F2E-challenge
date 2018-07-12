<template>
    <div class="comic-viewer-index d-flex flex-column">
        <div class="ad mb-4 mx-auto position-relative">
            <img class="ad-1"/>
        </div>

        <div class="wrap mx-auto d-flex flex-row">
            <div class="cover position-relative">
                <img/>
            </div>
            <div class="detail d-flex flex-column">
                <div class="title px-3 mb-3 bg-black text-white font-weight-bold">MY HEXSCHOOL</div>
                <div class="pl-20px mb-2 text-left">
                    <label class="mb-0 font-weight-bold">Genres</label>
                    <span class="pl-20px">Fusce/vehicula/dolor</span>
                </div>

                <div class="pl-20px mb-2 text-left">
                    <label class="mb-0 font-weight-bold">Author</label>
                    <span class="pl-20px">Namae Shiranai</span>
                </div>
                
                <div class="pl-20px mb-2 text-left">
                    <label class="mb-0 font-weight-bold">Status</label>
                    <span class="pl-20px">Ongoing</span>
                </div>

                <div class="pl-20px mb-4 text-left">
                    <label class="mb-0 font-weight-bold">Rate</label>
                    <span class="pl-20px">Ongoing</span>
                </div>

                <div class="pl-20px text-left">
                    <label class="mb-0 font-weight-bold">Summary</label>
                    <p class="mt-2">If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. 

Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals. </p>
                </div>
            </div>
        </div>

        <div class="ad mt-4 mx-auto position-relative">
            <img class="ad-2"/>
        </div>

        <el-tabs class="pt-4 mx-auto" v-model="activeName">
            <el-tab-pane class="py-4 text-left" label="All Chapters" name="1">
                <router-link to="/ComicViewer/reading">
                    <div class="chapter pl-4 py-2 font-weight-bold cursor-pointer">Chapter 1: The F2E Challenge Start!</div>
                </router-link>
                <router-link to="/ComicViewer/reading">
                    <div class="chapter pl-4 py-2 font-weight-bold cursor-pointer">
                        Chapter 2: Todo List is Going Crazy!
                        <span class="new-tag ml-3 bg-bright-green text-black">New</span>
                    </div>
                </router-link>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/tabs.css';

Vue.use(ElementUI);

export default {
    data () {
        return {
            activeName: '1'
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

    .pl-20px {
        padding-left: 20px;
    }

    .comic-viewer-index {
        margin-top: 28px;
        margin-bottom: 50px;

        .wrap, .el-tabs {
            width: 60%;
        }

        .ad {
            display: inline-block;
            width: 620px;
            height: 120px;
            
            img {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                object-fit: cover;
            }

            .ad-1 {
                background: url($ad-1);
            }

            .ad-2 {
                background: url($ad-2);
            }
        }

        .cover {
            border: 4px solid #000000;
            width: 48.9%;
            display: inline-block;

            &:before {
                content: "";
                display: block;
                width: 100%;
                padding: 150% 0 0 0;
            }
            
            img {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: url($cover-img);
                background-size: cover;
                background-position: center;
                object-fit: cover;
            }
        }

        .detail {
            width: 51.1%;

            .title {
                width: 100%;
                font-size: 36px;
                line-height: 52px;
                height: 52px;
            }

            p {
                white-space: pre-wrap;
            }
        }

        .chapter {
            &:hover {
                background-color: #000000;
                color: white;
            }
        }
        .new-tag {
            font-size: 14px;
            line-height: 14px;
            padding-right: 12px;
            padding-left: 12px;
        }
    }
</style>
<style lang="scss">
    .comic-viewer-index {
        .el-tabs__header {
            margin-bottom: 0px;
        }

        .el-tabs__item {
            background-color: #000000;
            color: #FFFFFF;
            font-weight: 700;
            font-size: 24px;
            padding-left: 24px !important;
            padding-right: 24px !important;
        }

        .el-tabs__active-bar, .el-tabs__nav-wrap::after {
            background-color: transparent;
        }

        .el-tabs__content {
            border: 4px solid #000000;
        }
    }
</style>