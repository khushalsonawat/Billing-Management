import React from 'react';
import BillList from "../BillList/BillList";
import NewBill from "../NewBill/NewBill";
// import { useSelector } from 'react-redux';

const DashBoard = () => {
    // const state = useSelector(state => state.bill.billList);
    // console.log(state);
    return (
        <>
            <BillList />
            <NewBill />
        </>
    )
}

export default DashBoard