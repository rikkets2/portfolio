Vue.component("v-error", {
  props: ["message"],
  template: `
      <div class="error">
        Ошибка! {{ message }}
      </div>
    `,
});
