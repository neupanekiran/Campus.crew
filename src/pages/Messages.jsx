import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const ChatInterface = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [cohort, setCohort] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleCohortChange = (e) => {
    setCohort(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Cohort:', cohort);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    setShowPopup(false);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const chats = [
    { id: 1, title: 'John Doe', text: 'Hey, how are you?' },
    { id: 2, title: 'Jane Smith', text: 'Did you get the report?' },
    // Add more chat data as needed
  ];

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col h-full bg-gray-900 text-white">
        <div className="bg-gray-800 p-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Chat</span>
          </div>
          <div>
            <span>User Profile</span>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-72 bg-gray-800 p-4 overflow-y-auto">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`flex items-center p-2 mb-2 rounded-lg cursor-pointer ${
                  selectedChat === chat.id
                    ? 'bg-gray-700'
                    : 'hover:bg-green-600'
                }`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                  △
                </div>
                <div className="flex-1">
                  <div className="font-bold">{chat.title}</div>
                  <div className="text-xs text-gray-400">{chat.text}</div>
                </div>
                <div className="text-xs text-gray-500">10 min</div>
              </div>
            ))}
          </div>

          {selectedChat && (
            <div className="flex-1 p-6 flex flex-col bg-gray-900">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold">Chat with {chats.find(chat => chat.id === selectedChat)?.title}</span>
                <div className="flex items-center space-x-4">
                  <span>🔔</span>
                  <span>⚙️</span>
                  <i
                    className="fa fa-filter cursor-pointer"
                    onClick={() => setShowPopup(true)}
                  ></i>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {messages.map((message, index) => (
                  <div key={index} className="mb-4">
                    <div className="bg-gray-700 text-white p-4 rounded-lg self-end max-w-xs ml-auto">
                      {message}
                    </div>
                  </div>
                ))}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                    △
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    Generating response...
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-4 space-x-2">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full">
                  😊
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full">
                  📎
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-800 text-white p-2 rounded-full outline-none"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full">
                  Tt
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full">
                  🎤
                </button>
              </div>
            </div>
          )}
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-xl mb-4">Select Cohort and Date Range</h2>
              <form className="space-y-4">
                <div>
                  <label>Cohort:</label>
                  <select
                    value={cohort}
                    onChange={handleCohortChange}
                    className="w-full p-2 mt-2 bg-gray-700 rounded-lg"
                  >
                    <option value="">Select Cohort</option>
                    <option value="Cohort 1">Cohort 1</option>
                    <option value="Cohort 2">Cohort 2</option>
                    <option value="Cohort 3">Cohort 3</option>
                  </select>
                </div>
                <div>
                  <label>Start Date:</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    className="w-full p-2 mt-2 bg-gray-700 rounded-lg"
                  />
                </div>
                <div>
                  <label>End Date:</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    className="w-full p-2 mt-2 bg-gray-700 rounded-lg"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  Apply
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
