import Link from "next/link";
import React from "react";

const FooterLinks = ({ title, arrayofLinks }) => {
  return (
    <div className={`${title} `}>
      <p className="mb-4 ">{title}</p>
      <ul className="flex flex-col gap-2">
        {arrayofLinks.map((item) => {
          return (
            <li key={item.id}>
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
    { id: 1, name: "Smartphones", url: "#" },
    { id: 2, name: "Home Decor", url: "#" },
    { id: 3, name: "Laptops", url: "#" },
  ];

  const social = [
    { id: 1, name: "Facebook", url: "#" },
    { id: 2, name: "Instagram", url: "#" },
    { id: 3, name: "Linkedin", url: "#" },
    { id: 4, name: "Discord", url: "#" },
  ];

  const company = [
    { id: 1, name: "About", url: "#" },
    { id: 2, name: "Contact Us", url: "#" },
    { id: 3, name: "Blog", url: "#" },
    { id: 4, name: "Press", url: "#" },
  ];

  const support = [
    { id: 1, name: "Help", url: "#" },
    { id: 2, name: "Track Order", url: "#" },
    { id: 3, name: "Shipping", url: "#" },
    { id: 4, name: "Returns", url: "#" },
  ];
  return (
    <div className="md:h-[300px] mt-8 border-t-[1px] grid bg-[#f9fafb] text-[#6b7280]">
      <div className="footerlinks sm:w-screen h-full p-7  gap-10 grid grid-cols-2 md:grid-cols-4">
        <FooterLinks title="SHOP" arrayofLinks={popularCategories} />
        <FooterLinks title="SOCIAL" arrayofLinks={social} />
        <FooterLinks title="COMPANY" arrayofLinks={company} />
        <FooterLinks title="SUPPORT" arrayofLinks={support} />
      </div>
      <div className=" sm:w-screen border-t-[1px] p-2 text-sm flex justify-center items-center flex-col">
        <div className="links w-full flex items-center justify-center gap-5">
          <Link className="hover:underline" href="#">
            Conditions of Use & Sale
          </Link>
          <Link className="hover:underline" href="#">
            Privacy Notice
          </Link>
          <Link className="hover:underline" href="#">
            Interest-Based Ads{" "}
          </Link>
        </div>
        <p>© 1996-2024, shop.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Footer;
