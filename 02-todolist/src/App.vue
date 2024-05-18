<template>
  <div class="main">

    <todo-input @add="addtask"/>
    <todo-list :list="tasklist" />
    <todo-button  v-model:active="activeBtnIndex"/>
  </div>
   

</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoButton from './components/TodoButton.vue';
export default {
  name: 'MyApp',
  components: {
    TodoInput,
    TodoList,
    TodoButton
  },
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
  computed: {
    tasklist() {
      switch(this.activeBtnIndex) {
        case 0:
          return this.todolist
        case 1:
          return this.todolist.filter(x => x.done === true)
        case 2:
          return this.todolist.filter(x => x.done !== true)
      }
    }
  }, 
  methods:{
    addtask(taskname){
      this.todolist.push({
        id: this.nextId,
        task: taskname,
        done: false,
      })
      this.nextId++      

    }

  }
 

}
</script>
 
<style >
.main{
  text-align: center;
}
</style>
