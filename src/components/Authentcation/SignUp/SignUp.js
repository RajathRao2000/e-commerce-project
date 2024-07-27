import React from "react";
import Form from "@/components/UI/Forms/Form/Form";
import InputContainer from "@/components/UI/Forms/InputContainer/InputContainer";
import InputField from "@/components/UI/Forms/Input/Input";
import FormButton from "@/components/UI/Forms/FormButton/FormButton";
import useSignUp from "@/custom-hooks/useSignUp";
import { useState } from "react";
import Error from "@/components/UI/Forms/Error/Error";
import axios from "axios";

const SignUp = () => {
  const signUpHandler = useSignUp();
  const [isValid, setIsValid] = useState();

  const [emailerror, setEmailError] = useState({ error: false, message: "" });
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: "",
  });
  const [cpasswordError, setcPasswordError] = useState({
    error: false,
    message: "",
  });

  const validation = async (e) => {
    setEmailError({ error: false, message: "" });
    setPasswordError({ error: false, message: "" });
    setcPasswordError({ error: false, message: "" });

    e.preventDefault();
    const emailip = e.target["signup-email"];
    const passwordip = e.target["signup-ps"];
    const confirmPasswordip = e.target["signup-confirm-ps"];

    const email = emailip.value;
    const password = passwordip.value;
    const confirmPassword = confirmPasswordip.value;
    // emailip.disabled = true;
    // passwordip.disabled = true;
    // confirmPasswordip.disabled = true;

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
    if (password.length !== confirmPassword.length) {
      setcPasswordError({
        error: true,
        message: "Passwords do not match",
      });
      return;
    }
    if (isValid && password === confirmPassword) {
      const res = await axios.post("/api/signup", {
        email,
        password,
      });
      // console.log(res.data)
      emailip.value = "";
      passwordip.value = "";
      confirmPasswordip.value = "";
      const { message, data } = res.data;
      const rememberMe = false;
      signUpHandler({ message, data, rememberMe });
    }
    // emailip.disabled = false;
    // passwordip.disabled = false;
    // confirmPasswordip.disabled = false;
  };

  return (
    <Form submitFunction={validation}>
      <InputContainer>
        <div className="relative">
          <InputField _id="signup-email" label="Email Address" type="text" />
          {emailerror.error && <Error message={emailerror.message} />}
        </div>
        <div className="relative">
          <InputField
            _id="signup-ps"
            label="Password"
            type="password"
            onChange={(e) => {
              const ps = e.target.value;
              if (ps.length < 6) {
                setPasswordError({
                  error: true,
                  message: "Password should have more than 6 characters",
                });
                return;
              }
              if (!ps.match(/[0-9]/)) {
                setPasswordError({
                  error: true,
                  message: "Password should have a number [0-9]",
                });
                return;
              }
              if (!ps.match(/[a-z]/)) {
                setPasswordError({
                  error: true,
                  message: "Password should have a Lowercase letter",
                });
                return;
              }
              if (!ps.match(/[A-Z]/)) {
                setPasswordError({
                  error: true,
                  message: "Password should have an Uppercase letter",
                });
                return;
              }
              if (!ps.match(/\W/)) {
                setPasswordError({
                  error: true,
                  message: "Password should have a Special character",
                });
                return;
              }
              if (ps.length > 10) {
                setPasswordError({
                  error: true,
                  message: "Password should have less than 10 characters",
                });
                return;
              }
              setIsValid(true);
              setPasswordError({ error: false, message: "" });
            }}
          />
          {passwordError.error && <Error message={passwordError.message} />}
        </div>
        <div className="relative">
          <InputField
            _id="signup-confirm-ps"
            label="Confirm Password"
            type="password"
            onChange={() => {
              setcPasswordError({ error: false, message: "" });
            }}
          />
          {cpasswordError.error && <Error message={cpasswordError.message} />}
        </div>
      </InputContainer>
      <FormButton type="submit" label="Sign up" />
    </Form>
  );
};

export default SignUp;
