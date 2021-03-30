import Logo from "../../assets/to-do.svg";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Header = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container justify-content-between">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="App logo"
          />
          Task Doer
        </Link>

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
                <Dropdown.Item href="/signin" onClick={AuthService.logout}>
                  Log out
                </Dropdown.Item>
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
    </nav>
  );
};

export default Header;
