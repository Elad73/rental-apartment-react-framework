import React from 'react';

class Tours extends React.Component {
    render() {
        return (
            <section className="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary heading-secondary--light-bronze">
                        Most popular tours
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">Carmel Market</span> 
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>1-2 hour</li>
                                        <li>lots of eating places</li>
                                        <li>5 min from the appartement</li>
                                        <li>Easy walking</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <a href="#" className="btn btn--light-gold">Book now!</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">Rothschild boulevard</span> 
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>2-4 hour</li>
                                        <li>lots of eating places</li>
                                        <li>10 min from the appartement</li>
                                        <li>Medium walking</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <a href="#" className="btn btn--light-gold">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                    <div className="card">
                            <div className="card__side card__side--front">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">Neve Tzedek</span> 
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>2-4 hour</li>
                                        <li>Culture, art and food</li>
                                        <li>10 min from the appartement</li>
                                        <li>Medium walking</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                                <div className="card__cta">
                                    <div className="card__price-box">
                                        <p className="card__price-only">Only</p>
                                        <p className="card__price-value">$297</p>
                                    </div>
                                    <a href="#" className="btn btn--light-gold">Book now!</a>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn btn--light-gold">Discover all tours</a>
                </div>
            </section>
        );
    }
}

export default Tours;