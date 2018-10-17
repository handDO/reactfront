import {
    combineReducers
} from 'redux';

import headerReducer from '../reducers/header';
import projectsReducer from '../reducers/projects';

const initStore = combineReducers({
    headerReducer,
    projectsReducer
});

export default initStore;