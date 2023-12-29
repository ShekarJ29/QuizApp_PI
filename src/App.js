//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Start from './components/start/Start';
import * as Constants from './components/Data'

export default function App() {
  return (
    <div className="App">
      <Header title={Constants.HEADER_TITLE} />
      <Start />
      <Footer note={Constants.FOOTER_NOTE} />
    </div>
  );
}
