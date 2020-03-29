import {api} from "../../api/api";
import {updateCategories} from "./categories-reducer";
import {updateReviews} from "./reviews-reducer";
import {updatePopularCourses} from "./popular-courses-reducer";
import {setCurrentUser} from "./sign-reducer";
import {updateFeatures} from "./features-reducer";

const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

const initialState = {
    isFetching: false
};

export const appReducer = (state=initialState, action) => {
    switch(action.type){
        case TOGGLE_FETCHING:
            return {...state, isFetching: !state.isFetching};
        default:
            return state;
    }
};

export const toggleFetching = () => ({type: TOGGLE_FETCHING});

export const loadInitData = () => async dispatch => {
    dispatch(toggleFetching());
    dispatch(setCurrentUser(localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null));
    const data = await api.getInitialData();
    dispatch(updateCategories(data.categories));
    dispatch(updateReviews(data.reviews));
    dispatch(updatePopularCourses(data.popularCourses));
    dispatch(updateFeatures(data.features));
    dispatch(toggleFetching());
};


