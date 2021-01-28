/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
    switch (action.type) {
        case 'SELECTED_PRODUCT':
            return action.payload;
        default:
            return state;
    }
}