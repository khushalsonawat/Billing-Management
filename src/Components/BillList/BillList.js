import React from 'react';
import Bill from "../Bill/Bill";
import { useSelector } from 'react-redux';

const BillList = () => {
  const bills = useSelector(state => state.bill.billList);
  const categoryFilter = useSelector(state => state.category.filterCategoryName);
  console.log(categoryFilter);
  if (categoryFilter === "") {
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
  console.log(bills);
  return (
    <>
      {bills.map((bill) => {
        if (bill.category === categoryFilter) {
          return (
            <Bill key={bill.id} id={bill.id} amount={bill.amount} category={bill.category} />
          )
        }
        return (<div key={bill.id}>
        </div>);
      })}
    </>
  )
}

export default BillList;