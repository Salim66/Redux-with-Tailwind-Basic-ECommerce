import { BRAND_FAIL, BRAND_REQUEST, BRAND_SUCCESS, DELETE_BRAND, EDIT_BRAND, SINGLE_BRAND } from "./actionType"
import initialBrand from "./initailBrand"


// create brand reducer
const brandReducer = ( state = initialBrand, { type, payload } ) => {

   
    switch (type) {
        case BRAND_REQUEST:
            return {
                ...state,
                skeleton: true
            }

        case BRAND_SUCCESS:
            return {
                ...state,
                brands: payload,
                skeleton: false
            }

        case BRAND_FAIL:
            return {
                ...state,
                skeleton: false,
                error: payload
            }

        case SINGLE_BRAND:
            return {
                ...state,
                skeleton: false,
                single_brand: state.brands.find( data => data._id === payload )
            }

        case DELETE_BRAND:
            return {
                ...state,
                skeleton: false,
                brands: state.brands.filter( data => data._id !== payload )
            }
    
        case EDIT_BRAND:
            return {
                ...state,
                skeleton: false,
                edit_brand: state.brands.find( data => data._id === payload )
            }

    
        default:
            return state;
    }


}

// export default
export default brandReducer;