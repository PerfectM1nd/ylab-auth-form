import { EmailIcon } from "../icons/EmailIcon.tsx";

import { InputLabel } from "./base/InputLabel.tsx";
import { InputLabelIcon } from "./base/InputLabelIcon.tsx";
import { TextInput } from "./base/TextInput.tsx";

export const EmailInput = () => {
  return (
    <InputLabel>
      <InputLabelIcon Icon={() => <EmailIcon />} />
      <TextInput type="email" autoComplete="on" />
    </InputLabel>
  );
};
