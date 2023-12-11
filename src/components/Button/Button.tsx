import React from 'react'
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import { Layout } from '../Layouts/Layout';

const Button = () => {
  return (
    <Layout>
        <div className="border-b border-gray-200 pb-5 my-4">
          <h3 className="text-base font-semibold leading-6 text-gray-900 ">Button</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          <button
            type="button"
            className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Button text
          </button>
          <button
            type="button"
            className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Button text
          </button>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Button text
          </button>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Button text
          </button>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Button text
          </button>
        </div>
        <br />
        <span className="isolate inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            Years
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            Months
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            Days
          </button>
        </span>
        <br />
        <br />

        <span className="isolate inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Previous</span>
            <BiChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          >
            <span className="sr-only">Next</span>
            <BiChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </span>
        <br />

        <span className="m-2">
          <button type="button" className='bg bg-blue-600 text-white px-2 w-20 h-10 rounded-md hover:bg-blue-700'>Primary</button>
          <button type="button"
            className='bg bg-gray-600 text-white px-2 w-24 h-10 rounded-md m-1 hover:bg-gray-700'>Secondary</button>
          <button type="button"
            className='bg bg-green-800 text-white px-2 w-20 h-10 rounded-md m-0 hover:bg-green-900'>Success</button>
          <button type="button"
            className='bg bg-red-600 text-white px-2 w-20 h-10 rounded-md m-1 hover:bg-red-800'>Danger</button>
          <button type="button"
            className='bg bg-yellow-600 text-black px-2 w-20 h-10 rounded-md m-0 hover:bg-yellow-500'>Warning</button>
          <button type="button" className='bg bg-sky-500 text-black px-2 w-14 h-10 rounded-md m-1 hover:bg-sky-400'>Info</button>
          <button type="button"
            className='bg bg-gray-100 text-black px-2 w-16 h-10 rounded-md m-0 hover:bg-gray-300'>Light</button>
          <button type="button" className='bg bg-black text-white px-2 w-16 h-10 rounded-md m-1 hover:bg-gray-900'>Dark</button>
        </span>
        <br />
    </Layout>
  )
}

export default Button