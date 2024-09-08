<template>
   

    <div class="footer-container">
      <!-- 全选区域 -->
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="fullCheck" :checked="isfull"  @change="fullCheckChange" />
        <label class="custom-control-label" for="fullCheck">全选</label>
      </div>
  
      <!-- 合计区域 -->
      <div>
        <span>合计：￥{{ amount.toFixed(2) }}</span>
        <span class="amount"></span>
      </div>
  
      <!-- 结算按钮 -->
      <button type="button" class="btn btn-primary btn-settle" :disabled="total === 0">结算（{{ total }}）</button>
    </div>
        
</template>




<script>
 export default{
    name:'Footer',
    emits:["fullCheck"],
    props:{
       amount:{
          type:Number,
          default:0,
       },
       total:{
           type:Number,
           default:0
       },
       isfull:{
          type:Boolean,
          default: false
       }

    },
    data(){
      return {
         isfull: false
      }
    },
    methods:{
      fullCheckChange(e){
          this.isfull = !this.isfull
          this.$emit('fullCheck',{
            value: this.isfull
          }
          )

      }

    }



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