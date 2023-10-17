import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from './components/Alerts/Alert';
import Button from './components/Button/Button'
import InputField from './components/InputFields/InputField';
import Textarea from './components/Textarea/Textarea';

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
      <Textarea />
       <InputField/>
    </div>
    </>
  );
}

export default App;
