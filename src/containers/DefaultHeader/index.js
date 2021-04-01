import Logo from "../../assets/to-do.svg";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import { Dropdown, DropdownButton, Navbar } from "react-bootstrap";
import { useState } from "react";
import BackgroundColor from "./BackgroundColor";
import { useEffect } from "react";

const Header = ({ user }) => {
  const [show, setShow] = useState(false);
  const [navbarColor, setNavbarColor] = useState({
    backgroundColor: "#343a40",
  });

  useEffect(() => {
    const customUI = JSON.parse(localStorage.getItem("customUi"));
    if (customUI) {
      document.body.style.backgroundColor = customUI.backgroundColor;
      setNavbarColor({ backgroundColor: "rgba(0,0,0,.15)" });
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar style={navbarColor} variant="dark">
      <div className="container justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="App logo"
          />
          Task Doer
        </Navbar.Brand>

        <ul className="navbar-nav">
          {user ? (
            <li className="nav-item">
              <DropdownButton
                id="dropdown-basic-button"
                variant="outline-light"
                title={user.username}
              >
                <Dropdown.Item href="/profile:id">
                  See your profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleShow}>
                  Change Background
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/signin" onClick={AuthService.logout}>
                  Log out
                </Dropdown.Item>
                <BackgroundColor
                  show={show}
                  handleClose={handleClose}
                  setNavbarColor={setNavbarColor}
                />
              </DropdownButton>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item border rounded">
                <Link className="nav-link active" to="/signin">
                  Signin
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </Navbar>
  );
};

export default Header;
