import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  Welcome,
  Unauthorized,
  TasksView,
  Login,
  Register,
  NotFoundError,
  DefaulLayout,
} from "./internal";

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
        <Route exact path="/:username/tasks" component={TasksView} />
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
