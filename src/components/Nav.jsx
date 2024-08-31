import React from 'react';

function Nav({ onLogin, onRegister }) {
  return (
    <nav className="fixed top-0 w-full h-24 flex items-center justify-between px-8 bg-gradient-to-b from-gray-800 to-transparent text-white z-50">
      <div className="text-2xl font-semibold font-sans:hover">Campus.Crew</div>
      <div className="space-x-4">
        <button onClick={onLogin} className="bg-white text-gray-800 px-6 py-2 rounded-full transition hover:bg-gray-200">Sign In</button>
        <button onClick={onRegister} className="bg-gray-800 text-white px-6 py-2 rounded-full transition hover:bg-gray-600">Sign Up</button>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-2xl">☰</button>
      </div>
    </nav>
  );
}

export default Nav;
