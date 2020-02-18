import React from 'react';
import About from '../About';
import Features from '../Features';
import Tours from '../Tours';
import Reviews from '../reviews/Reviews';
import Hero from '../Hero';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <Hero />
                    <About />
                    <Features />
                    <Tours />
                    <Reviews />
                </main>
            </div>
        );
    }
}

export default HomePage;