import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";

export const Billboard = ({ videoId, videoData }) => {
  const [titleState, setTitleState] = useState(videoData);

  useEffect(async () => {
    if (videoId) {
      const response = await fetch(`/data/title/${videoId}`);
      const data = await response.json();
      setTitleState(data);
    }
  }, [videoId]);

  return (
    <div
      id="billboard"
      css={css`
        position: sticky;
        top: 0;
        width: 100%;
        height: 400px;
        background-color: #000;
        background-image: url("/images/displayart/${videoId}.jpg");
        background-repeat: no-repeat;
        background-position: right;
      `}
    >
      <h1
        css={css`
          padding: 1rem;
          font-size: 3rem;
        `}
      >
        {titleState?.title}
      </h1>
    </div>
  );
};
