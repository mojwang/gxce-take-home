import { css } from '@emotion/react';

export const boxArtStyle = (isHighlighted) => css`
    outline: ${isHighlighted ? "2px white inset" : "0"};
    float: left;
`;
