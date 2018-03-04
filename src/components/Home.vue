<template lang="pug">
  .welcome-page
    img(src='../assets/img/logo.png' alt='People')
    p=("Welcome to VueJS")
    p=("Are you ready to be amazed ?")
    //- range-custom
</template>

<script type="text/javascript">
  import 'shared/RangeCustom'
  // This is only a placeholder, this page doesn't need a script
  export default {
    data () {},
    components: {},
    computed: {},
    methods: {}
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
