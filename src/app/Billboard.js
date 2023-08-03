import React, { useState, useEffect, useContext } from "react";
import { BillboardContext } from "./contexts/BillboardContext";
import { billboardStyle, billboardTitleStyle } from "./Billboard.styles";

export const Billboard = React.memo(({ videoData }) => {
  const { billboardId } = useContext(BillboardContext);
  const [titleState, setTitleState] = useState(videoData);

  useEffect(async () => {
    if (billboardId) {
      const response = await fetch(`/data/title/${billboardId}`);
      const data = await response.json();
      setTitleState(data);
    }
  }, [billboardId]);

  return (
    <div id="billboard" css={billboardStyle(billboardId)}>
      <h1 css={billboardTitleStyle}>{titleState?.title}</h1>
    </div>
  );
});
