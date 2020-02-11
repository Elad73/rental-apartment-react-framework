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
