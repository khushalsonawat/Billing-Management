import React from 'react';
import Bill from "../Bill/Bill";
import { useSelector } from 'react-redux';

const BillList = () => {
  const bills = useSelector(state => state.bill.billList);
  return (
    <>
      {bills.map((bill) => {
        return (
          <Bill key={bill.id} id={bill.id} amount={bill.amount} category={bill.category} />
        )
      })}
    </>
  )
}

export default BillList;