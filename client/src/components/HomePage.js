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
                                "Enjoy spectacular cityscapes from the private sun balcony of this six floor great new building right in the heart of Tel Aviv's best neighborhood, first place to the best beaches of Tel Aviv. 
                                This stunning 2 bedrooms and 2 bathrooms offer guests ideal location and clean and summery decor. 
                                There is a fantastic view. A fully equipped Kitchen. There is a private parking. Smart TV and strong WIFI. AC works perfectly. Washing machine & dryer.
                                Espresso machine included as well." 
                                </p>
                                <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                                <p className="paragraph">
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
                                </p>
                                <a href="#" className="btn-text">Learn more &rarr;</a>
                            </div>
                            <div className="col-1-of-2">
                                
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