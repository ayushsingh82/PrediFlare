import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConnectButton } from './ConnectButton';
import { FaRobot, FaPaperPlane, FaChartLine, FaPlus, FaUser } from 'react-icons/fa';

function Eliza() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { 
      text: `Bitcoin breaking $150K depends on multiple factors, including:

Macroeconomic Conditions 🏦: Interest rates, inflation, and global liquidity.
Spot Bitcoin ETFs 📈: Continued institutional adoption via ETFs.
Halving Effect ⛏️: The next BTC halving in 2024 reducing supply.
Regulatory Clarity ⚖️: Clearer policies can drive mainstream adoption.`,
      isBot: true 
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);

    // Clear input
    setInput('');

    // Fixed bot response after user message
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          text: `Bitcoin breaking $150K depends on multiple factors, including:

Macroeconomic Conditions 🏦: Interest rates, inflation, and global liquidity.
Spot Bitcoin ETFs 📈: Continued institutional adoption via ETFs.
Halving Effect ⛏️: The next BTC halving in 2024 reducing supply.
Regulatory Clarity ⚖️: Clearer policies can drive mainstream adoption.`,
          isBot: true,
        }
      ]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-pink-200 flex flex-col items-center p-8">
      {/* Header */}
      <div className="w-full max-w-3xl mb-16">
        <div className="flex justify-between items-center mb-4">
          <h1 
            onClick={() => navigate('/')}
            className="text-3xl font-bold text-pink-600 cursor-pointer hover:text-pink-500 transition-colors"
          >
            PrediFlare
          </h1>
          <ConnectButton />
        </div>
        <div className="h-px bg-pink-800/60 w-full"></div>
      </div>

      {/* Chat Container */}
      <div className="w-full max-w-xl mb-20 bg-pink-300 rounded-2xl border-2 border-pink-500 overflow-hidden">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 flex items-center gap-3">
          <FaRobot className="text-white text-2xl" />
          <h2 className="text-lg font-bold text-white">Eliza AI powered by Polymarket</h2>
        </div>

        {/* Messages */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  msg.isBot
                    ? 'bg-white text-black rounded-tl-none'
                    : 'bg-pink-500 text-white rounded-tr-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 border-t border-pink-400 bg-pink-200">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-xl border-2 border-pink-400 focus:outline-none focus:border-pink-500"
            />
            <button
              type="submit"
              className="bg-pink-500 text-white p-3 rounded-xl transition-colors hover:bg-pink-600"
            >
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>

      {/* Navigation Icons */}
      <div className="w-full max-w-3xl">
        <div className="bg-pink-300 rounded-2xl p-6 border-2 border-pink-500 flex justify-between items-center px-16">
          <button 
            onClick={() => navigate('/live-bets')}
            className="flex flex-col items-center gap-2 text-black"
          >
            <FaChartLine size={32} />
            <span className="text-sm">Live Bets</span>
          </button>
          <button 
            onClick={() => navigate('/create')}
            className="bg-pink-600 hover:bg-pink-500 text-white p-5 rounded-full transition-colors border-2 border-pink-500"
          >
            <FaPlus size={36} />
          </button>
          <button 
            onClick={() => navigate('/profile')}
            className="flex flex-col items-center gap-2 text-black"
          >
            <FaUser size={32} />
            <span className="text-sm">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Eliza;
