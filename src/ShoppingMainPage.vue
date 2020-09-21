<template>
  <div class="SMPContainer">
    <div class="SMPTop">
      <!-- User start-->
      <div class="SMPUserBar">
        <div class="SMPUserBarLogo">
          <img
            src="https://www.freepnglogos.com/uploads/ataturk-png/blue-mavi-ataturk-imza-png-11.png"
            width="90%"
            height="90%"
          />
        </div>
        <div class="SMPUserBarSearch">
          <input
            class="SMPUserSearch"
            type="text"
            placeholder="What are you looking for"
          /><button class="SMPUserSearchButton">
            Search
          </button>
        </div>
        <div class="SMPUserManual">
          <div class="SMPUserManualHalf">
            <div class="SMPUserManualNotify">
              <a href="https://www.google.com.tr" target="blank">Notify</a>
            </div>
            <div class="SMPUserManualNotify">Cart</div>
          </div>
          <div class="SMPUserManualHalf">
            <div class="SMPUserManualAccount">Sign up</div>
            <div class="SMPUserManualAccount">Login</div>
          </div>
        </div>
      </div>
      <div class="SMPContentTitlesBar">
        <div class="SMPContentTitlesBarContent">Furniture</div>
        <div class="SMPContentTitlesBarContent">Electronics</div>
        <div class="SMPContentTitlesBarContent">Baby & Kids</div>
        <div class="SMPContentTitlesBarContent">Home Textiles</div>
        <div class="SMPContentTitlesBarContent">Garden & Terrace</div>
      </div>
    </div>
    <!-- user end -->
    <div class="SMPMedium">
      <!-- Middle part start -->
      <div class="SMPMediumTop">Advertisement</div>
      <div class="SMPMediumDown">
        <div class="SMPMediumLeft">
          <span style="font-weight:bold;">Best Sellers</span>
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
        </div>
        <div class="SMPMediumMiddle">
          <div class="SMPMediumMiddleOptions">Options</div>
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
          <div class="SMPMediumMiddleRow">
            <div class="SMPMediumMiddleRowProductContent"></div>
            <div class="SMPMediumMiddleRowProductContent"></div>
            <div class="SMPMediumMiddleRowProductContent"></div>
            <div class="SMPMediumMiddleRowProductContent"></div>
            <div class="SMPMediumMiddleRowProductContent"></div>
          </div>
        </div>
        <div class="SMPMediumRight">
          <span style="font-weight:bold;">For Sales</span>
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
          <div class="SMPMediumMiddleRowProductContent"></div>
        </div>
      </div>
    </div>
    <!-- Middle part end -->
    <div class="SMPDown">
      <div class="SMPDownInfo">
        <div class="SMPDownInfoSmall">ORIGINAL PRODUCT</div>
        <div class="SMPDownInfoSmall">PAYMENT PROTECTION</div>
        <div class="SMPDownInfoSmall">LIVE SUPPORT</div>
        <div class="SMPDownInfoSmall">SHOPPING SECURE</div>
      </div>
      <div class="SMPDownSupport">
        <div class="SMPDownSupportContent">
          Shopping.com
          <div class="SMPDownSupportContentTitles">
            <li>About Us</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Corporation</li>
          </div>
        </div>
        <div class="SMPDownSupportContent">
          Customers
          <div class="SMPDownSupportContentTitles">
            <li>Member Guide</li>
            <li>Payment Options</li>
            <li>Cancellation & Refund</li>
            <li>User Security</li>
          </div>
        </div>
        <div class="SMPDownSupportContent">
          Suppliers
          <div class="SMPDownSupportContentTitles">
            <li>Suppliers</li>
            <li>Help Center</li>
            <li>Cargo Assistance</li>
            <li><button>Become a Supplier</button></li>
          </div>
        </div>
        <div class="SMPDownSupportContent">
          Follow us
          <div class="SMPDownSupportContentTitles">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>İnstagram</li>
            <li>YouTube</li>
          </div>
        </div>
      </div>
      <div class="SMPDownDev">
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
.SMPContainer {
  width: 100%;
  height: auto;
}
.SMPTop {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 150px;
}
.SMPUserBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50%;
}
.SMPUserBarLogo {
  width: 15%;
  height: 100%;
}
.SMPUserBarSearch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
}
.SMPUserSearch {
  margin-right: 15px;
  width: 90%;
  height: 50%;
  font-size: 20px;
}
.SMPUserSearchButton {
  width: 10%;
  height: 50%;
  margin-right: 15px;
  background-color: rgb(185, 185, 185);
}
.SMPUserManual {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 19%;
  height: 70%;
}
.SMPUserManualHalf {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 47%;
  height: 95%;
}
.SMPUserManualNotify {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 95%;
  cursor: pointer;
}
.SMPUserManualAccount {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 48%;
  height: 95%;
  cursor: pointer;
}
.SMPContentTitlesBar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  border-top: 1px dashed black;
  cursor: pointer;
}
.SMPContentTitlesBar :hover {
  background-color: gray;
}
.SMPContentTitlesBarContent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 80%;
  margin: 0 1% 0 1%;
  border: 1px solid black;
}
.SMPMedium {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.SMPMediumTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  margin: 1% 0;
  border: 1px solid rgb(141, 0, 0);
}
.SMPMediumDown {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.SMPMediumMiddle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
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
  width: 90%;
  height: auto;
}
.SMPMediumMiddleRowProductContent {
  width: 200px;
  height: 300px;
  margin: 1%;
  border: 1px ridge black;
}
.SMPMediumRight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 1000px;
  max-height: 1000px;
  margin-right: 2%;
}
.SMPMediumLeft {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 1000px;
  max-height: 1000px;
  margin-left: 2%;
}
.SMPDown {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 170px;
}
.SMPDownInfo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
}
.SMPDownInfoSmall {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 80%;
  margin: 0 1% 0 1%;
}
.SMPDownSupport {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65%;
  background-color: rgb(248, 246, 246);
}
.SMPDownSupportContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 90%;
  margin: 1% 1% 1% 1%;
}
.SMPDownSupportContentTitles {
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: baseline;
}
.SMPDownDev {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
}
</style>
