import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/client/homePage/homeComponents/Home";












const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "Home", element: <Home /> },
            
            
        ],
    },
]);

export default routers;
