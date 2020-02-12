import React from 'react';

class RatingStripe extends React.Component {
    render() {
        return (
            <div className="review__rating">
                <i className="review__rating__icon icon-basic-star"></i>
                <i className="review__rating__icon icon-basic-star"></i>
                <i className="review__rating__icon icon-basic-star"></i>
                <i className="review__rating__icon icon-basic-star"></i>
                <i className="review__rating__icon icon-basic-star"></i>
            </div>
        );
    }
}

export default RatingStripe;