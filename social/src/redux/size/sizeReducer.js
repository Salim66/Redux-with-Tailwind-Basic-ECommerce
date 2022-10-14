import { DELETE_SIZE, EDIT_SIZE, SINGLE_SIZE, SIZE_FAIL, SIZE_REQUEST, SIZE_SUCCESS } from "./actionType";
import initialSize from "./initailSize";


// create size reducer
const sizeReducer = ( state = initialSize, { type, payload } ) => {

   
    switch (type) {
        case SIZE_REQUEST:
            return {
                ...state,
                skeleton: true
            }

        case SIZE_SUCCESS:
            return {
                ...state,
                sizes: payload,
                skeleton: false
            }

        case SIZE_FAIL:
            return {
                ...state,
                skeleton: false,
                error: payload
            }

        case SINGLE_SIZE:
            return {
                ...state,
                skeleton: false,
                single_size: state.sizes.find( data => data._id === payload )
            }

        case DELETE_SIZE:
            return {
                ...state,
                skeleton: false,
                sizes: state.sizes.filter( data => data._id !== payload )
            }
    
        case EDIT_SIZE:
            return {
                ...state,
                skeleton: false,
                edit_size: state.sizes.find( data => data._id === payload )
            }

    
        default:
            return state;
    }


}

// export default
export default sizeReducer;