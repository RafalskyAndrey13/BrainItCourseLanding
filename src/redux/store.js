import { reducer as form } from 'redux-form';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {categoriesReducer} from "./reducers/categories-reducer";
import {appReducer} from "./reducers/app-reducer";
import {reviewsReducer} from "./reducers/reviews-reducer";
import {popularCoursesReducer} from "./reducers/popular-courses-reducer";
import {signReducer} from "./reducers/sign-reducer";
import {featuresReducer} from "./reducers/features-reducer";
import {currentCourseReducer} from "./reducers/current-course-reducer";

let reducers = combineReducers({
    form,
    categories: categoriesReducer,
    reviews: reviewsReducer,
    popularCourses: popularCoursesReducer,
    features: featuresReducer,
    app: appReducer,
    user: signReducer,
    currentCourse: currentCourseReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;