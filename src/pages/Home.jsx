import React from 'react';
import Sidebar from '../components/Sidebar';
import TopCarasoul from '../components/TopCarasoul';
import BottomContent from '../components/BottomContent';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-20 bg-white shadow-lg">
        <Navbar />
      </div>
      
      {/* Main container */}
      <div className="flex h-screen overflow-hidden pt-[60px]">
        {/* Fixed Sidebar */}
        <div className="lg:w-1/4 w-1/5 text-white rounded-box p-4 overflow-auto">
          <Sidebar />
        </div>
        
        {/* Main Content Area */}
        <div className="flex flex-col w-full lg:w-3/4 overflow-auto">
          {/* Fixed Top Carousel */}
          <div className="fixed top-[60px] left-1/5 lg:left-1/4 w-full lg:w-3/4 z-10 bg-white shadow-lg h-[250px]"> {/* Adjust the height here */}
            <div className="card rounded-box h-full">
              <TopCarasoul />
            </div>
          </div>
          
          {/* Content that scrolls */}
          <div className="flex-grow mt-[220px] lg:mt-[210px] p-4"> {/* Adjust the margin to push content below the carousel */}
            <div className="card rounded-box justify-items-start p-10">
              <BottomContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
