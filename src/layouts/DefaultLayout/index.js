import { Container } from "react-bootstrap";
import { DefaultHeader } from "../../internal";

const DefaultLayout = ({ children, auth }) => {
  return (
    <>
      <DefaultHeader user={auth} />
      <Container>{children}</Container>
    </>
  );
};

export default DefaultLayout;
