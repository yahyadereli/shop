<template>
  <div class="SMCPContainer">
    <div class="SMCPContainerIn">
      <div class="SMCPTop">
        <div class="SMCPTopHalfL">
          <router-link to="/"
            ><img src="./images/logo.png" width="25%" height="80%"
          /></router-link>
        </div>
        <div class="SMCPTopHalfR">
          <router-link to="/cart" tag="div" class="SMCPTopHalfRIcon"
            >Cart</router-link
          >
          <router-link to="/signup" tag="div" class="SMCPTopHalfRIcon"
            >Sign Up</router-link
          >
          <router-link to="/login" tag="div" class="SMCPTopHalfRIcon"
            >Sign In</router-link
          >
        </div>
      </div>
      <div class="SMCPMedium">
        <router-view />
      </div>
      <div class="SMCPDown">
        <div class="SMCPDownInfo">
          <div class="SMCPDownInfoSmall">ORIGINAL PRODUCT</div>
          <div class="SMCPDownInfoSmall">PAYMENT PROTECTION</div>
          <div class="SMCPDownInfoSmall">LIVE SUPPORT</div>
          <div class="SMCPDownInfoSmall">SHOPPING SECURE</div>
        </div>
        <div class="SMCPDownSupport">
          <div class="SMCPDownSupportContent">
            Shopping.com
            <div class="SMCPDownSupportContentTitles">
              <li>About Us</li>
              <li>Contact</li>
              <li>Career</li>
              <li>Corporation</li>
            </div>
          </div>
          <div class="SMCPDownSupportContent">
            Customers
            <div class="SMCPDownSupportContentTitles">
              <li>Member Guide</li>
              <li>Payment Options</li>
              <li>Cancellation & Refund</li>
              <li>User Security</li>
            </div>
          </div>
          <div class="SMCPDownSupportContent">
            Suppliers
            <div class="SMCPDownSupportContentTitles">
              <li>Suppliers</li>
              <li>Help Center</li>
              <li>Cargo Assistance</li>
              <li><button>Become a Supplier</button></li>
            </div>
          </div>
          <div class="SMCPDownSupportContent">
            Follow us
            <div class="SMCPDownSupportContentTitles">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>İnstagram</li>
              <li>YouTube</li>
            </div>
          </div>
        </div>
        <div class="SMCPDownDev">
          This page was created by
          <a href="https://twitter.com/yahyadereli" target="_blank"
            >&nbsp;Yahya Dereli</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
.SMCPContainer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
}
.SMCPContainerIn {
  width: 70%;
  height: auto;
  background-color: rgb(241, 241, 241);
}
a:link {
  text-decoration: none;
}
a {
  color: #000000;
}
a:hover {
  color: #09597e;
}
.SMCPTop {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 6vh;
  background-color: rgb(250, 250, 250);
}
.SMCPTopHalfL {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: baseline;
  padding: 1%;
  width: 50%;
  height: 100%;
}

.SMCPTopHalfR {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
}
.SMCPTopHalfRIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 80%;
  border-radius: 40px/20px;
  background-color: rgb(245, 245, 245);
  margin: 2.5% 1%;
  cursor: pointer;
}
.SMCPDown {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 170px;
}
.SMCPDownInfo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
}
.SMCPDownInfoSmall {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 80%;
  margin: 0 1% 0 1%;
}
.SMCPDownSupport {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65%;
  background-color: rgb(248, 246, 246);
}
.SMCPDownSupportContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 90%;
  margin: 1% 1% 1% 1%;
}
.SMCPDownSupportContentTitles {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: baseline;
}
.SMCPDownDev {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
}
</style>
