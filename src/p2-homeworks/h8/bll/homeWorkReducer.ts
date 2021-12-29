import {UserType} from '../HW8';
type ActionType = sortType | checkType
type sortType = {
    type: string
    payload: string
}
type checkType = {
    type:string
    payload:number
}
export const homeWorkReducer = (state: UserType, action: ActionType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
           if(action.payload === 'up'){
               return [...state.sort((a,b)=>a.name > b.name? 1:-1)]
           }
            return [...state.sort((a,b)=>a.name > b.name? -1: 1)]
        }
        case 'check': {
            // need to fix
            return state.filter(f=>f.age >= action.payload);
        }
        default: return state
    }
}