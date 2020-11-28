<template>
  <div class="SLPContainer">
    <div class="SLPLogin">
      <!-- Login page start -->
      <div class="SLPLoginLogin">
        <h1>Login</h1>
        <div class="SLPLoginLoginContent">
          <input
            class="SLPLoginTextBox"
            type="text"
            placeholder="e-mail"
            v-model="logUser.email"
          />
        </div>
        <div class="SLPLoginLoginContent">
          <input
            class="SLPLoginTextBox"
            type="password"
            id="password"
            placeholder="Password"
            v-model="logUser.password"
          />
          <div @click="hidePassword()">göz</div>
        </div>
        <div class="SLPLoginLoginCheckBox">
          <div class="SLPLoginLoginCheckBox1">
            <input type="checkbox" />Remember me
          </div>
          <div class="SLPLoginLoginCheckBox2">
            <a href="">Forgot Password</a>
          </div>
        </div>
        <div class="SLPLoginLoginContent">
          <button class="SLPLoginLoginButton" @click="loginUser()">
            Login
          </button>
        </div>
      </div>
      <div class="SLPLoginSignup">
        <h1>Not a Member?</h1>
        <div>Sign up now and enjoy discounted shopping!</div>
        <div class="SLPLoginSignupText">
          <div class="SLPLoginSignupTextIcon">Icon</div>
          <div class="SLPLoginSignupTextText">
            <span style="font-weight:bold;">Advantageous Shopping</span> <br />
            Discounts, coupons and many more special deals are waiting for you
            inside.
          </div>
        </div>
        <div class="SLPLoginSignupText">
          <div class="SLPLoginSignupTextIcon">Icon</div>
          <div class="SLPLoginSignupTextText">
            <span style="font-weight:bold;">Abundant Variety, Easy Access</span>
            <br />
            Easily find what you are looking for among millions of products and
            thousands of stores.
          </div>
        </div>
        <div class="SLPLoginSignupText">
          <div class="SLPLoginSignupTextIcon">Icon</div>
          <div class="SLPLoginSignupTextText">
            <span style="font-weight:bold;">Safe Platform</span><br />
            After the product reaches you, your payment will be transferred to
            the store with your approval.
          </div>
        </div>
        <div class="SLPLoginSignupButtonBox">
          <router-link to="signup" tag="div" class="SLPLoginSignupButton"
            >Create New Account</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    logUser: {
      email: "",
      password: ""
    },
    dataUsers: []
  }),
  methods: {
    hidePassword() {
      var element = document.getElementById("password");
      element.type = element.type == "password" ? "text" : "password";
    }
  }
};
</script>

<style>
.SLPContainer {
  width: 100%;
  height: 72vh;
  margin-top: 1%;
}
.SLPLogin {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(235, 235, 235);
}
.SLPLoginLogin {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  width: 35%;
  height: 95%;
  margin-right: 1%;
}
.SLPLoginLoginContent {
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  align-items: center;
  width: 90%;
  height: 10%;
  margin-top: 2%;
}
.SLPLoginTextBox {
  width: 100%;
  height: 75%;
}
.SLPLoginLoginCheckBox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 5%;
}
.SLPLoginLoginCheckBox1 {
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  width: 50%;
  height: 100%;
}
.SLPLoginLoginCheckBox2 {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  width: 50%;
  height: 100%;
}
.SLPLoginLoginButton {
  width: 50%;
  height: 80%;
  background-color: #27c007;
}
.SLPLoginSignup {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  height: 95%;
  margin-left: 1%;
  background-color: whitesmoke;
}
.SLPLoginSignupText {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  height: 20%;
  margin-top: 1%;
}
.SLPLoginSignupTextIcon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 90%;
}
.SLPLoginSignupTextText {
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 90%;
}
.SLPLoginSignupButtonBox {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  cursor: pointer;
  width: 90%;
  height: 20%;
  margin-top: 1%;
}
.SLPLoginSignupButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 45%;
  margin-top: 5%;
  background-color: #8d8d8d;
}
</style>
