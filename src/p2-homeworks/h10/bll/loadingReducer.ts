const initState = {
    loading:false
}
export type StateType = {
    loading:boolean
}
export const loadingReducer = (state:StateType = initState, action: loadingACType): StateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {...state,
                ...action.payload
            }

        default:
            return state
    }
}
type loadingACType = {
    type: 'CHANGE_LOADING',
    payload:{
        loading: boolean
}
}
export const loadingAC = (loading:boolean): loadingACType => {
    return {
        type:'CHANGE_LOADING',
        payload:{
            loading
        }
    }
} // fix any