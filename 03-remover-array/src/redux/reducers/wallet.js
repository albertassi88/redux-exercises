const INITIAL_STATE = {
    wallet: []
}

const walletReducers = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_WALLET':            
            return { ...state, wallet: [ ...state.wallet, action.value ] };

        case 'EXCLUIR_WALLET':            
            return { ...state, wallet: [...state.wallet.filter((item) => item.id !== action.value )] };    
                
        default:
            return state;
    }
}

export default walletReducers;