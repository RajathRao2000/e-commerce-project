import React from "react";
import missionimg from "../../images/mission.jpg";
import story from "../../images/story1.jpg";
import Image from "next/image";
const About = ({ list }) => {
  return (
    <>
      <div className="about-body min-h-[calc(100vh-69.5px)] flex flex-col gap-5  justify-center items-center  ">
        <div className="about-header text-6xl my-12 ">About Us</div>
        <div className="max-w-6xl flex flex-col gap-14">
          <div className="about-section1 justify-center flex flex-col-reverse items-center p-7 md:flex-row">
            <div className="para p-5 flex flex-col gap-4 items-center sm:items-start">
              <div className="title text-4xl font-semibold">Our Mission</div>
              <div className="sub-text text-xl max-w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                quo voluptatibus provident amet saepe, qui aspernatur. Suscipit
                quis nesciunt magni officiis veritatis, earum hic placeat,
                similique, totam animi a eius.
              </div>
            </div>
            <div className="image  ">
              <Image
                alt="Missiom Image"
                width={500}
                height={500}
                className="w-full sm:max-w-[400px] sm:rounded-tr-[8rem] sm:rounded-bl-[8rem]"
                src={missionimg.src}
              />
            </div>
          </div>

          <div className="about-section2 justify-center flex flex-col-reverse items-center p-7 md:flex-row-reverse md:items-start">
            <div className="para p-5 flex flex-col gap-4 items-center sm:items-start">
              <div className="title text-4xl font-semibold">Our Story</div>
              <div className="sub-text text-xl max-w-[400px] flex flex-col gap-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis quo voluptatibus provident amet saepe, qui aspernatur.
                  Suscipit quis nesciunt magni officiis veritatis, earum hic
                  placeat, similique, totam animi a eius.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, iure ea? Assumenda ducimus iste officiis eum ipsa
                  neque quisquam inventore unde odio, dicta doloremque ratione,
                  deserunt odit ex tempora porro. Ipsa corporis tenetur
                  aspernatur sit libero distinctio ducimus, ex recusandae
                  laborum, voluptate nulla ad. Enim iure maxime maiores ut
                  obcaecati ad delectus, tempore adipisci ab non consequatur
                  odit deserunt suscipit?
                </p>
                <p>
                  Animi pariatur quibusdam voluptate saepe eaque cupiditate.
                  Quam suscipit impedit porro obcaecati fugiat cumque iste
                  reprehenderit, amet magnam assumenda neque officiis distinctio
                  praesentium at esse veritatis non quia pariatur eius? Vel
                  voluptates magnam facilis sint assumenda voluptatibus, tempora
                  consequatur cum quibusdam saepe sequi praesentium unde
                  pariatur ratione ex voluptatem officiis fugit placeat nemo
                  earum.
                </p>
                <p>
                  Temporibus, labore. Eius nesciunt minus tempora? Voluptates
                  necessitatibus molestias veritatis magni hic dolore aspernatur
                  esse autem, odit nulla. Delectus dicta soluta blanditiis ipsam
                  eius quibusdam odit voluptatem, quod laudantium aliquam,
                  cupiditate minima, nulla nisi quis ipsum?
                </p>
              </div>
            </div>
            <div className="image w-full max-w-[460px] pt-8">
              <Image
                alt="story image"
                width={500}
                height={500}
                className="w-full"
                src={story.src}
              />
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
