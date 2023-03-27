import ExpenseItem from './components/expenses/ExpenseDetails';
import ExpensesFilter from './ExpensesFilter';
function newexpenseapp() {
  const expenses = [
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
const newexpense=[];
  for(let i=0;i<expenses.length;i++)
  {
    newexpense.push(<ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date} location={expenses[i].LocationOfExpenditure}></ExpenseItem>)
  }
  return (
    <div>
      <h2>Let's get started</h2>
      {newexpense}
    </div>
  );
}
export default newexpenseapp;

// import Counter from "./components/Basic React/Counter";
// import Fruits from "./components/Basic React/Fruits";
// function App() {
  
//   return (
//     <div>
//       {/* <Counter/> */}
//    <Fruits/>
//     </div>
//   );
// }
// export default App;