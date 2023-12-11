import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Table from '../Tables/DenseTable';
{/*import Cards from '../Cards/PicCards';*/}


const HomePage = () => {
  return (
    <>
    <div style={{ display: 'grid', gridTemplateColumns: '10px 1fr', gap: '100px' }}>
      
      {/* SideBar */}
      <div>
        {/* Sidebar content */}
        <Sidebar />
      </div>

      {/* HomePage */}
      <div>
        {/* Main content of the Homepage */}

        <h1 className='text-center no-underline hover:underline decoration-red-300 decoration-2 text-5xl font-bold text-blue-700 
        hover:cursor-pointer'>HomePage</h1>
        <div className='text-start'>
          <h2 className='mt-10 font-bold text-3xl'>Heading 1:</h2>
          <p className='mt-2 text-lg italic font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolor deleniti vel delectus possimus 
            quisquam sunt saepe maiores, magnam esse adipisci vero, nostrum iste expedita quam autem. Beatae, excepturi alias?
          </p>
        </div>
        <br/>
        <br/> 
        {/*<Cards/>*/}
        <Table/>
        

        {/* Add more content here */}
      </div>
      
    </div>
    </>
  );
};

export default HomePage;