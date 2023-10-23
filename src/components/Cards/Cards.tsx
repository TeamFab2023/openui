import React from 'react'
import { BiChevronRight} from "react-icons/bi";
import { BiChevronLeft} from "react-icons/bi";

const Cards = () => {
  return (
    <>    
      <div className="border-b border-gray-200 pb-5 my-4 mt-[30px]">
      <h3 className="text-[30px] font-semibold leading-6 text-gray-900 ">Cards</h3>
    </div>
    {/* Card 1 */}
    <div className="w-[18rem] box-border border-[1px] border-gray-200 rounded-md flex-grow flex-shrink">
        {/* <!-- <img src="..." alt="..." className="bg-gray-400 p-[70px]"> --> */}
        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="35%" y="50%" fill="#dee2e6" dy=".3em">Image
                cap</text>
        </svg>
        <div className="p-[15px]">
            <h3 className="text-[20px] font-[600]">Card title</h3>
            <p className="w-[95%] mt-[4px]">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <button className="mt-[15px] text-white bg-blue-600 hover:bg-blue-700 p-[7px] rounded-lg px-3">
                <a href="#">Go Somewhere</a>
            </button>
        </div>
    </div>
        <div className="border-b border-[1px] border-gray-300 mt-[20px]"></div>
   

    
    {/* Card 2 */}
    <div
        className="box-border border-[1px] border-gray-200 rounded-md flex-grow flex-shrink mt-[30px] ml-[10%] mr-[10%] p-[20px]">
        <div className="">
            This is some text within a card body.
        </div>
    </div>
    <div className="border-b border-[1px] border-gray-300 mt-[20px]"></div>

   
   {/* Card 3 */}
    <div className="w-[18rem] box-border border-[1px] border-gray-200 rounded-md flex-grow flex-shrink mt-[30px]">
        <div className="p-[15px]">
            <h3 className="text-[20px] font-[600]">Card title</h3>
            <h3 className="text-[16px] font-[600] text-gray-600">Card title</h3>
            <p className="w-[95%] mt-[4px]">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" className="text-blue-700 underline hover:no-underline">Card link</a>
            <a href="#" className="text-blue-700 underline ml-[10px] hover:no-underline">Another link</a>
        </div>
    </div>
    <div className="border-b border-[1px] border-gray-300 mt-[20px]"></div>


   
   {/* Card 4 */}
    <div className="w-[18rem] box-border border-[1px] border-gray-200 rounded-md flex-grow flex-shrink mt-[30px]">
        <div className="gird grid-cols-5">
            <div className="border-b-[1px] p-[8px] bg-gray-100">
                Featured
            </div>
            <ul>
                <li className="border-b-[1px] p-[7px]">An item</li>
                <li className="border-b-[1px] p-[7px]">A second item</li>
                <li className="border-b-[1px] p-[7px]">A third item</li>
            </ul>
        </div>
    </div>
    <div className="border-b border-[1px] border-gray-300 mt-[20px]"></div>



    {/* Card 5 */}
    <div className="w-[18rem] box-border border-[1px] border-gray-200 rounded-md flex-grow flex-shrink mt-[30px]">
        {/* <!-- <img src="..." alt="..." class="bg-gray-400 p-[70px]"> --> */}
        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="35%" y="50%" fill="#dee2e6" dy=".3em">Image
                cap</text>
        </svg>
        <div className="p-[15px]">
            <h3 className="text-[20px] font-[600]">Card title</h3>
            <p className="w-[95%] mt-[4px]">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            </div>
            <div className="gird grid-cols-5">
                <ul>
                    <li className="border-b-[1px] border-t-[1px] p-[7px]">An item</li>
                    <li className="border-b-[1px] p-[7px]">A second item</li>
                    <li className="border-b-[1px] p-[7px]">A third item</li>
                </ul>
            </div>
            <div className="p-[15px]">
                <a href="#" className="text-blue-700 underline hover:no-underline">Card link</a>
                <a href="#" className="text-blue-700 underline ml-[10px] hover:no-underline">Another link</a>
            </div>
        </div>
        <div className="border-b border-[1px] border-gray-300 mt-[20px]"></div>

  </>
  )
}

export default Cards