import React, { FC, useId, useRef } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

import { FormValues } from "@/features/auth";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/theme";

interface Props {
  register: UseFormRegister<FormValues>;
  submitFormCallback: () => void;
  value: boolean;
}

export const RememberMeInput: FC<Props> = ({
  register,
  submitFormCallback,
  value,
}) => {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { ref, ...rest } = register("rememberMe");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
    if (event.key === " ") {
      inputRef.current?.click();
    }
    if (event.key === "Enter") {
      submitFormCallback();
    }
  };

  return (
    <Container>
      <Input
        {...rest}
        id={inputId}
        ref={(e) => {
          ref(e);
          inputRef.current = e;
        }}
        type="checkbox"
      />
      <CheckboxLabel
        htmlFor={inputId}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-checked={value}
        role="checkbox"
      >
        <span>
          <svg viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <LabelText>Remember me</LabelText>
      </CheckboxLabel>
    </Container>
  );
};

const Container = styled.div``;

const LabelText = styled.span`
  margin-left: 8px;
  font-size: 16px;
  color: ${SECONDARY_COLOR};
  white-space: nowrap;
`;

const Input = styled.input`
  display: none;

  & > span {
    width: 12px;
    height: 10px;
  }

  &:checked + label {
    span {
      &:first-child {
        background: ${PRIMARY_COLOR};
        border-color: ${PRIMARY_COLOR};
        svg {
          stroke-dashoffset: 0;
        }
      }
    }
  }
`;

const CheckboxLabel = styled.label`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
    &:first-child {
      position: relative;
      width: 18px;
      height: 18px;
      border-radius: 3px;
      transform: scale(1);
      vertical-align: middle;
      border: 1px solid #9098a9;
      transition: all 0.2s ease;
      svg {
        position: absolute;
        top: 2px;
        left: 1px;
        fill: none;
        stroke: #ffffff;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 16px;
        stroke-dashoffset: 16px;
        transition: all 0.3s ease;
        transition-delay: 0.1s;
        transform: translate3d(0, 0, 0);
      }
    }
    &:last-child {
      padding-left: 8px;
    }
  }
  &:hover span:first-child {
    border-color: ${PRIMARY_COLOR};
  }
`;
