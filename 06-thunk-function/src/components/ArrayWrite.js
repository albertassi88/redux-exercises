import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchMealThunk from '../redux/actions';
import ArrayRead from './ArrayRead';

function ArrayWrite() {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = () => dispatch(fetchMealThunk(''));
        fetchData('');
    }, [dispatch]);
  

    return (
        <div>
            <ArrayRead />
        </div>
    )    
};

export default ArrayWrite;