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
                                    A fully equipped Kitchen. Smart TV and strong WIFI. 
                                    Air Conditioning. Washing machine & dryer.
                                    Espresso machine included as well
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
                                <i className="feature-box__icon icon-basic-compass"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">The neighborhood</h3>
                                <p className="feature-box__text">
                                    A fully equipped Kitchen. Smart TV and strong WIFI. 
                                    Air Conditioning. Washing machine & dryer.
                                    Espresso machine included as well
                                </p>
                            </div>
                        </div>
                                                    
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-home"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">House Rules</h3>
                                <p className="feature-box__text">
                                    A fully equipped Kitchen. Smart TV and strong WIFI. 
                                    Air Conditioning. Washing machine & dryer.
                                    Espresso machine included as well
                                </p>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Features;