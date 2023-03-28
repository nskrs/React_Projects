import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    
      id: 'e1',
      title: 'food',
      amount: 10,
      date: new Date(2023, 3, 22),
      LocationOfExpenditure: 'ABC',
    },
    { id: 'e2', title: 'petrol', 
    amount: 100, 
    date: new Date(2023, 3, 22),
    LocationOfExpenditure:'HNJ',
  },
    {
      id: 'e3',
      title: 'movie',
      amount: 200,
      date: new Date(2023, 3, 28),
      LocationOfExpenditure: 'XYZ',
    },
    {
      id: 'e4',
      title: 'Other',
      amount: 450,
      date: new Date(2023, 3, 24),
      LocationOfExpenditure: 'DEF',
    },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;