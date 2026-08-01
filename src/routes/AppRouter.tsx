import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Services from "@/pages/Services/Services";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "our-services",
        element: <Services />,
      },
    ],
  },
]);

export default router;