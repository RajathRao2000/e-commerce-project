import Link from "next/link";
import React from "react";

const FooterLinks = ({ title, arrayofLinks }) => {
  return (
    <div className={`${title} `}>
      <p className="mb-4 ">{title}</p>
      <ul className="flex flex-col gap-2">
        {arrayofLinks.map((item) => {
          return (
            <li key={Math.random()}>
              <Link className="" href={`${item.url}`}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Footer = () => {
  const popularCategories = [
    { name: "Smartphones", url: "#" },
    { name: "Home Decor", url: "#" },
    { name: "Laptops", url: "#" },
  ];

  const social = [
    { name: "Facebook", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Linkedin", url: "#" },
    { name: "Discord", url: "#" },
  ];

  const company = [
    { name: "About", url: "#" },
    { name: "Contact Us", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Press", url: "#" },
  ];

  const support = [
    { name: "Help", url: "#" },
    { name: "Track Order", url: "#" },
    { name: "Shipping", url: "#" },
    { name: "Returns", url: "#" },
  ];
  return (
    <div className="h-[300px] mt-8 border-t-[1px]  p-7 flex flex-col items-center bg-[#f9fafb] text-[#6b7280]">
      <div className="footerlinks w-screen h-full  p-7 flex flex-col sm:flex-row gap-7 flex-wrap   justify-around">
        <FooterLinks title="SHOP" arrayofLinks={popularCategories} />
        <FooterLinks title="SOCIAL" arrayofLinks={social} />
        <FooterLinks title="COMPANY" arrayofLinks={company} />
        <FooterLinks title="SUPPORT" arrayofLinks={support} />
      </div>
      <div className=" w-screen border-t-[1px] p-2 text-sm flex justify-center items-center flex-col">
        <div className="links w-full flex items-center justify-center gap-5">
          <Link className="hover:underline" href="#">Conditions of Use & Sale</Link>
          <Link className="hover:underline" href="#">Privacy Notice</Link>
          <Link className="hover:underline" href="#">Interest-Based Ads </Link>
        </div>
        <p>© 1996-2024, shop.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Footer;
