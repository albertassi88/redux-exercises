const INITIAL_STATE = {
    array: [],
};

const arrayReducers = ( state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'NUMBERS':
            
            return { ...state, array: [ ...state.array, action.value ] };
    
        default:
            return state;
    }
}

export default arrayReducers;