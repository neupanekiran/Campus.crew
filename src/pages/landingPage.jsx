import React from 'react';

function LandingPage() {
  return (
    <div className="h-screen w-full flex">
      {/* Left Card */}
      <div className="flex w-1/2 h-full justify-center items-center bg-base-300 p-2">
        <div className="card bg-base-100 image-full w-full h-full shadow-xl">
          <figure className="h-full w-full">
            <img
              src="clgimg.png"
              alt="img"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <h3 className="text-3xl p-30"><strong><h3 className="text-7xl p-30">Enhancing </h3>Campus Community and Engagement through a Student-Centric <h3 className="text-6xl p-30" > Digital Platform</h3></strong>
            </h3>

          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="flex w-1/2 h-full justify-center items-center text-neutral-content p-0" >
        <div className="card text-neutral-content w-full h-full flex flex-col items-center justify-center shadow-xl">
          <div className="card-body h-full w-full flex flex-col justify-center items-center text-center">
            <h2 className="card-title text-7xl font-bold mb-6">Get Started!</h2>
            <div className="flex w-full justify-between px-20 align-middle">
              <button className="btn btn-outline btn-info w-60">Login</button>
              <button className="btn btn-outline btn-info w-60">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;