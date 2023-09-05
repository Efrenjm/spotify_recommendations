
import { createBrowserRouter } from "react-router-dom";
import { tokenize, ValidateToken } from "../api/Authorize";
import Invalid from "../screens/Invalid/Invalid";
import Landing from "../screens/Landing/Landing";
import Tops from "../screens/Tops/Tops";


const router = createBrowserRouter([
  {
    path:"/",
    element: <Landing/>

      // <Route path="/login" element={user ? <Navigate to="/" replace /> :  <Login />}  />
  },
  {
    path:"/v",
    element: <ValidateToken/>,
    loader: tokenize
  },
  {
    path:"/tops",
    element: <Tops/>
  },
  {
    path:"/invalid",
    element: <Invalid/>
  },
])

export default router