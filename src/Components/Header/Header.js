import React from 'react'
import Filter from '../Filter/Filter';
import MinimumBills from '../MinimumBills/MinimumBills';
import NewCategory from '../NewCategory/NewCategory';
import "./Header.css";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="filtersAndCatergories">
                <Filter />
                <NewCategory />
            </div >
            <MinimumBills />
        </div>
    )
}

export default Header