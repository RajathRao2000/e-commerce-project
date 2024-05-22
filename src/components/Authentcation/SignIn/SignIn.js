import Form from "@/components/UI/Forms/Form/Form";
import Link from "next/link";
import InputField from "@/components/UI/Forms/Input/Input";
import React, { useState } from "react";
import InputContainer from "@/components/UI/Forms/InputContainer/InputContainer";
import FormButton from "@/components/UI/Forms/FormButton/FormButton";
import useSignIn from "@/custom-hooks/useSignIn";
import Error from "@/components/UI/Forms/Error/Error";
import axios from "axios";
const SignIn = () => {
  const signInHandler = useSignIn();
  const [showPs, setShowPs] = useState(false);
  const [emailerror, setEmailError] = useState({ error: false, message: "" });
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: "",
  });

  const validation = async (e) => {
    setEmailError({ error: false, message: "" });
    setPasswordError({ error: false, message: "" });

    e.preventDefault();
    const emailip = e.target["signin-email"];
    const passwordip = e.target["signin-ps"];
    const rememberMeip = e.target["rememberMe"];
    const email = emailip.value;
    const password = passwordip.value;
    const rememberMe = rememberMeip.checked;
    emailip.disabled = true;
    passwordip.disabled = true;
    rememberMeip.disabled = true;
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError({ error: true, message: "Invalid Email" });
      return;
    }
    if (password.length < 6) {
      setPasswordError({
        error: true,
        message: "Password should have more than 6 characters",
      });
      return;
    }

    try {
      const res = await axios.post(`/api/signin`, {
        email,
        password,
      });
      const { message, data } = res.data;
      signInHandler({ message, data, rememberMe });
      emailip.disabled = true;
      passwordip.disabled = true;
      rememberMeip.disabled = true;
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Form submitFunction={validation}>
      <InputContainer>
        <div className="relative">
          <InputField _id="signin-email" label="Email Address" type="text" />
          {emailerror.error && <Error message={emailerror.message} />}
        </div>
        <div className="relative">
          <InputField
            _id="signin-ps"
            label="Password"
            type={showPs ? "text" : "password"}
          />
          <button
            type="button"
            className="absolute top-[28px] right-[10px] text-gray-500"
            onClick={() => setShowPs((prev) => !prev)}
          >
            {showPs ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </button>
          {passwordError.error && <Error message={passwordError.message} />}
        </div>
      </InputContainer>
      <div className="more-details flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            className="h-4 w-4 text-primary-600 border-gray-300 rounded "
            defaultChecked="true"
          />
          <label
            htmlFor="rememberMe"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <Link
            href="/auth/forgot-password"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
      <FormButton type="submit" label="Sign In" />
    </Form>
  );
};

export default SignIn;
