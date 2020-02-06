import React from 'react';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <section className="section-about">
                        <div className="u-center-text u-margin-bottom-8">
                            <h2 className="heading-secondary">
                                It's all about the view
                            </h2>
                        </div>
                            <div className="row">
                            <div className="col-1-of-2">col-1-of-2</div>
                            <div className="col-1-of-2">col-1-of-2</div>
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