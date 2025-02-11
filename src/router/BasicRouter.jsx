import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Banner from "../pages/client/homepage/homepagecomponents/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {path: "Home", element:<Banner/>},
    ]
  }

]);

export default router;
