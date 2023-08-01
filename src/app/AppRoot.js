import React, { useState } from "react";
import { css, Global } from "@emotion/react";
import { Billboard } from "./Billboard";
import { Rows } from "./Rows";

export const AppRoot = (props) => {
  const [billboardId, setBillboardId] = useState(
    props.rows?.[0]?.videoList?.[0]
  );
  return (
    <html lang="en">
      <head>
        <title>Netflix</title>
        <link rel="stylesheet" href="/reset.css" />
        <Global
          styles={css`
            html,
            body {
              background: #141414;
              color: #fff;
              font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            }
          `}
        />
      </head>
      <body>
        <Billboard
          videoId={billboardId}
          videoData={props.videos?.[billboardId]}
        />
        <Rows
          rows={props.rows}
          videos={props.videos}
          setBillboardId={setBillboardId}
        />
        <script src="/build/client.js" />
      </body>
    </html>
  );
};
