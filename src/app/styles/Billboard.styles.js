import { css } from "@emotion/react";

export const billboardStyle = (billboardId) => css`
  position: sticky;
  top: 0;
  width: 100%;
  height: 400px;
  background-color: #000;
  background-image: url("/images/displayart/${billboardId}.jpg");
  background-repeat: no-repeat;
  background-position: right;
`;

export const billboardTitleStyle = css`
  padding: 1rem;
`;
