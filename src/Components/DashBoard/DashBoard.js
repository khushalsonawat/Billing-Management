import React from 'react';
import BillList from "../BillList/BillList";
import NewBill from "../NewBill/NewBill";
import NewCategory from '../NewCategory/NewCategory';
import Filter from '../Filter/Filter';
// import { useSelector } from 'react-redux';

const DashBoard = () => {
    return (
        <>
            <Filter />
            <NewCategory />
            <BillList />
            <NewBill />
        </>
    )
}

export default DashBoard