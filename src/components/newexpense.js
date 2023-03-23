import ExpenseDate from './newexdate';
import './newexpense.css'

function ExpenseDetails(props){
    return(
    <div className='expenses'>
      < ExpenseDate date ={props.date}/>
        <div className='expense-item__description'>
        <h2>{props.title}</h2></div>
        <div className='expense-item__price'>Rs.{props.amount}</div>
    </div>
    )
}
export default ExpenseDetails;