import React from 'react';
import { useSelector } from 'react-redux';

function ArrayRead() {

    const numbers = useSelector((state) => state.numbers.array)

    return (
        <div>
            {numbers.map((array, index) => (
                <p key={ index }>{ array }</p>
            ))}
        </div>
    )    
};

export default ArrayRead;