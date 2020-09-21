<template>
  <div class="SSPContainer">
    <div class="SSPTop">
      <div class="SSPTopLogo">
        <img
          src="https://www.freepnglogos.com/uploads/ataturk-png/blue-mavi-ataturk-imza-png-11.png"
          width="90%"
          height="90%"
        />
      </div>
      <div class="SSPTopInfo">
        <div class="SSPTopInfoSmall">ORIGINAL PRODUCT</div>
        <div class="SSPTopInfoSmall">PAYMENT PROTECTION</div>
        <div class="SSPTopInfoSmall">LIVE SUPPORT</div>
        <div class="SSPTopInfoSmall">SHOPPING SECURE</div>
      </div>
      <div class="SSPTopHome">
        <div class="SSPTopHomeIcons">Contact Us</div>
        <div class="SSPTopHomeIcons">Home</div>
      </div>
    </div>
    <div class="SSPSignup">
      <div class="SSPSignupUserInfo">
        <h3>Become a member</h3>
        <div class="SSPSignupUserInfoInline">
          <input
            class="SSPSignupUserInfoTextBox"
            type="text"
            placeholder="Name *"
          />
          <input
            class="SSPSignupUserInfoTextBox"
            type="text"
            placeholder="Surname *"
          />
        </div>

        <div class="SSPSignupUserInfoInline">
          <input
            class="SSPSignupUserInfoTextBox"
            type="text"
            placeholder="E-mail *"
          />
          <input
            class="SSPSignupUserInfoTextBox"
            type="text"
            placeholder="Phone"
          />
        </div>
        <div class="SSPSignupUserInfoInline">
          <input
            class="SSPSignupUserInfoTextBox"
            type="text"
            placeholder="Password *"
          />
          <input
            class="SSPSignupUserInfoTextBox"
            type="text"
            placeholder="Confirm Password *"
          />
        </div>
        <div class="SSPSignupUserInfoCheckBox">
          <span class="SSPSignupUserInfoCheckBoxTick"><input type="checkbox"  />Please tick to confirm you've read the T&Cs and agreed to it</span>
          <span class="SSPSignupUserInfoCheckBoxTick"><input type="checkbox"  />Please tick if you wish to sign up to our mailing list</span>
        </div>
        <div class="SSPSignupUserInfoInline">
          <div class="SSPSignupSignupButton">Signup</div>
        </div>
      </div>
      <div class="SSPSignupLogin">
        <h1>Do you have a membership</h1>
        <div class="SSPSignupLoginButton">Login</div>
      </div>
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
.SSPContainer {
  width: 100%;
  height: 98vh;
}
.SSPTop {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 10%;
}
.SSPTopLogo {
  width: 15%;
  height: 90%;
  cursor: pointer;
}
.SSPTopInfo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 90%;
}
.SSPTopInfoSmall {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 50%;
  margin: 5%;
}
.SSPTopHome {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 15%;
  height: 90%;
}
.SSPTopHomeIcons {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 30%;
  margin-right: 2%;
  cursor: pointer;
  text-shadow: 1px 0.5px #000;
}
.SSPSignup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 73%;
  background-color: rgb(235, 235, 235);
}
.SSPSignupUserInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80%;
}
.SSPSignupUserInfoInline {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 15%;
  margin: 0 1%;
}
.SSPSignupUserInfoTextBox {
  width: 40%;
  height: 40%;
  margin: 2%;
}
.SSPSignupUserInfoCheckBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  height: 5%;
  margin: 0 1%;
}
.SSPSignupUserInfoCheckBoxTick {
  margin-left: 7%;
}
.SSPSignupSignupButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 75%;
  margin-left: 2%;
  cursor: pointer;
  background-color: gray;
}
.SSPSignupSignupButton :hover {
  background-color: rgb(87, 87, 87);
}
.SSPSignupLogin {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 15%;
}
.SSPSignupLoginButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 50%;
  margin-left: 2%;
  cursor: pointer;
  background-color: rgb(0, 141, 0);
}
.SSPSignupLoginButton :hover {
  color: rgb(0, 104, 0);
}
.SSPDownSupport {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  background-color: rgb(248, 246, 246);
}
.SSPDownSupportContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 90%;
  margin: 1% 2% 1% 2%;
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
  height: 2%;
}
</style>
