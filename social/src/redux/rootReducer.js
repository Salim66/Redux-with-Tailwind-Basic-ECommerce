import { combineReducers } from "redux";
import brandReducer from "./brand/brandReducer";
import categoryReducer from "./category/categoryReducer";
import colorReducer from "./color/colorReducer";
import sizeReducer from "./size/sizeReducer";
import tagReducer from "./tag/tagReducer";

// root reducer
const rootReducer = combineReducers({
    size: sizeReducer,
    color: colorReducer,
    tag: tagReducer,
    brand: brandReducer,
    category: categoryReducer,
});

// export default
export default rootReducer;