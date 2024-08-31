<template>
  
  <div class="app-container">
  <Header title="购物车"></Header>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer  from './components/Footer.vue';

export default {
  name: 'App',
  data() {
    return {
      // 商品列表的数据
      goodslist: [],
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    // 获取商品列表数据的方法
    async getGoodsList() {
      const { data: res } = await this.$http.get('/api/cart')
      if (res.status !== 200) return alert('数据请求失败！')
      this.goodslist = res.list
    },
    // 监听选中状态变化的事件
    onFullStateChange(isFull) {
      // console.log(isFull)
      this.goodslist.forEach(x => (x.goods_state = isFull))
    },
    // 监听商品勾选状态变化的事件
    onGoodsStateChange(e) {
      const findResult = this.goodslist.find(x => x.goods_id === e.goods_id)
      if (findResult) {
        findResult.goods_state = e.value
      }
    },
    // 监听商品数量变化的事件
    onGoodsCountChange(e) {
      const findResult = this.goodslist.find(x => x.goods_id === e.goods_id)
      if (findResult) {
        findResult.goods_count = e.value
      }
    },
  },
  computed: {
    // 已勾选商品的总价格
    amount() {
      let a = 0
      this.goodslist
        .filter(x => x.goods_state)
        .forEach(x => {
          a += x.goods_price * x.goods_count
        })

      return a
    },
    // 已勾选商品的总数量
    total() {
      let t = 0
      this.goodslist
        .filter(x => x.goods_state)
        .forEach(x => {
          t += x.goods_count
        })
      return t
    },
  },
  components: {
    Header,
    Footer,
  
  }
}
</script>
<style>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
