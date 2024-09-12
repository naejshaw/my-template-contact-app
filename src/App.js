import React, { Component } from 'react';
import './App.css';
import ContactForm from './Components/ContactForm';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import ProductsServices from './Components/ProductsServices';
import Testimonials from './Components/Testimonials';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header company={"Clube Siga"}/>
        <div className='App-main'>
          {/*TODO: Implementar as seções de apresentação da empresa, de produtos/serviços, de depoimentos*/}
          <AboutUs />
          <ProductsServices />
          <Testimonials />
          <ContactForm />
        </div>
        <div className='App-footer'>
          {/*TODO: Implementar o footer da página*/}
          <Footer company={"Clube Siga"}/>
        </div>
      </div>
    );
  }
}

export default App;
