import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Services from "@/pages/Services/Services";
import Portfolio from "@/pages/Portfolio/Portfolio";
import Careers from "@/pages/Careers/Careers";


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
      {
        path: "portfolio",
        element: <Portfolio />,
      },
       
      {
        path: "careers",
        element: <Careers />,
      }
    ],
  },
]);

export default router;