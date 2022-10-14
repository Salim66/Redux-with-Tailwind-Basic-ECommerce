import axios from "axios";
import cogoToast from 'cogo-toast';
import { DELETE_SIZE, EDIT_SIZE, SINGLE_SIZE, SIZE_FAIL, SIZE_REQUEST, SIZE_SUCCESS } from "./actionType";


// SIZE REQUEST
export const sizeRequest = () => ({
    type: SIZE_REQUEST
})

// SIZE SUCCESS
export const sizeSuccess = (payload) => ({
    type: SIZE_SUCCESS,
    payload
})

// SIZE FAIL
export const sizeFail = (payload) => ({
    type: SIZE_FAIL,
    payload
})

// get all size 
export const getAllSize = () => async (dispatch) => {

    try {

        dispatch(sizeRequest());
        await axios.get('http://localhost:5050/api/v1/size')
        .then(res => {
            dispatch(sizeSuccess(res.data));
        })
        .catch(error => {
            dispatch(sizeFail(error.message));
        });
        
    } catch (error) {
        dispatch(sizeFail(error.message));
    }

}

// create new size 
export const createSize = (data) => async (dispatch) => {

    try {

        await axios.post('http://localhost:5050/api/v1/size', data)
        .then(res => {
            dispatch(getAllSize());
            console.log(res.data);
        })
        .catch(error => {
            dispatch(sizeFail(error.message));
        });
        
    } catch (error) {
        dispatch(sizeFail(error.message));
    }

}

// single size view
export const singleSize = (id) => async (dispatch) => {

    dispatch({
        type: SINGLE_SIZE,
        payload: id
    })

}

// single size view
export const editSize = (id) => async (dispatch) => {

    dispatch({
        type: EDIT_SIZE,
        payload: id
    })

}

// update size 
export const updateSize = (id, data) => async (dispatch) => {

    try {

        await axios.put(`http://localhost:5050/api/v1/size/${id}`, data)
        .then(res => {
            dispatch(getAllSize());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(sizeFail(error.message));
        });
        
    } catch (error) {
        dispatch(sizeFail(error.message));
    }

}

// delete single size 
export const deleteSize = (id) => async (dispatch) => {

    try {

        await axios.delete(`http://localhost:5050/api/v1/size/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_SIZE,
                payload: id
            });
        })
        .catch(error => {
            dispatch(sizeFail(error.message));
        });
        
    } catch (error) {
        dispatch(sizeFail(error.message));
    }

}


// status update size 
export const updateStatusSize = (value, id) => async (dispatch) => {

    try {

        await axios.patch(`http://localhost:5050/api/v1/size/${value}/${id}`)
        .then(res => {
            dispatch(getAllSize());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(sizeFail(error.message));
        });
        
    } catch (error) {
        dispatch(sizeFail(error.message));
    }

}


