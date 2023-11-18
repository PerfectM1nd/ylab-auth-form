import fetchMock from "fetch-mock";

import { FormValues } from "@/features/auth";

const API_URL = "https://api.com";
const LOGIN_URL = `${API_URL}/login`;

fetchMock.mock(
  LOGIN_URL,
  {
    status: 200,
    body: {
      success: true,
      data: {
        accessToken: "TEST",
        refreshToken: "TEST",
      },
    },
  },
  { delay: 1000 },
);

export const login = async (data: FormValues) => {
  const res = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  if (body.success) {
    alert(JSON.stringify(body.data));
  }
};
