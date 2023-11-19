import { ErrorMessage } from "@hookform/error-message";
import { FC, useId } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { FormValues } from "@/features/auth";

import { EmailIcon } from "../icons/EmailIcon.tsx";

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

export const EmailInput: FC<Props> = ({ register, errors, value }) => {
  const inputId = useId();
  const errorLabelId = useId();

  return (
    <BaseInputContainer>
      <BaseInputLabel htmlFor={inputId} hidden={!!value}>
        Email
      </BaseInputLabel>
      <BaseInputIcon Icon={() => <EmailIcon />} />
      <BaseInput
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /.+@.+\..+/i,
            message: "Enter a valid email address",
          },
        })}
        id={inputId}
        autoComplete="on"
        aria-describedby={errorLabelId}
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => (
          <BaseInputErrorLabel id={errorLabelId}>{message}</BaseInputErrorLabel>
        )}
      />
    </BaseInputContainer>
  );
};
