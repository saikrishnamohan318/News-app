import thunk from 'redux-thunk';
import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { generalNewsReducer, businessNewsReducer, techNewsReducer, moviesNewsReducer, sportsNewsReducer, userBlogsReducer, searchNewsReducer  } from './reducers/news.reducer';

const intialState = {
    
}
const reducers = combineReducers({
    generalNews: generalNewsReducer,
    businessNews: businessNewsReducer,
    techNews: techNewsReducer,
    moviesNews: moviesNewsReducer,
    sportsNews: sportsNewsReducer,
    userBlogs: userBlogsReducer,
    searchNews: searchNewsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    intialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;