import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import rootReducer from './root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

// for composeWithDevTools
const composeEnhancers = composeWithDevTools({});
// Jeff's create the store
// export const store = createStore(todoApp, composeEnhancers(applyMiddleware(thunk)))

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxPromise)))

// Old store
// const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer)

export default store
