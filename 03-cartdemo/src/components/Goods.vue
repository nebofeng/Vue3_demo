<template>
    <div class="goods-container">
        <div class="left">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" :id="id" :checked="checked" @change="checkboxChange" />
                <label class="custom-control-label" :for="id">
                    <img :src="thumb" alt="商品图片"  class="thumb">
                </label>
            </div>
        </div>
        <div class="right">
            <div class="top">  {{title}}  </div>
            <div class="bottom">
                <div class="price">￥{{ price.toFixed(2) }}</div>
                <Counter :num="count"  @numChange="getNumber"></Counter>
                
            </div>
        </div>



    </div>
        
</template>
<script>
import Counter from './Counter.vue';
 export default{
    name: 'Goods',
    props: {
        id: {
            type:[String,Number],
            Required: true
        },
        title: {
            type: String,
            Required: true
        },
        thumb: {
            type: String,
            Required: true
        },
        // 单价
        price: {
        type: Number,
        required: true,
        },
        count:{
            type:Number,
            Required: false,
            default:0

        },
        checked:{
            type:Boolean,
            Required:false,
            default:false
        }
    },
    components: {
        Counter,
    },
    emits:["stateChange","countChange"],
    methods:{
        getNumber(num){
            //console.log("num ===="+ num)
           
            this.$emit("countChange",{
                id: this.id,
                value: num
            })

        },
        //点击事件
        checkboxChange(e){
            this.$emit('stateChange',{
                id: this.id,
                value: e.target.checked
            })
        }

    }

 }

</script>

<style lang="less" scoped>

.goods-container {
   
    //相邻good-container 元素
    + .goods-container{
        border-top: 1px solid #efefef;
    }
    display: flex;
    padding: 10px;
    //左侧图片
    .left {
        margin-right: 10px;
        //图片
        .thumb {
            display: block;
            width: 100px;
            height: 100px;
            background-color: #efefef;
        }
    }
    //右侧商品名称、价格、数量
    .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        
        .top {
            font-weight: bold;
        }

        .bottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .price {
                color: red;
                font-weight: bold;
            }
        }
    }



}

.custom-control-label::before,
.custom-control-label::after {
  top: 3.4rem;
}
</style>