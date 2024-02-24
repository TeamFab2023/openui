import React from 'react';

const Footer = () => {
  return (
    <div className=" overflow-hidden bg-gray-200 text-center py-4 max-w-full bottom-0 w-full fixed">
      <div className="sm:ml-[150px] max-w-screen-xl flex items-center justify-center mx-auto p-1">
        <p className="text-black text-sm font-semibold">
          ©2024. | Designed By: <span className='text-blue-400 font-bold'>Team Fab</span> | All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

