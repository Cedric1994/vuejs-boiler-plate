<template lang="html">
  <div class="RangeCustom__Wrapper">
    coucou
    <input
      v-model="myval"
      :max="max"
      :min="min"
      type="range"
      step="1"/>
    <span>
      Current value is:
    </span>
  </div>
</template>

<script>
  export default {
    name: 'RangeCustom',
    props: {
      max: {
        type: Number,
        default: 10
      },
      min: {
        type: Number,
        default: 0
      },
      defaultValue: {
        type: Number,
        default: 4
      }
    },
    data () {
      return {
        myval: this.defaultValue + 0
      }
    }
  }
</script>
