import React from "react";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <main>
      <Component {...pageProps} {...router} />
    </main>
  );
};

export default MyApp;
