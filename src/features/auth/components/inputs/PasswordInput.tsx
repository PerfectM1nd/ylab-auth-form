import { ErrorMessage } from "@hookform/error-message";
import { FC, useId, useState } from "react";
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
  value: string;
}

export const PasswordInput: FC<Props> = ({ register, errors, value }) => {
  const inputId = useId();
  const errorLabelId = useId();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <Container>
      <BaseInputContainer>
        <BaseInputLabel htmlFor={inputId} hidden={!!value}>
          Password
        </BaseInputLabel>
        <BaseInputIcon Icon={() => <LockIcon />} />
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Minimum length - 8 characters",
            },
          })}
          id={inputId}
          // onChange={handlePasswordChange}
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
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => (
          <BaseInputErrorLabel id={errorLabelId}>{message}</BaseInputErrorLabel>
        )}
      />
    </Container>
  );
};

const Input = styled(BaseInput)`
  padding-right: 60px;
`;

const HideToggleButton = styled.button`
  color: ${PRIMARY_COLOR};
  cursor: pointer;
  width: 60px;
  background-color: transparent;
  border: none;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 10px;

  &:active {
    background-color: rgba(0, 0, 0, 0.06);
  }
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
