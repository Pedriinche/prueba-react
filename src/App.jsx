import React from 'react';
import MiApi from './componentes/MiApi';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Buscador from './componentes/Buscador';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MiApi />
      </div>
      <Footer />
    </div>
  );
};

export default App