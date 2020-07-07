import * as React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../routes/index";

import { Nav } from "../components/organisms/Nav";
import { AppTemplate } from "../templates/AppTemplate";
import { ExpensesPage } from "./ExpensesPage";
import SchedulerPage from "./SchedulerPage";

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Nav />
      <AppTemplate>
        <Switch>
          <Route
            exact
            path={routes.home}
            render={() => <Redirect to={routes.scheduler} />}
          />
          <Route exact path={routes.scheduler} component={SchedulerPage} />
          <Route exact path={routes.expenses} component={ExpensesPage} />
        </Switch>
      </AppTemplate>
    </HashRouter>
  );
};
