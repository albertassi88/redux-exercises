const INITIAL_STATE = { 
    expenses: [],
  };
  
  const walletReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case 'WALLET_EXPENSES':
      return { ...state, expenses: action.value };  
    
  
    default:
      return state;
    }
  };
  
  export default walletReducers;