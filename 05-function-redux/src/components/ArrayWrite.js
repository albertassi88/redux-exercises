import React from 'react';
import { useDispatch } from 'react-redux';
import numbersAction from '../redux/actions';
import ArrayRead from './ArrayRead';

function ArrayWrite() {

    const dispatch = useDispatch();

    const array = [1, 2, 3, 4];

    const hundleClick = () => {
        dispatch(numbersAction(array));
    };

    return (
        <div>
            <button onClick={ hundleClick }>Enviar Dispatch</button>
            <ArrayRead />
        </div>
    )    
};

export default ArrayWrite;