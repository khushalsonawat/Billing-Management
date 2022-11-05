import React from 'react';
import BillList from "../BillList/BillList";
import NewBill from "../NewBill/NewBill";
import NewCategory from '../NewCategory/NewCategory';
import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import Chart from '../Chart/Chart';
const DashBoard = () => {
    return (
        <>
            <Chart />
            <Header />
            <Filter />
            <NewCategory />
            <BillList />
            <NewBill />
        </>
    )
}

export default DashBoard