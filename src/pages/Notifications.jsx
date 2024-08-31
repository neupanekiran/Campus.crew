import React from 'react';
import Navbar from '../components/Navbar';

const notifications = [
  { id: '1', user: 'JohnDoe', type: 'like', post: 'Your recent photo', time: '2m', avatar: 'https://via.placeholder.com/50/0000FF/808080?text=JD' },
  { id: '2', user: 'JaneSmith', type: 'comment', comment: 'Nice shot!', post: 'Your recent photo', time: '5m', avatar: 'https://via.placeholder.com/50/FF0000/FFFFFF?text=JS' },
  { id: '3', user: 'MikeJohnson', type: 'follow', time: '10m', avatar: 'https://via.placeholder.com/50/00FF00/000000?text=MJ' },
  { id: '4', user: 'EmilyClark', type: 'like', post: 'Your new blog post', time: '15m', avatar: 'https://via.placeholder.com/50/FF5733/FFFFFF?text=EC' },
  { id: '5', user: 'DavidSmith', type: 'comment', comment: 'Interesting read!', post: 'Your new blog post', time: '20m', avatar: 'https://via.placeholder.com/50/8E44AD/FFFFFF?text=DS' },
  { id: '6', user: 'SarahJones', type: 'follow', time: '30m', avatar: 'https://via.placeholder.com/50/3498DB/FFFFFF?text=SJ' },
  { id: '7', user: 'AlexWong', type: 'like', post: 'Your profile picture', time: '45m', avatar: 'https://via.placeholder.com/50/2ECC71/FFFFFF?text=AW' },
  { id: '8', user: 'NatalieBrown', type: 'comment', comment: 'Love the new look!', post: 'Your profile picture', time: '1h', avatar: 'https://via.placeholder.com/50/F39C12/FFFFFF?text=NB' },
  { id: '9', user: 'ChrisLee', type: 'follow', time: '2h', avatar: 'https://via.placeholder.com/50/16A085/FFFFFF?text=CL' },
  { id: '10', user: 'MorganReed', type: 'like', post: 'Your event update', time: '3h', avatar: 'https://via.placeholder.com/50/1F618D/FFFFFF?text=MR' },
  { id: '11', user: 'JordanWhite', type: 'comment', comment: 'Looking forward to it!', post: 'Your event update', time: '4h', avatar: 'https://via.placeholder.com/50/9B59B6/FFFFFF?text=JW' },
  { id: '12', user: 'AvaGreen', type: 'follow', time: '5h', avatar: 'https://via.placeholder.com/50/FFC300/000000?text=AG' },
  { id: '13', user: 'LiamBlue', type: 'like', post: 'Your code repository', time: '6h', avatar: 'https://via.placeholder.com/50/27AE60/FFFFFF?text=LB' },
  { id: '14', user: 'OliviaYellow', type: 'comment', comment: 'Great project!', post: 'Your code repository', time: '7h', avatar: 'https://via.placeholder.com/50/34495E/FFFFFF?text=OY' },
  { id: '15', user: 'NoahGray', type: 'follow', time: '8h', avatar: 'https://via.placeholder.com/50/E74C3C/FFFFFF?text=NG' },
];

const Notifications = () => {
  const renderNotification = (notification) => {
    switch (notification.type) {
      case 'like':
        return (
          <div key={notification.id} className="flex items-center justify-between border-b border-base-300 py-4 last:border-0 hover:bg-base-200 transition-colors duration-300">
            <div className="flex items-center flex-1">
              <img src={notification.avatar} alt={notification.user} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-sm">
                  <span className="font-bold">{notification.user}</span> liked {notification.post}
                </p>
                <p className="text-xs text-gray-500">{notification.time} ago</p>
              </div>
            </div>
          </div>
        );
      case 'comment':
        return (
          <div key={notification.id} className="flex items-center justify-between border-b border-base-300 py-4 last:border-0 hover:bg-base-200 transition-colors duration-300">
            <div className="flex items-center flex-1">
              <img src={notification.avatar} alt={notification.user} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-sm">
                  <span className="font-bold">{notification.user}</span> commented on {notification.post}: "{notification.comment}"
                </p>
                <p className="text-xs text-gray-500">{notification.time} ago</p>
              </div>
            </div>
          </div>
        );
      case 'follow':
        return (
          <div key={notification.id} className="flex items-center justify-between border-b border-base-300 py-4 last:border-0 hover:bg-base-200 transition-colors duration-300">
            <div className="flex items-center flex-1">
              <img src={notification.avatar} alt={notification.user} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="text-sm">
                  <span className="font-bold">{notification.user}</span> started following you
                </p>
                <p className="text-xs text-gray-500">{notification.time} ago</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-base-200 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Notifications</h1>
          <div className="bg-base-100 p-6 rounded-lg shadow-lg">
            {notifications.map(notification => renderNotification(notification))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
