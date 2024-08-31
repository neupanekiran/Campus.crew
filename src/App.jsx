import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Import Home component
import Messages from './pages/Messages'; // Import Messages component
import MyConnection from './pages/myConnections.jsx'; // Import MyConnection component
import Profile from './pages/Profile'; // Import Profile component
import Notifications from './pages/Notifications'; // Import Notifications component
import Recomended from './pages/Recomended.jsx';
import LandingPage from './pages/landingPage.jsx';
import Logout from './components/Logout.jsx';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/MyConnections" element={<MyConnection />} />
        <Route path="/Recomended" element={<Recomended />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
