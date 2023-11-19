import styled from "styled-components";

import { HiddenForAccessibility, SECONDARY_COLOR_LIGHT } from "@/theme";

export const BaseInputLabel = styled.label`
  position: absolute;
  left: 50px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  display: flex;
  align-items: center;
  color: ${SECONDARY_COLOR_LIGHT};
  font-weight: normal;
  font-size: 20px;
  pointer-events: none;

  ${({ hidden }) => hidden && HiddenForAccessibility}
`;
