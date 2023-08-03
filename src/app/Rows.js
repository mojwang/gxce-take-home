import React, { useState, useEffect, useContext } from "react";
import { BoxArt } from "./BoxArt";
import { BillboardContext } from "../context/BillboardContext";
import { rowStyle } from "./Rows.styles";

export const Rows = ({ rows, videos = {} }) => {
  const [rowState, setRowState] = useState(rows || []);
  const { setBillboardId } = useContext(BillboardContext);

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
        <div key={row.rowTitle} css={rowStyle}>
          <h2>{row.rowTitle}</h2>
          <ul>
            {row.videoList.map((videoId) => (
              <li key={videoId}>
                <BoxArt videoId={videoId} videoData={videos[videoId]} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
