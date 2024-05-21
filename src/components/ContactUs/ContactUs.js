import React from "react";
import Form from "../UI/Forms/Form/Form";
import InputField from "../UI/Forms/Input/Input";
import InputContainer from "../UI/Forms/InputContainer/InputContainer";
import FormButton from "../UI/Forms/FormButton/FormButton";
import FormPage from "../UI/Forms/FormPage/FormPage";
import FormMessage from "../UI/Forms/FormMessage/FormMessage";

const ContactUs = () => {
  function handleSubmit(e) {
    e.preventDefault();
    
  }
  return (
    <div className=" w-screen max-w-6xl min-h-[calc(100vh-69.5px)] flex justify-center items-center">
      <FormPage>
        <FormMessage
          header="Contact Us"
          subtext="Got a Question? We'd love to hear from you. "
        />
        <Form submitFunction={handleSubmit}>
          <InputContainer>
            <InputField _id="contact-name" label="Name" type="text" />
            <InputField
              _id="contact-email"
              label="Email Address"
              type="email"
            />
            <InputField
              _id="contact-phone"
              label="Contact Number"
              type="number"
            />
            <InputField _id="contact-Message" label="Message" type="text" />
            <label
              htmlFor={"contact-message"}
              className={`block text-sm font-medium text-gray-700`}
            >
              Message
              <textarea
                name={"contact-message"}
                className={`w-full px-3 py-2 border  border-gray-300  rounded-md shadow-sm placeholder-gray-400 sm:text-sm focus: outline-none h-[120px] resize-none`}
                id={"contact-message"}
              />
            </label>
            <FormButton type="submit" label="Submit" />
          </InputContainer>
        </Form>
      </FormPage>
    </div>
  );
};

export default ContactUs;
