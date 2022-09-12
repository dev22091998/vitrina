import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header/>
      <Shop/>
      <Footer/>
    </div>
  );
}

export default App;
