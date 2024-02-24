

import PicCards from '../Cards/PicCards';
import IconCard from '../Cards/IconCard';
import StickyHeaderTable from '../Tables/StickyHeaderTable'
import Navbar from '../Navbar/Navbar';
import SpanningTable from '../Tables/spanningTable';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const HomePage = () => {
  return (
    <>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr', gap: '', width: '@media (max-width: 640px)'

      }}>

        {/* SideBar */}
        <div>

          <Sidebar />
        </div>

        {/* HomePage */}
        <div>
          {/* Main content of the Homepage */}
          <Navbar /> <br /> <br/> <br /> <br/>
          <h1 className=' sm:ml-[150px] p-2 text-center no-underline hover:underline decoration-red-300 decoration-2 text-5xl font-bold text-blue-700 
        hover:cursor-pointer'>HOMEPAGE</h1>
          <div className='text-start sm:ml-64 p-3 '>
            <h2 className='mt-10 font-bold text-3xl'>OPENING:</h2>
            <p className='mt-2 text-lg italic font-normal'>
              Welcome to <b>Materialize UI</b> – your ultimate destination for high-quality components that power innovation. At <b>Materialize UI</b>,
              we understand the importance of reliable, top-notch components to fuel your projects. Explore our comprehensive catalog, where each component is meticulously curated to ensure performance, durability, and above all, your satisfaction. Join us on this journey of innovation as we provide the building blocks for your next big idea. </p>
          </div>
          <br />
          <IconCard />
          <br />
         <SpanningTable/>
          <br />
          <PicCards />
          <br />
          <StickyHeaderTable />
          <br />
        </div>
      </div>
      <div>
      </div>
    
    </>
  );
};

export default HomePage;