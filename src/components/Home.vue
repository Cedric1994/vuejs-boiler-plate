<template lang="pug">
  .welcome-page
    img(src='../assets/img/logo.png' alt='People')
    p(v-for="greeting in allGreetings")="{{ greeting }}"
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
        allGreetings: types.GET_ALL_GREETINGS
      })
    },
    methods: {
      ...mapMutations({
        removeLastGreeting: types.REMOVE_LAST_GREETING
      }),
      ...mapActions({
        addGreeting: types.ADD_GREETING
      })
    }
  }
</script>

<style lang="scss" scoped>
  .welcome-page {
    width: 100%;
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
