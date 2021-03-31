import { Container } from "react-bootstrap";
import loadable from "@loadable/component";

const DefaultHeader = loadable(() => import("../../components/Header/index"));

const DefaultLayout = ({ children, auth }) => {
  return (
    <>
      <DefaultHeader user={auth} />
      <Container>{children}</Container>
    </>
  );
};

export default DefaultLayout;
