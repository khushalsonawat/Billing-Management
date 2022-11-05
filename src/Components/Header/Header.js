import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { billActions } from '../../store/bill-slice';

const Header = () => {
    const [state, setState] = useState(0);
    const [editing, setEditing] = useState(true);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editing) {
            dispatch(billActions.updateMonthlyBudget(state));
        }
        setEditing(!editing);
    }
    return (
        <div>
            <span>Monthly Budget</span>
            <form onSubmit={handleSubmit}>
                <input type="number" value={state} disabled={!editing} onChange={(e) => setState(e.target.value)} />
                <button type="submit">Update</button>
            </form>
            <button onClick={(e) => {
                e.preventDefault();
                dispatch(billActions.highlightMinimumBills())
            }}>Show minimum Bills</button>
        </div>
    )
}

export default Header