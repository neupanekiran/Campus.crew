import React from "react";
import { FaHashtag, FaVolumeUp, FaVolumeMute, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  // Define your channel names here
  const channels = [
    "Liftoff",
    "Cherry",
    "Redbull",
    // Add more channels as needed
  ];

  return (
    <div className="h-screen w-72 bg-grey-100 text-black flex flex-col p-4 space-y-4 shadow-lg rounded-r-xl">
      {/* Server Name */}
      <div className=" p-3 text-center font-bold">
      <button className="btn btn-active btn-ghost">Create a page</button>
      </div>

      {/* Channel List */}
      <div className="flex-1 overflow-y-auto">
        {/* Channels List */}
        <div className="space-y-2">
          <div className="text-sm font-semibold">Channels</div>
          <div className="space-y-1">
            {channels.map((channel, index) => (
              <button
                key={index}
                className="btn btn-ghost btn-sm w-full text-left justify-start hover:bg-blue-700 transition duration-200 rounded-md"
              >
                <FaHashtag className="inline mr-2" /> <span>{channel}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Controls 
      <div className="flex items-center space-x-3 p-2 bg-blue-800 rounded-lg">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-xl text-white">
            U
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-md font-bold">Username</div>
          <div className="text-xs text-gray-300">#1234</div>
        </div>
        <button className="ml-auto btn btn-ghost btn-xs text-gray-300 hover:text-white transition duration-200">
          <FaCog />
        </button>
      </div>*/}
    </div>
  );
};

export default Sidebar;
