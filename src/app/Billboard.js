import React, {useContext } from "react";
import { useFetchVideoData } from "./hooks/useFetchVideoData";
import { BillboardContext } from "./contexts/BillboardContext";
import { billboardStyle, billboardTitleStyle } from "./styles/Billboard.styles";

export const Billboard = React.memo(({ videoData }) => {
  const { billboardId } = useContext(BillboardContext);
  const { data: titleState, error } = useFetchVideoData(billboardId, videoData);

  return (
    <div id="billboard" css={billboardStyle(billboardId)}>
      <h1 css={billboardTitleStyle}>{titleState?.title}</h1>
    </div>
  );
});
