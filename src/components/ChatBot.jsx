import React, { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import "../index.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(false); // Initially false
  const [input, setInput] = useState("");

  const options = [
    "About Sudhanshu",
    "Skills",
    "Projects",
    "Education",
    "Contact Info",
  ];

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleUserInput = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setMessages([
      { text: input, sender: "user" },
      { text: "Welcome to Sudhanshu's Portfolio! 👋", sender: "bot" },
    ]);
    
    setShowOptions(true); 
    setInput("");
  };

  const handleOptionClick = (option) => {
    setMessages([...messages, { text: option, sender: "user" }]);

    let botResponse = "";
    switch (option) {
      case "About Sudhanshu":
        botResponse = "I am Sudhanshu Singh, a passionate full-stack developer 🚀. I build web applications that solve real-world problems.";
        break;
      case "Skills":
        botResponse = "🛠️ My skills include React, Node.js, Express, MongoDB, PHP, MySQL, Tailwind CSS, C++, Python, Javascript";
        break;
      case "Projects":
        botResponse = "📝 Some of my projects: \n1️⃣ Chat App – A real-time messaging app 📩 💰\n2️⃣ E-Commerce Website – An online shopping platform 🛒🔧\n3️⃣ Code Craft – A coding platform for developers 💻\n4️⃣ CloudWatch – A cloud monitoring and analytics tool ☁️";
        break;
      case "Education":
        botResponse = "🎓 I am currently pursuing B.Tech in Computer Science & Engineering at Lovely Professional University (LPU).";
        break;
      case "Contact Info":
        botResponse = "📧 Email: sudhanshuvinodsingh@gmail.com\n📱 LinkedIn: linkedin.com/in/sudhanshu-singh22/\n📍 Location: Varanasi, India.";
        break;
      default:
        botResponse = "Oops! No information available. Redirecting to the contact form...";
        setTimeout(() => {
          window.location.href = "/contact";
        }, 1500);
    }

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: "bot" },
      ]);
    }, 500);
  };

  return (
    <div>
      <button className="chatbot-icon" onClick={toggleChatbot}>
        <FaRobot />
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            Chat with Sudhanshu's AI
            <button className="close-btn" onClick={toggleChatbot}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {!showOptions && (
              <form className="chatbot-input" onSubmit={handleUserInput}>
                <input
                  type="text"
                  placeholder="Type something..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">
                  <FaPaperPlane />
                </button>
              </form>
            )}

            {showOptions && (
              <div className="chatbot-options">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className="option-btn"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
