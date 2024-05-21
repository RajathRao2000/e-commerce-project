import FormMessage from "@/components/UI/Forms/FormMessage/FormMessage";
import FormPage from "@/components/UI/Forms/FormPage/FormPage";
import SignIn from "@/components/Authentcation/SignIn/SignIn";
import React from "react";

const signin = () => {
  return (
    <FormPage>
      <FormMessage
        header="Sign in to your account"
        subtext="Or"
        routetext="register a new account"
        route="/auth/sign-up"
      />
      <SignIn />
    </FormPage>
  );
};

export default signin;
