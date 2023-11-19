import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

import { FormValues } from "@/features/auth";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/theme";

interface Props {
  register: UseFormRegister<FormValues>;
}

export const RememberMeInput: FC<Props> = ({ register }) => {
  return (
    <Label>
      <Input {...register("rememberMe")} type="checkbox" />
      Remember me
      <CheckboxSprite viewBox="0 0 12 10" aria-hidden="true" focusable="false">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
      </CheckboxSprite>
    </Label>
  );
};

const Input = styled.input`
  margin-right: 8px;
  height: 20px;
  width: 20px;
  border-radius: 5px;
  appearance: none;
  border: none;

  &:checked + svg {
    background-color: ${PRIMARY_COLOR};
    stroke-dashoffset: 0;
  }
`;

const CheckboxSprite = styled.svg`
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background-color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
  fill: none;
  stroke: #ffffff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  transition: all 0.2s ease;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Label = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 5px;
  font-size: 16px;
  color: ${SECONDARY_COLOR};
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
`;
