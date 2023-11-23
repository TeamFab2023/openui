import React from 'react'
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import './stickyHeaderTable.css';


export default function BasicTable() {
  return (
    <div className="overflow-hidden ">
      <div className="grid grid-col-1 ">
        <div className=" overflow-y-scroll  max-h-[420px] md:h-screen z-50  ">
          <table className="border-separate border-spacing-0 w-full  border-gray-300   ">
            <thead className="bg-white sticky top-0 ">
              <tr className="">
                <th className="sticky top-0 z-10 border-b border-t border-gray-300 text-left font-normal p-4 min-w-[170px] ">Name</th>
                <th className="sticky top-0 z-10 border-b border-t border-gray-300 text-left  font-normal p-4 min-w-[100px] ">ISO Code
                </th>
                <th className="sticky top-0 z-10 border-b border-t border-gray-300 text-right font-normal p-4 min-w-[170px] ">
                  Population
                </th>
                <th className="sticky top-0 z-10 border-b border-t border-gray-300 text-right font-normal p-4 min-w-[170px] ">
                  Size(km<sup>2</sup>)</th>
                <th className="sticky top-0 z-10 border-b border-t border-gray-300 text-right font-normal p-4 min-w-[170px] ">Density
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">India</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">IN</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">1,324,171,354</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">3,287,263</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">402.82</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">China</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">CN</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">1,403,500,365</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">9,596,961</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">146.24</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">Italy</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">IN</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">60,483,973</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">301,340</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">200.72</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">United States</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">US</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">327,167,434</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">9,833,520</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">33.27</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">Canada</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">CA</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">37,602,103</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">9,984,670</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">3.77</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">Australia</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">AU</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">25,475,400</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">7,692,024</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">3.31</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">Germany</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">DE</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">83,019,200</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">357,578</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">232.17</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">Ireland</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">IE</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">4,857,000</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">70,273</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">69.17</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">Mexico</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">MX</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">126,577,691</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">1972,550</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">334.20</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">Japan</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">JP</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">126,317,000</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">377,973</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">104.61</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">France</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">FR</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">67,022,000</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">640,679</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">4104.61</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">United Kingdom</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">GB</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">67,545,757</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">242,495</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">278.54</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">Russia</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">RU</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">146,793,744</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">17,098,246</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">8.59</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">Nigeria</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">NG</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">200,962,417</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">8,515,767</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">217.55</td>
              </tr>

              <tr className="hover:bg-gray-100">
                <td className="border-b border-gray-300 text-left font-normal p-4 min-w-[170px] ">Brazil</td>
                <td className="border-b border-gray-300 text-left  font-normal p-4 min-w-[100px] ">BR</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">210,147,125</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">8,515,767</td>
                <td className="border-b border-gray-300 text-right font-normal p-4 min-w-[170px] ">24.68</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end items-center gap-x-4 mt-5 sticky bottom-10 z-auto border-b-2   border-gray-400 text-right font-normal  bg-white h-20 ">
          <p className=" ">Rows per page:</p>
          <p>
            <select name="" id="" className="  focus:outline-none focus:bg-gray-200 select">
              <option value="" className="bg-white" >10</option>
              <option value="" className="bg-white">25</option>
              <option value="" className="bg-white">100</option>
            </select>
          </p>
          <span className="">1-10 of 15 </span>
          <span className=" text-2xl text-gray-600 hover:bg-gray-200 hover:rounded-full cursor-pointer"><BiChevronLeft /></span>
          <span className=" text-2xl text-gray-600 me-8  hover:bg-gray-200 hover:rounded-full cursor-pointer"><BiChevronRight /></span>
        </div>
      </div>
    </div >
  )
}
