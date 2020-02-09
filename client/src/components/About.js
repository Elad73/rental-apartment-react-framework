import React from 'react';

class About extends React.Component {
    render() {
        return (
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
                            Enjoy spectacular cityscapes from the private sun balcony of this six floor great new building right in the heart of Tel Aviv's best neighborhood, first place to the best beaches of Tel Aviv. <br/>
                            This stunning 2 bedrooms and 2 bathrooms offer guests ideal location and clean and summery decor. 
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
        );
    }
}

export default About;