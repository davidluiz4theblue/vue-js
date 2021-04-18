<template>
  <div id="app">
    <TodoList :TodoList="Todos" />
  </div>
</template>
<script>
import TodoList from "./features/TodoList/TodoList";

export default {
  name: "App",
  data() {
    return {
      Todos: [],
    };
  },
  mounted() {
    const self = this;
    async function fetchTodo() {
      const respone = await fetch("https://jsonplaceholder.typicode.com/todos");
      const responeJSON = await respone.json();
      self.Todos = responeJSON;
    }
    fetchTodo();
  },
  components: {
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: 800;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
