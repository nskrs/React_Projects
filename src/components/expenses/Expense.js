import React, { useState } from 'react';
import "./ExpenseDetails.css";
import ExpensesFilter from "./ExpensesFilter";
// import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails";
import Card from "./../UI/Card";
import ExpensesList from "./ExpensesList"

const ExpenseItem = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <ExpensesChart expenses={filteredExpenses} /> */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default ExpenseItem;