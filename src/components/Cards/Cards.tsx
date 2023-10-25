import React from 'react'
import { BiChevronRight } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";

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

             {/*Statistic Cards Work Start */}

            <br />
            <br />
            <div >
                <h3 className="text-2xl font-semibold leading-6 text-gray-900 ">Statistic Cards W/Icons</h3>
            </div>

            <div className="border-b border-[1px] border-gray-300 mt-[20px]"></div>
            <br />
            
            {/*Statistic Card 1 With User Icon */}
            <div className='px-4 md:px-10 mx-auto w-full 320:w-1/2'>
                <div className='flex flex-wrap'>
                    <div className='w-full  lg:w-6/12 xl:w-3/12 320:w-1/2 px-4'>
                        <div className='relative flex flex-col min-w-0 break-words bg-white rounded-md mb-6 xl:mb-0 shadow-lg '></div>

                        <div className="flex-auto p-4 shadow-xl shadow-gray-200  rounded-2xl transition ease-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 cursor-pointer">
                            <div className='flex flex-wrap'>
                                <div className='relative w-auto pr-4 max-w-full flex-initial'>
                                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-md border-none bg-indigo-400 bg-opacity-25  transition-transform ease-in-out delay-150 hover:translate-y-0 hover:scale-110 hover:bg-indigo-200 hover:bg-opacity-50 duration-300'>
                                        <svg className='fill-indigo-500 '
                                            xmlns="http://www.w3.org/2000/svg" height="25" width="full" viewBox="0 0 448 512">
                                            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='relative w-auto pl-4 flex-initial'>
                                    <div className='flex items-center'>
                                        <h5 className='text-gray-700 uppercase font font-semibold text-xl hover:underline hover:underline-offset-4 '>8,458</h5>
                                        <span className='text-red-500 ml-2'>
                                            <svg className='fill-red-500 '
                                                xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                        </span>
                                        <span className='text-red-500 ml-2 '>8.1 %</span>
                                    </div>
                                    <span className='whitespace-nowrap text-sm text-gray-400 font-semibold mt-2 hover:underline hover:underline-offset-4'>New Customers</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Statistic Card 2 With Poll Icon */}
                    <div className='w-full lg:w-6/12 xl:w-3/12 320:w-1/2 px-4'>
                        <div className='relative flex flex-col min-w-0 break-words bg-white rounded-md mb-6 xl:mb-0 shadow-lg '></div>

                        <div className="flex-auto p-4 shadow-xl shadow-gray-200  rounded-2xl transition ease-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 cursor-pointer">
                            <div className='flex flex-wrap'>
                                <div className='relative w-auto pr-4 max-w-full flex-initial'>
                                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-md border-none bg-yellow-300 bg-opacity-25  transition-transform ease-in-out delay-150 hover:translate-y-0 hover:scale-110 hover:bg-yellow-200 hover:bg-opacity-20 duration-300'>
                                        <svg className='fill-yellow-500'
                                            xmlns="http://www.w3.org/2000/svg" height="25" widths="full" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z" /></svg>
                                    </div>
                                </div>
                                <div className='relative w-auto pl-4 flex-initial'>
                                    <div className='flex items-center'>
                                        <h5 className='text-gray-700 uppercase font font-semibold text-xl hover:underline hover:underline-offset-4 '>$28.5k</h5>
                                        <span className='text-[#6ee06e] ml-2'>
                                            <svg className='fill-[#6ee06e]'
                                                xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg>
                                        </span>
                                        <span className='text-[#6ee06e] ml-2 '>18.2 %</span>
                                    </div>
                                    <span className='whitespace-nowrap text-sm text-gray-400 font-semibold mt-2 hover:underline hover:underline-offset-4'>Total Profit</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Statistic Card 3 With Arrow-Trend-Up Icon */}
                    <div className='w-full lg:w-6/12 xl:w-3/12 320:w-1/2 px-4'>
                        <div className='relative flex flex-col min-w-0 break-words bg-white rounded-md mb-6 xl:mb-0 shadow-lg '></div>

                        <div className="flex-auto p-4 shadow-xl shadow-gray-200  rounded-2xl transition ease-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 cursor-pointer">
                            <div className='flex flex-wrap'>
                                <div className='relative w-auto pr-4 max-w-full flex-initial'>
                                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-md border-none bg-sky-100 bg-opacity-50  transition-transform ease-in-out delay-150 hover:translate-y-0 hover:scale-110 hover:bg-sky-50 hover:bg-opacity-75 duration-300'>
                                        <svg className='fill-sky-500'
                                            xmlns="http://www.w3.org/2000/svg" height="25" widths="full" viewBox="0 0 576 512"><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" /></svg>
                                    </div>
                                </div>
                                <div className='relative w-auto pl-4 flex-initial'>
                                    <div className='flex items-center'>
                                        <h5 className='text-gray-700 uppercase font font-semibold text-xl hover:underline hover:underline-offset-4 '>2,450k</h5>
                                        <span className='text-red-500 ml-2'>
                                            <svg className='fill-red-500 '
                                                xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                                        </span>
                                        <span className='text-red-500 ml-2 '>25.6 %</span>
                                    </div>
                                    <span className='whitespace-nowrap text-sm text-gray-400 font-semibold mt-2 hover:underline hover:underline-offset-4'>New Transactions</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Statistic Card 4 With Dollar Icon */}
                    <div className='w-full 320:w-1/2 lg:w-6/12 xl:w-3/12 px-4'>
                        <div className='relative flex flex-col min-w-0 break-words bg-white rounded-md mb-6 xl:mb-0 shadow-lg '></div>

                        <div className="flex-auto p-4 shadow-xl shadow-gray-200  rounded-2xl transition ease-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 cursor-pointer">
                            <div className='flex flex-wrap'>
                                <div className='relative w-auto pr-4 max-w-full flex-initial'>
                                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-md border-none bg-[#90ee90] bg-opacity-25  transition-transform ease-in-out delay-150 hover:translate-y-0 hover:scale-110 hover:bg-green-100 hover:bg-opacity-50 duration-300'>
                                        <svg className='fill-[#90EE90]'
                                            xmlns="http://www.w3.org/2000/svg" height="25" widths="full" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" /></svg>
                                    </div>
                                </div>
                                <div className='relative w-auto pl-4 flex-initial'>
                                    <div className='flex items-center'>
                                        <h5 className='text-gray-700 uppercase font font-semibold text-xl hover:underline hover:underline-offset-4 '>$48.2k</h5>
                                        <span className='text-[#6ee06e]] ml-2'>
                                            <svg className='fill-[#6ee06e]'
                                                xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg>
                                        </span>
                                        <span className='text-[#6ee06e] ml-2 '>22.5 %</span>
                                    </div>
                                    <span className='whitespace-nowrap text-sm text-gray-400 font-semibold mt-2 hover:underline hover:underline-offset-4'>Total Revenue</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br />
            <div className="border-b border-[1px] border-gray-300 mt-[20px]"></div>
            <br />
            {/*Statistic Cards Work End */}

        </>



    )
}

export default Cards