<template>
  <div style="margin: 20px; 0">
    <label><input type="radio" v-model="radio" value="credit">1ヶ月自動更新でお申し込み(クレカ)</label><br>
    <label><input type="radio" v-model="radio" value="month">３ヶ月でお申し込み(請求書)</label><br>
    <label><input type="radio" v-model="radio" value="year">12ヶ月でお申し込み(請求書)</label>
    <div v-if="radio === 'month'">
      <table style="width:100%">
        <caption>3ヶ月の場合の費用</caption>
        <thead>
          <tr>
            <th>人数</th>
            <th>1名単価 / 月</th>
            <th>1か月当たりの料金	</th>
            <th>3ヶ月の総額</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(staff, idx) in staffs" :key="idx" style="text-align:right">
            <td>{{ staff.n }}名</td>
            <td>{{ staff.p + 100 }}円	</td>
            <td>{{ Number((staff.p + 100 ) * staff.n).toLocaleString() }} 円</td>
            <td>{{ Number((staff.p + 100 ) * staff.n * 3).toLocaleString() }} 円</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="radio === 'year'">
      <table>
        <caption>12ヶ月の場合の費用</caption>
        <thead>
          <tr>
            <th>人数</th>
            <th>1名単価 / 月</th>
            <th>1か月当たりの料金	</th>
            <th>1年の総額</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(staff, idx) in staffs" :key="idx" style="text-align:right">
            <td>{{ staff.n }}名</td>
            <td>{{ staff.p }}円	</td>
            <td>{{ Number(staff.p * staff.n).toLocaleString() }} 円</td>
            <td>{{ Number(staff.p * staff.n * 12).toLocaleString() }} 円</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="radio ==='credit'">
      <table>
        <caption>クレジットカード払い</caption>
        <thead>
          <tr>
            <th>人数</th>
            <th>1名単価／月</th>
            <th>1か月当たりの料金	</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n of 20" style="text-align:right">
            <td>{{ n }}名</td>
            <td>500円</td>
            <td>{{ Number(n * 500).toLocaleString() }}円</td>
          </tr>
        </tbody>
      </table>
      ※長くなるためここで切りますが、最大で50名まで可能です
    </div>
  </div>
</template>

<script>

export default {
  props: {
    radioini: {
      type: String,
      required: false,
      default: 'year'
    },
  },
  data () {
    return {
      radio: 'month',
      staffs: [
        { n: 5, p: 350 },
        { n: 10, p: 300 },
        { n: 15, p: 250 },
        { n: 20, p: 200 },
        { n: 25, p: 200 },
        { n: 30, p: 200 },
        { n: 35, p: 200 },
        { n: 40, p: 200 },
        { n: 45, p: 200 },
        { n: 50, p: 200 }
      ]
    }
  },
  created () {
    this.radio = this.radioini
  }
}
</script>
