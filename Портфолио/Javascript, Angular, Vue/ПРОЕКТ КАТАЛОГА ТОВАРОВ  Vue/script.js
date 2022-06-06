const API = "https://raw.githubusercontent.com/rikkets2/portfolio/shared/%D0%9F%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE/Javascript%2C%20Angular%2C%20Vue/%D0%9F%D0%A0%D0%9E%D0%95%D0%9A%D0%A2%20%D0%9A%D0%90%D0%A2%D0%90%D0%9B%D0%9E%D0%93%D0%90%20%D0%A2%D0%9E%D0%92%D0%90%D0%A0%D0%9E%D0%92%20%20Vue"
const sendRequest = (path) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 10000;
    xhr.ontimeout = () => {
      console.log("timeout!");
    };
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          console.log("Error!", xhr.responseText);
          reject(xhr.responseText);
        }
      }
    };
    xhr.open("GET", `${API}/${path}`);
    xhr.send();
  });
};
Vue.component("v-cart", {
  props: ["isCartShow", "cartGoods", "amount2", "countGoods2"],
  template: `<div class="cart">
  <button @click="handleClick" type="button" class="cart-buttons">Корзина</button>
  <div v-if="isCartShow" class="cartitems">
    <div v-for="item in cartGoods">
      <h4>{{ item.title }}</h4>
      <p>{{ item.price }} рублей за шт.</p>
      <p>{{ item.quantity }} шт.</p>
      <h1>{{ item.price * item.quantity }}</h1>
    </div>
    <div>
      <h4 v-if="cartGoods.length">Общая стоимость:{{ amount2 }}</h4>
      <h4 v-if="cartGoods.length">Общее количество:{{ countGoods2 }}</h4>
    </div>
  </div>
  <div>
  </div>
  </div> `,
  methods: {
    handleClick() {
      this.$emit("reverse");
    },
  },
});
Vue.component("v-header", {
  props: ["search", "isCartShow", "cartGoods"],
  template: `
    <header class="header d-flex">
    <span class="logo">E-Shop</span>
    <slot></slot>
    </header>
  `,
});
Vue.component("search-good", {
  props: ["value"],
  template: `
    <input
        v-on:input="newsearch"
        type="text" class="search" placeholder="Поиск товара..."/>
  `,
  methods: {
    newsearch() {
      console.log(event.target.value);
      this.$emit("input", event.target.value);
    },
  },
});
Vue.component("v-goods", {
  props: ["goods"],
  template: `
    <main>
    <section class="goods">
      <v-item
          v-for="item in goods"
          v-bind:element="item"
          v-on:addToBasket="handleAddToBasket" v-on:removeItem="handleremoveItem"
      />
      <div v-if="!goods.length" class="goods-empty">
        Нет данных
      </div>
    </section>
    </main>
  `,
  methods: {
    handleAddToBasket(data) {
      this.$emit("add", data);
    },
    handleremoveItem(data) {
      this.$emit("remove", data);
    },
  },
});
Vue.component("v-item", {
  props: ["element"],
  template: `
    <div class="item">
    <img v-bind:src="element.image" alt="image"/>
    <h4>{{ element.title }}</h4>
    <p>{{ element.price }}</p>
    <button v-on:click="addToBasket(element)">Добавить в корзину</button>
    <button v-on:click="removeItem(element.id_product)">Убрать из корзины</button>
    </div>
  `,
  methods: {
    addToBasket() {
      this.$emit("addToBasket", this.element);
    },
    removeItem() {
      this.$emit("removeItem", +this.element.id_product);
    },
  },
});
new Vue({
  el: "#app",
  data: {
    goods: [],
    basketGoods: [],
    searchValue: "",
    show: true,
  },
  mounted() {
    this.fetchData();
    this.fetchBasketData();
  },
  methods: {
    fetchData() {
      return new Promise((resolve, reject) => {
        sendRequest("catalog.json").then((data) => {
          console.log(data);
          this.goods = data;
          resolve();
        });
      });
    },
    fetchBasketData() {
      return new Promise((resolve, reject) => {
        sendRequest("getbasket.json").then((data) => {
          this.basketGoods = data.contents;
          this.amount = data.amount;
          this.countGoods = data.countGoods;
          console.log(this);
          resolve();
        });
      });
    },
    addToBasket(item) {
      const index = this.basketGoods.findIndex(
        (basketItem) => basketItem.id_product === item.id_product
      );
      if (index > -1) {
        this.basketGoods[index].quantity += 1;
        this.countGoods += 1;
        this.amount += +this.basketGoods[index].price;
      } else {
        this.basketGoods.push(item);
        this.countGoods += 1;
        this.amount += +item.price;
      }
    },
    removeItem(id) {
      this.basketGoods = [...this.basketGoods]
      this.basketGoods.forEach((element) => {
        console.log(element)
        if (+element.id_product === parseInt(id)) {
          if (element.quantity === 1) {
            console.log("ok")
            const index = this.basketGoods.indexOf(element)
            this.basketGoods.splice(index, 1)
          } else {
            element.quantity--
          }
        }
      });
    },
    renderBasket() {
      return;
    },
  },
  computed: {
    filteredGoods() {
      const regexp = new RegExp(this.searchValue.trim(), "i");
      return this.goods.filter((goodsItem) => regexp.test(goodsItem.title));
    },
    totalPrice() {
      let totalPrice = 0
      const basketGoods2 = [...this.basketGoods]
      basketGoods2.forEach(good => {
        totalPrice += (good.quantity * good.price)
      })
      return totalPrice
    },
    totalQuantity() {
      let totalQuantity = 0
      const basketGoods2 = [...this.basketGoods]
      basketGoods2.forEach(good => {
        totalQuantity += good.quantity
      })
      return totalQuantity
    }
  },
})
