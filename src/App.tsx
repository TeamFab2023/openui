import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from './components/Alerts/Alert';
import Button from './components/Button/Button'

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
      {/* <div className="mt-4 flex md:ml-4 md:mt-0">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Edit
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Publish
        </button>
      </div> */}
    </div>
      <Alert />
      <Button />

      <div className="mx-auto max-w-3xl">{/* Content goes here */}</div>
    </div>
    </>
  );
}

export default App;
