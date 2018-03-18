<template>
  <div id="app">
    <transition
      name="slide-fade"
      mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import { types } from '@/vuex/store'

  export default {
    name: 'app',
    created () {
      this.$store.dispatch(types.USE_DEFAULT_THEME)
    }
  }
</script>

<style lang="scss">
  @import './assets/css/roboto-fonts.css';

  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
