Vue.component("v-item", {
  props: ["element"],
  template: `
      <div class="item">
      <img v-bind:src="element.image" />
      <h4>{{element.title}}</h4>
      <p>{{element.price}}</p>
      <button type=" button" v-on:click="addToBasket(element)">Добавить в корзину</button>
      <button type=" button" v-on:click="removeItem(element.id_product)">Убрать из корзины</button>
      </div>
    `,
  methods: {
    addToBasket() {
      this.$emit("addToBasket", this.element);
    },
    removeItem() {
      this.$emit("removeItem", this.element.id);
    },
  },
});
