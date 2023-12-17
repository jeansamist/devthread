import { ThemeProvider } from "@/contexts/ThemeContext";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "@/styles/css/globals.css";
import { Topbar } from "@/components/Topbar";
import { Circles } from "@/components/Circles";
import { connectToMongoDB } from "@/functions/mongodb";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  // connectToMongoDB("mongodb://localhost:27017/devthread");
  return getLayout(
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Topbar />

      <Circles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
