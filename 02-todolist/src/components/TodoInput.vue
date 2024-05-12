<template>
    <el-input
      v-model="input1"
      style="max-width: 600px"
      placeholder="请填写任务信息"
    >
      <template #prepend>任务</template>
      
    </el-input>
    <button>添加新任务</button>
    

</template>
<script>
    export default {
        data(){
            return{
                input:"请填写任务信息"


            }
        }


    }

</script>