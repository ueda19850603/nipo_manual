<template>
  <div style="text-align:center;margin: 50px 0px;">
  <a :href="url" :target="target" class="btn-gradient-3d-orange">{{ label }}</a>
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
      default: 'Click me'
    },
    target: {
      type: String,
      required: false,
      default: '_self'
    }
  },
  methods: {
  }
}
</script>

<style>
.btn-gradient-3d-orange {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  border-radius: 4px;
  color: #ffffff;
  background-image: linear-gradient(45deg, #FFC107 0%, #ff8b5f 100%);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  border-bottom: solid 3px #c58668;
}

.btn-gradient-3d-orange:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  border-bottom: none;
}
.btn-gradient-3d-orange:hover {
  text-decoration: none !important;
  color: #fff !important;
}


</style>
