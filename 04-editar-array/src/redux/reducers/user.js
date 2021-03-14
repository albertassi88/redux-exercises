const INITIAL_STATE = {
    user: [],   
    idItem: 0,
}

const userReducers = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER':
        
            return { ...state,                 
                user: [ ...state.user, action.value ] 
            }

        case 'EDIT':
            return {
                ...state,
                idItem: action.value, 
            } 
            
        case 'SALVE':
            return {
                ...state,      
                user: state.user.map((item) => {                    
                    const { idItem } = state  
                    console.log('1',idItem)
                    console.log('2',item.id)
                    if (item.id === idItem) {
                      return { ...item, ...action.value };
                    }
                    return item;
                  }),
            }    
    
        default:
            return state;
    }
}

export default userReducers;