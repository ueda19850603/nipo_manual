<template>
  <a :href="url" class="btn">{{ label }}</a>
</template>

<script>

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: 'ボタン'
    }
  },
  methods: {
  }
}
</script>

<style>
.btn {
  display: inline-block;
  padding: 8px 24px;
  background-color: #bf0000;
  color: white;
  border-radius: 4px;
}
</style>
