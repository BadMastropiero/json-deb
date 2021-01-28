import fetchApi from '../../../api/fetchApi' ;

export const fetchProducts = () => async (dispatch) => {
    const response = await fetchApi.get("/products");

    dispatch({ type: "FETCH_PRODUCTS", payload: response.data })
};

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fetchApi.get(`/products/${id}`);

    dispatch({ type: "SELECTED_PRODUCT", payload: response.data })
};

export const addProduct = (formValues) => async (dispatch) => {
    const response = await fetchApi.post("/products", formValues);

    dispatch({type: "ADD_PRODUCT", payload: response.data})
};

export const editProduct = (id, formValues) => async (dispatch) => {
    const response = await fetchApi.put(`/products/${id}`, formValues);

    dispatch({ type: "EDIT_PRODUCT", payload: response.data })
};

export const deleteProduct = (id) => async (dispatch) => {
    const response = await fetchApi.delete(`/products/${id}`);

    dispatch({ type: "DELETE_PRODUCT", payload: response.data })
};

export const selectedProduct = (product) => {
    return {
        type: "SELECTED_PRODUCT",
        payload: product
    };
};