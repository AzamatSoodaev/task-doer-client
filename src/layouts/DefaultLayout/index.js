import { Container } from "react-bootstrap";
import Header from "../../components/Header/index";

const DefaultLayout = ({ children, auth }) => {
  return (
    <>
      <Header user={auth} />
      <Container>{children}</Container>
    </>
  );
};

export default DefaultLayout;
