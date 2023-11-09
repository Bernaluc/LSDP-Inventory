import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import TopBar from './components/NavigationBar';

import AddComponent from './pages/AddComponent';
import ViewComponents from './pages/ViewComponents'

import AddManufacturer from './pages/AddManufacturer';
import ViewManufacturers from './pages/ViewManufacturers';

import AddPart from './pages/AddPart';
import ViewParts from './pages/ViewPart';

import AddManual from './pages/AddManual';
import ViewManuals from './pages/ViewManuals';

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

          <Route path='add-manual' element={<AddManual/>} />
          <Route path='view-manuals' element={<ViewManuals/>} />

          <Route path='add-manufacturer' element={<AddManufacturer/>} />
          <Route path='view-manufacturers' element={<ViewManufacturers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
