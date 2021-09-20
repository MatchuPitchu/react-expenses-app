import Expenses from './components/Expenses';

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
