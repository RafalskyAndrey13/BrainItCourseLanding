import {api} from "../../api/api";

const initialState = {
    user: null,
    isSuccessful: false,
    isLoading: false,
    errorMessage: null
};

const SET_SUCCESSFUL = "SET_SUCCESSFUL";
const SET_CURRENT_USER = "SET_CURRENT_USER";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const RESET = "RESET";
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

export const signReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SUCCESSFUL:
            return {...state, isSuccessful: true};
        case SET_CURRENT_USER:
            console.log("set");
            localStorage.setItem("currentUser", JSON.stringify(action.user));
            return {...state, user: action.user};
        case SET_ERROR_MESSAGE:
            return {...state, errorMessage: action.error};
        case TOGGLE_FETCHING:
            return {...state, isLoading: !state.isLoading};
        case RESET:
            return {...state, errorMessage: null, isSuccessful: false};
        default:
            return state;
    }
};

const setSuccessful = () => ({type: SET_SUCCESSFUL});
export const setCurrentUser = (user) => ({type: SET_CURRENT_USER, user});
const setErrorMessage = (error) => ({type: SET_ERROR_MESSAGE, error});
const toggleFetching = () => ({type: TOGGLE_FETCHING});
const reset = () => ({type: RESET});

export const loginUserWithEmail = (email, password) => async dispatch => {
    dispatch(toggleFetching());
    const response = await api.signInWithEmail(email, password);
    if (response.code === 200){
        dispatch(setCurrentUser(response.user));
        dispatch(setSuccessful())
    }else{
        dispatch(setErrorMessage(response.error));
    }
    dispatch(toggleFetching());
};

export const signOut = () => async dispatch => {
    dispatch(toggleFetching());
    const response = await api.logOut();
    console.log(response);
    if (response.code === 200){
        dispatch(setCurrentUser(null));
    }else{
        console.log(response.error);
        dispatch(setErrorMessage(response.error));
    }
    dispatch(toggleFetching())
};

export const registerUserWithEmail = (email, name, surname, password) => async dispatch => {
    dispatch(toggleFetching());
    const response = await api.createUserWithEmail(email, password, name, surname);
    console.log(response);
    if (response.code === 200){
        dispatch(setCurrentUser(response.user));
        dispatch(setSuccessful())
    }else{
        dispatch(setErrorMessage(response.message));
    }
    dispatch(toggleFetching());
};

export const loginUserWithGoogle = () => async dispatch => {
    dispatch(toggleFetching());
    const response = await api.signInWithGoogle();
    if (response.code === 200){
        dispatch(setCurrentUser(response.user));
        dispatch(setSuccessful());
    }else{
        dispatch(setErrorMessage(response.error));
    }
    dispatch(toggleFetching());
};

export const loginUserWithFacebook = () => async dispatch => {
    dispatch(toggleFetching());
    const response = await api.signInWithFacebook();
    if (response.code === 200){
        dispatch(setCurrentUser(response.user));
        dispatch(setSuccessful());
    }else{
        dispatch(setErrorMessage(response.error));
    }
    dispatch(toggleFetching());
};

export const resetState = () => async dispatch => {
    dispatch(reset());
};

export const resetPasswordWithEmail = (email) => async dispatch => {
    dispatch(toggleFetching());
    const response = await api.resetPasswordByEmail(email);
    if (response.code === 200){
        dispatch(setSuccessful())
    }else{
        dispatch(setErrorMessage(response.error));
    }
    dispatch(toggleFetching());
};

export const confirmPasswordReset = (code, newPassword) => async dispatch => {
    dispatch(toggleFetching());
    const response = await api.confirmPasswordReset(code, newPassword);
    if (response.code === 200){
        dispatch(setSuccessful());
    }else{
        dispatch(setErrorMessage(response.error));
    }
    dispatch(toggleFetching());
};
