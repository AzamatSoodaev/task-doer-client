import Logo from "../../assets/to-do.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    document.title = "Task Doer";
  }, []);

  return (
    <div className="jumbotron text-center px-4 py-5">
      <img src={Logo} alt="logo" width="132" />
      <h1>Task Doer</h1>
      <p className="lead">a new era of task doing</p>
      <Link className="btn btn-primary" to="/signup">
        Experience now
      </Link>
    </div>
  );
};

export default Welcome;
