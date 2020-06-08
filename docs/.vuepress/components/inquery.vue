
<template>
  <div>
    <form>
      <textarea v-model="msg"></textarea>
      <input type="email" v-model="email" />
      <button @click="inquery()">ぽっち</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
// import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      msg: '',
      email: 'info@sndbox.jp'
    }
  },
  computed: {
  },
  /*
  validations: {
    msg: {
      required
    }
  },
  */

  methods: {
    async genParam (url = 'nodata', data = {}) {
      const token = await firebase.auth().currentUser.getIdToken()
      const param = {
        method: 'POST',
        url: `https://us-central1-nipo-77c25.cloudfunctions.net/api/${url}`,
        headers: { Authorization: `Bearer ${token}` },
        data: data
      }
      return param
    },
    async inquery () {
      // this.$q.loading.show({ message: '送信中。お待ち下さい...' })
      const isMobile = (this.$q.platform.is.capacitor) ? 'はい' : 'いいえ'
      const head = `\n----------\nリニューアル後のNipoホームページから問い合わせ`
      const postParam = {
        msg: this.msg + head,
        email: this.email,
        userId: 'websiteVisitor',
        groupId: 'websiteVistor'
      }
      const param = await this.genParam('inquery', { param: postParam })
      try {
        const res = await axios(param)
        if (res.data === 'success') {
          this.$q.notify({ message: 'フィードバックを受け取りました。ありがとうございます', timeout: 2500, color: 'info', icon: 'info', actions: [{ label: '閉じる', color: 'white' }] })
          this.msg = ''
        } else {
          this.$q.notify({ message: '送信に失敗 Error #110301' })
        }
      } catch (e) {
        ErrorMsg(e)
      } finally {
        this.$q.loading.hide()
      }
    }
  }
}
</script>
