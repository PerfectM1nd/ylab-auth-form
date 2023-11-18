import { css } from "styled-components";

export const PRIMARY_COLOR = "rgb(142, 187, 124)";
export const PRIMARY_COLOR_HOVER = "rgba(142 187 124 / 0.8)";
export const PRIMARY_COLOR_ACTIVE = "rgba(142 187 124 / 0.5)";

export const SECONDARY_COLOR = "#666";

export const FOCUS_OUTLINE_COLOR = "#efa237";

export const ERROR_COLOR = "#fd4114";

export const HiddenForAccessibility = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
