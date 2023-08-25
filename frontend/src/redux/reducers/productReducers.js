import * as actionTypes from '../constants/productConstants';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
        return {
            loading: true,//this will allow  items  to wait until  this is false
            products: [],
        };
        case actionTypes.GET_PRODUCTS_SUCCESS:
        return {
            loading: false,
            products: action.payload,
            
        };
        case actionTypes.GET_PRODUCTS_FAIL:
        return {
            loading: false,
            error: action.payload,//send error message in payload
        };
        default:
        return state;
    }
    };
    //fetach product details

    export const getProductDetailsReducer = (state = { product: {} }, action) => {
        switch (action.type) {
            case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,//this will allow  items  to wait until  this is false
            };
            case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,//make a request from backend  payload will get that individual product
                
            };
            case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,//send error message in payload
            };
            case actionTypes.GET_PRODUCT_DETAILS_REST:
                return {
                    product: {},
                };
            default:
            return state;
        }
        };