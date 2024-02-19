const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  css: {
    loaderOptions: {
      css: {
        url: {
          filter: (url) => {
            return !url.includes("@");
          },
        },
      },
    },
  },
  // publicPath: process.env.NODE_ENV === "production" ? "/shop-moda-/" : "/",
  publicPath: `/shop-moda-/`,
};
