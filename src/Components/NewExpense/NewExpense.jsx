import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [clicked, setClicked] = useState(false);
  const addExpenseHandler = () => {
    setClicked(true);
  };
  const hideFormHandler = () => {
    setClicked(false);
  };

  return (
    <div className="new-expense">
      {clicked ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideForm={hideFormHandler}
        />
      ) : (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
