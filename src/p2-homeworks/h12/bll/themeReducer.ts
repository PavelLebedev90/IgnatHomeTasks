
type InitialStateType = {
    theme: Array<'dark' | 'red' | 'some'>
    activeTheme: 'dark' | 'red' | 'some'
}
const initState:InitialStateType = {
    theme: ['dark', 'red', 'some'],
    activeTheme: 'dark'
};

export const themeReducer = (state = initState, action: changeThemeCType): InitialStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
};
type changeThemeCType = {
    type:"CHANGE_THEME",
    payload:{
        activeTheme: 'dark' | 'red' | 'some'
    }
}
export const changeThemeC = (activeTheme:'dark' | 'red' | 'some'): changeThemeCType => {
    return {
        type: "CHANGE_THEME",
        payload:{
            activeTheme,
        }
    }
}; // fix any