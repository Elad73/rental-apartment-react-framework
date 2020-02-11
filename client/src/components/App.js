import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/PageHome';
import Footer from './Footer';
import Navbar from './Navbar';
import PhotosPage from './pages/PagePhotos';
import Manual from './pages/PageManual';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Navbar />
                <Header />
                <div>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/photos" exact component={PhotosPage} />
                    <Route path="/manual" exact component={Manual} />
                </div>
                <Footer />
                <div className="modal">
                    <div className="modal__content">
                        <div className="modal__left">
                            <img className="modal__img" src="../../../img/nat-4.jpg" alt="no pets"/>
                            <img className="modal__img" src="../../../img/nat-5.jpg" alt="no smoking"/>
                        </div>
                        <div className="modal__right">
                            <h2 className="heading-secondary u-margin-bottom-medium">Start booking now</h2>
                            <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; please read these temrs before booking</h3>
                            <p className="modal__text">
                                dlfsgsldfgkjsldfkgj sldfgk slfkg jsldfkg sldkfg sl kjlsdk fg
                                sdfglk sldfkg slf lsdk lsdkfjg lsdkfg lsdkf lsdkfgj lsdkfg sdfglklskf listsdlfk
                                slfdkgj slkdf lskdf  sldfkjg slkf lskfg toweirutowirtowiru jskfjgskfdjghiertuoweirut
                                owiertowiurtoiwur skdfjghskdjfgh wioert 
                            </p>
                            <a href="#" className="btn btn--light-gold">Book now</a>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;


{/* <ul className="modal__photos-list">
    <img className="modal__phto-item" src="../../../img/hero.jpg" alt="no pets"/>
    <img className="modal__phto-item" src="../../../img/hero.jpg" alt="no pets"/>
    <img className="modal__phto-item" src="../../../img/hero.jpg" alt="no pets"/>
</ul>
<p className="modal__text">
    <ul className="modal__text-list">
        <li className="modal__text-item">No pets allowed</li>
        <li className="modal__text-item">No parties allowed</li>
        <li className="modal__text-item">No smoking allowed</li>
    </ul>
</p> */}