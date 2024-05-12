<template>
     <ul class="list-group">
        <li class="todo-item" v-for="item in todolist" :key="item.id">
            <div>
                <el-checkbox :id="item.id" v-model="item.done" size="large" />
                <label  :class="item.done ? 'delete' : ''" :for="item.id">{{item.task}}</label>

            </div>
           
             <!-- 徽标 -->
            <span class="finished" v-if="item.done">完成</span>
            <span class="finished" v-else>未完成</span>

        </li>
   </ul>
  
</template>

<script>
export default {
    data() {
    return {
      // 任务列表的数据
      todolist: [
        { id: 1, task: '周一早晨9点开会', done: false },
        { id: 2, task: '周一晚上8点聚餐', done: false },
        { id: 3, task: '准备周三上午的演讲稿', done: true },
      ],
      // 下一个可用的 Id
      nextId: 4,
      activeBtnIndex: 0,
    }
  },

}
</script>

<style>
.list-group {
  width: 400px;
  list-style: none;
 

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