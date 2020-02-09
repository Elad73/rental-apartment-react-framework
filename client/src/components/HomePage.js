import React from 'react';
import About from './About';
import Features from './Features';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <About />
                    <Features />
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
                                        Text something...
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        Back
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-1-of-3">
                                
                            </div>
                            <div className="col-1-of-3">
                               
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