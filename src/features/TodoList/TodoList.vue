<template>
  <div class="todo">
    <input type="text" v-model="newTodo" />
    <button @click="addTodoList()">Submit</button>
    <ul>
      <li v-for="(todo, index) in TodoList" :key="index">
        <input type="checkbox" v-model="todo.completed" />
        <span :class="{ isDone: todo.completed }">
          {{ todo.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    TodoList: {
      type: Array,
      default: function() {
        return [{ title: "None", completed: false }];
      },
    },
  },
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addTodoList: function() {
      this.TodoList.push({
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
  },
};
</script>

<style>
li {
  list-style-type: none;
}
.isDone {
  text-decoration: line-through;
}
</style>
