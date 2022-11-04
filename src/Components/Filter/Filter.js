import { Field, Formik, Form } from 'formik';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoryActions } from '../../store/category-slice';

const Filter = () => {
    const categories = useSelector(state => state.category.categoryList);
    const [state, setState] = useState({
        filter: useSelector(state => state.category.filterCategory)
    }
    );
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log(e.target.value);
        setState({
            [e.target.name]: e.target.value,
        })
    }

    const applyFilter = (e) => {
        e.preventDefault();
        dispatch(categoryActions.filterCategory(state.filter));
    }

    return (
        <div>
            <Formik
                initialValues={categories}
                onSubmit={({ setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting }) => (
                    <Form onSubmit={applyFilter}>
                        <Field as="select" required name="filter" value={state.filter} onChange={handleChange}>
                            <option selected disabled hidden>Choose here</option>
                            {categories.map((category) => {
                                return (
                                    <option key={category.id} value={category.tag}>{category.tag}</option>
                                )
                            })}
                        </Field>

                        <button type="submit" disabled={isSubmitting}>
                            Apply Filter
                        </button>
                        {/* <button >
                            Clear
                        </button> */}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Filter