// we are using react rating documentation 

import React from 'react';
import Rating from 'react-rating';

export function BusinessRating(){
    return (
        <div className="d-flex p-2 bd-highlight">
            <Rating
            initialRating={3}
            readonly />
            <p>744 Reviews</p>
        </div>
    );
}

//  <Rating
//emptySymbol="far fa-star"
//fullSymbol="fas fa-star"
//fractions={2}
//readonly
//initialRating={2}
///>