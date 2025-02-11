import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/client/homePage/homeComponents/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {path: "Home", element:<Home/>},
    ]
  }

]);

export default router;
