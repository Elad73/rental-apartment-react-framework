import React from 'react';
import About from './About';
import Features from './Features';
import Tours from './Tours';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <About />
                    <Features />
                    <Tours />
                    <section className="section-stories">
                        <h2 className="heading-secondary heading-secondary--light-bronze">
                            Welcome to your dream vacation
                        </h2>
                        <div className="row">
                            <div className="story">
                                <figure className="story__shape">
                                    <img src="../../../img/nat-2-large.jpg" alt="Person on a tour" className="story__img"></img>
                                </figure>
                                <div className="story__text">
                                    <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>  
                                    <p>
                                        dfgsdfg sdfg sdg sd gsdfgsdfgs sdfg sdfg sfgsdfgs fd sfgs sfdgsfgsfgsdfgwert wertw wrew wert  afad 
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