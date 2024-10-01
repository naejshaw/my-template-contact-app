import React from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import ProductsServices from './Components/ProductsServices';
import Testimonials from './Components/Testimonials';
import datas from './data.json'

function App () {
  const data =  datas
    
    return (
        <div className="App">
          <Header company={data.name}/>
          <div className='App-main'>
            <AboutUs />
            <ProductsServices />
            <Testimonials />
            <ContactForm />
          </div>
          <div className='App-footer'>
            <Footer company={data.name}/>
          </div>
        </div>
    );
}

export default App;
