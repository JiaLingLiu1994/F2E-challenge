<template>
    <div>
        <div class="product-gallery bg-white pt-32px pb-4 mx-auto">
            <div class="row mx-0">
                <div class="col-3 block bg-black text-white font-weight-bold px-0 px-sm-2 mx-auto">CCCLOTHES</div>
            </div>
            
            <div class="row mx-0 mt-2">
                <div class="col-6 title text-black font-weight-bold px-0 mx-auto">MEN’S TOPS</div>
            </div>

            <div class="row mx-0 px-32px mt-83px">
                <div class="col-6 px-0 image-frame-1">
                    <img class="img-1" src="https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1acdd78f34ee75aade9e313251bb1695&auto=format&fit=crop&w=1534&q=80"/>
                    <div class="product-name position-absolute font-weight-bold">LINEN BLAZER</div>
                    <div class="decribe font-italic font-weight-bold position-absolute">Men’s outfit</div>
                    <div class="product-num position-absolute font-weight-bold">01</div>
                    <div class="square-stripe position-absolute"/>
                    <div class="pattern position-absolute"/>
                </div>
                
                <div class="col-4 px-0 ml-auto mr-40px product-2">
                    <div class="image-frame-2">
                        <div class="decribe position-absolute font-italic font-weight-bold">Men’s basics</div>
                        <img class="img-2" src="https://images.unsplash.com/photo-1514632542677-48fae74a01b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf412aceb1d689765e387d30fca7210a&auto=format&fit=crop&w=634&q=80"/>
                        <div class="product-num position-absolute font-weight-bold">02</div>
                        <div class="square-stripe position-absolute"/>
                        <div class="square-box position-absolute"/>
                    </div>
                    
                    <div class="product-name font-weight-bold bg-white">FREELIFT</div>
                </div>
            </div>

            <div class="row mx-0 px-32px mt-200px">
                <div class="col-6 px-0 image-frame-3">
                    <img class="img-3" src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=1050&q=80"/>
                    <div class="product-name font-weight-bold">SUPER SKINNY</div>
                    <div class="decribe font-italic font-weight-bold position-absolute">Men’s pattern shirts</div>
                    <div class="product-num position-absolute font-weight-bold">03</div>
                    <div class="square-stripe position-absolute"/>
                    <div class="square-box position-absolute"/>
                </div>
                <div class="col-4 px-0 ml-auto text-right product-4">
                    <div class="image-frame-4">
                        <div class="product-name position-absolute font-weight-bold bg-white">DENIM</div>
                        <div class="decribe position-absolute font-italic font-weight-bold">Men’s cadual</div>
                        <img class="img-4" src="https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39466d66952b133d5a5cff642b970d05&auto=format&fit=crop&w=687&q=80"/>
                        <div class="product-num position-absolute font-weight-bold">04</div>
                        <div class="square-stripe position-absolute"/>
                        <div class="pattern position-absolute"/>
                    </div>
                </div>
            </div>

            <div class="row mx-0 px-32px">
                <div class="col-4 px-0 mr-auto product-5">
                    <div class="image-frame-5">
                        <div class="product-name position-absolute font-weight-bold bg-white">SWEATSHIRTS</div>
                        <div class="decribe position-absolute font-italic font-weight-bold">Men’s jacket</div>
                        <img class="img-5" src="https://images.unsplash.com/photo-1525448198276-222de3961638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43fb25556cdbd191e520c7f28739e40d&auto=format&fit=crop&w=1050&q=80"/>
                        <div class="product-num position-absolute font-weight-bold">05</div>
                        <div class="square-stripe position-absolute"/>
                        <div class="pattern position-absolute"/>
                    </div>
                </div>
            </div>

            <div class="row mx-0 px-32px">
                <div class="col-4 px-0 mr-auto text-left product-7">
                    <div class="image-frame-7">
                        <div class="product-name position-absolute font-weight-bold bg-white">EDITION</div>
                        <div class="decribe position-absolute font-italic font-weight-bold">Men’s shirts</div>
                        <img class="img-7" src="https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ff45d79414b3166b08b800a32018be&auto=format&fit=crop&w=634&q=80"/>
                        <div class="product-num position-absolute font-weight-bold">07</div>
                        <div class="square-stripe position-absolute"/>
                        <div class="square-box position-absolute"/>
                    </div>
                </div>
                <div class="col-6 px-0 ml-auto product-6">
                    <div class="image-frame-6">
                        <div class="product-name position-absolute font-weight-bold bg-white">VINTAGE DENIM</div>
                        <div class="decribe position-absolute font-italic font-weight-bold">Men’s classic</div>
                        <router-link to="/ProductGallery/product/vintage_denim">
                            <img class="img-6 cursor-pointer" src="https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=634&q=80"/>
                        </router-link>
                        <div class="product-num position-absolute font-weight-bold">06</div>
                        <div class="square-stripe position-absolute"/>
                        <div class="square-box position-absolute"/>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
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

<style lang="scss" scoped>
    .product-gallery {
        min-height: 100vh;
        max-width: 1025px;
        overflow-x: auto;

        .block {
            height: 27px;
            line-height: 27px;
            font-size: 14px;

            @media screen and (min-width: 525px) {
                max-width: 138px;
                font-size: 20px;
            }

            @media screen and (min-width: 340px) and (max-width: 524px) {
                max-width: 95px;
            }
        }

        .title {
            height: 85px;
            line-height: 85px;

            @media screen and (min-width: 885px) {
                max-width: 460px;
                font-size: 72px;
            }

            @media screen and (min-width: 768px) and (max-width: 991px) {
                font-size: 62px;
            }

            @media screen and (min-width: 576px) and (max-width: 767px) {
                font-size: 47px;
            }
            @media screen and (min-width: 525px) and (max-width: 575px) {
                font-size: 43px;
            }

            @media screen and (max-width: 524px) {
                font-size: 27px;
            }
        }

        .mt-200px {
            margin-top: 200px;
        }

        .mt-83px {
            margin-top: 83px;
        }

        .square-stripe {
            width: 240px;
            height: 200px;
            border: 20px solid #50E3C2;
        }

        .square-box {
            width: 240px;
            height: 200px;
            background-color:  #50E3C2;
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

        .decribe {
            line-height: 28px;
            font-size: 24px;
        }

        .product-num {
            line-height: 48px;
            font-size: 48px;
        }

        .product-name {
            font-size: 48px;
            line-height: 48px;
            text-shadow: 0px -18px 3px rgba(0,0,0,0.30), 0px -30px 3px rgba(0,0,0,0.10);
        }

        .image-frame-1 {
            position: relative;
            width: 100%;
            display: inline-block;

            &:before {
                content: "";
                display: block;
                width: 100%;
                padding: 83.33% 0 0 0;
            }

            .img-1 {
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: 1;
            }

            .product-name {
                top: -14px;
                left: 0;
                z-index: 2;
            }

            .square-stripe {
                top: -49px;
                right: -60px;
                z-index: 0;
            }

            .pattern {
                left: 52px;
                bottom: -48px;
                z-index: 3;
            }

            .decribe {
                transform: rotate(-270deg);
                right: -84px;
                bottom: 32px;
            }
        }

        .product-2 {
            margin-left: 60px;

            .image-frame-2 {
                position: relative;
                width: 75%;
                display: inline-block;
                margin-top: 99px;
                margin-right: 45%;

                &:before {
                    content: "";
                    display: block;
                    width: 100%;
                    padding: 83.33% 0 0 0;
                }

                .img-2 {
                    position:  absolute;
                    display: block;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 2;
                }

                .decribe {
                    left: -16px;
                    top: -28px;
                    z-index: 3;
                }

                .product-num {
                    left: 302px;
                    bottom: 251px;
                    z-index: 4;
                }

                .square-box {
                    width: 100%;
                    height: 100%;
                    left: 60px;
                    bottom: 50px;
                    z-index: 1;
                }

                .square-stripe {
                    width: 100%;
                    height: 100%;
                    left: 120px;
                    bottom: 99px;
                    z-index: 0;
                }
            }

            .product-name {
                margin-top: 25px;
                margin-right: 32px;
                text-align: right;
                right: 0;
                bottom: -18px;
                font-size: 48px;
                line-height: 48px;
                text-shadow: 0px -18px 3px rgba(0,0,0,0.30), 0px -30px 3px rgba(0,0,0,0.10);
            }
        }

        .image-frame-3 {
            position: relative;
            width: 100%;
            display: inline-block;

            &:before {
                content: "";
                display: block;
                width: 100%;
                padding: 41.66% 0 0 0;
            }

            .img-3 {
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                width: 100%;
                height: 42.4%;
                object-fit: cover;
                z-index: 1;
            }

            .product-name {
                position: absolute;
                top: -48px;
                right: 0;
                font-size: 48px;
                line-height: 48px;
                text-shadow: 0px -18px 3px rgba(0,0,0,0.30), 0px -30px 3px rgba(0,0,0,0.10);
                z-index: 2;
            }

            .square-stripe {
                left: 300px;
                top: 50px;
            }

            .square-box {
                top: -50px;
                left: 0;
                z-index: 0;
            }

            .decribe {
                left: 32px;
            }

            .product-num {
                left: 480px;
                z-index: 1;
            }
        }

        .product-4 {
            .image-frame-4 {
                position: relative;
                width: 75%;
                display: inline-block;

                &:before {
                    content: "";
                    display: block;
                    width: 100%;
                    padding: 166.66% 0 0 0;
                }

                .img-4 {
                    position:  absolute;
                    display: block;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 3;
                }

                .product-name {
                    transform: rotate(270deg);
                    left: -100px;
                    top: 50px;
                    z-index: 2;
                }

                .decribe {
                    transform: rotate(-270deg);
                    right: -32px;
                    top: -95px;
                    z-index: 1;
                    background-color: transparent !important;
                }

                .product-num {
                    left: -57px;
                    bottom: 0;
                }

                .square-stripe {
                    width: 100%;
                    height: 50%;
                    left: -48px;
                    top: -95px;
                    z-index: 0;
                }

                .pattern {
                    bottom: -45px;
                    z-index: 4;
                }
            }
        }

        .product-5 {
            .image-frame-5 {
                position: relative;
                width: 75%;
                display: inline-block;
                margin-left: 240px;

                &:before {
                    content: "";
                    display: block;
                    width: 100%;
                    padding: 83.33% 0 0 0;
                }

                .img-5 {
                    position:  absolute;
                    display: block;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                }

                .product-name {
                    left: -245px;
                    top: 50px;
                    z-index: 2;
                    background-color: transparent !important;
                }

                .decribe {
                    right: -150px;
                    top: 0;
                }

                .product-num {
                    left: -104px;
                    bottom: 4px;
                    z-index: 1;
                }

                .square-stripe {
                    width: 100%;
                    height: 50%;
                    left: -104px;
                    bottom: -48px;
                    z-index: 0;
                }

                .pattern {
                    top: -54px;
                    left: -140px;
                    z-index: 1;
                }
            }
        }

        .image-frame-6 {
            position: relative;
            width: 100%;
            display: inline-block;

            &:before {
                content: "";
                display: block;
                width: 100%;
                padding: 83.33% 0 0 0;
            }

            .img-6 {
                position:  absolute;
                display: block;
                top: -6px;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: 1;
            }

            .product-name {
                top: -54px;
                right: 0;
            }

            .product-num {
                left: -60px;
                bottom: 52%;
            }

            .square-stripe {
                bottom: -50px;
                width: 100%;
                z-index: 0;
            }

            .square-box {
                bottom: 6px;
                left: -60px;
            }

            .decribe {
                left: 33%;
                bottom: -25px;
            }
        }

        .product-7 {
            .image-frame-7 {
                position: relative;
                width: 75%;
                display: inline-block;
                margin-top: 200px;

                &:before {
                    content: "";
                    display: block;
                    width: 100%;
                    padding: 166.66% 0 0 0;
                }

                .img-7 {
                    position:  absolute;
                    display: block;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 3;
                }

                .product-name {
                    transform: rotate(90deg);
                    background-color: transparent !important;
                    right: -50%;
                    top: 17%;
                    z-index: 2;
                }

                .decribe {
                    top: -28px;
                    z-index: 1;
                    background-color: transparent !important;
                }

                .product-num {
                    right: -120px;
                    bottom: 0;
                    z-index: 1;
                }

                .square-stripe {
                    width: 100%;
                    height: 100%;
                    left: 60px;
                    top: -50px;
                }

                .square-box {
                    bottom: 0;
                    right: -120px;
                }
            }
        }
    }
</style>