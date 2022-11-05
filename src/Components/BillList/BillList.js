import React from 'react';
import Bill from "../Bill/Bill";
import { useSelector } from 'react-redux';
import "./BillList.css";

const BillList = () => {
  const bills = useSelector(state => state.bill.billList);
  const categoryFilter = useSelector(state => state.category.filterCategoryName);
  if (categoryFilter === "") {
    return (
      <>
        {bills && bills.map((bill) => {
          return (
            <div key={bill.id} className="section_bill_view">
              <Bill id={bill.id} amount={bill.amount} category={bill.category} date={bill.date} description={bill.description} />
            </div>
          )
        })}
      </>
    )
  }
  return (
    <div className="section_bill_view">
      {bills.map((bill) => {
        if (bill.category === categoryFilter) {
          return (
            <Bill key={bill.id} id={bill.id} amount={bill.amount} category={bill.category} description={bill.description} date={bill.date} />
          )
        }
        return (<div key={bill.id}>
        </div>);
      })}
    </div>
  )
}

export default BillList;