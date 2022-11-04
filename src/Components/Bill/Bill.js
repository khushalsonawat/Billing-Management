import React, { useState } from 'react';
import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { billActions } from '../../store/bill-slice';
import { useSelector } from 'react-redux';
import "./Bill.css";


const Bill = (props) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categoryList);
    const [editing, setEditing] = useState(false);
    const [state, setState] = useState({
        id: props.id,
        amount: props.amount,
        category: props.category,
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = () => {
        setEditing(false);
        dispatch(billActions.updateBill({
            ...state
        }));
    }

    const deleteBill = (id) => {
        dispatch(billActions.removeBill({
            id: id,
        }));
    }
    return (
        <div className='bill-card'>
            {editing ? <IoMdClose size={"25px"} onClick={() => setEditing(false)} /> :
                <HiPencilAlt size={"25px"} onClick={() => setEditing(true)} />}
            <MdDelete size={"25px"} onClick={() => deleteBill(props.id)} />
            <h3>Amount:</h3>
            <input type="text" name="amount" value={state.amount} disabled={!editing} onChange={handleChange} />
            <h3>Category:</h3>
            <select name="category" value={state.category} disabled={!editing} onChange={handleChange}>
                {categories.map((category) => {
                    return (
                        <option value={category.tag}>{category.tag}</option>
                    )
                })}
            </select>
            {/* <input type="text" name="category" value={state.category} disabled={!editing} onChange={handleChange} /> */}

            {editing ? <button onClick={handleSubmit}>Save</button> : <></>}
        </div>
    )
}

export default Bill