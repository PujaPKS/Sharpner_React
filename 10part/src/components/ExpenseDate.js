import './ExpenseDate.css'

//here now passing the dates function seperately
function ExpenseDate(props){

    const monthsArr = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    const month = monthsArr[props.date.getMonth()];
    const year = props.date.getFullYear();
    const date = props.date.getDate();
    
    return(
        <div className ='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__date'>{date}</div>
        </div>
    )
}

export default ExpenseDate;