import { ThemeContext } from "@/contexts/ThemeContext";
import { Html, Head, Main, NextScript } from "next/document";
import { useContext } from "react";
export default function Document() {
  const {theme} = useContext(ThemeContext)
  return (
    <Html lang="en" suppressHydrationWarning className={theme}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}