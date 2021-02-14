import { SPEND_MONEY } from '../actionTypes';

export const hadleSpendMoney = (value) => ({
    type: SPEND_MONEY,
    value,
});