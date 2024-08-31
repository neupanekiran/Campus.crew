// src/RecommendedConnections.jsx
import React from 'react';

const recommended = [
  { id: '1', name: 'Alice Johnson', description: 'A passionate developer interested in AI.', avatar: 'https://via.placeholder.com/50' },
  { id: '2', name: 'Bob Brown', description: 'An experienced designer with a knack for UX.', avatar: 'https://via.placeholder.com/50' },
  // Add more recommended connections as needed
];

const RecommendedConnections = () => {
  return (
    <div className="p-4 bg-base-200">
      <h1 className="text-2xl font-bold mb-4">Recommended Connections</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recommended.map(person => (
          <div key={person.id} className="card bg-base-100 shadow-md rounded-lg">
            <figure>
              <img src={person.avatar} alt={person.name} className="w-full h-32 object-cover rounded-t-lg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{person.name}</h2>
              <p>{person.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedConnections;
