import styled from "styled-components";

import { SECONDARY_COLOR } from "@/theme";

export const BaseInput = styled.input`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: rgba(255 255 255 / 0.7);
  color: ${SECONDARY_COLOR};
  font-size: 20px;
  line-height: 24px;
  padding-left: 50px;
  padding-right: 20px;
  letter-spacing: 1px;

  &::placeholder {
    font-weight: normal;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: ${SECONDARY_COLOR};
  }

  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${SECONDARY_COLOR};
  }

  &[type="password"] {
    font-family: sans-serif;
    font-weight: bold;
    speak: none;
    font-size: 25px;
    text-transform: none;
    text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3);
    letter-spacing: 2px;
  }
`;
