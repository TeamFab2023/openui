import React from 'react'
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
import Layout from '../Layouts/Layout';

const Button = () => {
  return (
    <Layout>
      <div className="border-b border-gray-200 pb-5 my-4">
        <h3 className="text-2xl font-bold leading-6 text-gray-900 ">Button</h3>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
        <button
          type="button"
          className="rounded bg-indigo-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
      <br />
      <span className="">
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
      <br />
      <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  ">Primary</button>
      <button type="button" className="text-gray-900 hover:text-white border border-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Secondary</button>
      <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  ">Success</button>
      <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Danger</button>
      <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Warning</button>
      <button type="button" className="text-sky-500 hover:text-white border border-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Info</button>
      <button type="button" className="text-gray-600 hover:text-white border border-gray-400 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Light</button>
      <button type="button" className="text-black hover:text-white border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Dark</button>
      <br />
      <br />
      <button type="button" className="text-white bg bg-gray-500  hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2">
        <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
        </svg>
        Buy now
      </button>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Choose plan
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </button>
      <br />
      <br />
    </Layout>
  )
}

export default Button