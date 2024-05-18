<template>
     <ul class="list-group">
        <li class="todo-item" v-for="item in list" :key="item.id">
            <div>
                <el-checkbox :id="item.id" v-model="item.done" size="large" />
                <label  :class="item.done ? 'delete' : ''" :for="item.id">{{item.task}}</label>

            </div>
           
             <!-- 徽标 -->
             <el-button  class="finished" type="success"  v-if="item.done" >完成</el-button>
             <el-button  class="finished"  type="warning"  v-else>未完成</el-button>
          
          
        </li>
   </ul>
  
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: [],
    },
  },
     
   

}
</script>

<style>
.list-group {
  width: 400px;
  list-style: none;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
 

 

.todo-item{

    display: flex;

    justify-content: space-between;
}

.delete {
  text-decoration: line-through;
  color: gray;
  font-style: italic;
}

.finished{
  margin-left: 20px;
}
</style>