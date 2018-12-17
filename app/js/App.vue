<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  .app {
    overflow-x: hidden; //防止顶部滚动
    height: 100%;
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%) //右边进左边出
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%) position absolute //内容部分平滑进入 
  }

  .v-enter-active,
  .v-leave-active {
    transition: all .1s
  }
</style>