import React from "react";
import "./ExpensesFilter.css";
const ExpensesFilter = ({ filteredYear, onYearUpdate }) => {
  const filterChangeHandler = (e) => {
    onYearUpdate(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={filterChangeHandler} value={filteredYear}>
          <option value="2022">2023</option>
          <option value="2021">2024</option>
          <option value="2020">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
