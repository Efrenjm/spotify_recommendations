
import { createBrowserRouter } from "react-router-dom";
import App from "../../App"
import Tops from "../screens/Tops/Tops";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>
    },
    {
        path:"/tops",
        element: <Tops/>
    }
])

export default router