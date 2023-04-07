import React, { Fragment } from 'react'
import Header from './components/Restaurant/Layout/Header';
import Meals from './components/Restaurant/Meals/Meals';

function App () {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  )
}

export default App;
