new Vue({
  el: '#app',
  data: {
    title: 'Vue Dojo for Ninjas',
    name: 'Bob'
  },
  methods: {
    greet (time) {
      return `Hello and good ${time},  ${this.name}`
    }
  }
});
