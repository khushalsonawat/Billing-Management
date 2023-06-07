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
        description: props.description,
        date: props.date,
    });

    const handleChange = (e) => {
        e.preventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
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

    return (<>
        <div className='bill-card'>
            {editing ? <IoMdClose size={"25px"} onClick={(e) => {
                e.preventDefault();
                setEditing(false)
            }
            } /> :
                <HiPencilAlt size={"25px"} onClick={(e) => {
                    e.preventDefault();
                    setEditing(true)
                }
                } />}
            <MdDelete size={"25px"} onClick={(e) => {
                e.preventDefault();
                deleteBill(props.id)
            }
            } />
            <br />
            <br />
            <span>Amount:</span><br />
            <input type="text" name="amount" value={state.amount} disabled={!editing} onChange={handleChange} />
            <br />
            <span>Category:</span><br />
            <select name="category" value={state.category} disabled={!editing} onChange={handleChange}>
                {categories.map((category) => {
                    return (
                        <option key={category.id} value={category.tag}>{category.tag}</option>
                    )
                })}
            </select>
            <br />
            <span>Description:</span><br />
            <input type="text" name="description" value={state.description} disabled={!editing} onChange={handleChange} />
            <br />
            <span>Date:</span><br />
            <input type="date" name="date" value={state.date} disabled={!editing} onChange={handleChange} />
            <br />
            <div className="saveButton">
                {editing ? <button onClick={handleSubmit}>Save</button> : <></>}
            </div>
        </div>
    </>
    )
}

export default Bill;