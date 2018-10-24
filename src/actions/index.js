export const TOGGLE_AUTH_FORM = 'TOGGLE_AUTH_FORM';
export const TOGGLE_CATEGORIES = 'TOGGLE_CATEGORIES';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const CLOSE_ALL_DROP_MENU = 'CLOSE_ALL_DROP_MENU';
export const GET_ORDERS = 'GET_ORDERS';
export const REQUEST_ORDERS = 'REQUEST_ORDERS';
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';

export const toggleAuthForm = () => ({
    type: TOGGLE_AUTH_FORM
});

export const toggleCategories = () => ({
    type: TOGGLE_CATEGORIES
});

export const toggleMenu = () => ({
    type: TOGGLE_MENU
});

export const closeAllDropMenu = () => ({
    type: CLOSE_ALL_DROP_MENU
});

export const getOrders = (from_id) => ({
    type: GET_ORDERS,
    from_id
});

export const requestOrders = (from_id) => ({
    type: REQUEST_ORDERS,
    from_id
});

export const receiveOrders = (from_id, json) => ({
    type: RECEIVE_ORDERS,
    orders: json,
    receivedAt: Date.now(),
    from_id
});


const fetchOrders = (state) => {
    // e.preventDefault();
    console.log('fetchOrders');

    return (dispatch) => {
        let id = state.projectsReducer.lastOrderID;
        dispatch(requestOrders(id));
        return fetch('http://www.json-generator.com/api/json/get/bUjBxCyRsO?indent=2').then(res => res.json()).then(res => dispatch(receiveOrders(id, res)));
    }
}

export const fetchOrdersIfNeeded = () => {
    return (dispatch, getState) => {
        console.log('fetchOrdersIfNeeded');
        if (!getState().projectsReducer.isFetching)
            dispatch(fetchOrders(getState()));
    }
}