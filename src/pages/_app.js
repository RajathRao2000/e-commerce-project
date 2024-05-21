"use client";
import "@/styles/globals.css";
import RootLayout from "@/components/UI/Layouts/Layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import '@smastrom/react-rating/style.css'
export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </UserProvider>
    </>
  );
}
