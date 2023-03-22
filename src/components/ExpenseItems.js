import './ExpenseItem.css'
function ExpenseItem(props) {
    return (
    <div className='expense-item'>
        <div>{props.date.toISOString()}</div>
    
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
        </div>
        <div className='expense-item__price'>Rs.{props.amount}</div>
        <div className='expense-item__location'>{props.location}</div>
        
</div>
   
      

    )
}

export default ExpenseItem;