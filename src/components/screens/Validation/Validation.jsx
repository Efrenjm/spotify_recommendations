// import { tokenize } from "../../api/Authorize"
import { Navigate, useLoaderData } from "react-router-dom";
import { Title } from "@atoms/Text/Text";

const ValidateToken = () => {
  const token = useLoaderData();
  localStorage.setItem("access_token", token);

  if (token) {
    return <Navigate replace to="/tops" />;
  } else {
    const urlParams = new URLSearchParams(window.location.search);
    const err = urlParams.get("error");
    if (err) {
      return <Navigate replace to="invalid" />;
    } else {
      // tokenize()
    }
  }
};

function Validation() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title>Validating</Title>
    </div>
  );
}

export { ValidateToken, Validation };
