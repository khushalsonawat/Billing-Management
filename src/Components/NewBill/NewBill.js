import React, { useRef } from 'react'
import { billActions } from "../../store/bill-slice";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const NewBill = () => {
  const dispatch = useDispatch();
  let numberOfBill = useSelector(state => state.bill.totalBills);
  const categories = useSelector(state => state.category.categoryList);
  const dropdown = useRef();

  const [state, setState] = useState({
    id: numberOfBill + 1,
    category: "",
    amount: 0,
  });

  const addBill = (e) => {
    e.preventDefault();
    dispatch(billActions.addBill({
      ...state,
    }));
    numberOfBill += 1;
    dropdown.current.value = "";
    setState({
      id: numberOfBill + 1,
      amount: 0,
    })
  }

  const handleChange = (e) => {
    console.log(e.target.name);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className='bill-card'>
      <Formik
        initialValues={state}
        validate={values => {
          const errors = {};
          if (!values.amount) {
            errors.amount = 'Required';
          }
          return errors;
        }}
        onSubmit={({ setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form onSubmit={addBill}>
            <Field type="number" name="amount" value={state.amount} onChange={handleChange} />
            <ErrorMessage name="amount" component="div" />
            <Field as="select" ref={dropdown} name="category" required value={state.category} onChange={handleChange}>
              <option value={""} selected disabled hidden>Choose here</option>
              {categories.map((category) => {
                return (
                  <option key={category.id} value={category.tag}>{category.tag}</option>
                )
              })}
            </Field>
            <ErrorMessage name="category" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Add Bill
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewBill