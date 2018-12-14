<template>
    <article class="">
        <!-- 轮播图 -->
        <Slider :items="items" :cname="$style.slider" />
        <!-- 五个入口链接导航 -->
        <section :class="$style.list">
            <!-- 循环列表 -->
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>
            </div>
        </section>

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
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t21502/229/1516552172/35642/94d35df3/5b2b9206Nd1e1c487.jpg?width=750&height=320",
                }, {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t24442/184/250815010/39919/f2710081/5b2a4737N817ba019.jpg?width=750&height=320",
                }, {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t22771/323/264485099/51028/9d5a2201/5b2a469fN12b4b3bf.jpg?width=750&height=320",
                }],
                // 模拟构造数据(数据一般是通过后台提供api，前端解析出来的)
                enters: [{
                        href: "download",
                        img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                        title: "优惠券",
                    },
                    {
                        href: "home",
                        img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                        title: "领红包",
                    },
                    {
                        href: "home",
                        img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                        title: "抢钢镚",
                    },
                    {
                        href: "home",
                        img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                        title: "领京豆",
                    },
                    {
                        href: "home",
                        img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                        title: "白条提额",
                    },
                ],
            }
        }

    }
</script>

<!-- 在style中添加module  这样样式只在本页面中起作用  然后dom中的class样式需要（:cname="$style.slider"或者:class="$style.list"）这样写添加一个$style然后把class变成动态的:class -->
<style lang="scss" module>
    @import "../../css/element.scss";

    .slider {
        margin-top: 120px;

        img {
            width: 100%;
        }
    }

    .list {
        @include list(row);
        background: #fff;
        padding-top: 40px;
        padding-bottom: 20px;
        justify-content: space-around;

        a {
            text-decoration: none;
        }

        .item {
            text-align: center;

            img {
                display: inline-block;
                width: 90px;
                height: 90px;
            }

            h4 {
                font-size: 26px;
                margin-top: 12px;
                color: #666;
            }
        }
    }
</style>