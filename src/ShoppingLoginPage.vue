<template>
  <div class="SLPContainer">
    <div class="SLPTop">
      <div class="SLPTopLogo">
        <img
          src="https://www.freepnglogos.com/uploads/ataturk-png/blue-mavi-ataturk-imza-png-11.png"
          width="90%"
          height="90%"
        />
      </div>
      <div class="SLPTopInfo">
        <div class="SLPTopInfoSmall">ORIGINAL PRODUCT</div>
        <div class="SLPTopInfoSmall">PAYMENT PROTECTION</div>
        <div class="SLPTopInfoSmall">LIVE SUPPORT</div>
        <div class="SLPTopInfoSmall">SHOPPING SECURE</div>
      </div>
      <div class="SLPTopHome">
        <div class="SLPTopHomeIcons">Contact Us</div>
        <div class="SLPTopHomeIcons">Home</div>
      </div>
    </div>
    <div class="SLPLogin">
      <!-- Login page start -->
      <div class="SLPLoginLogin">
        <h1>Login</h1>
        <div class="SLPLoginLoginContent">
          <input class="SLPLoginTextBox" type="text" placeholder="e-mail" />
        </div>
        <div class="SLPLoginLoginContent">
          <input class="SLPLoginTextBox" type="text" placeholder="Password" />
        </div>
        <div class="SLPLoginLoginCheckBox">
          <div class="SLPLoginLoginCheckBox1">
            <input type="checkbox" name="" id="" />Remember me
          </div>
          <div class="SLPLoginLoginCheckBox2">
            <a href="">Forgot Password</a>
          </div>
        </div>
        <div class="SLPLoginLoginContent">
          <button class="SLPLoginLoginButton">Login</button>
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
          <div class="SLPLoginSignupButton">Create New Account</div>
        </div>
      </div>
    </div>
    <!-- Login page end -->
    <div class="SLPDownSupport">
      <div class="SLPDownSupportContent">
        Shopping.com
        <div class="SLPDownSupportContentTitles">
          <li>About Us</li>
          <li>Contact</li>
          <li>Career</li>
          <li>Corporation</li>
        </div>
      </div>
      <div class="SLPDownSupportContent">
        Customers
        <div class="SLPDownSupportContentTitles">
          <li>Member Guide</li>
          <li>Payment Options</li>
          <li>Cancellation & Refund</li>
          <li>User Security</li>
        </div>
      </div>
      <div class="SLPDownSupportContent">
        Suppliers
        <div class="SLPDownSupportContentTitles">
          <li>Suppliers</li>
          <li>Help Center</li>
          <li>Cargo Assistance</li>
          <li><button>Become a Supplier</button></li>
        </div>
      </div>
      <div class="SLPDownSupportContent">
        Follow us
        <div class="SLPDownSupportContentTitles">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>İnstagram</li>
          <li>YouTube</li>
        </div>
      </div>
    </div>
    <div class="SLPDownDev">
      This page was created by
      <a href="https://twitter.com/yahyadereli" target="_blank">Yahya Dereli</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style>
.SLPContainer {
  width: 100%;
  height: 98vh;
}
.SLPTop {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 10%;
}
.SLPTopLogo {
  width: 15%;
  height: 90%;
}
.SLPTopInfo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 90%;
}
.SLPTopInfoSmall {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 50%;
  margin: 5%;
}
.SLPTopHome {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 90%;
}
.SLPTopHomeIcons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 30%;
  margin-right: 2%;
  text-shadow: 1px 0.5px #000;
}
.SLPLogin {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 73%;
  background-color: rgb(235, 235, 235);
}
.SLPLoginLogin {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  width: 25%;
  height: 95%;
  margin-right: 1%;
}
.SLPLoginLoginContent {
  display: flex;
  flex-direction: column;
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
  width: 25%;
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
.SLPDownSupport {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  background-color: rgb(248, 246, 246);
}
.SLPDownSupportContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 90%;
  margin: 1% 2% 1% 2%;
}
.SLPDownSupportContentTitles {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: baseline;
}
.SLPDownDev {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2%;
}
</style>
