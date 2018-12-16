<template>
    <section :class="[cname]">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <!-- slides -->
            <swiper-slide v-for="item of items" :key="item.href">
                <router-link :to="{path:item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination" v-if="options.pagination">
            </div>
        </swiper>
    </section>
</template>

<script>
    export default {
        name: '',
        components: {},
        props: {
            cname: {
                type: String,
                default: ""
            },
            options: {
                type: Object,
                default () {
                    return {
                        autoplay: true,
                        loop: true,
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true
                        },
                        notNextTick: false,
                    }
                }

            },
            items: {
                type: Array,
                default () {
                    //[{href:'',src:''}]
                    return []
                }
            }

        },

    }
</script>
<style lang="scss">
    @import '~swiper/dist/css/swiper.css';
    .swiper-pagination-bullet{
        width: .4rem;
        height: .4rem;
    }
    .swiper-pagination-fraction{
      font-size: 85%
    }
</style>