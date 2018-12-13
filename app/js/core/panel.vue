<template>
    <section :class="[panelClass,cname]">
        <h4>-{{ title }}-</h4>
        <!-- <div>{{ content }}</div> -->
        <slot/>
    </section>
</template>

<script>
    export default {
        props: {
            cname: {
                type: String,
                default: "",
            },
            title: {
                type: String,
                default: "",
            },
        },
        data() {
            return {
                panelClass: "panel",
            }
        },

    }
</script>
<style lang="scss">
@import "../../css/element.scss";
.panel{
    @include panel;
}
</style>