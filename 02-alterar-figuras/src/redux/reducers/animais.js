const INITIAL_STATE = {
    name: '',
    foto: '',
};

const animailReducers = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'BICHO':            
            return {...state, foto: action.value, name: action.value }
    
        default:
            return state;
    }
}

export default animailReducers;