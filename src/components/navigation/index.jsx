
import { createBrowserRouter } from "react-router-dom";
import { tokenize, ValidateToken } from "../api/Authorize";
import Invalid from "../screens/Invalid/Invalid";
import Landing from "../screens/Landing/Landing";
import Tops from "../screens/Tops/Tops";
import getData from "../api/GetData";


const router = createBrowserRouter([
  {
    path : "/",
    element : <Landing/>

      // <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />
  },
  {
    path : "/v",
    element : <ValidateToken/>,
    loader : tokenize,
    errorElement: <Invalid/>
  },
  {
    path : "/tops",
    element : <Tops/>,
    loader : getData,
    errorElement : <Invalid/>
  },
  {
    path:"/invalid",
    element: <Invalid/>
  },
])

export default router