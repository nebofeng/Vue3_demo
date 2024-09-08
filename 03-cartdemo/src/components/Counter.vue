<template>
    <div class="counter-container">
        <button type="button" class="btn btn-light btn-sm" @click="reduceCount" >-</button>
        <!-- 输入框 -->
        <input type="number" class="form-control form-control-sm ipt-num"  min="0" max="999" v-model="number" />
        <!-- 数量 +1 按钮 -->
        <button type="button" class="btn btn-light btn-sm"  @click="addCount" >+</button>

    </div>
</template>
<script >
export default{
    name:'Counter',
    props:{
        num:{
            type:Number,
            default: 0,

        },
        min:{
            type: Number,
            default: NaN,
        }
    },
    emits:["numChange"],
    data(){
        return {
            number: this.num,
        }

    },
    watch:{
        number(newVal){
            //1. 转为 int
            const covInt = parseInt(newVal)
            //
            if (isNaN(covInt) || covInt<0){
                this.number = 0
            }
            //如果为小数
            if( String(newVal).indexOf('.') !== -1){
                this.number = covInt
            }

            this.$emit('numChange', this.number)


        },

    },
    methods: {
        reduceCount() {
            if (!isNaN(this.min) && this.number - 1 < this.min && this.number>0 ) return
            this.number--
        },
        addCount() {
            this.number++
        },
    }

}

 
</script>
<style lang="less" scoped>
.counter-container {
    display: flex;
    .btn {
        width: 25px;
    }

    .ipt-num {
        width: 50px;
        text-align: center;
        margin: 0 4px;

    }


}


</style>