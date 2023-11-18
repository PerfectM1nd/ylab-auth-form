import React, { FC } from "react";
import styled from "styled-components";

import { ERROR_COLOR } from "@/theme";

interface Props {
  id: string;
  children: React.ReactNode;
}

export const BaseInputErrorLabel: FC<Props> = ({ id, children }) => {
  return (
    <Container id={id} aria-live="polite">
      {children}
    </Container>
  );
};

const Container = styled.p`
  position: absolute;
  bottom: -26px;
  left: 12px;
  color: ${ERROR_COLOR};
  font-weight: bold;
  font-size: 15px;
  white-space: nowrap;
`;
