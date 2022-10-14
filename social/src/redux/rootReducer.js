import { combineReducers } from "redux";
import sizeReducer from "./size/sizeReducer";

// root reducer
const rootReducer = combineReducers({
    size: sizeReducer,
});

// export default
export default rootReducer;