import loadable from "@loadable/component";

// Components
export const Loading = loadable(() => import("./components/Loading"));

// Containers
export const DefaultHeader = loadable(() =>
  import("./containers/DefaultHeader")
);
export const ErrorContainer = loadable(() =>
  import("./containers/ErrorContainer")
);

// Pages
export const Welcome = loadable(() => import("./pages/Welcome"));
export const TasksView = loadable(() => import("./pages/Tasks"));
export const AddTask = loadable(() => import("./pages/Tasks/AddTask"));
export const Tasks = loadable(() => import("./pages/Tasks/Tasks"));

// Auth Pages
export const Login = loadable(() => import("./pages/Authentication/Login"), {
  fallback: <Loading />,
});
export const Register = loadable(
  () => import("./pages/Authentication/Register"),
  {
    fallback: <Loading />,
  }
);

// Errors
export const NotFoundError = loadable(() => import("./pages/Error/404"), {
  fallback: <Loading />,
});
export const Unauthorized = loadable(() => import("./pages/Error/401"));

// Layouts
export const DefaulLayout = loadable(() => import("./layouts/DefaultLayout"), {
  fallback: <Loading />,
});
