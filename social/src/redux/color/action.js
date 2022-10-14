import axios from "axios";
import cogoToast from 'cogo-toast';
import { COLOR_FAIL, COLOR_REQUEST, COLOR_SUCCESS, DELETE_COLOR, EDIT_COLOR, SINGLE_COLOR } from "./actionType";


// COLOR REQUEST
export const colorRequest = () => ({
    type: COLOR_REQUEST
})

// COLOR SUCCESS
export const colorSuccess = (payload) => ({
    type: COLOR_SUCCESS,
    payload
})

// COLOR FAIL
export const colorFail = (payload) => ({
    type: COLOR_FAIL,
    payload
})

// get all color 
export const getAllColor = () => async (dispatch) => {

    try {

        dispatch(colorRequest());
        await axios.get('http://localhost:5050/api/v1/color')
        .then(res => {
            dispatch(colorSuccess(res.data));
        })
        .catch(error => {
            dispatch(colorFail(error.message));
        });
        
    } catch (error) {
        dispatch(colorFail(error.message));
    }

}

// create new color 
export const createColor = (data) => async (dispatch) => {

    try {

        await axios.post('http://localhost:5050/api/v1/color', data)
        .then(res => {
            dispatch(getAllColor());
        })
        .catch(error => {
            dispatch(colorFail(error.message));
        });
        
    } catch (error) {
        dispatch(colorFail(error.message));
    }

}

// single color view
export const singleColor = (id) => async (dispatch) => {

    dispatch({
        type: SINGLE_COLOR,
        payload: id
    })

}

// single color view
export const editColor = (id) => async (dispatch) => {

    dispatch({
        type: EDIT_COLOR,
        payload: id
    })

}

// update color 
export const updateColor = (id, data) => async (dispatch) => {

    try {

        await axios.put(`http://localhost:5050/api/v1/color/${id}`, data)
        .then(res => {
            dispatch(getAllColor());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(colorFail(error.message));
        });
        
    } catch (error) {
        dispatch(colorFail(error.message));
    }

}

// delete single color 
export const deleteColor = (id) => async (dispatch) => {

    try {

        await axios.delete(`http://localhost:5050/api/v1/color/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_COLOR,
                payload: id
            });
        })
        .catch(error => {
            dispatch(colorFail(error.message));
        });
        
    } catch (error) {
        dispatch(colorFail(error.message));
    }

}


// status update color 
export const updateStatusColor = (value, id) => async (dispatch) => {

    try {

        await axios.patch(`http://localhost:5050/api/v1/color/${value}/${id}`)
        .then(res => {
            dispatch(getAllColor());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(colorFail(error.message));
        });
        
    } catch (error) {
        dispatch(colorFail(error.message));
    }

}


