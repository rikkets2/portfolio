Vue.component("v-header", {
  props: ["search", "isCartShow", "cartGoods"],
  template: `
      <header class="header d-flex">
          <span class="logo">E-Shop</span>
          <slot></slot>
        </header>
    `,
});
