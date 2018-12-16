<template>
    <article class="">
        <!-- 轮播图 -->
        <Slider :items="items" :cname="$style.slider" :options='options' />

    </article>
</template>

<script>
    import Slider from '../core/slider'
    export default {
        name: '',
        components: {
            Slider
        },
        props: {},
        data() {
            return {
                // 模拟构造数据
                items: [{
                    href: "money",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400",
                }, {
                    href: "money",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400"
                },{
                    href:"money",
                    src:"//img12.360buyimg.com/jrpmobile/jfs/t1/11734/11/2107/23079/5c1087b0E3b249b2a/d4f2a507b7743a7b.jpg?width=750&height=400"
                }
                ],
                options: {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                        type: 'fraction'
                    },
                    notNextTick: false,
                }

            }
        }

    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";

    .slider {
        margin-top: 120px;

        img {
            width: 100%;
        }
    }
</style>