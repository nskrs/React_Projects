import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseDetails.css';

const ExpenseDetails = (props) =>{
  return(
  <Card className='expenses'>
    < ExpenseDate date ={props.date}/>
      <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>Rs.{props.amount}</div>
      </div>
  </Card>
  );
}
export default ExpenseDetails;