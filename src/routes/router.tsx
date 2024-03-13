import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { adminPath } from "./admin.router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminPath,
  },
  {
    path: "/faculty",
    element: <App />,
    children: adminPath,
  },
  {
    path: "/student",
    element: <App />,
    children: adminPath,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
