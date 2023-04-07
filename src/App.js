import React, { Fragment } from 'react'

import Header from './components/Restaurant/Layout/Header';
import Meals from './components/Restaurant/Meals/Meals';
import Cart from './components/Restaurant/Cart/Cart'

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
