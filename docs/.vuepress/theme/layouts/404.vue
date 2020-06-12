<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>
      <img src='/404.png' />

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        戻る
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `ごめんなさい、このページは無いんです`,
  `このページは消滅してしまったようです`,
  `残念ですが見つかりませんでした`,
  `すみません。URLが間違っている可能性があります`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
