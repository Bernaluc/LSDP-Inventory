import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TopBar from './components/NavigationBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import AddComponent from './pages/AddComponent';
import ViewComponents from './pages/ViewComponents'
import Test from './components/Test';
import ViewAreas from './pages/ViewAreas';
import AddWorker from './pages/AddWorkers';
import ViewWorkers from './pages/ViewWorkers';


function App() {
  return (
    <div className="App">
      {/*nav bar*/}
      <TopBar />

      {/*component pages*/}
      <AddComponent />
      <ViewAreas />

     {/*worker pages*/}
      <AddWorker />
      <ViewWorkers />

      {/*part pages*/}
      <AddPart />
      <ViewParts />

      {/*area pages*/}
      <AddArea />
      {/*<ViewAreas />*/}
    </div>
  );
}

export default App;
