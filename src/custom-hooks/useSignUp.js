import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { authActions } from "@/redux/authSlice";
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

  async function signUpHandler(input) {
    const { message, data, rememberMe } = input;
    if (message === "error") {
      toastMsg("error", data);
    } else {
      dispatch(authActions.saveUserData({ message, ...data, rememberMe }));
      toastMsg("success", "Account created Successfully !!");
      router.replace("/");
    }
  }

  return signUpHandler;
};

export default useSignUp;
