
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
import BasicTable from './components/Tables/BasicTable';
import DenseTable from './components/Tables/DenseTable';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>

            <Route path="sidebar" element={<Sidebar />} />
            <Route path="alerts" element={<Alert />} />
            <Route path="button" element={<Button />} />

            <Route path="cards" element={<Cards />}>
              <Route path="IconCard" element={<IconCard />} />
              <Route path="PicCards" element={<PicCards />} />
            </Route>

            <Route path="inputfields" element={<InputField />} />

            <Route path="tables" element={<Tables />}>
              <Route path="BasicTable" element={<BasicTable />} />
              <Route path="DenseTable" element={<DenseTable />} />
            </Route>

            <Route path="Textarea" element={<Textarea />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
