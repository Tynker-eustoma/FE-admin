import { createBrowserRouter, redirect } from "react-router-dom";
import Menu from "../views/guessing";
import Login from "../views/login";
import Layout from "../views/layout";
import Counting from "../views/counting";
import Dashboard from "../views/dashboard"
import Learning from "../views/learning"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      const access_token = localStorage.access_token;
      if (!access_token) throw redirect("/login");
      return null;
    },
    children: [
      {
        path: "",
        element: <Counting />,
      },
      {
        path: "guessing",
        element: <Menu />,
      },
      {
        path: "learning",
        element: <Learning/>,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    loader: () => {
      const access_token = localStorage.access_token;
      if (access_token) throw redirect("/");
      return null;
    },
  },
]);

export default router;
