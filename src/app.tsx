import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CriarViagemPagina } from "./pages/criar-viagem";
import { PaginaDetalheViagem } from "./pages/detalhes-viagem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CriarViagemPagina/>,
  },
  {
    path: "/trips/:tripId",
    element: <PaginaDetalheViagem/>,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
