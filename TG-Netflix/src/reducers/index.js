import { combineReducers } from 'redux';
import showReducer from './showReducer';
import trailerReducer from './trailerReducer';
import playTimeReducer from './playTimeReducer';

export default combineReducers({
    show: showReducer,
    trailer: trailerReducer,
    playTime: playTimeReducer
})