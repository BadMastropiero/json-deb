import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import {fetchProduct} from '../../redux/actions/product';

import ProductUpdateForm from '../../components/ProductUpdateForm'


class ProductDetailsPage extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        if(!this.props.product.id) {
            
        }
        this.props.fetchProduct(id);
    }

    render() {
        return (
            <div className="Page">
                 <div className="Product">
                    <div className="Product-left">
                        <div >
                            <h4 className="Product-leftTitle">{this.props.product.product}</h4>
                        </div>
                        <div className="Product-leftImage">
                            <img className="Product-image" src="https://cdn.pixabay.com/photo/2020/03/03/05/21/boho-4897564_960_720.jpg" alt="sunglasses"/>
                        </div>
                    </div>
                    <div className="Product-right">
                        <div className="Product-rightTitle">
                            <span>Product Features</span>
                        </div>
                        <div className="Product-rightFeatures">
                            <div className="ProductFeature">
                                <span className="FeatureSlot">Price:</span>
                                <span className="ProductFeature"> ${this.props.product.price}</span>
                            </div>
                            <div className="Category">
                                <span className="FeatureSlot">Category:</span>
                                <span className="ProductFeature"> {this.props.product.category} </span>
                            </div>
                            <div className="Department">
                                <span className="FeatureSlot">Department:</span>
                                <span className="ProductFeature"> {this.props.product.department} </span>
                            </div>
                        </div>
                        <div className="Product-update">
                            <span>Product Update</span>
                        </div>
                        <ProductUpdateForm/>
                    </div>
                </div>
            </div>
           
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.selectedProduct,
    }
}

export default connect(mapStateToProps, {fetchProduct})(ProductDetailsPage);
