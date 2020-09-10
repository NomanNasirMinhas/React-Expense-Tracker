import React, {useContext, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TransactionContext} from './transContext';


function Child() {
    let {transactions, addTransaction, updateTransaction, deleteTransaction} = useContext(TransactionContext)
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) =>{
        event.preventDefault();
        if(Number(newAmount) == 0){
            alert("Please Enter Valid amount");
            return false;
        }

        addTransaction({
            id: transactions.length + 1,
            desc: newDesc,
            amount: Number(newAmount)
        });
    }

    const updateHandler = (event) =>{
        event.preventDefault();
        var id = prompt("Please Enter ID of the Transaction you want to Update");
        var updateDesc = prompt("Please Enter Updated Description of the Transaction");
        var updateAmount = prompt("Please Enter Updated Amount of the Transaction");

        updateTransaction({
            id: Number(id),
            desc: updateDesc,
            amount: Number(updateAmount)
        });
    }

    const deleteHandler = (event) =>{
        event.preventDefault();

        var id = prompt("Please Enter ID of the Transaction you want to Delete");

        deleteTransaction({
            id: Number(id)
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

        <h2 className="text-center">Your Balance = {getIncome() + getExpense()} Rs.</h2><hr/>

      <div className="expense-container">
        <h3 className="text-center">Your Income <br/> {getIncome()} Rs.</h3>
        <h3 className="text-center">Your Expense <br/> {-getExpense()} Rs.</h3>
      </div>

      <h3>History</h3>
      <hr/>
      <ul className="transaction-list">
          {transactions.map((transObj, ind) =>{
              return(
                  <li key={ind}>
                        <span>{transObj.id}</span>
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

          <button type="submit" style={{backgroundColor: "green"}}> Add Transaction</button>
          <button onClick = {updateHandler} style={{backgroundColor: "yellowgreen"}}>Update Transaction</button>
          <button type="reset" style={{backgroundColor: "blueviolet"}}> Reset</button>
          <button onClick = {deleteHandler} style={{backgroundColor: "red"}}>Delete Transaction</button>


      </form>
    </div>
  );
}

export default Child;
