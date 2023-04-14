import { Routes, Route } from "react-router-dom";

import AboutPage from "./Components/Routers/AboutPage";
import Store from "./Components/Routers/Store";

import Home from "./Components/Routers/Home";
import Contact from "./Components/Contact";
import ProductPage from "./Components/ProductPages/ProductPage";
import Layout from "./Components/MainNavigation/Layout";
import AuthForm from "./Components/Authentication/auth-form";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
