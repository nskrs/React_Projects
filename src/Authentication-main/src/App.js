import { Routes, Route, useNavigate , Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./components/Store/auth-context";

function App() {
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
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={authCtx.isLoggedIn ? <UserProfile /> : <Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
