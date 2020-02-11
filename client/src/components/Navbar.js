import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                <label for="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>   
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="" className="navigation__link"><span>01</span>House photos</a></li>
                        <li className="navigation__item"><a href="" className="navigation__link"><span>02</span>House Manual</a></li>
                        <li className="navigation__item"><a href="" className="navigation__link"><span>03</span>Meet the neighberhood</a></li>
                        <li className="navigation__item"><a href="" className="navigation__link"><span>04</span>How to reach us</a></li>
                    </ul>
                </nav>
            </div>
        );

    }
}

export default Navbar;