const initialState={
    list:['Wine', 'Cheese', 'Netflix', 'Code'],
    name: 'Cate'
}

export const UPDATE_LIST = 'UPDATE_LIST'




export default function reducer(state=initialState, action){
    const{type, payload}= action
    switch(type){
        case UPDATE_LIST:
            let list= [...state.list, payload.item]
            return {...state, list}
        default:
            return state
    }
}