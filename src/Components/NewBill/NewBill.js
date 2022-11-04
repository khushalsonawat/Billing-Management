import React from 'react'
import { billActions } from "../../store/bill-slice";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const NewBill = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    category: "",
    amount: 0,
  });

  const addBill = () => {
    dispatch(billActions.addBill({

    }));
  }

  const handleChange = (e) => {

  }

  return (
    <div className='bill-card'>
      <form>
        <h3>Amount:</h3>
        <input />
        <h3>Category:</h3>
        <input value={category} name="category" onChange={handleChange} />
        <br />
        <button type="submit" onClick={addBill}>Add bill</button>
      </form>
    </div>
  )
}

export default NewBill