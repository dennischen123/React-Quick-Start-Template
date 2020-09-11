import React from 'react';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import SampleContextProvider from './contexts/SampleContext';
import Router from './Router';


function App() {
  return (
    <div className='App'>
      <Header></Header>
      <SampleContextProvider>
        <Router></Router>
      </SampleContextProvider>
      <Footer>
        <h2>Footer</h2>
      </Footer>
    </div>
  );
}

export default App;
