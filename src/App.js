import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import TasksView from "./components/pages/Tasks/TasksView";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import { useEffect, useState } from "react";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import Welcome from "./components/pages/Welcome/Welcome";

export default function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggeIn] = useState(false);

  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user"));

    if (_user && _user.accessToken) {
      setUser(_user);
      setLoggeIn(true);
    }
  }, []);

  return (
    <Router>
      <Header user={user} />
      <Switch>
        {loggedIn && (
          <Route exact path={["/", "/:username/tasks"]}>
            <Route exact path="/">
              <Redirect to={`/${user.username}/tasks`} />
            </Route>
            <Route exact path="/:username/tasks" component={TasksView} />
          </Route>
        )}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}
