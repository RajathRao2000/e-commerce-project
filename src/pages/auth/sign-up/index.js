import FormPage from "@/components/UI/Forms/FormPage/FormPage";
import React from "react";
import FormMessage from "@/components/UI/Forms/FormMessage/FormMessage";
import SignUp from "@/components/Authentcation/SignUp/SignUp";

const signup = () => {
  return (
    <FormPage>
      <FormMessage
        header="Create a new account"
        subtext="Or"
        routetext="login to your existing account"
        route="/auth/sign-in"
      />
      <SignUp />
    </FormPage>
  );
};

export default signup;
