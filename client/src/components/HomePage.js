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
                                        <div className="card__picture card__picture--1">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--1">Carmel Market</span> 
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>3 day tour</li>
                                                <li>Up to 30 people</li>
                                                <li>2 tour guids</li>
                                                <li>Sleep in cozy hotels</li>
                                                <li>Difficulty: easy</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        No pets allowed
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