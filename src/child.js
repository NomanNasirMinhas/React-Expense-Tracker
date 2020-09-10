import React, {useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TransactionContext} from './transContext';


function Child() {
    let {transactions, addTransaction} = useContext(TransactionContext)
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) =>{
        event.preventDefault();
        if(Number(newAmount) == 0){
            alert("Please Enter Valid amount");
            return false;
        }

        addTransaction({
            desc: newDesc,
            amount: Number(newAmount)
        });
    }

    const getIncome = ()=>{
        let income = 0;
        for (var i=0; i<transactions.length;i++)
        {
            if(transactions[i].amount > 0)
            income +=transactions[i].amount;
        }
        return income;
    }

    const getExpense = ()=>{
        let expense = 0;
        for (var i=0; i<transactions.length;i++)
        {
            if(transactions[i].amount < 0)
            expense +=transactions[i].amount;
        }
        return expense;
    }

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>

        <h3>Your Balance <br/> {getIncome() + getExpense()}</h3><hr/>

      <div className="expense-container">
        <h3>Your Income <br/> {getIncome()}</h3>
        <h3>Your Expense <br/> {-getExpense()}</h3>
      </div>

      <h3>History</h3>
      <hr/>
      <ul className="transaction-list">
          {transactions.map((transObj, ind) =>{
              return(
                  <li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                  </li>
              )
          })}

      </ul>

      <h3>Add new Transaction</h3>
      <hr/>

      <form className="transaction-form" onSubmit={handleAddition}>
          <label>Enter Description<br/>
            <input type="text" placeholder="Please Enter Description Here" onChange={(ev)=>setDesc(ev.target.value)} required/>
          </label><br/>

          <label>Enter Amount<br/>
            <input type="number" placeholder="Please Enter Amount Here" onChange={(ev)=>setAmount(ev.target.value)} required/>
          </label><br/>

          <input type="submit" value="Add Transaction"/>
      </form>
    </div>
  );
}

export default Child;
