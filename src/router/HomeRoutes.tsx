import { Home } from "../compnents/pages/Home";
import { Page404 } from "../compnents/pages/Page404";
import { Setting } from "../compnents/pages/Setting";
import { UserManagement } from "../compnents/pages/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
