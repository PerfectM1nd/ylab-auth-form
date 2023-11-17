import { useRoutes } from "react-router-dom";

import { AuthRoutes } from "@/features/auth";

export const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <AuthRoutes />,
    },
  ]);

  return <>{element}</>;
};
