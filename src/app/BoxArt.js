import React, { useState, useEffect, useContext, useCallback } from "react";
import { useFetchVideoData } from "./hooks/useFetchVideoData";
import { BillboardContext } from "./contexts/BillboardContext";
import { boxArtStyle } from "./styles/BoxArt.styles";

export const BoxArt = React.memo(({ videoId, videoData }) => {
  const { setBillboardId } = useContext(BillboardContext);
  const { data: titleState, error } = useFetchVideoData(videoId);
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Use `useCallback` to memoize these functions so they aren't re-created on every render
  const handleMouseOver = useCallback(() => {
    setIsHighlighted(true);
    setBillboardId(videoId);
  }, [videoId, setBillboardId]);

  const handleMouseOut = useCallback(() => {
    setIsHighlighted(false);
  }, []);

  if (error) return <p>Error: {error}</p>;

  return titleState ? (
    <div
      css={boxArtStyle(isHighlighted)}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={`/images/boxart/${videoId}.jpg`} alt={titleState.title} />
    </div>
  ) : null;
});
