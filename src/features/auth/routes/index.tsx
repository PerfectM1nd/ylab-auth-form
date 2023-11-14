import { Route, Routes } from "react-router-dom";

import { Login } from "./Login.tsx";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
