import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import profileSvg from "@/assets/icons/profile.svg";
import { FormValues } from "@/features/auth";
import { FOCUS_OUTLINE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "@/theme";

import { SubmitButton } from "./buttons/SubmitButton.tsx";
import { EmailInput } from "./inputs/EmailInput.tsx";
import { PasswordInput } from "./inputs/PasswordInput.tsx";
import { RememberMeInput } from "./inputs/RememberMeInput.tsx";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      rememberMe: false,
    },
  });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (data: FormValues) => {
    new Promise((resolve) => {
      setSubmitting(true);
      setTimeout(() => {
        resolve(data);
        setSubmitting(false);
      }, 1500);
    }).then((data) => {
      alert(`Form submitted successfully! Data given: ${JSON.stringify(data)}`);
    });
  };

  return (
    <Container>
      <SignInIconContainer>
        <SignInIcon src={profileSvg} alt="Sign in" />
      </SignInIconContainer>
      <SignInText>Sign in</SignInText>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <EmailInput register={register} errors={errors} />
        </InputContainer>
        <InputContainer>
          <PasswordInput register={register} errors={errors} />
        </InputContainer>
        <InputContainer>
          <RememberMeInput register={register} watch={watch} />
        </InputContainer>
        <ButtonContainer>
          <SubmitButton disabled={submitting}>
            {submitting ? "Loading..." : "Log in"}
          </SubmitButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

const SignInText = styled.h1`
  margin-top: 32px;
  text-align: center;
  font-size: 32px;
  color: ${SECONDARY_COLOR};
  user-select: none;
`;

const SignInIcon = styled.img`
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
  margin-top: 32px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const Form = styled.form`
  :focus-visible {
    outline: 3px solid ${FOCUS_OUTLINE_COLOR};
    box-shadow: 0 0 0 5px white;
  }
`;

const Container = styled.div`
  position: relative;
  width: 400px;
  padding: 32px;
  box-sizing: border-box;
  background-color: rgba(255 255 255 / 0.4);
  backdrop-filter: blur(20px);
  border-radius: 20px;
`;
