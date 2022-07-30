import React from 'react';
import Head from "next/head";
import Navbar from './Navbar';
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const router = useRouter();
    const showHeader = router.pathname === '/' ? false : true;
  return (
      <div>
          <Head>
              <title>OverTheSea</title>
          </Head>
          <header>
              {showHeader && <Navbar />}
          </header>
          <main>
            {children}
          </main>
          <footer>
              <Footer />
          </footer>
    </div>
  )
}

export default Layout