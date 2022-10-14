import { applyMiddleware, createStore } from 'redux';
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


// store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


// export default
export default store;