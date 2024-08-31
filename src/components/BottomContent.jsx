import React from 'react';

function BottomContent() {
  // Array of announcement data
  const announcements = [
    {
      id: 1,
      imgSrc: "One of the top club of SRM (1).png",
      title: "Upcoming Seminar",
      description: "Join us for a seminar on AI and Machine Learning this Friday at 3 PM in the main auditorium.",
    },
    {
      id: 2,
      imgSrc: "One of the top club of SRM (2).png",
      title: "Recruitments ongoing",
      description: "Register now recruitments open will close soon.",
    },
    {
      id: 3,
      imgSrc: "library.jpg",
      title: "Library Closed on Monday",
      description: "Due to maintenance work, the library will be closed this Monday. Please plan your visit accordingly.",
    },
    // Add more announcements here if needed
  ];

  return (
    <div className="flex flex-col gap-4">
      {announcements.map((announcement) => (
        <div key={announcement.id} className="card card-compact bg-base-100 w-100 md:w-[500px] shadow-xl">
          <figure>
            <img src={announcement.imgSrc} alt={announcement.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{announcement.title}</h2>
            <p>{announcement.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BottomContent;
