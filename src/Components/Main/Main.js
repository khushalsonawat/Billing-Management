import React from 'react'
import BillList from "../BillList/BillList";
import NewBill from "../NewBill/NewBill";
import Chart from '../Chart/Chart';


const Main = () => {
    return (
        <div className="section_bill_view">
            <BillList />
            <NewBill />
            <Chart />
        </div>
    )

}

export default Main