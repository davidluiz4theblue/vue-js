<template>
  <div id="app">
    <Refs />
  </div>
</template>
<script>
import Refs from "./features/Refs/Refs";

export default {
  name: "App",
  data() {
    return {
      Todos: [],
    };
  },
  components: {
    Refs,
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
