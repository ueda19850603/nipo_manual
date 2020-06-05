<template>
  <div style="text-align:center;margin: 20px">
    <a :href="url" class="btn-gradient-simple" target="_blank">{{ label }}</a>
  </div>
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
      default: 'ãƒœã‚¿ãƒ³'
    }
  },
  methods: {
  }
}
</script>

<style>
.btn-gradient-simple {
  display: block;
  width: 80%;
  padding: 0.5em 1em;
  text-decoration: none;
  border-radius: 3px;
  font-weight: bold;
  color: #FFF;
  background-image: linear-gradient(45deg, #709dff 0%, #b0c9ff 100%);
  transition: .4s;
}

.btn-gradient-simple:hover {
  background-image: linear-gradient(45deg, #709dff 50%, #b0c9ff 100%);
}

</style>
