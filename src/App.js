import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Table from './Components/Table';
import './styles/Main.scss';

function App() {
  return (
    <div className="app">
      <Navbar/>
        <Header/>
          <Table/>
    </div>
  );
}

export default App;
