import React from 'react';

class Features extends React.Component {
    render() {
        return (
            <section className="section-features">
                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-clock"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Checkin-Checkout</h3>
                                <p className="feature-box__text">
                                    checkout - untill 11:00
                                    checkin  - from   15:00
                                </p>
                            </div>
                        </div>
                    
                        
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-todolist-pen"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Amenties</h3>
                                <p className="feature-box__text">
                                    A fully equipped Kitchen. Smart TV and strong WIFI. 
                                    Air Conditioning. Washing machine & dryer.
                                    Espresso machine included as well
                                </p>
                            </div>
                        </div>
                        
                        
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-spread-text"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">House Manual</h3>
                                <p className="feature-box__text">
                                    Everything you need to know on how to operate and activate the house appliences and more.
                                    From electric appliences, phones in needs, the vicinity, and much, much more...
                                </p>
                            </div>
                        </div>
                                                    
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-home"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">House Rules</h3>
                                <p className="feature-box__text">
                                    No Pets <br/>
                                    No Smoking <br/>
                                    No Parties <br/>
                                </p>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Features;