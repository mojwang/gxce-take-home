import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { BoxArt } from "./BoxArt";

export const Rows = ({ rows, videos = {}, setBillboardId }) => {
  const [rowState, setRowState] = useState(rows || []);

  useEffect(async () => {
    if (!rowState.length) {
      const response = await fetch("/data/rows");
      const data = await response.json();
      setRowState(data);
      setBillboardId(data[0].videoList[0]);
    }
  });

  return (
    <div>
      {rowState?.map((row) => (
        <div
          key={row.rowTitle}
          css={css`
            padding: 0.5rem;
          `}
        >
          <h2
            css={css`
              font-size: 1.2rem;
            `}
          >
            {row.rowTitle}
          </h2>
          <ul>
            {row.videoList.map((videoId) => (
              <li
                key={videoId}
                css={css`
                  display: inline-block;
                  margin: 0.2rem;
                `}
              >
                <BoxArt
                  videoId={videoId}
                  videoData={videos[videoId]}
                  setBillboardId={setBillboardId}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
