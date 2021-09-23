import React from 'react';

const Rating = ({ review }) => {
    review = parseInt(review);
    let arr = [1, 2, 3, 4, 5];
    let stars = arr.map((star) => {
        if (star <= review) {
            return <i className="fa fa-star" key={star}></i>;
        } else {
            return <i className="fa fa-star-o" key={star}></i>;
        }
    });
    return <span className="ps-rating">{stars}</span>;
};

export default Rating;
