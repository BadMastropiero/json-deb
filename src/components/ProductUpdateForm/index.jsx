import React from 'react';
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';
import {editProduct} from '../../redux/actions/product';


class ProductUpdateForm extends React.Component {
    onSubmit = (formValues) => {
        this.props.editProduct(formValues.id, formValues);
    }
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div>
                    <span className="Product-error">{error}</span>
                </div>
            )
        }
    }
    renderInput = ({ input, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <input className="Product-input" {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }
    render() {
        return (
            <form  onSubmit={this.props.handleSubmit(this.onSubmit)} className="Product-form">
                <Field name="product"  component={this.renderInput}/>
               <Field name="price" type="number" placeholder="Update Price" component={this.renderInput}/>
                <Field name="category" type="text" placeholder="Update Category" component={this.renderInput}/>
                <Field name="department" type="text" placeholder="Update Department" component={this.renderInput}/>
                <button type="submit" className="ActionBtn">Update</button>
            </form>
        );
    }
}

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

ProductUpdateForm = reduxForm({
    form: "productUpdateForm",
    validate
})(ProductUpdateForm);

const mapStateToProps = state => {
    return { initialValues: state.selectedProduct }
};

ProductUpdateForm = connect(mapStateToProps, { editProduct })(ProductUpdateForm);

export default ProductUpdateForm;

