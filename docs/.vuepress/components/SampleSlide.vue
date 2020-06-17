<template>
  <div style="background: #aaa; padding: 10px;" >
    <h3>実際に動かしてイメージを確認できます</h3>
    <div>▼スライドの範囲と刻みを指定できます</div>
    最小値:<input v-model.number="min" type="number"><br>
    最大値:<input v-model.number="max" type="number"><br>
    刻み値:<input v-model.number="step" type="number">
    <div>▼こんな感じになる</div>
    <input type="range" v-model="val" :min="min" :max="max" :step="step" />
    {{ val }}
    <div style="color:red;font-weight:bold">説明のため簡易デザインです。</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      val: 5,
      max: 100,
      min: -100,
      step: 5,
    }
  },
  computed: {
  },
  created () {
  },
}
</script>

<style>
</style>
