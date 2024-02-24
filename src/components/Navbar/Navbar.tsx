// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
      

// <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//   <div className="sm:ml-[150px] max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
  
//   <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>

//     </div>
//   )
// }

// export default Navbar



//correct on samll
// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//       <div className="max-w-screen-xl flex items-center justify-center mx-auto p-4">
//         <ul className="flex justify-between items-center space-x-8 md:space-x-0 md:flex-row">
//           <li>
//             <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//           </li>
//           <li>
//             <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//           </li>
//           <li>
//             <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//           </li>
//           <li>
//             <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-100  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="sm:ml-[150px] max-w-screen-xl flex items-center justify-center mx-auto p-6">
        <ul className="flex justify-between font-medium items-center md:space-x-14 space-x-8 flex-row items-center">
          <li>
            <Link to="/" className="block  rounded bg-transparent text-blue-700 p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
          </li>
          <li>
            <Link to="/about" className="block  text-black rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0 md:dark:hover:text-blue-500 ">About</Link>
          </li>
          <li>
            <Link to="/" className="block text-black rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0 md:dark:hover:text-blue-500">Services</Link>
          </li>
          <li>
            <Link to="/" className="block  text-black rounded hover:bg-gray-100 hover:bg-transparent hover:text-blue-700 p-0 md:dark:hover:text-blue-500  ">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
