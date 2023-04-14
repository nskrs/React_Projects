import { Routes, Route,useNavigate , Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import AboutPage from "./Components/Routers/AboutPage";
import Store from "./Components/Routers/Store";
import AuthContext from "./Components/Authentication/auth-context";
import Home from "./Components/Routers/Home";
import Contact from "./Components/Contact";
import ProductPage from "./Components/ProductPages/ProductPage";
import Layout from "./Components/MainNavigation/Layout";
import AuthForm from "./Components/Authentication/auth-form";

const App = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      navigate("/auth");
    }
  }, [authCtx.isLoggedIn]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/store" element={authCtx.isLoggedIn ? <Store/> : <Navigate to="/" />} />
        <Route path="/about" element={authCtx.isLoggedIn ? <AboutPage/> : <Navigate to="/" />} />
        <Route path="/home" element={authCtx.isLoggedIn ? <Home/> : <Navigate to="/" />} />
        <Route path="/contact" element={authCtx.isLoggedIn ? <Contact/> : <Navigate to="/" />} />
        <Route path="/product/:id" element={authCtx.isLoggedIn ? <ProductPage/> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;
