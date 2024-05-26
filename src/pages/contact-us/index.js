import ContactUs from "@/components/ContactUs/ContactUs";
import Head from "next/head";
import React from "react";

const contactus = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta property="description" content="Got a Question? We'd love to hear from you. " />
      </Head>
      <ContactUs />
    </div>
  );
};

export default contactus;
