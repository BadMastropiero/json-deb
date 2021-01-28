import React from 'react';
import { Field, reduxForm } from 'redux-form';
import fetchApi from '../../api/fetchApi';


const validate = values => {
  const errors = {}
  if (!values.product) {
    errors.product = 'Required'
  } else if (values.product.length < 5) {
    errors.product = 'Must be 6 characters or more'
  }
  if (!values.price) {
    errors.price = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  }
  if (!values.category) {
    errors.category = 'Required'
  } else if (values.category.length < 5) {
    errors.category = 'Must be 6 characters or more'
  }
  if (!values.department) {
    errors.department = 'Required'
  } else if (values.department.length < 5) {
    errors.department = 'Must be 6 characters or more'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    {/* <label className="Product-label">{label}</label> */}
    <div>
      <input className="Product-input" {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span className="Product-error">{error}</span>))}
    </div>
  </div>
)

const onSubmit = values => {
  alert(JSON.stringify(values));
  fetchApi.post("/products", values);
}

const AddProductForm = props => {
  const {pristine, reset, submitting, handleSubmit} = props
  
  return (
    <form className="Product-form" onSubmit={handleSubmit}>
      <Field
        name="product"
        type="text"
        component={renderField}
        label="Product Name"
      />
      <Field 
        name="price" 
        type="number" 
        component={renderField} 
        label="Product Price" 
      />

      <Field 
        name="category" 
        type="text" 
        component={renderField} 
        label="Category" 
      />

      <Field 
        name="department" 
        type="text" 
        component={renderField} 
        label="Department" 
      />

      <div>
        <button className="ActionBtn" type="submit" disabled={submitting}>
          Submit
        </button>
        <button className="ActionBtn" type="button" disabled={pristine || submitting} onClick={reset}>
          Clear 
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'addProductForm', 
  onSubmit,
  validate, 
})(AddProductForm)