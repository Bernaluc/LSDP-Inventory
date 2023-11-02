import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import TopBar from './components/NavigationBar';

import AddComponent from './pages/AddComponent';
import ViewComponents from './pages/ViewComponents'

import AddWorker from './pages/AddWorkers';
import ViewWorkers from './pages/ViewWorkers';

import AddPart from './pages/AddPart';
import ViewParts from './pages/ViewPart';

import AddArea from './pages/AddArea';
import ViewAreas from './pages/ViewAreas';

import Test from './components/Test';


function App() {
  return (
    <div className="App">
      {/*nav bar*/}
      <TopBar />

      {/*component pages*/}
      <AddComponent />
      <ViewComponents />

     {/*worker pages*/}
      <AddWorker />
      <ViewWorkers />

      {/*part pages*/}
      <AddPart />
      <ViewParts />

      {/*area pages*/}
      <AddArea />
      <ViewAreas />
    </div>
  );
}

export default App;
