import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date_year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
