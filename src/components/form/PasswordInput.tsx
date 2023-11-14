import { useId } from "react";

import { InputLabelBase } from "@/components/form/base/InputLabelBase.tsx";
import { TextInputBase } from "@/components/form/base/TextInputBase.tsx";

export const PasswordInput = () => {
  const id = useId();

  return (
    <>
      <InputLabelBase htmlFor={id}>Password</InputLabelBase>
      <TextInputBase id={id} type="password" autoComplete="current-password" />
    </>
  );
};
