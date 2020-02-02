import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="header__logo-box">
                        <img src="../../../img/H6_Logo.png" alt="Logo" className="header__logo"></img>
                    </div>

                    <div className="header__text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary--main">Hayarkon6</span>
                            <span className="heading-primary--sub">you can stop dreaming now</span>
                        </h1>
                        <a href="#" className="btn btn--light-gold btn--animated">Explore</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;