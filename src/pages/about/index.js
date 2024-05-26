import About from "@/components/About/About";
import axios from "axios";
import React from "react";
import Head from "next/head";

const about = ({ list }) => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          property="description"
          content="Know about our us and our people"
        />
      </Head>
      <About list={list} />
    </div>
  );
};

export default about;

export async function getStaticProps() {
  const res = await axios.get(
    `https://randomuser.me/api/?nat=in&results=16&exc=login,dob,registered,nat,phone,cell`
  );
  const results = res.data.results;
  // console.log(results, "||");
  return {
    props: {
      list: results,
    },
  };
}
