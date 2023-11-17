import { useId } from "react";
import styled from "styled-components";

import { PRIMARY_COLOR, TEXT_PRIMARY_COLOR } from "@/theme";

export const CheckboxInput = () => {
  const id = useId();
  return (
    <Container>
      <Input type="checkbox" id={id} />
      <CheckboxLabel htmlFor={id}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
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
  color: ${TEXT_PRIMARY_COLOR};
`;

const Input = styled.input`
  display: none;
  &:checked + label {
    span {
      &:first-child {
        background: ${PRIMARY_COLOR};
        border-color: ${PRIMARY_COLOR};
        svg {
          stroke-dashoffset: 0;
        }
        &:before {
          transform: scale(3.5);
          opacity: 0;
          transition: all 0.6s ease;
        }
      }
    }
  }
`;

const CheckboxLabel = styled.label`
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
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
        top: 4px;
        left: 3px;
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
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        background: ${PRIMARY_COLOR};
        display: block;
        transform: scale(0);
        opacity: 1;
        border-radius: 50%;
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
