import axios from 'axios';

const initialState = {
    user: [],
    friends: [],

}

const GET_USER = 'GET_USER';
const GET_FRIENDS = 'GET_FRIENDS';

export default function reducer( state = initialState, action){
        let { payload } = action;
        // console.log(payload, "payload")
    switch( action.type ){

        case GET_USER + '_FULFILLED':
        return Object.assign( {}, state, { user: payload })

        case GET_FRIENDS + '_FULFILLED':
        return Object.assign({}, state, {friends: payload})

        default: return state;
    }
}

export function getUser(){
    return {
        type: GET_USER,
        payload: axios.get('/getoneuser').then(
            res => { return res.data }
        )
    }
}


export function getFriends(){
    return {
        type: GET_FRIENDS,
        payload: axios.get('/friendvalues').then(
            res => { return res.data }
        )
    }
}

