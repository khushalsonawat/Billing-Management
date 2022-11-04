import React from 'react'
import { billActions } from "../../store/bill-slice";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// import 

const NewBill = () => {
  const dispatch = useDispatch();
  const numberOfBill = useSelector(state => state.bill.totalBills);
  const categories = useSelector(state => state.category.categoryList);

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
    setState({
      amount: 0,
      category: "",
    })
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state.tag);
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
            <Field type="integer" name="amount" value={state.amount} onChange={handleChange} />
            <ErrorMessage name="amount" component="div" />
            <Field as="select" name="category" value={state.category} onChange={handleChange} >
              <option selected disabled>Choose here</option>
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