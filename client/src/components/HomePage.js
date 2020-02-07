import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <section className="section-about">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary heading-secondary--light-bronze">
                                Welcome to your dream vacation
                            </h2>
                        </div>
                            <div className="row">
                            <div className="col-1-of-2">
                                <h3 className="heading-tertiary u-margin-bottom-small">Best view close to everything...</h3>
                                <p className="paragraph">
                                    <div>Enjoy spectacular cityscapes from the private sun balcony of this six floor great new building right in the heart of Tel Aviv's best neighborhood, first place to the best beaches of Tel Aviv. </div>
                                    <div>This stunning 2 bedrooms and 2 bathrooms offer guests ideal location and clean and summery decor. </div>
                                    There is a fantastic view.
                                </p>
                                <a href="#" className="btn-text">Learn more &rarr;</a>
                            </div>
                            <div className="col-1-of-2">
                                <div className="composition">
                                    <img src="../../../img/nat-2-large.jpg" alt="photo 2" className="composition__photo composition__photo--p1"></img>
                                    <img src="../../../img/nat-3-large.jpg" alt="photo 3" className="composition__photo composition__photo--p2"></img>
                                    <img src="../../../img/nat-1-large.jpg" alt="photo 1" className="composition__photo composition__photo--p3"></img>
                                </div>
                            </div>
                        </div>
                    </section>
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
                </main>
            </div>



            // <div>
            //     <section>
            //         <div className="row">
            //             <div className="col-1-of-2">col-1-of-2</div>
            //             <div className="col-1-of-2">col-1-of-2</div>
            //         </div>
            //         <div className="row">
            //             <div className="col-1-of-3">col-1-of-3</div>
            //             <div className="col-1-of-3">col-1-of-3</div>
            //             <div className="col-1-of-3">col-1-of-3</div>
            //         </div>
            //         <div className="row">
            //             <div className="col-1-of-3">col-1-of-3</div>
            //             <div className="col-2-of-3">col-2-of-3</div>
            //         </div>
            //     </section>
            // </div>
           
        );
    }
}

export default HomePage;