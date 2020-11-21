<template>
  <div class="SSPContainer">
    <div class="SSPSignup">
      <div class="SSPSignupUserInfo">
        <h3>Become a member</h3>
        <div class="SSPSignupUserInfoInline">
          <input
            class="SSPSignupUserInfoTextBox"
            type="text"
            placeholder="Name *"
            v-model="newUser.name"
          />
          <input
            class="SSPSignupUserInfoTextBox"
            type="text"
            placeholder="Surname *"
            v-model="newUser.surname"
          />
        </div>

        <div class="SSPSignupUserInfoInline">
          <input
            class="SSPSignupUserInfoTextBox"
            type="text"
            placeholder="E-mail *"
            v-model="newUser.email"
          />
          <input
            class="SSPSignupUserInfoTextBox"
            type="text"
            placeholder="Phone"
            v-model="newUser.phone"
          />
        </div>
        <div class="SSPSignupUserInfoInline">
          <input
            class="SSPSignupUserInfoTextBox"
            type="password"
            placeholder="Password *"
            v-model="newUser.password"
          />
          <input
            class="SSPSignupUserInfoTextBox"
            type="password"
            placeholder="Confirm Password *"
            v-model="newUser.confirmPassword"
          />
        </div>
        <div
          class="passDoNotMatch"
          v-if="
            (newUser.confirmPassword != '') &
              (newUser.password != newUser.confirmPassword)
          "
        >
          Passwords don't match
        </div>
        <div class="SSPSignupUserInfoCheckBox">
          <span class="SSPSignupUserInfoCheckBoxTick"
            ><input type="checkbox" />Please tick to confirm you've read the
            T&Cs and agreed to it</span
          >
          <span class="SSPSignupUserInfoCheckBoxTick"
            ><input type="checkbox" />Please tick if you wish to sign up to our
            mailing list</span
          >
        </div>
        <div class="SSPSignupUserInfoInline">
          <div class="SSPSignupSignupButton" @click="createUser()">Signup</div>
        </div>
      </div>
      <div class="SSPSignupLogin">
        <h1>Do you have a membership</h1>
        <router-link to="login" tag="div" class="SSPSignupLoginButton"
          >Login</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    newUser: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    },
    dataUsers: []
  }),
  methods: {
    createUser() {
      var oldUser = false;
      if (
        (this.newUser.name == "") |
        (this.newUser.surname == "") |
        (this.newUser.email == "") |
        (this.newUser.phone == "") |
        (this.newUser.password == "") |
        (this.newUser.confirmPassword == "")
      ) {
        alert("Do not leave marked fields blank");
      }
      for (var i = 0; i < this.dataUsers.length; i++) {
        if (
          (this.newUser.email == this.dataUsers[i].email) |
          (this.newUser.phone == this.dataUsers[i].phone)
        ) {
          alert("This email is used");
        }
      }
    }
  },
  mounted: function() {
    var users = "http://0.0.0.0:8080/api/users";
    this.$http.get(users).then(function(resp) {
      this.dataUsers = resp.data;
    });
  }
};
</script>

<style>
.SSPContainer {
  width: 100%;
  height: 72vh;
  margin-top: 1%;
}
.SSPSignup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(235, 235, 235);
}
.SSPSignupUserInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
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
.passDoNotMatch {
  color: red;
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
  margin: 0 0 5% 0;
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
  color: rgb(0, 0, 0);
}
</style>
