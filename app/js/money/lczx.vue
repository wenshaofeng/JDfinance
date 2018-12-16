<template>
    <panel title="理财专享" :class="$style.panel">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240"
                alt="">
        </section>
    </panel>
</template>

<script>
    import panel from "../core/panel.vue"
    export default {
        components: {
            panel,
        },
    }
</script>

<style lang="scss" module>
    @import '../../css/element.scss';

    .panel {
        @include panel;

        >h4 {
            display: none;
        }

        .content {
            img {
                display: block;
                width: 100%;
                height: 142px;
            }
        }
    }
</style>