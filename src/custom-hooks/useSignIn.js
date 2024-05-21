import keys from "@/keys";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "@/redux/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const APIKEY = process.env.GOOGLE_API_KEY;
const SIGNIN_URL = `${keys.SignInUrl}${APIKEY}`;
//todo: implement forgot password

function toastMsg(status, message,settings) {
  //todo: capitalize the error
  toast[status](message, settings?settings:{
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
  });
}

const useSignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  async function signInHandler(e) {
    e.preventDefault();
    const emailip = e.target["signin-email"];
    const passwordip = e.target["signin-ps"];
    const rememberMeip = e.target["rememberMe"];
    const email = emailip.value;
    const password = passwordip.value;
    const rememberMe = rememberMeip.checked;

    try {
      const res = await axios.post(`${SIGNIN_URL}`, {
        email,
        password,
        returnSecureToken: true,
      });
      //todo: collect user data through token like profile picture and display name
      dispatch(authActions.saveUserData({ ...res.data, rememberMe }));
      toastMsg("success", "Sign In Success !!");
      router.replace("/");
    } catch (error) {
      // console.log(error);
      try {
        const errormsg = error.response.data.error.message;
        toastMsg("error", errormsg);
        // console.log("error in sign up", error.response.data.error);
      } catch (error) {
        // console.log(error);
      }
    }
  }

  return signInHandler;
};

export default useSignIn;
