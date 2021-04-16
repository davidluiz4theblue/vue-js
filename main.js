const vm = new Vue({
  el: "#app",
  data: {
    title: "Hello World",
    name: "Ly Hoang",
    shopItems: ["Ball", "Baseball", "Bat", "Hat"],
  },
  methods: {
    sayHi: function (greeting) {
      return `${greeting} ${this.name}`;
    },
    addToCart () {
      function theName(){
        console.log(this);
      };
      return theName();
    },
  },
});
