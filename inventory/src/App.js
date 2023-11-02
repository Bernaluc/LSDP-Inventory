import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TopBar from './components/NavigationBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import AddComponent from './pages/AddComponent';
import ViewComponents from './pages/ViewComponents'
import Test from './components/Test';


function App() {
  return (
    <div className="App">
      <TopBar />
      <AddComponent />

    </div>
  );
}

export default App;
