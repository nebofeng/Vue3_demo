<template>
   

    <div class="footer-container">
      <!-- 全选区域 -->
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="fullCheck" :checked="isfull" @change="onCheckBoxChange" />
        <label class="custom-control-label" for="fullCheck">全选</label>
      </div>
  
      <!-- 合计区域 -->
      <div>
        <span>合计：</span>
        <span class="amount"></span>
      </div>
  
      <!-- 结算按钮 -->
      <button type="button" class="btn btn-primary btn-settle" :disabled="total === 0">结算（{{ total }}）</button>
    </div>
        
</template>




<script>
 export default{
    name:'Footer'


 }

</script>

<style>


.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}


</style>