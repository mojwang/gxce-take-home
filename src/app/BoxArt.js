import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";

export const BoxArt = ({ videoId, videoData, setBillboardId }) => {
  const [titleState, setTitleState] = useState(videoData);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(async () => {
    if (!titleState) {
      const response = await fetch(`/data/title/${videoId}`);
      const data = await response.json();
      setTitleState(data);
    }
  });

  return titleState ? (
    <div
      css={css`
        outline: ${isHighlighted ? "2px white inset" : "0"};
        float: left;
      `}
      onMouseOver={() => {
        setIsHighlighted(true);
        setBillboardId(videoId);
      }}
      onMouseOut={() => setIsHighlighted(false)}
    >
      <img src={`/images/boxart/${videoId}.jpg`} alt={titleState.title} />
    </div>
  ) : null;
};
