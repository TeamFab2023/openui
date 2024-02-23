import React from 'react';
import Layout from '../Layouts/Layout';

const Textarea = () => {
  return (
 
    <Layout>
    <section>
    <div className="border-b border-gray-200 pb-5 my-4">
      <h3 className="text-2xl font-bold leading-6 text-gray-900  ">Text Area</h3>
    </div>
    <br />
    <div className="mt-4 mb-4">
    <span className="bg-gray-300 text-black p-2 font-medium text-sm">Text area W/ Icon</span>

      <div className="max-w-lg pt-4 ">
      <label
        htmlFor="message"
        className="block text-base font-semibold text-black-700 mt-3 mb-2"
      >
        Text Area
      </label>
      
      
      <div className=" max-w-md p-6 bg-white rounded-md shadow-md">
      <div
            className="relative  inset-y-0 left-0  pl-3.5 pointer-events-none "
          >
            <svg
            className="absolute  w-5 h-5 mt-6 text-black-500 dark:text-gray-400"
            aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             fill="currentColor"
             viewBox="0 0 20 16">

  <path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z"/>
</svg>
          </div>
      
      <textarea
        id="message"
        name="message"
        
        className="w-full pr-2 pl-10 pt-5 px-3 py-2 border rounded-md focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:ring-opacity-50"
        placeholder="Type something..."
        required
      ></textarea>
      </div>
      
      </div>
    </div>
    </section>
    <br />
    <section>
    <div className="mt-4 mb-4">
    <span className="bg-gray-300 text-black p-2 font-medium text-sm">Simple Text Area </span>
    <label
        htmlFor="message"
        className="block text-base font-semibold text-black-700 mt-3 mb-2"
      >
        Message
      </label>
    <div className=" max-w-md p-6 bg-white rounded-md shadow-md">
      
      <textarea
        id="message"
        name="message"
        
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:ring-opacity-50"
        placeholder="Type your message here..."
        required
      ></textarea>
      </div>
    </div>
    </section>

    </Layout>
  )
}

export default Textarea;