import React from 'react'
import Layout from '../Layouts/Layout'


export default function SpanningTable() {
  return (
 <Layout>
  <span className='font-bold text-xl'>Spanning Table</span>  <br /> <br />
      <div className="grid grid-col-1 ">
        <div className="max-h-[700px] overflow-x-scroll  md:overflow-hidden ">
          <table className=" w-full    ">
            <thead>
              <tr>
                <th colSpan={3} className=" border-b border-gray-300  font-normal p-4 min-w-[200px] text-center" >Details</th>
                <th className=" border-b border-gray-300  font-normal p-4 min-w-[170px] text-end">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-300  font-normal p-4 w-2/5  min-w-[200px] ">Desc</td>
                <td className="border-b border-gray-300  font-normal p-4 w-1/5  min-w-[170px] text-right   ">Qty.</td>
                <td className="border-b border-gray-300  font-normal p-4 w-1/5  min-w-[170px] text-right ">Unit</td>
                <td className="border-b border-gray-300  font-normal p-4 w-1/5  min-w-[170px] text-right  ">Sum</td>
              </tr>

              <tr>
                <td className="border-b border-gray-300 text-left font-normal p-4  min-w-[200px]">Paperclips(Box)</td>
                <td className="border-b border-gray-300 font-normal p-4 text-right min-w-[170px] ">100</td>
                <td className="border-b border-gray-300 font-normal p-4 text-right min-w-[170px] ">1.15</td>
                <td className="border-b border-gray-300 font-normal p-4 text-right min-w-[170px] ">115.00</td>
              </tr>

              <tr>
                <td className="border-b border-gray-300 text-left font-normal p-4  min-w-[200px]">Paper(Case)</td>
                <td className="border-b border-gray-300  font-normal p-4 text-right  min-w-[170px]">10</td>
                <td className="border-b border-gray-300  font-normal p-4 text-right  min-w-[170px]">45.99</td>
                <td className="border-b border-gray-300  font-normal p-4 text-right  min-w-[170px]">459.90</td>
              </tr>

              <tr>
                <td className="border-b border-gray-300 text-left font-normal p-4  min-w-[200px] ">Waste Basket</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px]  ">2</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px]  ">17.99</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px]  ">35.98</td>
              </tr>

              <tr>
                <td className=" text-right font-normal p-4 min-w-[170px] "></td>
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[200px]  ">Subtotal</td>
                <td className="border-b border-gray-300 text-right  font-normal p-4 min-w-[170px]  "></td>
                <td className="border-b border-gray-300 text-right  font-normal p-4  min-w-[170px]">610.88</td>
              </tr>

              <tr>
                <td className=" text-right font-normal p-4  min-w-[170px]"></td>
                <td className="border-b border-gray-300 text-left   font-normal p-4 min-w-[200px]  ">Tax</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px]">7%</td>
                <td className="border-b border-gray-300 text-right  font-normal p-4 min-w-[170px] ">42.76</td>
              </tr>

              <tr>
                <td className="border-b-4 border-gray-300  text-right font-normal p-4 min-w-[200px] "></td>
                <td className="border-b-4 border-gray-300 text-left   font-normal p-4 min-w-[170px] ">Total</td>
                <td className="border-b-4 border-gray-300 text-center font-normal p-4 min-w-[170px] "></td>
                <td className="border-b-4 border-gray-300 text-right  font-normal p-4 min-w-[170px] ">653.64</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
