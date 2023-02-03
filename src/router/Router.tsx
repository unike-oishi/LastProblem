import { VFC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../compnents/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../compnents/pages/Page404";
export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => {
          return (
            <Switch>
              {HomeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
            </Switch>
          );
        }}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
