import { CATEGORY_FAIL, CATEGORY_REQUEST, CATEGORY_SUCCESS, DELETE_CATEGORY, EDIT_CATEGORY, SINGLE_CATEGORY } from "./actionType"
import initialCategory from "./initailCategory";



// create category reducer
const categoryReducer = ( state = initialCategory, { type, payload } ) => {

   
    switch (type) {
        case CATEGORY_REQUEST:
            return {
                ...state,
                skeleton: true
            }

        case CATEGORY_SUCCESS:
            return {
                ...state,
                categories: payload,
                skeleton: false
            }

        case CATEGORY_FAIL:
            return {
                ...state,
                skeleton: false,
                error: payload
            }

        case SINGLE_CATEGORY:
            return {
                ...state,
                skeleton: false,
                single_category: state.categories.find( data => data._id === payload )
            }

        case DELETE_CATEGORY:
            return {
                ...state,
                skeleton: false,
                categories: state.categories.filter( data => data._id !== payload )
            }
    
        case EDIT_CATEGORY:
            return {
                ...state,
                skeleton: false,
                edit_category: state.categories.find( data => data._id === payload )
            }

    
        default:
            return state;
    }


}

// export default
export default categoryReducer;