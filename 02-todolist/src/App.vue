<template>
 
    <todo-input/>
    <todo-list/>

</template>

<script>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'MyApp',
  components: {
    TodoInput,
    TodoList
  },
 

}
</script>
<style >

</style>
