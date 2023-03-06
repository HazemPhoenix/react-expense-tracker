import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear)
  );

  const yearUpdateHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearUpdate={yearUpdateHandler}
          filteredYear={filteredYear}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
