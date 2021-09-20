import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ items }) => {
  return (
    <div className='expenses'>
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
