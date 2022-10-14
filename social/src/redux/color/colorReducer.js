import { COLOR_FAIL, COLOR_REQUEST, COLOR_SUCCESS, DELETE_COLOR, EDIT_COLOR, SINGLE_COLOR } from "./actionType"
import initialColor from "./initailSize"



// create color reducer
const colorReducer = ( state = initialColor, { type, payload } ) => {

   
    switch (type) {
        case COLOR_REQUEST:
            return {
                ...state,
                skeleton: true
            }

        case COLOR_SUCCESS:
            return {
                ...state,
                colors: payload,
                skeleton: false
            }

        case COLOR_FAIL:
            return {
                ...state,
                skeleton: false,
                error: payload
            }

        case SINGLE_COLOR:
            return {
                ...state,
                skeleton: false,
                single_color: state.colors.find( data => data._id === payload )
            }

        case DELETE_COLOR:
            return {
                ...state,
                skeleton: false,
                colors: state.colors.filter( data => data._id !== payload )
            }
    
        case EDIT_COLOR:
            return {
                ...state,
                skeleton: false,
                edit_color: state.colors.find( data => data._id === payload )
            }

    
        default:
            return state;
    }


}

// export default
export default colorReducer;