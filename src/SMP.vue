<template>
  <div class="SMPContainer">
    <div class="SMPMediumTop">
      <div class="SMPMediumTopAdd"><button @click="getProducts()">Deneme</button></div>
      <div class="SMPMediumTopProducts">
        <div class="SMPMediumTopProduct">Furniture</div>
        <div class="SMPMediumTopProduct">Electronic</div>
        <div class="SMPMediumTopProduct">Kitchen</div>
        <div class="SMPMediumTopProduct">Baby&Kids</div>
      </div>
    </div>
    <div class="SMPMediumDown">
      <div class="SMPMediumMiddle">
        <div class="SMPMediumMiddleOptions">Options</div>
        <div class="SMPMediumMiddleRow">
          <div class="SMPMediumMiddleRowProductContent">
            <div class="SMPMediumMiddleRowProductContentImages">
              <img src="./images/fur1.jpg" width="100%" height="100%" alt="" />
            </div>
            <div class="SMPMediumMiddleRowProductContentInfo">Luxe</div>
            <div class="SMPMediumMiddleRowProductContentInfo">12.990$</div>
            <router-link to="cart" tag="button" class="AddToCart"
              >Add to Cart</router-link
            >
            <router-link to="cart" tag="button" class="BuyNow"
              >Buy Now</router-link
            >
          </div>
          <div class="SMPMediumMiddleRowProductContent">
            <div class="SMPMediumMiddleRowProductContentImages">
              <img src="./images/fur2.jpg" width="100%" height="100%" alt="" />
            </div>
            <div class="SMPMediumMiddleRowProductContentInfo">Always</div>
            <div class="SMPMediumMiddleRowProductContentInfo">12.990$</div>
            <router-link to="cart" tag="button" class="AddToCart"
              >Add to Cart</router-link
            >
            <router-link to="cart" tag="button" class="BuyNow"
              >Buy Now</router-link
            >
          </div>
          <div class="SMPMediumMiddleRowProductContent">
            <div class="SMPMediumMiddleRowProductContentImages">
              <img src="./images/fur3.jpg" width="100%" height="100%" alt="" />
            </div>
            <div class="SMPMediumMiddleRowProductContentInfo">Aura</div>
            <div class="SMPMediumMiddleRowProductContentInfo">12.990$</div>
            <router-link to="cart" tag="button" class="AddToCart"
              >Add to Cart</router-link
            >
            <router-link to="cart" tag="button" class="BuyNow"
              >Buy Now</router-link
            >
          </div>
          <div class="SMPMediumMiddleRowProductContent">
            <div class="SMPMediumMiddleRowProductContentImages">
              <img src="./images/fur4.jpg" width="100%" height="100%" alt="" />
            </div>
            <div class="SMPMediumMiddleRowProductContentInfo">Eater</div>
            <div class="SMPMediumMiddleRowProductContentInfo">12.990$</div>
            <router-link to="cart" tag="button" class="AddToCart"
              >Add to Cart</router-link
            >
            <router-link to="cart" tag="button" class="BuyNow"
              >Buy Now</router-link
            >
          </div>
          <div class="SMPMediumMiddleRowProductContent">
            <div class="SMPMediumMiddleRowProductContentImages">
              <img src="./images/fur5.jpg" width="100%" height="100%" alt="" />
            </div>
            <div class="SMPMediumMiddleRowProductContentInfo">Daisy</div>
            <div class="SMPMediumMiddleRowProductContentInfo">12.990$</div>
            <router-link to="cart" tag="button" class="AddToCart"
              >Add to Cart</router-link
            >
            <router-link to="cart" tag="button" class="BuyNow"
              >Buy Now</router-link
            >
          </div>
        </div>
        <div class="SMPMediumMiddleRow">
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
        </div>
        <div class="SMPMediumMiddleRow">
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    allProducts: ""
  }),
  methods: {
    getProducts() {
      const products = "http://0.0.0.0:8080/api/products";
      this.$http.get(products).then(function(resp) {
        this.allProducts = resp.data;
        console.log(this.allProducts);
      });
    }
  }
};
</script>

<style>
.SMPContainer {
  width: 100%;
  height: auto;
}
.SMPMedium {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.SMPMediumTop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  margin: 1% 0;
}
.SMPMediumTopAdd {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 80%;
  margin: 0.2%;
  border: 1px dashed green;
}
.SMPMediumTopProducts {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30%;
}
.SMPMediumTopProduct {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 20%;
  margin: 0 1%;
  border: 1px solid blue;
}
.SMPMediumMiddleRowProductContentInfo {
  width: 90%;
  height: 10%;
  margin: 5%;
  display: flex;
  flex-direction: row-reverse;
}
.AddToCart {
  width: 45%;
  height: 12%;
  margin: 2% 1% 2% 3%;
  background-color: rgb(0, 197, 0);
}
.BuyNow {
  width: 45%;
  height: 12%;
  margin: 2% 2% 2% 1%;
  background-color: rgb(197, 1, 1);
}
.SMPMediumDown {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.SMPMediumMiddle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: auto;
  max-height: 1770px;
}
.SMPMediumMiddleOptions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50px;
  margin: 0 1%;
  border: 1px solid rgb(0, 11, 160);
}
.SMPMediumMiddleRow {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}
.SMPMediumMiddleRowProductContent {
  width: 200px;
  height: 300px;
  margin: 1%;
  border: 1px ridge black;
}
.SMPMediumMiddleRowProductContentImages {
  width: 100%;
  height: 50%;
}
</style>
