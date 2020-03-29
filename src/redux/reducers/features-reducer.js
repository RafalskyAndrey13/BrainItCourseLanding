import {api} from "../../api/api";

const TOGGLE_IS_FETCHING = 'IS_FEATURES_FETCHING';
const UPDATE_FEATURES = 'UPDATE_FEATURES';

const initialState = {
    data: [],
    isFetching: false
};

export const featuresReducer = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: !state.isFetching};
        case UPDATE_FEATURES:
            return {...state, data: action.payload};
        default:
            return state;
    }
};

const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING});
export const updateFeatures = (payload) => ({type: UPDATE_FEATURES, payload});

export const getFeatures = () => async dispatch => {
    dispatch(toggleIsFetching());
    // const categories = api.getCategories();
};






