import React from 'react';
import Bill from "../Bill/Bill";
import { useSelector } from 'react-redux';

const BillList = () => {
  const bills = useSelector(state => state.bill.BillList);
  return (
    <>
      {bills && bills.map((bill) => {
        return (
          <Bill amount={bill.amount} category={bill.category} />
        )
      })}
    </>
  )
}

export default BillList;