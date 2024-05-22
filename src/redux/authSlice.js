import { createSlice } from "@reduxjs/toolkit";
import  secureLocalStorage  from  "react-secure-storage";
let structure = {
  idtoken: "",
  email: "",
  urlemail: "",
  profilepic: "",
  username: "",
};

try {
  if(secureLocalStorage.getItem("token")) structure = JSON.parse(secureLocalStorage.getItem("token"));
  // if(localStorage.getItem("token")) structure = JSON.parse(localStorage.getItem("token"));
  // console.log(document.cookie)
} catch (error) {}

const authSlice = createSlice({
  name: "auth",
  initialState: { userData: structure },
  reducers: {
    saveUserData(state, action) {
      secureLocalStorage.removeItem("token")
      const { idToken, email, profilepic, username, rememberMe } =
        action.payload;
      state.userData = {
        idToken,
        email,
        profilepic,
        username,
        urlemail: email.replace(/[.@]/g, ""),
      };
      // console.log(state.userData)
      // console.log(rememberMe);
      state.isAuth = true;
      if (rememberMe) {
        console.log(rememberMe)
        secureLocalStorage.setItem("token", JSON.stringify(state.userData));
        // localStorage.setItem("token", JSON.stringify(state.userData));
      }
    },
    logoutUser(state) {
      state.userData = "";
      state.isAuth = false;
      secureLocalStorage.removeItem("token")
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
