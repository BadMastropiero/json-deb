import React from 'react';

import ProductList from '../../components/ProductsList';
import AddProduct from '../../components/AddProduct';


const MainPage = props => {
    return (
        <div className="Page">
            <div className="Product-addProduct">
                <span>Add Product</span>
            </div>
            <AddProduct />
            <ProductList/>
        </div>
    )
}

export default MainPage
