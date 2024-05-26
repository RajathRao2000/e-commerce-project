import React from "react";
import missionimg from "../../images/mission.jpg";
import story from "../../images/story.jpg";
import Image from "next/image";
const About = ({ list }) => {
  return (
    <>
      <div className="about-body min-h-[calc(100vh-69.5px)] flex flex-col gap-5  justify-center items-center  ">
        <div className="about-header text-6xl my-12 ">About Us</div>
        <div className="max-w-6xl flex flex-col gap-14">
          <div className=" about-section1 grid place-items-center ">
            <div className=" title text-4xl font-semibold p-2 text-center w-full md:my-10">
              Our Mission
            </div>
            <div className="md:grid md:grid-cols-2">
              <div className=" image w-full max-w-[400px] p-4 ">
                <Image
                  alt="Missiom Image"
                  width={500}
                  height={500}
                  className="w-full"
                  src={missionimg.src}
                />
              </div>
              <div className="sub-text text-2xl max-w-[400px] flex flex-col justify-center gap-4 p-4">
              <p>We revolutionize the online shopping experience by providing our
                customers with a diverse selection of high-quality products at
                unbeatable prices. At the heart of our mission is a passion for
                connecting people with the products they love, making every
                shopping moment delightful and fulfilling.</p>
              </div>
            </div>
          </div>
          <div className=" about-section2 grid place-items-center ">
            <div className=" title text-4xl font-semibold p-2 text-center w-full md:my-10">
              Our Story
            </div>
            <div className="md:grid md:grid-cols-2">
              <div className=" image w-full max-w-[400px] p-4 mt-4">
                <Image
                  alt="story image"
                  width={500}
                  height={500}
                  className="w-full"
                  src={story.src}
                />
              </div>
              <div className="sub-text text-xl max-w-[400px] flex flex-col gap-4 p-4">
                <p>
                  We began with a simple idea: to create an online marketplace
                  that offers an unparalleled shopping experience. Founded in
                  2000, our journey started in a small garage, fueled by a
                  passion for innovation and a vision to transform the way
                  people shop.
                </p>
                <p>
                  From those humble beginnings, we have grown into a trusted
                  ecommerce platform, serving millions of customers worldwide.
                  Our story is one of relentless dedication, overcoming
                  challenges, and constantly evolving to meet the needs of our
                  customers.
                </p>
                <p>
                  We take pride in our curated selection of products, our
                  commitment to quality, and our unwavering focus on customer
                  satisfaction. As we continue to grow, our founding principles
                  remain the same: to provide exceptional value, foster a
                  community of happy shoppers, and make a positive impact on the
                  world through our business.
                </p>
              </div>
            </div>
          </div>
          <div className="about-section3 bg-[#f9f9f9] ">
            <div className=" text-center flex flex-col items-center gap-4 m-5">
              <p className=" text-4xl font-bold align-center">
                Get to know our team
              </p>
              <p className="text-lg sm:w-[600px]">
                We&apos;re committed to building a diverse team and a work
                environment that&apos;s inclusive of people of all backgrounds.
                Get to know the wonderful team who&apos;s building our product
                and supporting our customers.
              </p>
            </div>
            <div className="about-list grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center overflow-auto h-[600px] ">
              {list.map((item) => {
                const { name, picture, id, location } = item;
                const { first, last } = name;
                const { large, medium, thumbnail } = picture;
                const { city, state, country } = location;
                const _id = id.value;

                return (
                  <div
                    key={_id}
                    className="person w-full h-full flex flex-col  sm:m-4 sm:p-4"
                  >
                    <img
                      width={300}
                      height={300}
                      alt={"employee image"}
                      className="rounded-xl md:max-w-[180px]  w-full"
                      src={large}
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold text-sm">
                        {first} {last}
                      </p>
                      <p className="text-xs">
                        {`${city}, ${state.slice(0, 11)}`}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
