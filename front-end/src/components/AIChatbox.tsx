import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export function AIChatbox({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi! I'm the USACS AI assistant. I can help you with club recommendations, course suggestions for different CS fields at Rutgers, and more. What would you like to know?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Club recommendations
    if (lowerMessage.includes('club') || lowerMessage.includes('join')) {
      if (lowerMessage.includes('web') || lowerMessage.includes('frontend') || lowerMessage.includes('fullstack')) {
        return "For web development, I'd recommend joining USACS! We organize hackathons, workshops, and networking events. Also check out HackRU for hands-on project experience, and WiCS (Women in Computer Science) for additional community and mentorship opportunities.";
      } else if (lowerMessage.includes('cyber') || lowerMessage.includes('security')) {
        return "For cybersecurity, check out RUMAD (Rutgers University Mobile Application Development) and USACS security-focused events. We also collaborate with industry professionals for security workshops. Consider joining CTF competitions we organize!";
      } else if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
        return "For AI/ML, USACS hosts workshops on neural networks and data science. Also look into the Rutgers AI Club and data science initiatives. We regularly bring in speakers from companies working on cutting-edge AI!";
      } else {
        return "USACS is perfect for getting started! We're the largest CS org at Rutgers and welcome students of all levels. We also recommend: HackRU (hackathons), WiCS (diversity in tech), RUMAD (mobile dev), and the Rutgers AI Club. Come to our events to explore what interests you!";
      }
    }

    // Course recommendations
    if (lowerMessage.includes('course') || lowerMessage.includes('class')) {
      if (lowerMessage.includes('web') || lowerMessage.includes('frontend')) {
        return "For web development: Start with CS 213 (Software Methodology) for Java fundamentals, then take CS 336 (Principles of Information and Data Management) for databases. CS 416 (Intro to Computer Graphics) is great for understanding visual interfaces. Many students also self-learn modern frameworks through USACS workshops!";
      } else if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning') || lowerMessage.includes('ml')) {
        return "For AI/ML: Take CS 440 (Intro to Artificial Intelligence) and CS 461 (Machine Learning Principles). Prerequisites include CS 205 (Discrete Math I) and CS 206 (Discrete Math II). Linear Algebra (Math 250) is highly recommended. Also consider CS 533 (Natural Language Processing) if you're interested in NLP!";
      } else if (lowerMessage.includes('security') || lowerMessage.includes('cyber')) {
        return "For cybersecurity: CS 419 (Computer Security) is essential. Also take CS 352 (Internet Technology) for networking fundamentals and CS 431 (Software Engineering) for secure coding practices. CS 416 (Computer Systems) gives you low-level understanding that's crucial for security work.";
      } else if (lowerMessage.includes('data') || lowerMessage.includes('database')) {
        return "For data science/databases: CS 336 (Principles of Information and Data Management) is your core database course. Pair it with CS 440 (Intro to AI) and CS 461 (Machine Learning). Statistics courses like MATH 477 are also very valuable for data analysis!";
      } else {
        return "Core CS courses at Rutgers: CS 111 (Intro to CS), CS 112 (Data Structures), CS 205/206 (Discrete Math), CS 213 (Software Methodology), and CS 214 (Systems Programming). After these, you can specialize in areas like AI (CS 440), Systems (CS 416), or Theory (CS 374). What field interests you most?";
      }
    }

    // Events
    if (lowerMessage.includes('event') || lowerMessage.includes('hackathon') || lowerMessage.includes('workshop')) {
      return "USACS hosts weekly workshops on various topics like web dev, algorithms, and interview prep! We also co-organize HackRU (Rutgers' biannual hackathon), tech talks with companies, and social events. Check our Events tab for the latest schedule and join our mailing list to stay updated!";
    }

    // Getting started
    if (lowerMessage.includes('start') || lowerMessage.includes('begin') || lowerMessage.includes('new')) {
      return "Welcome to CS at Rutgers! Start by joining USACS and attending our intro workshops. Make sure you're taking CS 111 and CS 112 to build fundamentals. Join our Discord/mailing list to connect with other students. Attend HackRU to work on projects, and don't be afraid to ask questions – everyone starts somewhere!";
    }

    // Default response
    return "I can help you with: 🎯 Club recommendations for different CS fields, 📚 Course suggestions at Rutgers, 🎪 Upcoming events and workshops, 🚀 Getting started in CS. Try asking something like 'What clubs should I join for web development?' or 'What courses should I take for AI?'";
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage: Message = {
        id: messages.length,
        text: input,
        sender: 'user',
        timestamp: new Date(),
      };

      setMessages([...messages, userMessage]);
      setInput('');
      setIsTyping(true);

      // Simulate AI thinking time
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 1,
          text: getAIResponse(input),
          sender: 'ai',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-28 right-8 z-50 w-96 h-[600px] backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600/20 to-rose-700/20 backdrop-blur-xl border-b border-white/20 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white">USACS AI Assistant</h3>
            <p className="text-white/70 text-sm">Ask me anything!</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-white/70 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white'
                    : 'bg-white/10 backdrop-blur-lg text-white border border-white/20'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-3 rounded-2xl">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/20 bg-white/5 backdrop-blur-xl">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-10 h-10 bg-gradient-to-r from-red-600 to-rose-700 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-red-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}