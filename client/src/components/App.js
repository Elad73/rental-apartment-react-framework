import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './pages/PageHome';
import Footer from './Footer';
import Navbar from './Navbar';
import PhotosPage from './pages/PagePhotos';
import Manual from './pages/PageManual';
import Modal from './Modal';

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
                <Modal />
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