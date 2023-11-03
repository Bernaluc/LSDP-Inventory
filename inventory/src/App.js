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

import AddEquipment from './pages/AddEquipment'
import ViewEquipment from './pages/ViewEquipment'

function App() {
  return (
    <div className="App">
      {/*nav bar*/}

      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path='add-component' element={<AddComponent/>} />
          <Route path='view-components' element={<ViewComponents/>} />

          <Route path='add-part' element={<AddPart/>} />
          <Route path='view-parts' element={<ViewParts/>} />

          <Route path='add-equipment' element={<AddEquipment/>} />
          <Route path='view-equipment' element={<ViewEquipment/>} />

          <Route path='add-area' element={<AddArea/>} />
          <Route path='view-areas' element={<ViewAreas/>} />

          <Route path='add-worker' element={<AddWorker/>} />
          <Route path='view-workers' element={<ViewWorkers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
