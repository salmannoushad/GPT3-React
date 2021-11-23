import React from 'react';


import { Articale, Brand, CTA, NavBar } from './components';
import { Blog, Footer, Possibility, Features, WhatGPT3, Header } from './containers'
import './App.css';

export default function App() {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <NavBar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}
