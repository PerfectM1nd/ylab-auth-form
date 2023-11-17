import styled from "styled-components";

import profileSvg from "@/assets/icons/profile.svg";
import { CheckboxInput } from "@/features/auth/components/inputs/CheckboxInput.tsx";
import { PRIMARY_COLOR, TEXT_PRIMARY_COLOR } from "@/theme";

import { SubmitButton } from "./buttons/SubmitButton.tsx";
import { EmailInput } from "./inputs/EmailInput.tsx";
import { PasswordInput } from "./inputs/PasswordInput.tsx";

export const LoginForm = () => {
  return (
    <Container>
      <SignInIconContainer>
        <SignInImage src={profileSvg} alt="Sign in" />
      </SignInIconContainer>
      <SignInText>Sign in</SignInText>
      <FormContainer>
        <Form>
          <InputContainer>
            <EmailInput />
          </InputContainer>
          <InputContainer>
            <PasswordInput />
          </InputContainer>
          <ButtonContainer>
            <SubmitButton>Log in</SubmitButton>
          </ButtonContainer>
          <CheckboxInput />
        </Form>
      </FormContainer>
    </Container>
  );
};

const SignInText = styled.h1`
  margin-top: 32px;
  text-align: center;
  font-size: 32px;
  color: ${TEXT_PRIMARY_COLOR};
  user-select: none;
`;

const SignInImage = styled.img`
  display: block;
  width: 70px;
  height: 70px;
`;

const SignInIconContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${PRIMARY_COLOR};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

const FormContainer = styled.div`
  margin-top: 24px;
`;

const Form = styled.form``;

const Container = styled.div`
  position: relative;
  width: 400px;
  padding: 32px;
  box-sizing: border-box;
  background-color: rgba(255 255 255 / 0.4);
  backdrop-filter: blur(20px);
  border-radius: 20px;
`;
