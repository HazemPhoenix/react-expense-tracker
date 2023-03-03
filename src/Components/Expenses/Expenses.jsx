import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

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
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
