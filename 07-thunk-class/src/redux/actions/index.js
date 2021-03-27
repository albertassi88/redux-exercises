import { fetchEconomia } from '../../services/economiaApi';

const walletAction = (value) => ({
    type: 'WALLET_EXPENSES',
    value,
});


export const fetcheconomiaThunk = () => async (dispatch) => {
    const result = await fetchEconomia();
    dispatch(walletAction(result));
};
