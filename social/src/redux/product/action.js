import axios from "axios";
import cogoToast from 'cogo-toast';
import { DELETE_PRODUCT, EDIT_PRODUCT, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, SINGLE_PRODUCT } from "./actionType";


// PRODUCT  REQUEST
export const productRequest = () => ({
    type: PRODUCT_REQUEST
})

// PRODUCT SUCCESS
export const productSuccess = (payload) => ({
    type: PRODUCT_SUCCESS,
    payload
})

// PRODUCT FAIL
export const productFail = (payload) => ({
    type: PRODUCT_FAIL,
    payload
})

// get all product 
export const getAllProduct = () => async (dispatch) => {

    try {

        dispatch(productRequest());
        await axios.get('http://localhost:5050/api/v1/product')
        .then(res => {
            dispatch(productSuccess(res.data));
        })
        .catch(error => {
            dispatch(productFail(error.message));
        });
        
    } catch (error) {
        dispatch(productFail(error.message));
    }

}

// create new product 
export const createProduct = (data) => async (dispatch) => {

    try {

        await axios.post('http://localhost:5050/api/v1/product', data)
        .then(res => {
            dispatch(getAllProduct());
            console.log(res.data);
        })
        .catch(error => {
            dispatch(productFail(error.message));
        });
        
    } catch (error) {
        dispatch(productFail(error.message));
    }

}

// single product view
export const singleProduct = (id) => async (dispatch) => {

    dispatch({
        type: SINGLE_PRODUCT,
        payload: id
    })

}

// single product view
export const editProduct = (id) => async (dispatch) => {

    dispatch({
        type: EDIT_PRODUCT,
        payload: id
    })

}

// update product 
export const updateProduct = (id, data) => async (dispatch) => {

    try {

        await axios.put(`http://localhost:5050/api/v1/product/${id}`, data)
        .then(res => {
            dispatch(getAllProduct());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(productFail(error.message));
        });
        
    } catch (error) {
        dispatch(productFail(error.message));
    }

}

// delete single product 
export const deleteProduct = (id) => async (dispatch) => {

    try {

        await axios.delete(`http://localhost:5050/api/v1/product/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            });
        })
        .catch(error => {
            dispatch(productFail(error.message));
        });
        
    } catch (error) {
        dispatch(productFail(error.message));
    }

}


// status update product 
export const updateStatusProduct = (value, id) => async (dispatch) => {

    try {

        await axios.patch(`http://localhost:5050/api/v1/product/${value}/${id}`)
        .then(res => {
            dispatch(getAllProduct());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(productFail(error.message));
        });
        
    } catch (error) {
        dispatch(productFail(error.message));
    }

}


