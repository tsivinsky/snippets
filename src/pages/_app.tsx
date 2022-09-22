import React from "react";

import { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/app.css";
import { Toaster } from "react-hot-toast";

import { Page } from "@/types/Page";

type MyAppProps = AppProps & {
  Component: Page;
};

function App({ Component, pageProps }: MyAppProps) {
  const Layout = Component.layout ?? React.Fragment;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Layout>
      <Head>
        <title>UI Kit</title>
      </Head>

      <Toaster />
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  );
}

export default App;
