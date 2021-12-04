import React from 'react';
import Home from '../../Views/Home/Home';
import DarkMode from './DarkMode';
import Footer from './Footer';
import Header from './Header';

export default function MainLayout() {

    return (
        <>
            <Header/>
            {/* <DarkMode/> */}
            <Home/>
            <Footer/>
        </>
    )
}
