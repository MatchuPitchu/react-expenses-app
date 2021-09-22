// this import is no longer needed in modern React version
// import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'E-Bike',
      amount: 4799,
      date: new Date(2020, 7, 14), // create date obj
    },
    { id: 'e2', title: 'Laptop', amount: 1799, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Table',
      amount: 300,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
