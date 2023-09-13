import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Assignemnt</title>
          <meta name="description" content="Description" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="/app.css" />

          <meta property="og:site_name" content="Assignemnt" />
          <meta property="og:title" content="Assignment" />
          <meta property="og:description" content="Description" />
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
