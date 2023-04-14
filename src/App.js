import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutPage from "./Components/Routers/AboutPage";
import Store from "./Components/Store";

import Home from "./Components/Home";
import Contact from "./Components/Contact";

const router = createBrowserRouter([
  { path: "/", element: <Store /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/home", element: <Home /> },
  { path: "/contact", element: <Contact /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
