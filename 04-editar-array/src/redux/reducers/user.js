const INITIAL_STATE = {
    user: [], 
    userID: 0,  
    editor: false,
    idToEdit: null,
}

const userReducers = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER':
            const contador = { ...action.value, id: state.userID }
            return { ...state,                 
                user: [ ...state.user, contador ], 
                userID: state.userID + 1,
            }

        case 'EDIT':
            return {
                ...state,
                editor: true,
                idToEdit: action.value, 
            } 
            
        case 'SALVE':
            const { idToEdit } = state  
            return {
                ...state,    
                editor: false,  
                idToEdit: null,
                user: state.user.map((item) => {             
                    if (item.id === idToEdit) {
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