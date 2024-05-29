"use client";
import "@/styles/globals.css";
import RootLayout from "@/components/UI/Layouts/Layout";
import "@smastrom/react-rating/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
