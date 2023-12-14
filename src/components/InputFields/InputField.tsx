import React from 'react'
import Layout from '../Layouts/Layout'

const InputField = () => {
  return (
  <Layout>
   
        <section>
        <div className="border-b border-gray-200 pb-5 my-4">
      <h3 className="text-base font-semibold leading-6 text-gray-900 ">Input Fields</h3>
    </div>
    <br />
      {/******************Input Box With Icon********************** */}
      <span className="bg-gray-300 text-black p-2 font-medium text-sm">Input Box W/ Icon</span>
      <div className="max-w-lg p-6">
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label >
        <form className="relative">
          <div
            className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
              />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
              />
            </svg>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-3 py-2 pl-9 border rounded-md focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:ring-opacity-50"
            placeholder="name@example.com"
            required
          />
        </form>
      </div>

      {/******************Simple Input Box**********************/}
      <span className="bg-gray-300 text-black p-2 font-medium text-sm"
        >Simple Input Box
      </span>
      <div className="max-w-lg p-6 rounded-md">
        <form className="space-y-12">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
                >Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="name@example.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>
        </form>
      </div>

      {/*****************Input Box with help message **********************/}
      <span className="bg-gray-300 text-black p-2 font-medium text-sm">
        Input Box W/ Help Message
      </span>
      <div className="max-w-lg p-6 rounded-md">
        <form>
          <label
            htmlFor="example-2"
            className="mb-1 block text-sm font-medium text-gray-900 after:ml-0.5 after:text-red-500 after:content-['*']"
            >Email</label>
          <input
            type="email"
            name="email"
            id="example-2"
            placeholder="name@example.com"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:ring-opacity-50"
            required
          />
          <p className="mt-1 text-sm text-gray-500">This is a help message.</p>
        </form>
      </div>

      {/*****************Input Box with Float Label**********************/}
      <span className="bg-gray-300 text-black p-2 font-medium text-sm"
        >Input Box W/ Float Label</span>
      <div className="max-w-lg p-6 rounded-md">
        <form>
          <div className="relative">
            <input
              type="email"
              id="example-3"
              placeholder=" "
              className="peer block w-full px-3 py-2 rounded-md border focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:ring-opacity-50"
              required
            />
            <label
              htmlFor="example-3"
              className="peer-focus:base absolute left-2 top-0 z-10 -translate-y-2 transform bg-white px-1 text-xs text-gray-500 transition-all peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-sm peer-focus:-translate-y-2 peer-focus:text-xs"
              >Email</label >
          </div>
        </form>
      </div>

      {/*****************Input Box with Float Label (Inside) **********************/}
      <span className="bg-gray-300 text-black p-2 font-medium text-sm"
        >Input Box W/ Float Label (Inside)
      </span>
      <form className="max-w-lg p-6 rounded-md">
        <label
          htmlFor="UserEmail"
          className="relative block rounded-md border px-3 pt-3 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-200"
        >
          <input
            type="email"
            id="UserEmail"
            placeholder="Email"
            className="peer h-8 w-full border-none p-0 placeholder-transparent focus:outline-none focus:ring-0 sm:text-sm"
            required
          />

          <span
            className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
          >
            Email
          </span>
        </label>
      </form>

      {/*****************Input Box with Floating Label (Underline) **********************/}
      <span className="bg-gray-300 text-black p-2 font-medium text-sm"
        >Input Box W/ Floating Label (Underline)
      </span>
      <div className="max-w-lg p-6 rounded-md">
        <form>
          <label
            htmlFor="User-Email"
            className="relative block border-b border-gray-200 bg-transparent pt-3 focus-within:border-gray-600"
          >
            <input
              type="email"
              id="User-Email"
              placeholder="Email"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              required
            />

            <span
              className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
            >
              Email
            </span>
          </label>
        </form>
      </div>

      {/***************** Input Box Sizes**********************/}

      <span className="bg-gray-300 text-black p-2 font-medium text-sm">Input Box Sizes</span>
      <div className="max-w-lg p-6 rounded-md">
        <input
          type="text"
          className="block w-full px-3 py-1 rounded-md border text-xs focus:border-primary-400 focus:ring-2 focus:outline-none focus:ring-primary-200 focus:ring-opacity-50"
          placeholder="Form-Control/Small"
        />
        <br />
        <input
          type="text"
          className="block w-full px-3 py-2 rounded-md border focus:border-primary-400 focus:ring-2 focus:outline-none focus:ring-primary-200 focus:ring-opacity-50"
          placeholder="Form-Control/Default"
        />
        <br />
        <input
          type="text"
          className="block w-full rounded-md border px-3 py-3 text-xl focus:border-primary-400 focus:ring-2 focus:outline-none focus:ring-primary-200 focus:ring-opacity-50"
          placeholder="Form-Control/Large"
        />
      </div>
    </section>
    </Layout>
  )
}

export default InputField