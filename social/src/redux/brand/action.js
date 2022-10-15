import axios from "axios";
import cogoToast from 'cogo-toast';
import { BRAND_FAIL, BRAND_REQUEST, BRAND_SUCCESS, DELETE_BRAND, EDIT_BRAND, SINGLE_BRAND } from "./actionType";


// BRAND REQUEST
export const brandRequest = () => ({
    type: BRAND_REQUEST
})

// BRAND SUCCESS
export const brandSuccess = (payload) => ({
    type: BRAND_SUCCESS,
    payload
})

// BRAND FAIL
export const brandFail = (payload) => ({
    type: BRAND_FAIL,
    payload
})

// get all brand 
export const getAllBrand = () => async (dispatch) => {

    try {

        dispatch(brandRequest());
        await axios.get('http://localhost:5050/api/v1/brand')
        .then(res => {
            dispatch(brandSuccess(res.data));
        })
        .catch(error => {
            dispatch(brandFail(error.message));
        });
        
    } catch (error) {
        dispatch(brandFail(error.message));
    }

}

// create new brand 
export const createBrand = (data) => async (dispatch) => {

    try {

        await axios.post('http://localhost:5050/api/v1/brand', data)
        .then(res => {
            dispatch(getAllBrand());
            console.log(res.data);
        })
        .catch(error => {
            dispatch(brandFail(error.message));
        });
        
    } catch (error) {
        dispatch(brandFail(error.message));
    }

}

// single brand view
export const singleBrand = (id) => async (dispatch) => {

    dispatch({
        type: SINGLE_BRAND,
        payload: id
    })

}

// single brand view
export const editBrand = (id) => async (dispatch) => {

    dispatch({
        type: EDIT_BRAND,
        payload: id
    })

}

// update brand 
export const updateBrand = (id, data) => async (dispatch) => {

    try {

        await axios.put(`http://localhost:5050/api/v1/brand/${id}`, data)
        .then(res => {
            dispatch(getAllBrand());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(brandFail(error.message));
        });
        
    } catch (error) {
        dispatch(brandFail(error.message));
    }

}

// delete single brand 
export const deleteBrand = (id) => async (dispatch) => {

    try {

        await axios.delete(`http://localhost:5050/api/v1/brand/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_BRAND,
                payload: id
            });
        })
        .catch(error => {
            dispatch(brandFail(error.message));
        });
        
    } catch (error) {
        dispatch(brandFail(error.message));
    }

}


// status update brand 
export const updateStatusBrand = (value, id) => async (dispatch) => {

    try {

        await axios.patch(`http://localhost:5050/api/v1/brand/${value}/${id}`)
        .then(res => {
            dispatch(getAllBrand());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(brandFail(error.message));
        });
        
    } catch (error) {
        dispatch(brandFail(error.message));
    }

}


