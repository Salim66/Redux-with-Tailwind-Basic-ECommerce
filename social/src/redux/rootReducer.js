import { combineReducers } from "redux";
import brandReducer from "./brand/brandReducer";
import colorReducer from "./color/colorReducer";
import sizeReducer from "./size/sizeReducer";
import tagReducer from "./tag/tagReducer";

// root reducer
const rootReducer = combineReducers({
    size: sizeReducer,
    color: colorReducer,
    tag: tagReducer,
    brand: brandReducer,
});

// export default
export default rootReducer;