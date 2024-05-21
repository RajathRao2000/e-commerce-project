import React from "react";
import Form from "@/components/UI/Forms/Form/Form";
import InputContainer from "@/components/UI/Forms/InputContainer/InputContainer";
import InputField from "@/components/UI/Forms/Input/Input";
import FormButton from "@/components/UI/Forms/FormButton/FormButton";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target["forgot-ps-email"].value;
  };
  return (
    <Form submitFunction={handleSubmit}>
      <InputContainer>
        <InputField _id="forgot-ps-email" label="Email Address" type="text" />
      </InputContainer>
      <FormButton type="submit" label="Send Link" />
    </Form>
  );
};

export default ForgotPassword;
