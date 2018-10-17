import {
    combineReducers
} from 'redux';

import headerReducer from '../reducers/header';

const initStore = combineReducers({
    headerReducer
});

export default initStore;