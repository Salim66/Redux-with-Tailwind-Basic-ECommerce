import { DELETE_TAG, EDIT_TAG, SINGLE_TAG, TAG_FAIL, TAG_REQUEST, TAG_SUCCESS } from "./actionType"
import initialTag from "./initailSize"


// create tag reducer
const tagReducer = ( state = initialTag, { type, payload } ) => {

   
    switch (type) {
        case TAG_REQUEST:
            return {
                ...state,
                skeleton: true
            }

        case TAG_SUCCESS:
            return {
                ...state,
                tags: payload,
                skeleton: false
            }

        case TAG_FAIL:
            return {
                ...state,
                skeleton: false,
                error: payload
            }

        case SINGLE_TAG:
            return {
                ...state,
                skeleton: false,
                single_tag: state.tags.find( data => data._id === payload )
            }

        case DELETE_TAG:
            return {
                ...state,
                skeleton: false,
                tags: state.tags.filter( data => data._id !== payload )
            }
    
        case EDIT_TAG:
            return {
                ...state,
                skeleton: false,
                edit_tag: state.tags.find( data => data._id === payload )
            }

    
        default:
            return state;
    }


}

// export default
export default tagReducer;