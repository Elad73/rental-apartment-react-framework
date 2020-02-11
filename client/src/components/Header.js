import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="header__logo-box">
                        <a href="/"><img src="../../../img/H6_Logo.png" alt="Logo" className="header__logo"></img></a>
                    </div>

                    <div className="header__text-box">
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

export default Header;