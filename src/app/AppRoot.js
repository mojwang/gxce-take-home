import React, { useState } from "react";
import { Global } from "@emotion/react";
import { Billboard } from "./Billboard";
import { Rows } from "./Rows";
import { PropTypes } from "prop-types";
import { BillboardProvider } from "./contexts/BillboardContext";
import { GlobalStyles } from "./GlobalStyles";
import ErrorBoundary from "./ErrorBoundary";

export const AppRoot = (props) => {
  const [billboardId, setBillboardId] = useState(
    props.rows?.[0]?.videoList?.[0]
  );
  return (
    <html lang="en">
      <head>
        <title>Netflix</title>
        <meta name="description" content="A Netflix web application" />
        <meta name="keywords" content="Netflix, Clone, Movies, TV Shows" />
        <link rel="stylesheet" href="/reset.css" />
        <Global styles={GlobalStyles} />
      </head>
      <body>
        <ErrorBoundary>
          <BillboardProvider value={{ billboardId, setBillboardId }}>
            <Billboard videoData={props.videos?.[billboardId]} />
            <Rows rows={props.rows} videos={props.videos} />
          </BillboardProvider>
        </ErrorBoundary>
        <script src="/build/client.js" />
      </body>
    </html>
  );
};

AppRoot.propTypes = {
  rows: PropTypes.array,
  videos: PropTypes.object,
};
