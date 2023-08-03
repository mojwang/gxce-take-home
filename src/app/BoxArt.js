import React, { useState, useEffect, useContext, useCallback } from "react";
import { BillboardContext } from "../context/BillboardContext";
import { boxArtStyle } from "./BoxArt.styles";

export const BoxArt = React.memo(({ videoId, videoData }) => {
  const { setBillboardId } = useContext(BillboardContext);
  const [titleState, setTitleState] = useState(videoData);
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Use `useCallback` to memoize these functions so they aren't re-created on every render
  const handleMouseOver = useCallback(() => {
    setIsHighlighted(true);
    setBillboardId(videoId);
  }, [videoId, setBillboardId]);

  const handleMouseOut = useCallback(() => {
    setIsHighlighted(false);
  }, []);

  useEffect(async () => {
    if (!titleState) {
      const response = await fetch(`/data/title/${videoId}`);
      const data = await response.json();
      setTitleState(data);
    }
  });

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
