import { Navigate, useLoaderData } from "react-router-dom";

//  Redirection to the proper page
const ValidateToken = () => {
  const data = useLoaderData();
  const token = data.access_token;

  if (token) {
    localStorage.setItem("access_token", token);
    return <Navigate replace to="/tops" />;
  } else {
    return <Navigate replace to="/invalid" />;
  }
};

export { ValidateToken };
