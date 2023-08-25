import * as actionTypes from "../constants/productConstants";
import axios from 'axios';
//GET PRODUCTS
export const getProducts = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCTS_REQUEST});
        const {data} = await axios.get("/api/products");
        dispatch({//if success
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data,
        });
    } catch (error) {//if there is an error
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get(`/api/products/${id}`);//find product by id
        dispatch({//if success
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {//if there is an error
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_REST,
    });
};