<template>
  <div class="SSPContainer">
    <div class="SSPTop">
      <!-- User start-->
      <div class="SSPUserBar">
        <div class="SSPUserBarLogo">
          <img
            src="https://www.freepnglogos.com/uploads/ataturk-png/blue-mavi-ataturk-imza-png-11.png"
            width="90%"
            height="90%"
          />
        </div>
        <div class="SSPUserBarSearch">
          <input
            class="SSPUserSearch"
            type="text"
            placeholder="What are you looking for"
          /><button class="SSPUserSearchButton">
            Search
          </button>
        </div>
        <div class="SSPUserManual">
          <div class="SSPUserManualHalf">
            <div class="SSPUserManualNotify">
              <a href="https://www.google.com.tr" target="blank">Notify</a>
            </div>
            <div class="SSPUserManualNotify">Cart</div>
          </div>
          <div class="SSPUserManualHalf">
            <div class="SSPUserManualAccount">Sign up</div>
            <div class="SSPUserManualAccount">Login</div>
          </div>
        </div>
      </div>
      <div class="SSPContentTitlesBar">
        <div class="SSPContentTitlesBarContent">Furniture</div>
        <div class="SSPContentTitlesBarContent">Electronics</div>
        <div class="SSPContentTitlesBarContent">Baby & Kids</div>
        <div class="SSPContentTitlesBarContent">Home Textiles</div>
        <div class="SSPContentTitlesBarContent">Garden & Terrace</div>
      </div>
    </div>
    <!-- user end -->
    <div class="SSPMedium">
      <!-- Middle part start -->
      <div class="SSPMediumTop">Advertisement</div>
      <div class="SSPMediumDown">
        <div class="SSPMediumLeft">
          <span style="font-weight:bold;">Best Sellers</span>
          <div class="SSPMediumMiddleRowProductContent"></div>
          <div class="SSPMediumMiddleRowProductContent"></div>
          <div class="SSPMediumMiddleRowProductContent"></div>
        </div>
        <div class="SSPMediumMiddle">
          <div class="SSPMediumMiddleProduct">
            <div class="SSPMediumMiddleProductAdvertisement"></div>
            <div class="SSPMediumMiddleProductProduct"></div>
            <div class="SSPMediumMiddleProductOtherProduct"></div>
          </div>
        </div>
        <div class="SSPMediumRight">
          <span style="font-weight:bold;">For Sales</span>
          <div class="SSPMediumMiddleRowProductContent"></div>
          <div class="SSPMediumMiddleRowProductContent"></div>
          <div class="SSPMediumMiddleRowProductContent"></div>
        </div>
      </div>
    </div>
    <!-- Middle part end -->
    <div class="SSPDown">
      <div class="SSPDownInfo">
        <div class="SSPDownInfoSmall">ORIGINAL PRODUCT</div>
        <div class="SSPDownInfoSmall">PAYMENT PROTECTION</div>
        <div class="SSPDownInfoSmall">LIVE SUPPORT</div>
        <div class="SSPDownInfoSmall">SHOPPING SECURE</div>
      </div>
      <div class="SSPDownSupport">
        <div class="SSPDownSupportContent">
          Shopping.com
          <div class="SSPDownSupportContentTitles">
            <li>About Us</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Corporation</li>
          </div>
        </div>
        <div class="SSPDownSupportContent">
          Customers
          <div class="SSPDownSupportContentTitles">
            <li>Member Guide</li>
            <li>Payment Options</li>
            <li>Cancellation & Refund</li>
            <li>User Security</li>
          </div>
        </div>
        <div class="SSPDownSupportContent">
          Suppliers
          <div class="SSPDownSupportContentTitles">
            <li>Suppliers</li>
            <li>Help Center</li>
            <li>Cargo Assistance</li>
            <li><button>Become a Supplier</button></li>
          </div>
        </div>
        <div class="SSPDownSupportContent">
          Follow us
          <div class="SSPDownSupportContentTitles">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>İnstagram</li>
            <li>YouTube</li>
          </div>
        </div>
      </div>
      <div class="SSPDownDev">
        This page was created by
        <a href="https://twitter.com/yahyadereli" target="_blank"
          >Yahya Dereli</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingLoginPage from "./ShoppingLoginPage.vue";

export default {
  data: () => ({}),
};
</script>

<style>
.SSPContainer {
  width: 100%;
  height: auto;
}
.SSPTop {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 150px;
}
.SSPUserBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50%;
}
.SSPUserBarLogo {
  width: 15%;
  height: 100%;
}
.SSPUserBarSearch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
}
.SSPUserSearch {
  margin-right: 15px;
  width: 90%;
  height: 50%;
  font-size: 20px;
}
.SSPUserSearchButton {
  width: 10%;
  height: 50%;
  margin-right: 15px;
  background-color: rgb(185, 185, 185);
}
.SSPUserManual {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 19%;
  height: 70%;
}
.SSPUserManualHalf {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 47%;
  height: 95%;
}
.SSPUserManualNotify {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 95%;
  cursor: pointer;
}
.SSPUserManualAccount {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 95%;
  cursor: pointer;
}
.SSPContentTitlesBar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  border-top: 1px dashed black;
  cursor: pointer;
}
.SSPContentTitlesBar :hover {
  background-color: gray;
}
.SSPContentTitlesBarContent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 80%;
  margin: 0 1% 0 1%;
  border: 1px solid black;
}
.SSPMedium {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.SSPMediumTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  margin: 1% 0;
  border: 1px solid rgb(141, 0, 0);
}
.SSPMediumDown {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.SSPMediumMiddle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: auto;
  max-height: 1770px;
}
.SSPMediumMiddleProduct {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: red;
}
.SSPMediumMiddleProductAdvertisement {
  width: 80%;
  height: 15%;
  background-color: cyan;
}
.SSPMediumMiddleProductProduct {
  width: 90%;
  height: 65%;
  background-color: darkgoldenrod;
}
.SSPMediumMiddleProductOtherProduct {
  width: 90%;
  height: 20%;
  background-color: darkmagenta;
}
.SSPMediumMiddleRowProductContent {
  width: 200px;
  height: 300px;
  margin: 1%;
  border: 1px ridge black;
}
.SSPMediumRight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 1000px;
  max-height: 1000px;
  margin-right: 2%;
}
.SSPMediumLeft {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 1000px;
  max-height: 1000px;
  margin-left: 2%;
}
.SSPDown {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 170px;
}
.SSPDownInfo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
}
.SSPDownInfoSmall {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 80%;
  margin: 0 1% 0 1%;
}
.SSPDownSupport {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65%;
  background-color: rgb(248, 246, 246);
}
.SSPDownSupportContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 90%;
  margin: 1% 1% 1% 1%;
}
.SSPDownSupportContentTitles {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: baseline;
}
.SSPDownDev {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
}
</style>
