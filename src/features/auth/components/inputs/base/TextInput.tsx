import styled from "styled-components";

import { TEXT_PRIMARY_COLOR } from "@/theme";

export const TextInput = styled.input`
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: rgba(255 255 255 / 0.6);
  color: ${TEXT_PRIMARY_COLOR};
  font-size: 20px;
  line-height: 24px;
  padding-left: 50px;
  padding-right: 20px;
  letter-spacing: 1px;
`;
