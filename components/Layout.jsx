import React from 'react';
import Head from "next/head";
import Navbar from './Navbar';
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const router = useRouter();
  const showHeader = router.pathname === '/' ? false : true;

  const noFooter = router.pathname === "/success" ? false : true;
  
  
  return (
    <div>
      <Head>
        <title>OverTheSea</title>
        <link rel="icon" href="/favicon-32x32.png"/>
      </Head>
      <header>{showHeader && <Navbar />}</header>
      <main>{children}</main>
      <footer>{noFooter && <Footer />}</footer>
    </div>
  );
}

export default Layout