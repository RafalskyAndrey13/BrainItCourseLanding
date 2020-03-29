const TOGGLE_IS_FETCHING = 'IS_REVIEWS_FETCHING';
const UPDATE_REVIEWS = 'UPDATE_REVIEWS';

const initialState = {
    data: [],
    isFetching: false
};

export const reviewsReducer = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: !state.isFetching};
        case UPDATE_REVIEWS:
            return {...state, data: action.payload};
        default:
            return state;
    }
};

const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});
export const updateReviews = (payload) => ({type: UPDATE_REVIEWS, payload});

export const getReviews = () => async dispatch => {
    dispatch(toggleIsFetching());
    // const categories = api.getCategories();
};






