import React, { useState } from 'react';

const questions = [
  { id: 1, prompt: "What's your name?", placeholder: "Enter your name eg Kachuesh Singh" },
  { id: 2, prompt: "What's your email?", placeholder: "Enter your email eg kk9900@srmist.edu.in" },
  { id: 3, prompt: "What's your interests?", placeholder: "Enter your interests eg Aviation,webdev,coding" },
  // Add more questions as needed
];

function Form() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(''));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    const newResponses = [...responses];
    newResponses[currentQuestion] = value;
    setResponses(newResponses);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-900">
      {/* Main Card Container */}
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-lg p-10">
        {/* Mini Back Button */}
        <div className="flex justify-end mb-6">
          {currentQuestion > 0 && (
            <button className="btn btn-sm btn-outline" onClick={handleBack}>Back</button>
          )}
        </div>

        {/* Question Card */}
        {!isSubmitted ? (
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 bg-base-300 rounded-lg p-8 mb-6 lg:mb-0 shadow-lg flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-3xl font-semibold mb-4">Welcome!</h1>
                <p className="text-gray-700 text-lg">Before you get started, let's get to know you better so we can tailor your experience.</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 bg-base-100 rounded-lg p-8 shadow-lg">
              <h2 className="text-xl font-bold mb-6">{questions[currentQuestion].prompt}</h2>
              <input
                type="text"
                value={responses[currentQuestion]}
                placeholder={questions[currentQuestion].placeholder}
                onChange={handleInputChange}
                className="input input-bordered w-full mb-6 text-lg"
              />
              <div className="flex justify-end">
                <button
                  className="btn btn-primary w-full text-lg py-3"
                  onClick={handleNext}
                >
                  {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Thank you!</h1>
            <p className="text-gray-700 text-lg">You have completed the form. Your responses are submitted.</p>
            <div className="mt-6">
              <button className="btn btn-primary" onClick={() => setCurrentQuestion(0)}>Start Over</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
