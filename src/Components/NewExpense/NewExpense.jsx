import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.setExpenses((prevExpenses) => [...prevExpenses, expenseData]);
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        setExpenses={props.setExpenses}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
