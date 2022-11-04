import React from 'react';
import BillList from "../BillList/BillList";
import NewBill from "../NewBill/NewBill";
import NewCategory from '../NewCategory/NewCategory';
// import { useSelector } from 'react-redux';

const DashBoard = () => {
    return (
        <>
            <NewCategory />
            <BillList />
            <NewBill />
        </>
    )
}

export default DashBoard