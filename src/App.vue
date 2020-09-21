<template>
  <div>
      <shopping-main-page />
    <!--
    <shopping-product-page />
      <shopping-signup-page />
      <shopping-login-page />
    -->
  </div>
</template>

<script>
import ShoppingLoginPage from "./ShoppingLoginPage.vue";
import ShoppingMainPage from "./ShoppingMainPage.vue";
import ShoppingSignupPage from "./ShoppingSignupPage.vue";
import ShoppingProductPage from "./ShoppingProductPage.vue"

export default {
  components: {
    ShoppingLoginPage,
    ShoppingMainPage,
    ShoppingSignupPage,
    ShoppingProductPage,
  },
};
</script>

<style src="./styles/main.css" />
