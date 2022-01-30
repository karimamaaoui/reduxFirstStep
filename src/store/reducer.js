import counterReducer from './counterReducer'
import loggedReducer from './loggedReducer'

// bch najma3 les reducers netsatml combineReducer
import { combineReducers } from 'redux'

const reducers =combineReducers({
    counter:counterReducer,
    logged:loggedReducer
});

export default reducers;
