import loadable from "@loadable/component";

const ErrorContainer = loadable(() =>
  import("../../../containers/ErrorContainer")
);

const Unauthorized = () => {
  return (
    <ErrorContainer title="Unauthorized access | Task Doer">
      <h1 className="display-1">401</h1>
      <p className="lead">Unauthorized</p>
      <p>Access to this resource is denied.</p>
    </ErrorContainer>
  );
};

export default Unauthorized;
