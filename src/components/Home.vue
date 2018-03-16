<template lang="pug">
  .welcome-page
    img(src='../assets/img/logo.png' alt='People')
    p(v-for="greeting in allGreetings")="{{ greeting }}"
    button(v-on:click="handleSwitch()") Turn of the light (css theme)
    div.test {{ testStore }}
      button(v-on:click="removeLastGreeting()") Remove last greeting
      button(v-on:click="addGreeting('This addition used the store!')") Add greeting
</template>

<script type="text/javascript">
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  import { types } from '@/vuex/store'
  import themeSwitch from '@/common/plugins/themeManager'

  export default {
    data () {
      return {
        testStore: 'Test the store:'
      }
    },
    computed: {
      ...mapGetters({
        allGreetings: types.GET_ALL_GREETINGS
      })
    },
    methods: {
      ...mapMutations({
        removeLastGreeting: types.REMOVE_LAST_GREETING
      }),
      ...mapActions({
        addGreeting: types.ADD_GREETING
      }),
      handleSwitch: () => {
        themeSwitch()
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
    color: #36495d;
  }
</style>
