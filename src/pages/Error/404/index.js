import loadable from "@loadable/component";

const ErrorContainer = loadable(() =>
  import("../../../containers/ErrorContainer")
);

const PageNotFound = () => {
  return (
    <ErrorContainer title="Page not found | Task Doer">
      <h1 className="display-1">404</h1>
      <p className="lead">This requested URL was not found on this server.</p>
    </ErrorContainer>
  );
};

export default PageNotFound;
