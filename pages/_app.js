import React from "react";
import { Nav } from "../components/Nav/indes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Nav />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
