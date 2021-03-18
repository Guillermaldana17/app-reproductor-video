import { combineReducers } from 'redux'
import MovieReducer from './MovieReducer';

//exporto un conjunto con todos los reducers de mi app
export default  combineReducers({
    movieReducer: MovieReducer,
});