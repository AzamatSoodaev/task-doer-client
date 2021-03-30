import { useEffect } from "react";

const ErrorContainer = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <div className="text-center mt-4">{children}</div>;
};

export default ErrorContainer;
