import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <div>
                    <Route path="/" exact component={HomePage} />
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;