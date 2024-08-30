import React from 'react';

function LandingPage() {
  return (
    <div className="h-screen w-full flex">
      {/* Left Card */}
      <div className="flex w-1/2 h-full justify-center items-center bg-base-300 p-2">
        <div className="card bg-base-100 image-full w-full h-full shadow-xl">
          <figure className="h-full w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <h3 className="text-xl"><strong>Enhancing Campus Community and Engagement through a Student-Centric Digital Platform</strong>
            </h3>

          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="flex w-1/2 h-full justify-center items-center bg-neutral text-neutral-content p-0">
        <div className="card bg-neutral text-neutral-content w-full h-full flex flex-col items-center justify-center shadow-xl">
          <div className="card-body h-full w-full flex flex-col justify-center items-center text-center">
            <h2 className="card-title text-3xl font-bold mb-6">Get Started!</h2>
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
