const API = "http://localhost:3000/api";

const sendRequest = (path, method = "GET", body = {}) => {
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
    xhr.open(method, `${API}/${path}`);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(body));
  });
};
Vue.component("v-error", {
  props: ["message"],
  template: `
    <div class="error">
      Ошибка! {{ message }}
    </div>
  `,
});
Vue.component("v-cart", {
  props: ["isCartShow", "cartGoods", "amount2", "countGoods2"],
  template: `
    <div class="cart">
          <button @click="handleClick" type="button" class="cart-buttons">Корзина</button>
          <div  v-if="isCartShow" class="cartitems">
          <div v-for="item in cartGoods">
          <h4>{{item.title}}</h4>
          <p>{{item.price}} рублей за шт.</p>
          <p>{{item.quantity}} шт.</p>
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
   type="text"  class="search" placeholder="Поиск товара..." />
  `,
  methods: {
    newsearch(input) {
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
              v-on:addToBasket="handleAddToBasket"         v-on:removeItem="handleremoveItem"

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

new Vue({
  el: "#app",
  data: {
    goods: [],
    basketGoods: [],
    searchValue: "",
    show: true,
    errorMessage: "",
  },
  mounted() {
    this.fetchData();
    this.fetchBasketData();
  },
  methods: {
    fetchData() {
      return new Promise((resolve, reject) => {
        sendRequest("catalog").then((data) => {
          console.log(data);
          this.goods = data;
          resolve();
        });
      });
    },
    fetchBasketData() {
      return new Promise((resolve, reject) => {
        sendRequest("basket")
          .then((data) => {
            this.basketGoods = data;
            console.log(this);
            resolve();
          })
          .catch((error) => {
            this.errorMessage = "Не удалось получить содержимое корзины!";
          });
      });
    },
    addToBasket(item) {
      sendRequest("basket", "POST", item)
        .then((result) => {
          console.log("Result", result);
          if (!result.success) {
            console.log("addToBasket Error");
            return;
          }
          const index = this.basketGoods.findIndex(
            (basketItem) => basketItem.id === item.id
          );
          if (index > -1) {
            this.basketGoods[index].quantity += 1;
            // this.basketGoods[index] = { ...this.basketGoods[index], quantity: this.basketGoods[index].quantity + 1 };
          } else {
            this.basketGoods.push({ ...item, quantity: 1 });
          }
        })
        .catch((error) => {
          this.errorMessage = "Не удалось добавить список товаров!";
        });
    },
    removeItem(id) {
      sendRequest(`basket/${id}`, "DELETE")
        .then((result) => {
          console.log("Result", result);
          if (!result.success) {
            console.log("addToBasket Error");
            return;
          }

          this.basketGoods = this.basketGoods.filter(
            (goodsItem) => goodsItem.id !== parseInt(id)
          );
          console.log(this.basketGoods);
        })
        .catch((error) => {
          this.errorMessage = "Не удалось удалить элемент из корзины!";
        });
    },
  },
  computed: {
    filteredGoods() {
      const regexp = new RegExp(this.searchValue.trim(), "i");
      return this.goods.filter((goodsItem) => regexp.test(goodsItem.title));
    },
    totalPrice() {
      return this.goods.reduce((acc, curVal) => {
        return acc + curVal.price;
      }, 0);
    },
  },
});
