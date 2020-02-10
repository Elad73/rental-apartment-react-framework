import React from 'react';
import RatingStripe from './RatingStripe';

class Reviews extends React.Component {
    render() {
        return (
            <section className="section-reviews">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="../../../img/Tel-Aviv-Beach.mp4" type="video/mp4"></source>
                        <source src="../../../img/Tel-Aviv-Beach.webm" type="video/webm"></source>
                        Your browser is not supported!
                    </video>
                </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-section">
                        Most popular tours
                    </h2>
                </div>
                <div className="row">
                    <div className="review">
                        <figure className="review__shape">
                            <img src="../../../img/reviews/zaki.jpg" alt="Person on a tour" className="review__img"></img>
                            <figcaption className="review__caption">
                                Zaki
                            </figcaption>
                        </figure>
                        <div className="review__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">When honesty meets hospitality!</h3>  
                            <p>
                                "They say honesty is just a lonely word, but Elad practices it from the way he describes the place and the manner he treats his guests. When he discovered there was an issue that could affect the quality of the stay, he immediately communicated it and did everything possible to accommodate us. His place is immaculate and the touches he added to make the guest feels at home are impeccable. <br/>I have not even met Elad and yet I felt his hospitable presence. Thank you! In my book he is a super duper host!"
                            </p>
                        </div>
                        <RatingStripe />
                    </div>
                </div>
                <div className="row">
                    <div className="review">
                        <figure className="review__shape">
                            <img src="../../../img/reviews/andreas.jpg" alt="Person on a tour" className="review__img"></img>
                            <figcaption className="review__caption">
                                Andreas
                            </figcaption>
                        </figure>
                        <div className="review__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Amazing Airbnb apartment.</h3>  
                            <p>
                                "Beautiful sea views and truly felt like a proper home. Great location in Tel-Aviv. Elad was a very kind host and checked in frequently to make sure everything was okay. Highly recommend his apartment."
                            </p>
                        </div>
                        <RatingStripe />
                    </div>
                </div>
                <div className="row">
                    <div className="review">
                        <figure className="review__shape">
                            <img src="../../../img/reviews/dries.jpg" alt="Person on a tour" className="review__img"></img>
                            <figcaption className="review__caption">
                                Dries
                            </figcaption>
                        </figure>
                        <div className="review__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Amazing apartment with a wonderful view!</h3>  
                            <p>
                                "Amazing apartment with a wonderful view! Great host. Would 100% recommend.
                            </p>
                        </div>
                        <RatingStripe />
                    </div>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn btn--light-gold u-backface-hidden">Read all reviews...</a>
                </div>
            </section>
        );
    }
}

export default Reviews;