const INITIAL_STATE = {
    array: [],
};

const arrayReducers = ( state=INITIAL_STATE, action ) => {
    switch (action.type) {
        case 'MEAL':
            
            return { ...state, array: action.value };
    
        default:
            return state;
    }
}

export default arrayReducers;