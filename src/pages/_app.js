"use client";
import "@/styles/globals.css";
import RootLayout from "@/components/UI/Layouts/Layout";
import "@smastrom/react-rating/style.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
