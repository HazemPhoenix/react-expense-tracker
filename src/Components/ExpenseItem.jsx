import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Feb. 22nd 2023</div>
      <div className="expense-item__description">
        <h2>Mechanical Keyboard</h2>
        <div className="expense-item__price">$50</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
