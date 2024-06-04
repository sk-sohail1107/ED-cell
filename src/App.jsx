import React from 'react'
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Aboutus from './components/about-us/Aboutus';
import Events from './components/events/Events';
import Gallery from './components/gallery/Gallery';
import TeamMem from './components/team/TeamMem';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';



function App(){
    return (    
        <>
            <Header/>
            <Banner/>
            <Aboutus/>
            <Events/>
            <Gallery/>
            <TeamMem/>
            <Contact/>
            <Footer/>
        </>
      )
}

export default App
