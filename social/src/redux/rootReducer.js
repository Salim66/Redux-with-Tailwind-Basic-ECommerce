import { combineReducers } from "redux";
import colorReducer from "./color/colorReducer";
import sizeReducer from "./size/sizeReducer";
import tagReducer from "./tag/tagReducer";

// root reducer
const rootReducer = combineReducers({
    size: sizeReducer,
    color: colorReducer,
    tag: tagReducer,
});

// export default
export default rootReducer;