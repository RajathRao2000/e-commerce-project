//todo: collect user data through token like profile picture and display name
//todo: implement forgot password

import { useDispatch } from "react-redux";
import { authActions } from "@/redux/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";


function toastMsg(status, message, settings) {
  //todo: capitalize the error
  toast[status](
    message,
    settings
      ? settings
      : {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
        }
  );
}

const useSignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  async function signInHandler(input) {
    const { message, data, rememberMe } = input;
    if (message === "error") {
      toastMsg("error", data);
    } else {
      dispatch(authActions.saveUserData({ message, ...data, rememberMe }));
      toastMsg("success", "Sign In Success !!");
      router.replace("/");
    }
  }

  return signInHandler;
};

export default useSignIn;
