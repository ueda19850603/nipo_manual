<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>
      <img src='/404.png' />

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        Nipo 公式サイトトップへ
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `ごめんなさい。最近リニューアルしたのでURLが変わっている可能性があります`,
  `2020年6月に大幅リニューアルしました。URLの構造が変わったため見つからないようです`,
  `2020年6月のリニューアルの影響で見つからない記事が増えています。ご不便をおかけします`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
