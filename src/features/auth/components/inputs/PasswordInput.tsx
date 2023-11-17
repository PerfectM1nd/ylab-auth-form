import { LockIcon } from "@/features/auth/components/icons/LockIcon.tsx";

import { InputLabel } from "./base/InputLabel.tsx";
import { InputLabelIcon } from "./base/InputLabelIcon.tsx";
import { TextInput } from "./base/TextInput.tsx";

export const PasswordInput = () => {
  return (
    <InputLabel>
      <InputLabelIcon Icon={() => <LockIcon />} />
      <TextInput type="password" autoComplete="current-password" />
    </InputLabel>
  );
};
