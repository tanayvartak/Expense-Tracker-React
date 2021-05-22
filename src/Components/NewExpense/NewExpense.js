import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveNewExpense(expenseData);
    setIsEditable(false);
  };

  const openEditor = () => {
    setIsEditable(true);
  }

  const closeEditor = () => {
    setIsEditable(false);
  }

  return (
    <div className="new-expense">
      {!isEditable && (
        <button onClick={openEditor}>Add Expense</button>
      )}
      {isEditable && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeEditor} />}
      
    </div>
  );
};

export default NewExpense;
