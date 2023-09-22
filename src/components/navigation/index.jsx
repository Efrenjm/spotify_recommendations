import { createBrowserRouter } from "react-router-dom";
import { ValidateToken } from "@api/Authorize";
import { tokenize } from "@api/AuthFunctions";
import { getData } from "@api/GetData";
import Invalid from "@screens/Invalid/Invalid";
import Landing from "@screens/Landing/Landing";
import Tops from "@screens/Tops/Tops";
import Header from "@template/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/v",
    element: <ValidateToken />,
    loader: tokenize,
    errorElement: <Invalid />,
  },
  {
    path: "/tops",
    element: <Tops />,
    loader: getData,
    // errorElement : <Invalid/>
  },
  {
    path: "/invalid",
    element: <Invalid />,
  },
  {
    path: "/testing",
    element: <Header />,
  },
]);

export default router;
