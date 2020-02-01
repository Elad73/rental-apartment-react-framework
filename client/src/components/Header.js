import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="logo-box">
                        <img src="../../../img/CdlR_Logo.png" alt="Logo" className="logo"></img>
                    </div>

                    <div className="text-box">
                        <h1 className="heading-primary">
                            <span className="heading-primary-main">Hayarkon6</span>
                            <span className="heading-primary-sub">you can stop dreaming now</span>
                        </h1>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;