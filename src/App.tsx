import { createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import Portifolio from "./pages/Portifolio/Portifolio.tsx";
import Sobre from "./pages/Sobre/Sobre.tsx";
import Contato from "./pages/Contato/Contato.tsx";


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/portfolio",
        element: <Portifolio />
      },
      {
        path: "/sobre",
        element: <Sobre />
      },
      {
        path: "/contato",
        element: <Contato />
      }
    ]
  }
])

export { router }