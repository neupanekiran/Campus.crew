import React from 'react';

function TopCarasoul() {
  return (
    <div className="carousel carousel-center rounded-box w-full">
      {/* Carousel item 1 */}
      <div id="item1" className="carousel-item w-full flex justify-center space-x-4 px-4 py-2">
        <div className="card bg-base-100 image-full flex-1 max-w-sm p-4">
          <figure>
            <img src="logbg.jpg" alt="Campus Event" className="w-full h-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Upcoming Seminar</h2>
            <p>Join us for an insightful seminar on the latest trends in technology, hosted by industry experts.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full flex-1 max-w-sm p-4">
          <figure>
            <img src="library.jpg" alt="Exam Schedule" className="w-full h-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Exam Schedule</h2>
            <p>Check out the latest updates and timetable for the upcoming exams. Stay prepared!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Schedule</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full flex-1 max-w-sm p-4">
          <figure>
            <img src="logbg.jpg" alt="Club Meeting" className="w-full h-full object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Club Meetings</h2>
            <p>Participate in various club meetings and events happening around the campus. Get involved!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Join Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel item 2 */}
      <div id="item2" className="carousel-item w-full flex justify-center space-x-4 px-4 py-2">
        <div className="card bg-base-100 image-full flex-1 max-w-sm p-4">
          <figure>
            <img
              src="logbg.jpg"
              alt="Scholarship Opportunity"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Scholarship Opportunity</h2>
            <p>Apply for the latest scholarships available for students. Don't miss out on financial aid opportunities!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full flex-1 max-w-sm p-4">
          <figure>
            <img
              src="logbg.jpg"
              alt="Career Fair"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Career Fair</h2>
            <p>Meet potential employers and explore career opportunities at the upcoming career fair.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Find Out More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full flex-1 max-w-sm p-4">
          <figure>
            <img
              src="logbg.jpg"
              alt="Campus News"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Campus News</h2>
            <p>Stay updated with the latest news and events happening around the campus.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <a href="#item1" className="btn btn-circle absolute top-1/2 transform -translate-y-1/2 left-4">❮</a>
      <a href="#item2" className="btn btn-circle absolute top-1/2 transform -translate-y-1/2 right-4">❯</a>
    </div>
  );
}

export default TopCarasoul;
