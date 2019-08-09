// imports

import { actionCreators as userActions } from "../modules/user";

// actions


// action creators


// API actions

function getFeed(){
    return (dispatch, getState) => {
        const { user : { token } } = getState();
        fetch("/images/", {
            headers : {
                "Authorization" : `JWT ${token}`
            }
        })
        .then(response => {
            if (response.status === 401) {
                dispatch(userActions.logout());
            }
            return response.json();
        })
        .then(json => console.log(json));
    }
}


// initial state

const initialState = {};

// reducer

function reducer(state=initialState, action){
    switch(action.type){
        default:
            return state
    }
}

// reducer function


// exports

const actionCreators = {
    getFeed
};

export { actionCreators };

// default reducer export

export default reducer;