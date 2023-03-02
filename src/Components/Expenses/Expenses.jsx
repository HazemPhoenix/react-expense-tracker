import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
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
  );
};

export default Expenses;
