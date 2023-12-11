import React from 'react';
import './App.css';
import Alert from './components/Alerts/Alert';
import Cards from './components/Cards/Cards';
import Button from './components/Button/Button';
import InputField from './components/InputFields/InputField';
import Textarea from './components/Textarea/Textarea';
import IconCard from './components/Cards/IconCard';
import Tables from './components/Tables/spanningTable';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PicCards from './components/Cards/PicCards';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<HomeLayout />}></Route> */}
          <Route path="/alerts" element={<Alert />}></Route>
          <Route path="/cards" element={<Cards />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
