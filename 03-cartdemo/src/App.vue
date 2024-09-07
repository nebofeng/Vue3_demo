<template>
  
  <div class="app-container">
  <Header title="购物车"></Header>
  <Goods v-for="item in goodslist"
    :key="item.goods_id"
    :id="item.goods_id"
    :thumb="item.goods_img"
    :title="item.goods_name"
    :price="item.goods_price"
    :count="item.goods_count"
    >
  </Goods>
  <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Goods from './components/Goods.vue';
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
    async getGoodsList(){
        const { data:res } =  await this.$http.get("/api/cart")
        if (res.status !== 200) return alert('数据请求失败！')
        this.goodslist=res.list
    }
   
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
    Goods
  
  }
}
</script>
<style>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
