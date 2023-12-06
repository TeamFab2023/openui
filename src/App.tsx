import React from 'react';
import './App.css';
import Alert from './components/Alerts/Alert';
import Cards from './components/Cards/Cards';
import Button from './components/Button/Button';
import InputField from './components/InputFields/InputField';
import Textarea from './components/Textarea/Textarea';
import IconCard from './components/Cards/IconCard';
import PicCards from './components/Cards/PicCards';
import Tables from './components/Tables/spanningTable';
import Sidebar from './components/Sidebar/Sidebar';




function App() {
  return (
    <>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-5">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Tailwind UI APP

        </h2>
      </div>
    </div>
      <Alert />
      <Button />
      <Cards />
      <IconCard />
      <Textarea />
      <InputField />
      <PicCards />
      <Tables />
      <Sidebar/>

    </div>
    </>
  );
}

export default App;
