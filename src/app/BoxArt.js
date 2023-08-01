import React, { useState, useEffect, useContext } from "react";
import { BillboardContext } from '../context/BillboardContext';
import { boxArtStyle } from './BoxArt.styles';

export const BoxArt = ({ videoId, videoData }) => {
  const { setBillboardId } = useContext(BillboardContext);
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
      css={boxArtStyle(isHighlighted)}
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
