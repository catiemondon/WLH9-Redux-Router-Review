import {createStore} from 'redux'

const initialState={
    list:['Wine', 'Cheese', 'Netflix', 'Code']
}

export const UPDATE_LIST = 'UPDATE_LIST'




function reducer(state=initialState, action){
    const{type, payload}= action
    switch(type){
        case UPDATE_LIST:
            
            return {...state, list: [...state.list, payload]}
        default:
            return state
    }
}

export default createStore(reducer)