import Head from "next/head";
import Carousel from "@/components/MainPage/Carousel/Carousel";
import HeroSection from "@/components/MainPage/Hero/HeroSection";
import BodySection from "@/components/BodySection/BodySection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="description" content="Welcome to homepage" />
      </Head>
      <div className="grid min-h-screen place-items-center">
        <HeroSection />
        <Carousel />
        <BodySection />
      </div>
    </>
  );
}
