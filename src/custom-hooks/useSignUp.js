import keys from "@/keys";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const APIKEY = process.env.GOOGLE_API_KEY;
const SIGNUP_URL = `${keys.SignUpUrl}${APIKEY}`;

//todo: implement forgot password

function toastMsg(status, message) {
  //todo: capitalize the error
  toast[status](message, {
    position: "top-right",
    autoClose: 5000,
  });
}

const useSignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  async function signUpHandler(e) {
    e.preventDefault();
    const emailip = e.target["signup-email"];
    const passwordip = e.target["signup-ps"];
    const confirmPasswordip = e.target["signup-confirm-ps"];

    const email = emailip.value;
    const password = passwordip.value;
    const confirmPassword = confirmPasswordip.value;

    if (password !== confirmPassword) {
      toastMsg("error", "Passwords do not match !!");
    }
    emailip.disabled = true;
    passwordip.disabled = true;
    confirmPasswordip.disabled = true;
    try {
      const res = await axios.post(`${SIGNUP_URL}`, {
        email: email,
        password: password,
        returnSecureToken: true,
      });

      emailip.value = "";
      passwordip.value = "";
      confirmPasswordip.value = "";
      if (res.status === 200) {
        toastMsg("success", "Account created Successfully !!");
        router.replace("/");
      }
      // console.log(res);
    } catch (error) {
      try {
        const errormsg = error.response.data.error.message;
        toastMsg("error", errormsg.replace("_", " "));
        // console.log("error in sign up", error.response.data.error);
      } catch (error) {
        // console.log(error);
      }
    }

    emailip.disabled = false;
    passwordip.disabled = false;
    confirmPasswordip.disabled = false;
  }

  return signUpHandler;
};

export default useSignUp;
