import styled from "styled-components";

import formBackgroundUrl from "@/assets/backgrounds/form-background.jpg";
import { EmailInput } from "@/components/form/EmailInput.tsx";
import { PasswordInput } from "@/components/form/PasswordInput.tsx";

export const LoginForm = () => {
  return (
    <FormContainer>
      <Form>
        <InputContainer>
          <EmailInput />
        </InputContainer>
        <InputContainer>
          <PasswordInput />
        </InputContainer>
        <ButtonContainer>
          <Button type="submit">Log in</Button>
        </ButtonContainer>
      </Form>
      <SignUpContainer>
        <SignUpBackground />
        <SignUpText>Sign up</SignUpText>
      </SignUpContainer>
    </FormContainer>
  );
};

const SignUpText = styled.div`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  padding: 32px;
  display: flex;
  justify-content: center;
`;

const SignUpBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${formBackgroundUrl});
  z-index: -1;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(50px); /* apply the blur */
    pointer-events: none; /* make the overlay click-through */
  }
`;

const SignUpContainer = styled.div`
  position: relative;
  flex-basis: 50%;
  overflow: hidden;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  border-radius: 10px;
  border: none;
  background-color: rgb(5, 47, 96);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(5 47 96 / 0.8);
  }

  &:active {
    transition: none;
    background-color: rgba(5 47 96 / 0.5);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const Form = styled.form`
  flex-basis: 50%;
  padding: 32px;
  box-sizing: border-box;
`;

const FormContainer = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  background-color: rgba(255 255 255 / 0.5);
  backdrop-filter: blur(20px);

  box-shadow: rgba(0, 0, 0, 0.3) 0 22px 70px 4px;
`;
