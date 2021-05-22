import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.Date} />
      <div className="expense-item__description">
        <h2>{props.Title}</h2>
        <div className="expense-item__price">Rs.{props.Price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
