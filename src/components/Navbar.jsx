import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navbar() {
  return (
    <div>
      <div className=" fixed navbar bg-base-100">
        <div className="flex-1">
        <Link 
  to="/" 
  className="btn btn-ghost text-xl" 
  style={{ backgroundImage: 'url(/logo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
>Campus.crew
</Link>

        </div>
        <div className="flex-none gap-2">
          {/* Search bar first */}
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>

          {/* New buttons after the search bar */}
          <details className="dropdown">
  <summary className="btn m-1">Connections</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><Link to="/MyConnections" className="btn btn-ghost">MyConnection</Link></li>
    <li><Link to="/Recomended" className="btn btn-ghost">ReccomendedConnections</Link></li>
  </ul>
</details>
          <Link to="/Messages" className="btn btn-ghost">Messages</Link>
          <Link to="/Notifications" className="btn btn-ghost">Notifications</Link>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/Profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><Link to="/Logout" className="btn btn-ghost">Logout</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
