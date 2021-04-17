<template>
  <div class="LifeCycle Hooks">
    <h1>{{ title }}</h1>
    <input type="text" :disabled="disabled" v-model="placeholder" />
    <h2>{{ placeholder }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello World",
      placeholder: "Welcome to VueJS",
      disabled: false,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
input {
  padding: 1rem .5rem;
  font-size: 1.5rem;
}
</style>
