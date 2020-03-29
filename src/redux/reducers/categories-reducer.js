import {api} from "../../api/api";

const TOGGLE_IS_FETCHING = 'IS_CATEGORIES_FETCHING';
const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';

const initialState = {
    data: [],
    isFetching: false
};

export const categoriesReducer = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: !state.isFetching};
        case UPDATE_CATEGORIES:
            return {...state, data: action.payload};
        default:
            return state;
    }
};

const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});
export const updateCategories = (payload) => ({type: UPDATE_CATEGORIES, payload});

export const getCategories = () => async dispatch => {
    dispatch(toggleIsFetching());
    // const categories = api.getCategories();
};






