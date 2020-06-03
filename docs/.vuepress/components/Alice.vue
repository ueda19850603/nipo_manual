<template>
<div class="balloon5">
  <div class="faceicon">
    <img :src=imagePath >
  </div>
  <div class="chatting">
    <div class="says">
      <p>{{ label }}</p>
    </div>
  </div>
</div>
</template>

<script>

export default {
  props: {
    label: {
      type: String,
      required: false,
      default: 'メッセージがないよ'
    },
    icon: {
      type: String,
      required: false,
      default: 'default'
    }
  },
  data () {
    return {
      imagePath: '',
    }
  },
  created () {
    this.imagePath = `/alice/${this.icon}.png`
  },
}
</script>

<style>
.balloon5 {
  width: 100%;
  margin: 1.5em 0;
  overflow: hidden;
}

.balloon5 .faceicon {
  float: left;
  margin-right: -90px;
  width: 80px;
}

.balloon5 .faceicon img{
  width: 100%;
  height: auto;
  border: solid 3px #d7ebfe;
  border-radius: 50%;
}

.balloon5 .chatting {
  width: 100%;
}

.says {
  display: inline-block;
  position: relative; 
  margin: 5px 0 0 105px;
  padding: 17px 13px;
  border-radius: 12px;
  background: #d7ebfe;
}

.says:after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 18px; 
  left: -24px;
  border: 12px solid transparent;
  border-right: 12px solid #d7ebfe;
}

.says p {
  margin: 0;
  padding: 0;
}
</style>
