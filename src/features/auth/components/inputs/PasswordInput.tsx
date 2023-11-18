import { ErrorMessage } from "@hookform/error-message";
import React, { FC, useId, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

import { FormValues } from "@/features/auth";
import { PRIMARY_COLOR } from "@/theme";

import { LockIcon } from "../icons/LockIcon.tsx";

import { BaseInput } from "./base/BaseInput.tsx";
import { BaseInputContainer } from "./base/BaseInputContainer.tsx";
import { BaseInputErrorLabel } from "./base/BaseInputErrorLabel.tsx";
import { BaseInputIcon } from "./base/BaseInputIcon.tsx";
import { BaseInputLabel } from "./base/BaseInputLabel.tsx";

interface Props {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export const PasswordInput: FC<Props> = ({ register, errors }) => {
  const inputId = useId();
  const errorLabelId = useId();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <Container>
        <BaseInputContainer>
          <BaseInputLabel htmlFor={inputId} hidden={password.length > 0}>
            Password
          </BaseInputLabel>
          <BaseInputIcon Icon={() => <LockIcon />} />
          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            id={inputId}
            onChange={handlePasswordChange}
            type={passwordVisible ? "text" : "password"}
            autoComplete="current-password"
            aria-describedby={errorLabelId}
          />
        </BaseInputContainer>
        <HideToggleButtonContainer>
          <HideToggleButton
            type="button"
            role="switch"
            aria-checked={passwordVisible}
            onClick={handleTogglePasswordVisibility}
            aria-label="Toggle password visibility"
          >
            {passwordVisible ? "Hide" : "Show"}
          </HideToggleButton>
        </HideToggleButtonContainer>
      </Container>
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => (
          <BaseInputErrorLabel id={errorLabelId}>{message}</BaseInputErrorLabel>
        )}
      />
    </>
  );
};

const Input = styled(BaseInput)`
  padding-right: 60px;
`;

const HideToggleButton = styled.button`
  color: ${PRIMARY_COLOR};
  cursor: pointer;
  min-width: 60px;
  max-width: 60px;
  background-color: transparent;
  border: none;
  user-select: none;
  display: flex;
  justify-content: center;
`;

const HideToggleButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Container = styled.div`
  position: relative;
`;
