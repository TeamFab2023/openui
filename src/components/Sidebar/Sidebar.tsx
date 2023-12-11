import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../Layouts/Layout";

const Sidebar = () => {
    return (
        <Layout>
            <body className="bg-slate-100 " >
                <aside id="sidebar-multi-level-sidebar"
                    className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">

                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
                        <Link to="#" className="flex items-center ps-2.5 mb-5">
                            <svg width="40" fill="none" height="24" viewBox="0 0 268 150" xmlns="http://www.w3.org/2000/svg" className="-ml-2 mr-2">
                                <rect rx="25.1443" width="50.2886" height="143.953" fill="#666CFF" transform="matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)">

                                </rect>
                                <rect rx="25.1443" width="50.2886" height="143.953" fill-opacity="0.4" fill="url(#paint0_linear_7821_79167)" transform="matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"></rect>
                                <rect rx="25.1443" width="50.2886" height="143.953" fill="#666CFF" transform="matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)">

                                </rect><rect rx="25.1443" width="50.2886" height="143.953" fill="#666CFF" transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"></rect>
                                <rect rx="25.1443" width="50.2886" height="143.953" fill-opacity="0.4" fill="url(#paint1_linear_7821_79167)" transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"></rect>
                                <rect rx="25.1443" width="50.2886" height="143.953" fill="#666CFF" transform="matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"></rect><defs>
                                    <linearGradient y1="0" x1="25.1443" x2="25.1443" y2="143.953" id="paint0_linear_7821_79167" gradientUnits="userSpaceOnUse"><stop></stop>
                                        <stop offset="1" stop-opacity="0"></stop></linearGradient>
                                    <linearGradient y1="0" x1="25.1443" x2="25.1443" y2="143.953" id="paint1_linear_7821_79167" gradientUnits="userSpaceOnUse"><stop></stop>
                                        <stop offset="1" stop-opacity="0"></stop></linearGradient></defs></svg>
                            <span className="self-center text-xl font-semibold text-gray-600 ">Materialize</span>
                            <svg className="w-[15px] h-[15px] text-gray-500 ml-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                                    d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                            </svg><svg className="w-[15px] h-[15px] text-slate-400 -ml-2 " aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                                    d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                            </svg>
                        </Link>
                        {/*<!-- ***********************Dashboard******************** -->*/}

                        <section>
                            <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg space-y-2 font-medium ">
                                <svg className="w-[17px] h-[17px] mt-1 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"
                                        d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9" />
                                </svg>
                                <span className="ms-3">Dashboar....</span>
                                <span
                                    className="bg-orange-600 text-white text-xs font-medium me-2 px-2.5 ml-1 py-0.5 rounded-full">New</span>
                                <svg className="w-[15px] h-[13px] pl-2 text-gray-800 " aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"
                                        d="m1 9 4-4-4-4" />
                                </svg>
                            </Link>
                        </section>

                        <br />

                        {/* <!-- *************************  Apps & Pages   ************************* -->*/}
                        <p className="relative w-full mt-2">
                            <span className="absolute inset-0 flex items-center">
                                <span className="w-5 border-t border-slate-300 -ml-2"></span>
                            </span>
                            <span className="relative px-3 ml-3 text-xs text-slate-400">APPS & PAGES</span>
                        </p>


                        {/* <!-- *************************  BUTTON-Li   ************************* -->*/}

                        <section>
                            <Link to="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-10 group space-y-2 font-medium">
                                <svg className="w-[16px] h-[16px] mt-2" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64"
                                    xmlSpace="preserve" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10"
                                            d="M47,48c8.837,0,16-7.163,16-16s-7.163-16-16-16H17 C8.163,16,1,23.163,1,32s7.163,16,16,16H47z">
                                        </path>
                                        <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="47" cy="32"
                                            r="12"></circle>
                                    </g>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap text-gray-500">Buttons</span>
                            </Link>
                        </section>


                        {/* <!-- ************************* ALERT-Li  ************************* -->*/}

                        <section>
                            <Link to="/alerts"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-10 group space-y-2 font-medium">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mt-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>


                                <span className="flex-1 ms-3 whitespace-nowrap text-gray-500">Alerts</span>
                            </Link>
                        </section>

                        {/*<!--*******************  CARDS-LI ********************* -->*/}

                        <ul className="space-y-2 font-medium">
                            <li>
                                <button type="button"
                                    className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 space-y-2 font-medium"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                   {/* <img src="Card.png" alt="" className="w-[16px] h-[16px] mt-2"/>*/}
                                   <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] mt-2" id="_24x24_On_Light_Queue-In" data-name="24x24/On Light/Queue-In" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="view-box" width="24" height="24" fill="none"></rect> <path id="Shape" d="M3.75,19.5A3.75,3.75,0,0,1,0,15.75V6.607A2.607,2.607,0,0,1,2.607,4H4V2.75A2.754,2.754,0,0,1,6.75,0h10A2.753,2.753,0,0,1,19.5,2.75v10a2.752,2.752,0,0,1-2.75,2.75H15.5v1.393A2.607,2.607,0,0,1,12.892,19.5ZM1.5,6.607V15.75A2.25,2.25,0,0,0,3.75,18h9.142A1.108,1.108,0,0,0,14,16.893V15.5H6.75A2.753,2.753,0,0,1,4,12.75V5.5H2.607A1.107,1.107,0,0,0,1.5,6.607Zm4-3.857v10A1.252,1.252,0,0,0,6.75,14h10A1.251,1.251,0,0,0,18,12.75v-10A1.251,1.251,0,0,0,16.75,1.5h-10A1.252,1.252,0,0,0,5.5,2.75ZM9.25,10.5a.75.75,0,1,1,0-1.5h5a.75.75,0,1,1,0,1.5Z" transform="translate(2.25 2.25)" fill="#141124"></path> <path id="Shape-2" data-name="Shape" d="M.75,1.5h5a.75.75,0,0,0,0-1.5h-5a.75.75,0,0,0,0,1.5Z" transform="translate(17.25 8.75) rotate(-180)" fill="#141124" opacity="0.5"></path> </g></svg>
                                        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-gray-500">Cards</span>
                                        <svg className="w-3 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="m1 1 4 4 4-4" />
                                        </svg>
                                </button>
                                <ul id="dropdown-example" className=" py-2 space-y-2 ">
                                    <li className="flex items-center w-full p-2 rounded-lg pl-11  hover:bg-gray-100 text-gray-500">
                                        Simple
                                        Cards
                                    </li>
                                    <li className="flex items-center w-full p-2 rounded-lg pl-11 group hover:bg-gray-100 text-gray-500">
                                        Pic
                                        Cards
                                    </li>
                                    <li className="flex items-center w-full p-2 rounded-lg pl-11 group hover:bg-gray-100 text-gray-500">
                                        Static
                                        Cards
                                    </li>
                                </ul>
                            </li>





                            {/* <!--*******************TEXT-AREA-LI ********************* -->*/}
                            <li>
                                <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-10 group">
                                    <svg  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                        fill="#000000" className="bi bi-textarea-resize w-[15px] h-[15px]">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0">
                                        </g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M.5 4A2.5 2.5 0 0 1 3 1.5h12A2.5 2.5 0 0 1 17.5 4v8a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 12V4zM3 2.5A1.5 1.5 0 0 0 1.5 4v8A1.5 1.5 0 0 0 3 13.5h12a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 15 2.5H3zm11.854 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap text-gray-500">Textarea</span>
                                </Link>
                            </li>

                            {/*<!--*******************INPUT-FIELDS-LI ********************* -->*/}
                            <li>
                                <Link to="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-10 group">

                                    <svg className="w-[16px] h-[16px]" viewBox="0 0 16 16" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        fill="#000000">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fill="#444"
                                                d="M16 5c0-0.6-0.4-1-1-1h-14c-0.6 0-1 0.4-1 1v6c0 0.6 0.4 1 1 1h14c0.6 0 1-0.4 1-1v-6zM15 11h-14v-6h14v6z">
                                            </path>
                                            <path fill="#444" d="M2 6h1v4h-1v-4z"></path>
                                        </g>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap text-gray-500">InputFields</span>
                                </Link>
                            </li>

                            {/*<!--*******************  TABLES-LI ********************* -->*/}
                            <li>
                                <button type="button"
                                    className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                                    <svg className="w-[16px] h-[16px]" viewBox="0 0 64 64" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                        fill="#000000">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title>db-table</title>
                                            <desc>Created with Sketch.</desc>
                                            <defs> </defs>
                                            <g id="64px-Line" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g id="db-table"> </g>
                                                <path
                                                    d="M56,12 C56,9.794 54.206,8 52,8 L10,8 C7.794,8 6,9.794 6,12 L6,54 C6,56.206 7.794,58 10,58 L52,58 C54.206,58 56,56.206 56,54 L56,12 L56,12 Z M30,22 L30,32 L20,32 L20,22 L30,22 L30,22 Z M42,22 L42,32 L32,32 L32,22 L42,22 L42,22 Z M54,22 L54,32 L44,32 L44,22 L54,22 L54,22 Z M18,32 L8,32 L8,22 L18,22 L18,32 L18,32 Z M8,34 L18,34 L18,44 L8,44 L8,34 L8,34 Z M20,34 L30,34 L30,44 L20,44 L20,34 L20,34 Z M30,46 L30,56 L20,56 L20,46 L30,46 L30,46 Z M32,46 L42,46 L42,56 L32,56 L32,46 L32,46 Z M32,44 L32,34 L42,34 L42,44 L32,44 L32,44 Z M44,34 L54,34 L54,44 L44,44 L44,34 L44,34 Z M10,10 L52,10 C53.103,10 54,10.897 54,12 L54,20 L8,20 L8,12 C8,10.897 8.897,10 10,10 L10,10 Z M8,54 L8,46 L18,46 L18,56 L10,56 C8.897,56 8,55.103 8,54 L8,54 Z M52,56 L44,56 L44,46 L54,46 L54,54 C54,55.103 53.103,56 52,56 L52,56 Z"
                                                    id="Shape" fill="#000000"> </path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-gray-500">Tables</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <ul id="dropdown-example" className=" py-2 space-y-2">
                                    <li className="flex items-center w-full p-2 rounded-lg pl-11  hover:bg-gray-100 text-gray-500">
                                        Basic
                                        Table
                                    </li>
                                    <li className="flex items-center w-full p-2 rounded-lg pl-11  hover:bg-gray-100 text-gray-500">

                                        Dense
                                        Table
                                    </li>
                                    <li className="flex items-center w-full p-2 rounded-lg pl-11  hover:bg-gray-100 text-gray-500">
                                        Spanning
                                        Table
                                    </li>
                                    <li className="flex items-center w-full p-2 rounded-lg pl-11  hover:bg-gray-100 text-gray-500">
                                        Sticky
                                        Header Table
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </aside>
            </body>
            </Layout>
    );
}


export default Sidebar ;
