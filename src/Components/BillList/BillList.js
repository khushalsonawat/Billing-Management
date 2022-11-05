import React from 'react';
import Bill from "../Bill/Bill";
import { useSelector } from 'react-redux';

const BillList = () => {
  const bills = useSelector(state => state.bill.billList);
  const categoryFilter = useSelector(state => state.category.filterCategoryName);
  if (categoryFilter === "") {
    return (
      <>
        {bills && bills.map((bill) => {
          return (
            <Bill key={bill.id} id={bill.id} amount={bill.amount} category={bill.category} date={bill.date} description={bill.description} />
          )
        })}
      </>
    )
  }
  return (
    <>
      {bills.map((bill) => {
        if (bill.category === categoryFilter) {
          return (
            <Bill key={bill.id} id={bill.id} amount={bill.amount} category={bill.category} description={bill.description} date={bill.date} />
          )
        }
        return (<div key={bill.id}>
        </div>);
      })}
    </>
  )
}

export default BillList;