import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  Icon: React.ComponentType;
}

export const InputLabelIcon: FC<Props> = ({ Icon }) => {
  return (
    <Container>
      <Icon />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  bottom: 0;
  margin: auto 0 auto 10px;
`;
