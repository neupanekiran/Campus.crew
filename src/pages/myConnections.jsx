import React from 'react';
import Navbar from '../components/Navbar';

const connections = [
  { id: '1', name: 'Kachuesh Kushwaha', year: '3rd Year', skills: 'JavaScript, React, Node.js', avatar: 'https://via.placeholder.com/50/0000FF/808080?text=KK' },
  { id: '2', name: 'Jaya Singh', year: '2nd Year', skills: 'Python, Django, SQL', avatar: 'https://via.placeholder.com/50/FF0000/FFFFFF?text=JS' },
  { id: '3', name: 'Kiran Nupane', year: '4th Year', skills: 'Java, Spring Boot, MongoDB', avatar: 'https://via.placeholder.com/50/00FF00/000000?text=KN' },
  { id: '4', name: 'Amit Sharma', year: '1st Year', skills: 'HTML, CSS, JavaScript', avatar: 'https://via.placeholder.com/50/FF5733/FFFFFF?text=AS' },
  { id: '5', name: 'Meera Patel', year: '2nd Year', skills: 'React, Redux, TypeScript', avatar: 'https://via.placeholder.com/50/8E44AD/FFFFFF?text=MP' },
  { id: '6', name: 'Ravi Kumar', year: '3rd Year', skills: 'Java, Spring Boot, MySQL', avatar: 'https://via.placeholder.com/50/3498DB/FFFFFF?text=RK' },
  { id: '7', name: 'Sneha Agarwal', year: '4th Year', skills: 'C++, Python, Machine Learning', avatar: 'https://via.placeholder.com/50/2ECC71/FFFFFF?text=SA' },
  { id: '8', name: 'Amit Gupta', year: '2nd Year', skills: 'Ruby, Rails, PostgreSQL', avatar: 'https://via.placeholder.com/50/F39C12/FFFFFF?text=AG' },
  { id: '9', name: 'Neha Reddy', year: '1st Year', skills: 'Swift, iOS Development', avatar: 'https://via.placeholder.com/50/16A085/FFFFFF?text=NR' },
  { id: '10', name: 'Rajesh Verma', year: '3rd Year', skills: 'Kotlin, Android Development', avatar: 'https://via.placeholder.com/50/1F618D/FFFFFF?text=RV' },
  { id: '11', name: 'Pooja Sharma', year: '2nd Year', skills: 'JavaScript, Node.js, Express', avatar: 'https://via.placeholder.com/50/9B59B6/FFFFFF?text=PS' },
  { id: '12', name: 'Suresh Patel', year: '1st Year', skills: 'Python, Flask, SQL', avatar: 'https://via.placeholder.com/50/FFC300/000000?text=SP' },
  { id: '13', name: 'Aarti Joshi', year: '3rd Year', skills: 'Java, Hibernate, PostgreSQL', avatar: 'https://via.placeholder.com/50/27AE60/FFFFFF?text=AJ' },
  { id: '14', name: 'Ravi Singh', year: '4th Year', skills: 'C#, .NET, Azure', avatar: 'https://via.placeholder.com/50/34495E/FFFFFF?text=RS' },
  { id: '15', name: 'Anita Kumari', year: '2nd Year', skills: 'React Native, Firebase', avatar: 'https://via.placeholder.com/50/E74C3C/FFFFFF?text=AK' },
];


const MyConnections = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6 bg-base-200 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">My Connections</h1>
        <div className="bg-base-100 p-6 rounded-lg shadow-lg">
          {connections.map(connection => (
            <div key={connection.id} className="flex items-center justify-between border-b border-base-300 py-4 last:border-0 hover:bg-base-200 transition-colors duration-300">
              <div className="flex items-center flex-1">
                <img src={connection.avatar} alt={connection.name} className="w-16 h-16 rounded-full mr-6" />
                <div>
                  <h2 className="text-xl font-semibold mb-1">{connection.name}</h2>
                  <p className="text-sm text-gray-700">{connection.year} | {connection.skills}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="btn btn-primary btn-sm">View Details</button>
                <button className="btn btn-secondary btn-sm">Message</button>
                <button className="btn btn-accent btn-sm">Recent Posts</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyConnections;
