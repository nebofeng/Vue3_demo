<template>
    <el-input
      v-model="taskname"
      style="max-width: 600px"
      placeholder="请填写任务信息"
    >
      <template #prepend>任务</template>
      
    </el-input>
    <el-button type="primary" @click="addTask">添加新任务</el-button>
    
    

</template>
<script>
    export default {
        emits: ['add'],
        data(){
            return {
             taskname: '',
            }

        } ,   
        methods:{
            addTask(){
                if (!this.taskname) return alert('任务名称不能为空！')
                this.$emit('add', this.taskname)
                this.taskname = ''

            }

        }



    }

</script>