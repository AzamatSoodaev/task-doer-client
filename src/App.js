import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useEffect, useState } from "react";
import loadable from "@loadable/component";

const Loading = loadable(() => import("./components/Loading"));
const Unauthorized = loadable(() => import("./pages/Error/401"));
const Welcome = loadable(() => import("./pages/Welcome"));
const Tasks = loadable(() => import("./pages/Tasks"));
const Login = loadable(() => import("./pages/Authentication/Login"), {
  fallback: <Loading />,
});

const Register = loadable(() => import("./pages/Authentication/Register"), {
  fallback: <Loading />,
});

const NotFoundError = loadable(() => import("./pages/Error/404"), {
  fallback: <Loading />,
});

const DefaulLayout = loadable(() => import("./layouts/DefaultLayout"), {
  fallback: <Loading />,
});

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
