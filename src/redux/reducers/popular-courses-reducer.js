const TOGGLE_IS_FETCHING = 'IS_POPULAR_COURSES_FETCHING';
const UPDATE_POPULAR_COURSES = 'UPDATE_POPULAR_COURSES';

const initialState = {
    data: [],
    isFetching: false
};

export const popularCoursesReducer = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: !state.isFetching};
        case UPDATE_POPULAR_COURSES:
            return {...state, data: action.payload};
        default:
            return state;
    }
};

const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});
export const updatePopularCourses = (payload) => ({type: UPDATE_POPULAR_COURSES, payload});

export const getPopularCourses = () => async dispatch => {
    dispatch(toggleIsFetching());
    // const categories = api.getCategories();
};






