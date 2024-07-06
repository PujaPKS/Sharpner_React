import './ExpenseDate.css'
import ExpenseItem from './ExpenseItem';

function Expenses() {

    //using js map for iterating on array for increasing reusability
    const expenses = [
        { id: "1", date: new Date(2023, 7, 15), location: "Bangalore" , title: "Insurance", price: 100 },
        { id: "2", date: new Date(2023, 3, 25), location: "Delhi" , title: "Book", price: 10 },
        { id: "3", date: new Date(2023, 10, 11), location: "Hyderabad" , title: "Pen", price: 1 },
        { id: "4", date: new Date(2023, 1, 14), location: "Mumbai" , title: "Laptop", price: 200 },
    ]; 

  return (
    <div>
        
        {/* on expenses array map is used for getting values from the array using js */}
        {expenses.map((expense, index) => {
            return(
            <ExpenseItem
                key = {expense.id}
                date = {expense.date}
                location = {expense.location}
                title = {expense.title}
                price = {expense.price}
            />
            )
        })}
        
    </div>
  )
}

export default Expenses