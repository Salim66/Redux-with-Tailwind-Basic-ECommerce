import { DELETE_PRODUCT, EDIT_PRODUCT, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, SINGLE_PRODUCT } from "./actionType"
import initialProduct from "./initailProduct"


// create product reducer
const productReducer = ( state = initialProduct, { type, payload } ) => {

   
    switch (type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                skeleton: true
            }

        case PRODUCT_SUCCESS:
            return {
                ...state,
                products: payload,
                skeleton: false
            }

        case PRODUCT_FAIL:
            return {
                ...state,
                skeleton: false,
                error: payload
            }

        case SINGLE_PRODUCT:
            return {
                ...state,
                skeleton: false,
                single_product: state.products.find( data => data._id === payload )
            }

        case DELETE_PRODUCT:
            return {
                ...state,
                skeleton: false,
                products: state.products.filter( data => data._id !== payload )
            }
    
        case EDIT_PRODUCT:
            return {
                ...state,
                skeleton: false,
                edit_product: state.products.find( data => data._id === payload )
            }

    
        default:
            return state;
    }


}

// export default
export default productReducer;