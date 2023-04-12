import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutPage from "./components/Ecom/Routers/AboutPage";
import Store  from "./components/Ecom/store/Store";

const router = createBrowserRouter([
  { path: "/", element: <Store /> },
  { path: "/about", element: <AboutPage /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;