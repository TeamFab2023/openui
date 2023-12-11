import React from 'react'
import { Layout } from '../Layouts/Layout'

const PicCards = () => {
  return (
    <Layout>
     <div className="border-b border-gray-200 pb-5 my-4">
      <h3 className="text-base font-semibold leading-6 text-gray-900 ">PIC CARDS</h3>
    </div>
    <br />
   {/*<!-- *************************Main-Section******************************** -->*/}
    <section className=" grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-0 min-[1025px]:grid-cols-2 min-[1260px]:grid-cols-4">
 
 
{/*<!-- *************************1st-Pic-Card******************************** -->*/}
      <section>
    <div className="container xl:py-5 mx-auto sm:pt-10 lg:pt-0">
      <div>
        <div className="p-3">
        <div className="bg-white shadow-xl rounded-xl px-6 grid grid-cols-2">
          <div className="py-3">
            <h2 className="text-lg text-gray-500 font-semibold mt-2">
              Ratings
            </h2>
            <h3
              className="inline-flex items-center rounded-2xl bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-500 ring-0">
              Year Of 2022
            </h3>
            <br />
            <div className="lg:flex  lg:flex-row">
              <h5 className="text-3xl text-gray-500 font-medium mt-9 lg:-ml-3"> 8.14k</h5>
              <h3 className="text-green-400 text-xs lg:mt-12 font-medium lg:ml-2 xl:ml-0">+15.6%</h3>
            </div>
            
          </div>
          <div className="flex justify-end">
            <img src="Image1.jpeg" alt="" className="w-[119px] mt-5 " />
          </div>
        </div>
      </div>
      </div>
      </div>
</section>  

{/*<!-- *************************2nd-Pic-Card******************************** -->*/}
<section >
  <div className="container xl:py-5 mx-auto sm:pt-10 lg:pt-0">
    <div>
      <div className="p-3">
      <div className="bg-white shadow-lg rounded-xl px-6 grid grid-cols-2">
        <div className="py-3">
          <h2 className="text-lg text-gray-500 font-semibold mt-2">
            Sessions
          </h2>
          <h3
            className="inline-flex items-center rounded-2xl bg-lime-50 px-2 py-1 text-xs font-medium text-green-400 ring-0">
            Last Month
          </h3>
          <br />
          <div className="lg:flex lg:flex-row">
            <h5 className="text-3xl text-gray-500 font-medium mt-9 lg:-ml-3"> 12.2k</h5>
            <span className="text-red-400 text-xs lg:mt-12 font-medium lg:ml-2 xl:ml-0">-25.5%</span>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src="Image4.jpeg" alt="" className="w-[101px] mt-5 ml-3 "/>
        </div>
      </div>
    </div>
  </div>
  </div>
</section> 
{/*<!-- *************************3rd-Pic-Card******************************** -->*/}
<section>
  <div className="container xl:py-5 mx-auto">
    <div >
      <div className="p-3">
      <div className="bg-white shadow-lg rounded-xl px-6 grid grid-cols-2">
        <div className="py-3">
          <h2 className="text-lg text-gray-500 font-semibold mt-2">
            Customers
          </h2>
          <h3
            className="inline-flex items-center rounded-2xl bg-orange-50 px-2 py-1 text-xs font-medium text-orange-300 ring-0">
            Daily Custo...
          </h3>
          <br />
          <div className="lg:flex lg:flex-row">
            <h5 className="text-3xl text-gray-500 font-medium mt-9 lg:-ml-3">
              42.4k
            </h5>
            <span className="text-green-400 text-xs lg:mt-12 font-medium lg:ml-2 xl:ml-0">+9.2%</span>
          </div>
         
        </div>
        <div className="flex justify-end">
          <img
            src="Image3.jpeg" alt="" className="w-[105px] mt-5 ml-3  "/>
        </div>
      </div>
    </div>
    </div>
  </div>
</section> 

{/*<!-- *************************4th-Pic-Card******************************** -->*/}
<section >
  <div className="container xl:py-5 mx-auto">
    <div>
      <div className="p-3">
      <div className="bg-white shadow-lg rounded-xl px-6 grid grid-cols-2">
        <div className="py-3">
          <h2 className="text-lg text-gray-500 font-semibold mt-2">
           Total Orders 
          </h2>
          <h3
            className="inline-flex items-center rounded-2xl bg-slate-50 px-2 py-1 text-xs font-medium text-gray-500 ring-0">
            Last Week
          </h3>
          <br />
          <div className="lg:flex lg:flex-row">
            <h5 className="text-3xl text-gray-500 font-medium mt-9 lg:-ml-3">
              4.25k
            </h5>
            <span className="text-green-400 text-xs font-medium lg:mt-12 lg:ml-2 xl:ml-0">+10.8%</span>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src="Image2.jpeg" alt="" className="w-[97px] mt-5 ml-3"/>
        </div>
      </div>
    </div>
    </div>
  </div>
</section> 

 
</section> 
   
</Layout>
  )
}

export default PicCards