import { SPEND_MONEY } from '../actionTypes';

const INITIAL_STATE = { money: 10000 }

const account = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SPEND_MONEY    :
            
            return {
                money: state.money - action.value,
            }
    
        default:
            return state;
    }
}

export default account;