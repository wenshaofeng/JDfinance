<template>
    <!-- 动态改变class -->
    <div :class="[btnClass,cname]">
        <!-- 插槽 父组件可向此处分发内容 -->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            cname: {
                type: String,
                default: "",
            },
        },
        data() {
            return {
                btnClass: "btn"
            }
        }

    }
</script>
<style lang="scss" scoped>
@import "../../css/element.scss";
.btn{
	@include btn;
}

</style>