import React from 'react';
import { useSelector } from 'react-redux';

function ArrayRead() {

    const meal = useSelector((state) => state.meal.array)

    return (
        <div>
            {meal.map((item, index) => (
               <p key={ index }>{ item.strMeal }</p>
            ))}
        </div>
    )    
};

export default ArrayRead;