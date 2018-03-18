<template lang="pug">
  .welcome-page
    img(src='../assets/img/logo.png' alt='People')
    p(v-for="greeting in allGreetings")="{{ greeting }}"
    button(v-on:click="switchTheme()") {{ switchThemeText }} (css theme)
    div.test {{ testStore }}
      button(v-on:click="removeLastGreeting()") Remove last greeting
      button(v-on:click="addGreeting('This addition used the store!')") Add greeting
</template>

<script type="text/javascript">
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import { types } from '@/vuex/store'

  export default {
    data () {
      return {
        testStore: 'Test the store:'
      }
    },
    computed: {
      ...mapGetters({
        allGreetings: types.GET_ALL_GREETINGS,
        isDefaultThemeInUse: types.IS_DEFAULT_THEME_IN_USE
      }),
      switchThemeText: function () {
        if (this.isDefaultThemeInUse) {
          return 'Turn off the light'
        } else {
          return 'Turn the light back on'
        }
      }
    },
    methods: {
      ...mapMutations({
        removeLastGreeting: types.REMOVE_LAST_GREETING
      }),
      ...mapActions({
        addGreeting: types.ADD_GREETING,
        useDefaultTheme: types.USE_DEFAULT_THEME,
        useDarkTheme: types.USE_DARK_THEME
      }),
      switchTheme () {
        if (this.isDefaultThemeInUse) {
          this.useDarkTheme()
        } else {
          this.useDefaultTheme()
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  .welcome-page {
    width: 100%;
    background-color: var(--background-color);
    color: var(--text-color);
  }

  img {
    display: block;
    width: 300px;
    margin: auto;
  }

  p {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: var(--title-color);
  }
</style>
