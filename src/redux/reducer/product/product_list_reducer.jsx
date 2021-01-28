/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return action.payload;
        case 'ADD_PRODUCTS':
            return action.payload;
        case 'DELETE_PRODUCTS':
            return action.payload;
        case 'EDIT_PRODUCT':
            return state.map(product => {
                if (product.id === action.payload.id) {
                    return action.payload;
                } else {
                    return product;
                }
            })
        default:
            return state;
    }
}