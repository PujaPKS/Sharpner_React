import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
  
  return (
    <Card className='expense-item'>
      {/* <div>{props.date.toISOString()}</div> */}

      <ExpenseDate date = {props.date}/>
      
      <div className='expense-item__location'>{props.location}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'> ${props.price}</div>
      </div>
      
    </Card>
  )
}

export default ExpenseItem