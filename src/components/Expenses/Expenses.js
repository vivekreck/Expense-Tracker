import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpenseChart';

import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No expenses Found.</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        })
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                {expensesContent}
            </Card>
        </div>
    );
};

export default Expenses;
