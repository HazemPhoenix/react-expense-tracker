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

  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm(true);
  };
  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideForm={hideFormHandler}
        />
      )}
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
