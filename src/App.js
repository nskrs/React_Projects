import React,{useContext} from 'react';

import Login from './login-apge/components/Login/Login';
import Home from './login-apge/components/Home/Home';
import MainHeader from './login-apge/components/MainHeader/MainHeader';
import AuthContext from './login-apge/components/store/auth-context';

function App() {

  const ctx = useContext(AuthContext)
 
  return (
    <React.Fragment>
     
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;