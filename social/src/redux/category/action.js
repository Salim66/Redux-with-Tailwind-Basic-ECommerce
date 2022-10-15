import axios from "axios";
import cogoToast from 'cogo-toast';
import { CATEGORY_FAIL, CATEGORY_REQUEST, CATEGORY_SUCCESS, DELETE_CATEGORY, EDIT_CATEGORY, SINGLE_CATEGORY } from "./actionType";


// CATEGORY REQUEST
export const categoryRequest = () => ({
    type: CATEGORY_REQUEST
})

// CATEGORY SUCCESS
export const categorySuccess = (payload) => ({
    type: CATEGORY_SUCCESS,
    payload
})

// CATEGORY FAIL
export const categoryFail = (payload) => ({
    type: CATEGORY_FAIL,
    payload
})

// get all category 
export const getAllCategory = () => async (dispatch) => {

    try {

        dispatch(categoryRequest());
        await axios.get('http://localhost:5050/api/v1/category')
        .then(res => {
            dispatch(categorySuccess(res.data));
        })
        .catch(error => {
            dispatch(categoryFail(error.message));
        });
        
    } catch (error) {
        dispatch(categoryFail(error.message));
    }

}

// create new category 
export const createCategory = (data) => async (dispatch) => {

    try {

        await axios.post('http://localhost:5050/api/v1/category', data)
        .then(res => {
            dispatch(getAllCategory());
            console.log(res.data);
        })
        .catch(error => {
            dispatch(categoryFail(error.message));
        });
        
    } catch (error) {
        dispatch(categoryFail(error.message));
    }

}

// single category view
export const singleCategory = (id) => async (dispatch) => {

    dispatch({
        type: SINGLE_CATEGORY,
        payload: id
    })

}

// single category view
export const editCategory = (id) => async (dispatch) => {

    dispatch({
        type: EDIT_CATEGORY,
        payload: id
    })

}

// update category 
export const updateCategory = (id, data) => async (dispatch) => {

    try {

        await axios.put(`http://localhost:5050/api/v1/category/${id}`, data)
        .then(res => {
            dispatch(getAllCategory());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(categoryFail(error.message));
        });
        
    } catch (error) {
        dispatch(categoryFail(error.message));
    }

}

// delete single category 
export const deleteCategory = (id) => async (dispatch) => {

    try {

        await axios.delete(`http://localhost:5050/api/v1/category/${id}`)
        .then(res => {
            dispatch({
                type: DELETE_CATEGORY,
                payload: id
            });
        })
        .catch(error => {
            dispatch(categoryFail(error.message));
        });
        
    } catch (error) {
        dispatch(categoryFail(error.message));
    }

}


// status update category 
export const updateStatusCategory = (value, id) => async (dispatch) => {

    try {

        await axios.patch(`http://localhost:5050/api/v1/category/${value}/${id}`)
        .then(res => {
            dispatch(getAllCategory());
            cogoToast.success(res.data.message, { position: 'bottom-right' })
        })
        .catch(error => {
            dispatch(categoryFail(error.message));
        });
        
    } catch (error) {
        dispatch(categoryFail(error.message));
    }

}


