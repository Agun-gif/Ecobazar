import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/client/homePage/homeComponents/Home.jsx";  // Ensure capital H in Home












const router = createBrowserRouter([
  {
      path: "/",
      element: <MainLayout />,
      children: [
          { path: "/", element: <Home /> }, // Make the Home page accessible at the root URL '/'
      ],
  },
]);

export default router;

