const fs = require("fs");
Vue.component("v-error", {
  props: ["message"],
  template: `
      <div class="error">
        Ошибка! {{ message }}
      </div>
    `,
});
module.exports = error;
