import { fetchMeal } from '../../services/MealApi';

export const numbersAction = (value) => ({
    type: 'MEAL',
    value,
});

const fetchMealThunk = () => async (dispatch) => {
    const { meals } = await fetchMeal('');
    dispatch(numbersAction(meals));
};

export default fetchMealThunk;