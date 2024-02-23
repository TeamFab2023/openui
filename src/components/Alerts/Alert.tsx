import React from 'react'
import { AiFillExclamationCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import Layout from '../Layouts/Layout';

const Alert = () => {
  return (
    <Layout>
      <>
        <div className="border-b border-gray-200 pb-5 my-4">
          <h3 className="text-2xl font-bold leading-6 text-gray-900  ">Alert</h3>
        </div>
        <div className="rounded-md bg-yellow-50 p-4 w-25">
          <div className="flex">
            <div className="flex-shrink-0">
              <AiFillExclamationCircle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
                  totam eius aperiam dolorum.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <MdCancel className="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">There were 2 errors with your submission</h3>
              <div className="mt-2 text-sm text-red-700">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Your password must be at least 8 characters</li>
                  <li>Your password must include at least one pro wrestling finishing move</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  mx-auto mt-3 ">
          <div className="h-14  bg-blue-100  flex items-center rounded-md border border-blue-300">
            <p className="ps-5">A simple primary alert—check it out!</p>
          </div>
        </div>

      </>
    </Layout>

  )
}

export default Alert