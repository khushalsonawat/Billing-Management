import React from 'react';
import { HiPencilAlt } from "react-icons/hi";
import "./Bill.css";


const Bill = (props) => {
    return (
        <div className='bill-card'>
            <HiPencilAlt size={"25px"} />
            <h3>Amount:</h3>
            <span>{props.amount}</span>
            <h3>Category:</h3>
            <span>{props.category}</span>
        </div>
    )
}

export default Bill