import React, { useState, useEffect, useContext } from "react";
import { BoxArt } from "./BoxArt";
import { BillboardContext } from "./contexts/BillboardContext";
import { rowStyle } from "./styles/Rows.styles";
import fetchWithRetry from "./network/NetworkUtils";

export const Rows = ({ rows, videos = {} }) => {
  const [rowState, setRowState] = useState(rows || []);
  const { setBillboardId } = useContext(BillboardContext);

  useEffect(async () => {
    if (!rowState.length) {
      const data = await fetchWithRetry("/data/rows");
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
