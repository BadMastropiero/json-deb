import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchProducts, selectedProduct} from '../../redux/actions/product';
import fetchApi from '../../api/fetchApi';
import {FaEraser} from 'react-icons/fa';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

class ProductsList extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    
    
    render() {
        return (
            <div className="ProductsTable">
               
                <div className="Product-shopProducts">
                    <span>Shop Products</span>
                </div>
        
                <ReactTable
                     getTrProps={(state, rowInfo, column) => {
                        return {
                            onClick: (event) => {
                                this.props.selectedProduct(rowInfo.original)
                            },
                        }
                    }}
                    data={this.props.products}
                    filterable
                    defaultFilterableMethod={(filter, row) =>
                        String(row[filter.id]).toLowerCase().indexOf(filter.value.toLowerCase()) > -1
                    }
                    columns={[
                       {
                        Header: "ID",
                        accessor: "id",
                        Cell: e => <div className="ActionCell">
                                        <Link to={{ pathname: `/product-details/${e.value}`}} >{e.value}</Link>
                                        <FaEraser className="ActionCell-eraser" onClick={() => fetchApi.delete(`/products/${e.value}`)}  />
                                    </div>
                       },
                       {
                           Header: "Name",
                           accessor: "product",
                       },
                       {
                            Header: "Cost",
                            accessor: "price"
                       },
                       {
                            Header: "Department",
                            accessor: "department"
                       },
                       {
                            Header: "Category",
                            accessor: "category"
                       },
                    //    {
                    //        Header: "Delete",
                           
                    //        Cell: row => (
                               
                    //        )
                    //    }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        selectedProduct: state.selectedProduct
    }
}

export default connect(
    mapStateToProps,
    {fetchProducts, selectedProduct}
)(ProductsList);
