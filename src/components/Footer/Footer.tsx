import React from 'react';

const Footer = () => {
  return (
    <div className=" overflow-hidden bg-gray-200 text-center py-4 max-w-full bottom-0 w-full fixed">
      <div className="mx-w-auto md:max-w-full md:ml-72 lg:ml-62 xl:ml-96">
        <p className="text-black text-xs font-semibold">
          ©2024. | Designed By: <span className='text-blue-400 font-bold'>Team Fab</span> | All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

