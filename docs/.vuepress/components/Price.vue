<template>
<div>
  <input type="radio" v-model="radio" value="month">
  <input type="radio" v-model="radio" value="year">
  {{ radio }}
  <div v-if="radio === 'month'">
    ３ヶ月コースの料金を表示する
  </div>
  <div v-else>
    １年の料金を表示する
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      radio: 'month'
    }
  }
}
</script>
