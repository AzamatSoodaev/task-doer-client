import Logo from "../assets/to-do.svg";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

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
          {!user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  Signin
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <a
                href="/signin"
                className="nav-link"
                onClick={AuthService.logout}
              >
                Log out
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
