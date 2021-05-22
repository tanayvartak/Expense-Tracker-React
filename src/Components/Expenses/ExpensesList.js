import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          Date={expense.date}
          Title={expense.title}
          Price={expense.amount}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
