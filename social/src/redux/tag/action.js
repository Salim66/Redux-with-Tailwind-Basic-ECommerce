import axios from "axios";
import cogoToast from 'cogo-toast';
import { DELETE_TAG, EDIT_TAG, SINGLE_TAG, TAG_FAIL, TAG_REQUEST, TAG_SUCCESS } from "./actionType";


// TAG REQUEST
export const tagRequest = () => ({
    type: TAG_REQUEST
})

// TAG SUCCESS
export const tagSuccess = (payload) => ({
    type: TAG_SUCCESS,
    payload
})

// TAG FAIL
export const tagFail = (payload) => ({
    type: TAG_FAIL,
    payload
})

// get all tag
export const getAllTag = () => async (dispatch) => {

    try {

        dispatch(tagRequest());
        await axios.get('http://localhost:5050/api/v1/tag')
        .then(res => {
            dispatch(tagSuccess(res.data));
        })
        .catch(error => {
            dispatch(tagFail(error.message));
        });
        
    } catch (error) {
        dispatch(tagFail(error.message));
    }

}

// create new tag 
export const createTag = (data) => async (dispatch) => {

    try {

        await axios.post('http://localhost:5050/api/v1/tag', data)
        .then(res => {
            dispatch(getAllTag());
            console.log(res.data);
        })
        .catch(error => {
            dispatch(tagFail(error.message));
        });
        
    } catch (error) {
        dispatch(tagFail(error.message));
    }

}

// single tag view
export const singleTag = (id) => async (dispatch) => {

    dispatch({
        type: SINGLE_TAG,
        payload: id
    })

}

// single tag view
export const editTag = (id) => async (dispatch) => {

    dispatch({
        type: EDIT_TAG,
        payload: id
    })

}

// update tag 
export const updateTag = (id, data) => async (dispatch) => {

    try {

        await axios.put(`http://localhost:5050/api/v1/tag/${id}`, data)
        .then(res => {
            dispatch(getAllTag());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(tagFail(error.message));
        });
        
    } catch (error) {
        dispatch(tagFail(error.message));
    }

}

// delete single tag 
export const deleteTag = (id) => async (dispatch) => {

    try {

        await axios.delete(`http://localhost:5050/api/v1/tag/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_TAG,
                payload: id
            });
        })
        .catch(error => {
            dispatch(tagFail(error.message));
        });
        
    } catch (error) {
        dispatch(tagFail(error.message));
    }

}


// status update tag 
export const updateStatusTag = (value, id) => async (dispatch) => {

    try {

        await axios.patch(`http://localhost:5050/api/v1/tag/${value}/${id}`)
        .then(res => {
            dispatch(getAllTag());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(tagFail(error.message));
        });
        
    } catch (error) {
        dispatch(tagFail(error.message));
    }

}


