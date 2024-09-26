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
          {/*TODO: Extrair o nome da empresa buscando de um arquivo JSON*/}
          <Header company={datas.name}/>
          <div className='App-main'>
            {/*TODO: Implementar as seções de apresentação da empresa, de produtos/serviços, de depoimentos*/}
            <AboutUs />
            <ProductsServices />
            <Testimonials />
            <ContactForm />
          </div>
          <div className='App-footer'>
            {/*TODO: Implementar o footer da página*/}
            <Footer company={datas.name}/>
          </div>
        </div>
    );
}

export default App;
