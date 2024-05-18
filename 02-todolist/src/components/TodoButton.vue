<template>
    <div>      
        <el-button class="filter-button"  type="primary" :class="active === 0 ? 'active-button' : ''" @click="onBtnClick(0)">全部</el-button>
        <el-button class="filter-button" type="warning"  :class="active === 1 ? 'active-button' : ''" @click="onBtnClick(1)">未完成</el-button>
        <el-button class="filter-button"  type="success"  :class="active === 2 ? 'active-button' : ''" @click="onBtnClick(2)">已完成</el-button>
    </div>

</template>
<style  scoped>
.filter-button{
    margin-left: 0;
    border-radius: 0px

}
.active-button{
    background: #000;


}

</style>
<script>
 export default{
  emits: ['update:active'],
  props: {
    active: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  methods: {
    onBtnClick(index) {
      if (index === this.active) return
      this.$emit('update:active', index)
    },
  },

 }


</script>
