import {api} from "../../api/api";

const SET_COURSE = "GET_COURSE_BY_NAME";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

const initialState = {
    course: null,
    isFetching: false,
};

export const currentCourseReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_COURSE:
            return {...state, course: action.course};
        case TOGGLE_FETCHING:
            return {...state, isFetching: !state.isFetching};
        default:
            return state;
    }
};

const setCurrentCourse = (course) => ({type: SET_COURSE, course});
const toggleFetching = () => ({type: TOGGLE_FETCHING});

export const getCourseByName = (name) => async dispatch => {
    dispatch(toggleFetching());
    const response = await api.getCourseByName(name);
    if (response.code === 200){
        dispatch(setCurrentCourse(response.course));
    }
    dispatch(toggleFetching())
};

