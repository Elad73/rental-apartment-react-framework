import React from 'react';

class Hero extends React.Component {
    render() {
        return (
            <div>
                <header className="hero">
                    <div className="hero__logo-box">
                        <a href="/"><img src="../../../img/logo/CdlR_Logo.png" alt="Logo" className="hero__logo"></img></a>
                    </div>

                    <div className="hero__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">Casa de la Ron</span>
                            <span className="heading-primary--sub">you can stop dreaming now</span>
                        </h1>
                        <a href="#welcome" className="btn btn--light-gold btn--animated u-backface-hidden">Explore</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default Hero;