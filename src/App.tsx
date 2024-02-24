
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alert from './components/Alerts/Alert';
import Button from './components/Button/Button';
import Cards from './components/Cards/Cards';
import IconCard from './components/Cards/IconCard';
import PicCards from './components/Cards/PicCards';
import InputField from './components/InputFields/InputField';
import Textarea from './components/Textarea/Textarea';
import BasicTable from './components/Tables/BasicTable';
import DenseTable from './components/Tables/DenseTable';
import StickyHeaderTable from './components/Tables/StickyHeaderTable'
import SpanningTable from './components/Tables/spanningTable'
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/alerts" element={<Alert />} />
        <Route path="button" element={<Button />} />

        {/* <Route path="cards" element={<Cards />}> */}
        <Route path="Cards" element={<Cards />} />
        <Route path="/Cards/IconCard" element={<IconCard />} />
        <Route path="/Cards/PicCards" element={<PicCards />} />
        {/* </Route> */}

        <Route path="inputfields" element={<InputField />} />

        {/* <Route path="tables" element={<Tables />}> */}
        <Route path="/Tables/BasicTable" element={<BasicTable />} />
        <Route path="/Tables/DenseTable" element={<DenseTable />} />
        <Route path="/Tables/StickyHeaderTable" element={<StickyHeaderTable />} />
        <Route path="/Tables/SpanningTable" element={<SpanningTable />} />
        {/* </Route> */}
        <Route path="Textarea" element={<Textarea />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
