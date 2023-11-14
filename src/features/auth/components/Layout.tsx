import React, { FC } from "react";
import styled from "styled-components";

import formBackgroundUrl from "@/assets/backgrounds/form-background.jpg";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <FormBackground role="presentation" />
      {children}
    </Container>
  );
};

const FormBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${formBackgroundUrl});
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
