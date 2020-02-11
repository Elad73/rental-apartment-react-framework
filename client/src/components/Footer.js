import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__logo-box">
                    <img src="../../../img/logo/CdlR_Logo.png" alt="Logo" className="footer__logo"></img>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><a href="#" className="footer__link">Photos</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Transportation</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">House Manual</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Neighberhood</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer__copyright u-center-text">
                            Built by <a href="#" className="footer__link">MoonDragon inc.</a> 
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;