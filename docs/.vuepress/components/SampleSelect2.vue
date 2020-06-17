<template>
  <div style="background: #aaa; padding: 10px;" >
    <h3>実際に動かしてイメージを確認できます</h3>
    <div>▼選択肢を下のエリアに入力してみましょう。</div>
    <textarea v-model="textarea" class="sampleTextArea" placeholder="add multiple lines" rows="7"></textarea>
    <div>▼こんな感じになる</div>
    <div v-for="(node, idx) in nodeC" :key="idx" style="padding-bottom:20px">
      <label><input type="checkbox" v-model="sample" :value="node">{{ node }}</label>
    </div>
    <div style="color:red;font-weight:bold">説明のため簡易デザインです。</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      textarea: 'りんご\nバナナ\n日報',
      sample: []
      // nodes: [],
    }
  },
  computed: {
    nodeC: function(){
      return this.textarea.split('\n')
    }
  },
  created () {
    // this.nodes = this.textarea.split('\n')
  },
}
</script>

<style>
.sampleTextArea {
  width: 360px;
  padding: 5px 8px;
  border-radius: 6px;
  border: 1px solid #aaa;
  font-size: 16px;
}
</style>
