import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import NotFoundError from "./pages/Error/404";
import Unauthorized from "./pages/Error/401";
import Welcome from "./pages/Welcome";
import Tasks from "./pages/Tasks";

import DefaulLayout from "./layouts/DefaultLayout/index";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user"));

    if (_user && _user.accessToken) {
      setUser(_user);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/:username/tasks"]}>
          <DefaulLayout auth={user}>
            <ConditionalRoots user={user} />
          </DefaulLayout>
        </Route>

        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="*" component={NotFoundError} />
      </Switch>
    </Router>
  );
}

function ConditionalRoots({ user }) {
  if (user) {
    return (
      <>
        <Route exact path="/">
          <Redirect to={`/${user.username}/tasks`} />
        </Route>
        <Route exact path="/:username/tasks" component={Tasks} />
      </>
    );
  }
  return (
    <>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/:username/tasks" component={Unauthorized} />
    </>
  );
}
