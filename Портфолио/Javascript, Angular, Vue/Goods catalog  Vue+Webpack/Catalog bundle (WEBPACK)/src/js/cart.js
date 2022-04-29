Vue.component("v-cart", {
  props: ["isCartShow", "cartGoods", "amount2", "countGoods2"],
  template: `
      <div class="cart">
            <button @click="handleClick" type="button" class="cart-buttons">Корзина</button>
            <div  v-if="isCartShow" class="cartitems">
            <div v-for="item in cartGoods">
            <h4>{{item.title}}</h4>
            <h4>{{item.price}} рублей за шт</h4>
            <h4>{{item.quantity}} шт</h4>
            <h1>{{item.price*item.quantity}}</h1>
            </div>
            <div>
            <h4 v-if="cartGoods.length!==0">Общая стоимость:{{amount2}}</h4>
            <h4 v-if=" cartGoods.length!==0">Общее количество:{{countGoods2}}</h4>
            </div>
            </div>
            <div>
        </div>
      </div>
    `,
  methods: {
    handleClick() {
      this.$emit("reverse");
    },
  },
});
