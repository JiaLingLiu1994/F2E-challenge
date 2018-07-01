<template>
    <div class="grid">
        <div class="item item-1 d-flex align-items-center justify-content-end">
            <router-link to="/ProductGallery/index">
                <i class="mr-2 fas fa-arrow-left cursor-pointer"/>
            </router-link>
        </div>

        <div class="item item-2 d-flex align-items-center">
            <div class="block w-100 bg-black text-white font-weight-bold px-0 px-sm-2">CCCLOTHES</div>
        </div>

        <div class="item item-3">
            <div class="img">
                <img class="img position-absolute" src="https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=634&q=80"/>
                <div class="square-box position-absolute"/>
                <div class="square-stripe position-absolute"/>
                <div class="title title-1 font-weight-bold position-absolute">VINTAGE</div>
                <div class="title title-2 font-weight-bold position-absolute">DENIM</div>
                <div class="title title-top font-weight-bold position-absolute">TOP</div>
                <div class="title title-num font-weight-bold position-absolute">06</div>
            </div>
        </div>

        <div class="item item-4 d-flex flex-column align-items-start">
            <div class="title font-weight-bold">VINTAGE DENIM</div>
            <div class="vice-title font-weight-bold">Kogi Cosby sweater ethical squid irony </div>
            <p class="pt-3 text-left">In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. 
                There is no staying in any one place; for at one and the same time everything has to be done everywhere. It is much the same with him who endeavors the description of the scene. 
                We must now retrace our way a little. It was mentioned that upon first breaking ground in the whale's back, the blubber-hook was inserted into the original hole there cut by the spades of the mates. 
                But how did so clumsy and weighty a mass as that same hook get fixed in that hole? It was inserted there by my particular friend Queequeg, whose duty it was, as harpooneer.
            </p>
        </div>

        <div class="item item-5 position-relative">
            <label class="decribe mb-0 font-weight-bold font-italic position-absolute">PRODUCT DETAILS</label>
        </div>

        <div class="item item-6">
            <div class="img">
                <img class="img position-absolute" src="https://images.unsplash.com/photo-1519406686401-e9ef2420c15b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f48976340279ffce098f21bb046acc87&auto=format&fit=crop&w=1050&q=80"/>
                <div class="square-stripe position-absolute"/>
            </div>
        </div>

        <div class="item item-7">
            <div class="img">
                <img class="img position-absolute" src="https://images.unsplash.com/photo-1519406728390-b536d7be138f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=787976dcde91781727f476692b203ee9&auto=format&fit=crop&w=634&q=80"/>
                <div class="square-box position-absolute"/>
                <div class="pattern position-absolute"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    }
}
</script>

<style lang='scss' scpoed>
    .grid {
        display: grid;
        grid-template-columns: repeat(8, 120px);
        grid-template-rows: repeat(20, 100px);
        min-height: 100vh;
        width: 960px;
        margin: 0 auto;

        .square-box {
            width: 240px;
            height: 200px;
            background-color:  #50E3C2;
        }
        
        .square-stripe {
            width: 480px;
            height: 200px;
            border: 20px solid #50E3C2;
        }

        .pattern {
            width: 240px;
            height: 100px;
            background: repeating-linear-gradient(
                -45deg,
                rgba(80, 277, 194, 1.0) 6px,
                rgba(80, 277, 194, 1.0) 26px,
                rgba(0, 0, 0, 0.0) 26px,
                rgba(0, 0, 0, 0.0) 42px
            );
        }

        .title {
            font-size: 48px;
            line-height: 48px;
        }

        .title-2 {
            transform: rotate(-270deg);
        }

        .title-top {
            transform: rotate(180deg);
        }

        .title-num {
            transform: rotate(-90deg);
        }

        .decribe {
            line-height: 28px;
            font-size: 24px;
            transform: rotate(-270deg);
            width: 230px;;
        }

        .vice-title {
            font-size: 24px;
            line-height: 36px;
        }

        .item-1 {
            grid-column-start: 1;
            grid-column-end: span 1;
        }

        .item-3 {
            grid-column-start: 2;
            grid-column-end: span 6;
            grid-row-start: 3;
            grid-row-end: 7;

            .img {
                position: relative;
                display: inline-block;
                width: 100%;
                height: 100%;

                img {
                    display: block;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                }

                .square-box {
                    top: -50px;
                    left: -60px;
                    z-index: 0;
                }

                .square-stripe {
                    bottom: -50px;
                    right: -60px;
                }

                .title-1 {
                    right: 0;
                    top: -50px;
                }

                .title-2 {
                    top: 50px;
                    right: -105px;
                }

                .title-top {
                    bottom: -50px;
                }

                .title-num {
                    left: -55px;
                    bottom: 6px;
                }
            }
        }

        .item-4 {
            grid-column-start: 3;
            grid-column-end: span 5;
            grid-row-start: 9;
            grid-row-end: 13;
        }

        .item-5 {
            grid-column-start: 2;
            grid-row-start: 9;
            grid-row-end: 12;

            .decribe {
                left: -100px;
                top: 100px;
            }
        }

        .item-6 {
            grid-column-start: 2;
            grid-column-end: span 3;
            grid-row-start: 14;
            grid-row-end: 17;

            .img {
                position: relative;
                display: inline-block;
                width: 100%;
                height: 100%;

                img {
                    display: block;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 2;
                }

                .square-stripe {
                    bottom: -50px;
                    right: -60px;
                    z-index: 0;
                }
            }
        }

        .item-7 {
            grid-column-start: 4;
            grid-column-end: span 4;
            grid-row-start: 16;
            grid-row-end: 20;

            .img {
                position: relative;
                display: inline-block;
                width: 100%;
                height: 100%;

                img {
                    display: block;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                }

                .square-box {
                    right: -60px;
                    top: -100px;
                    z-index: 0;
                }

                .pattern {
                    bottom: -50px;
                    left: -180px;
                    z-index: 3;
                }
            }
        }

        a {
            color: #000000;
            font-weight: 700;

            &:hover {
                color: rgba(0,0,0,0.8);
                text-decoration: none;
            }
        }
    }
</style>