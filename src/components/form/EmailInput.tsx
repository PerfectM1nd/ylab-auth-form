import { useId } from "react";

import { InputLabelBase } from "@/components/form/base/InputLabelBase.tsx";
import { TextInputBase } from "@/components/form/base/TextInputBase.tsx";

export const EmailInput = () => {
  const id = useId();

  return (
    <>
      <InputLabelBase htmlFor={id}>Email</InputLabelBase>
      <TextInputBase id={id} type="email" autoComplete="on" />
    </>
  );
};
