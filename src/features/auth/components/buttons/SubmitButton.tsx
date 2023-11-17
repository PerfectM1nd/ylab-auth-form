import React, { FC } from "react";
import styled from "styled-components";

import {
  PRIMARY_COLOR,
  PRIMARY_COLOR_ACTIVE,
  PRIMARY_COLOR_HOVER,
} from "@/theme";

interface Props {
  children: React.ReactNode;
}

export const SubmitButton: FC<Props> = ({ children }) => {
  return <Container type="submit">{children}</Container>;
};

const Container = styled.button`
  width: 100%;
  height: 50px;
  padding: 8px 16px;
  border-radius: 10px;
  border: none;
  background-color: ${PRIMARY_COLOR};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease-in-out;
  font-size: 24px;
  letter-spacing: 2px;

  &:hover {
    background-color: ${PRIMARY_COLOR_HOVER};
  }

  &:active {
    transition: none;
    background-color: ${PRIMARY_COLOR_ACTIVE};
  }
`;
