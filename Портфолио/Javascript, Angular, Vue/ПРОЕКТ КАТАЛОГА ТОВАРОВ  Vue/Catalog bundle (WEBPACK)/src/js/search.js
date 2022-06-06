Vue.component("search-good", {
  props: ["value"],
  template: `
    <input
    v-on:input="newsearch"
     type="text"  class="search" placeholder="Поиск товара..." />
    `,
  methods: {
    newsearch(input) {
      console.log(event.target.value);
      this.$emit("input", event.target.value);
    },
  },
});
