import { combineReducers } from "redux";
import brandReducer from "./brand/brandReducer";
import categoryReducer from "./category/categoryReducer";
import colorReducer from "./color/colorReducer";
import productReducer from "./product/productReducer";
import sizeReducer from "./size/sizeReducer";
import tagReducer from "./tag/tagReducer";

// root reducer
const rootReducer = combineReducers({
    size: sizeReducer,
    color: colorReducer,
    tag: tagReducer,
    brand: brandReducer,
    category: categoryReducer,
    product: productReducer,
});

// export default
export default rootReducer;