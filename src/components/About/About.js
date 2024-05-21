import React from "react";
import missionimg from "../../images/mission.jpg";
import story from "../../images/story1.jpg";
const About = ({ list }) => {
  return (
    <>
      <div className="about-body min-h-[calc(100vh-69.5px)] flex flex-col gap-5  justify-center items-center  ">
        <div className="about-header text-6xl my-12 ">About Us</div>
        <div className="max-w-6xl flex flex-col gap-14">
          <div className="about-section1 grid grid-rows-2 grid-rows  sm:grid-cols-2 sm:grid-rows-1 m-7">
            <div className="p-2 flex justify-center gap-4 flex-col  text-center sm:text-left">
                <p className=" text-4xl font-semibold">Our Mission</p>
              <div className="sm:max-w-[424px] text-xl ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis quo voluptatibus provident amet saepe, qui aspernatur.
                  Suscipit quis nesciunt magni officiis veritatis, earum hic
                  placeat, similique, totam animi a eius.
                </p>
              </div>
            </div>
            <div className="row-start-1 sm:col-start-2 sm:pl-7">
              <img
                className="sm:w-[350px] sm:h-[350px]  object-cover sm:rounded-full "
                src={`${missionimg.src}`}
              />
            </div>
          </div>
          <div className="about-section2 sm:grid text-center sm:text-left sm:grid-cols-2 sm:grid-rows-1 ">
            <div className="sm:p-7">
              <img
                className="object-cover  sm:max-h-[570px] sm:float-right"
                src={`${story.src}`}
              />
            </div>
            <div className="flex flex-col gap-4 sm:p-7 ">
              <p className="text-4xl font-semibold">Our Story</p>
              <div className="flex flex-col gap-3 text-lg sm:max-w-[412px] ">
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
          </div>
          <div className="about-section3 bg-[#f9f9f9] ">
            <div className=" text-center flex flex-col items-center gap-4 m-5">
              <p className=" text-4xl font-bold align-center">
                Get to know our team
              </p>
              <p className="text-lg sm:w-[600px]">
                We're committed to building a diverse team and a work
                environment that's inclusive of people of all backgrounds. Get
                to know the wonderful team who's building our product and
                supporting our customers.
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
