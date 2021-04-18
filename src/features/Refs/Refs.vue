<template>
  <div>
    <p ref="pTag">Test Refs</p>
    <button @click="focusInput">Click to Focus</button>
    <input ref="input" type="text">
  </div>
</template>

<script>
export default {
  methods: {
    focusInput: function() { 
      console.log(this.$refs);
      this.$refs.input.focus();
    }
  }
}
</script>

<style>

</style>