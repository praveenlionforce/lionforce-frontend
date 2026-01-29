import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Bot, User, Mail, Phone, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = process.env.REACT_APP_BACKEND_URL;

// Chatbot configuration - services and responses
const botConfig = {
  greeting: "Hi there! 👋 I'm Alex, your Lionforce assistant. How can I help you today?",
  services: [
    { id: 'elearning', label: 'eLearning & Training', keywords: ['elearning', 'training', 'course', 'lms', 'learning'] },
    { id: 'software', label: 'Software Development', keywords: ['software', 'app', 'application', 'development', 'web', 'mobile', 'iot', 'internet of things', 'embedded', 'smart devices'] },
    { id: 'design', label: 'UX/UI Design', keywords: ['design', 'ui', 'ux', 'interface', 'user experience'] },
    { id: 'creative', label: 'Creative Services', keywords: ['creative', 'video', 'animation', '3d', 'graphics'] },
    { id: 'marketing', label: 'Digital Marketing', keywords: ['marketing', 'seo', 'social media', 'ads', 'advertising'] },
    { id: 'india', label: 'India Expansion (EOR/ODC)', keywords: ['india', 'eor', 'odc', 'expansion', 'offshore', 'employer of record'] },
    { id: 'consulting', label: 'Consulting', keywords: ['consulting', 'strategy', 'advisory', 'consult'] }
  ],
  responses: {
    elearning: "Great choice! 🎓 We specialize in custom eLearning solutions including:\n• Interactive course development\n• LMS implementation\n• Gamified learning experiences\n• Mobile learning apps\n\nWould you like to discuss your training needs?",
    software: "Excellent! 💻 Our software development services include:\n• Custom web applications\n• Mobile app development (iOS & Android)\n• IoT & Smart Device Solutions\n• Enterprise solutions\n• Cloud & SaaS products\n\nWhat kind of software are you looking to build?",
    design: "Perfect! 🎨 Our UX/UI design team delivers:\n• User research & testing\n• Interface design\n• Design systems\n• Prototyping\n\nTell me more about your design needs!",
    creative: "Awesome! 🎬 Our creative services cover:\n• 3D visualization\n• Motion graphics\n• Video production\n• Brand identity\n\nWhat creative project do you have in mind?",
    marketing: "Great! 📈 We offer comprehensive digital marketing:\n• SEO & content strategy\n• Social media management\n• PPC campaigns\n• Analytics & optimization\n\nWhat are your marketing goals?",
    india: "Interesting! 🇮🇳 Our India expansion services include:\n• Employer of Record (EOR)\n• Offshore Development Centers (ODC)\n• Center of Excellence (COE)\n• Complete compliance handling\n\nAre you looking to hire in India or set up operations?",
    consulting: "Excellent choice! 💡 Our consulting services include:\n• Digital transformation\n• Technology strategy\n• Process optimization\n• Change management\n\nWhat challenges are you facing?"
  },
  serviceDetails: {
    elearning: "Our eLearning expertise spans over a decade. We've delivered 500+ courses for Fortune 500 companies.\n\n✅ SCORM/xAPI compliant\n✅ Multi-language support\n✅ Accessibility (WCAG 2.1)\n✅ Custom assessments & certifications\n\nWe can help with anything from a single course to a complete learning ecosystem!",
    software: "Our development team uses cutting-edge technologies:\n\n🔧 Frontend: React, Vue, Angular\n🔧 Backend: Node.js, Python, .NET\n🔧 Mobile: React Native, Flutter\n🔧 IoT: Arduino, Raspberry Pi, AWS IoT\n🔧 Cloud: AWS, Azure, GCP\n\nWe follow Agile methodology with 2-week sprints and continuous delivery.",
    design: "Our design process is user-centered:\n\n1️⃣ Discovery & Research\n2️⃣ Wireframing & Prototyping\n3️⃣ Visual Design\n4️⃣ User Testing\n5️⃣ Design System Creation\n\nWe use Figma for collaboration and can provide complete design handoffs.",
    creative: "Our creative studio capabilities:\n\n🎬 Video: 2D/3D animation, explainers, product demos\n🎨 Graphics: Brand identity, marketing collateral\n🕹️ Interactive: AR/VR experiences, gamification\n\nWe've created content for brands like Microsoft, Adobe, and IBM.",
    marketing: "Our digital marketing approach:\n\n📊 Data-driven strategy\n🎯 Targeted campaigns\n📈 ROI-focused optimization\n🔍 Comprehensive analytics\n\nWe've helped clients achieve 3x-5x improvement in lead generation.",
    india: "Why expand to India with Lionforce?\n\n💰 60-70% cost savings\n🎓 Access to 5M+ tech graduates/year\n⏰ Favorable time zone overlap\n📋 Zero compliance headaches\n\nWe handle everything: hiring, payroll, taxes, and legal.",
    consulting: "Our consulting methodology:\n\n🔍 Assessment & Discovery\n📋 Strategy Development\n🚀 Implementation Roadmap\n📊 Success Metrics & KPIs\n\nWe've guided 100+ digital transformations across industries."
  },
  fallback: "I'd love to help you with that! Our team specializes in eLearning, Software Development, Design, Creative Services, Digital Marketing, and India Expansion.\n\nWhich area interests you most?",
  thankYou: "Thank you! 🙏 Our team will reach out to you within 24 hours. In the meantime, feel free to explore our website or ask me any other questions!",
  options: [
    "Tell me about eLearning",
    "Software Development",
    "India Expansion (EOR)",
    "I need a quote",
    "Talk to someone"
  ]
};

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: botConfig.greeting, options: botConfig.options }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadInfo, setLeadInfo] = useState({ name: '', email: '', company: '', designation: '', message: '' });
  const [collectingLead, setCollectingLead] = useState(false);
  const [leadStep, setLeadStep] = useState(0);
  const [lastServiceContext, setLastServiceContext] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [agentOnline, setAgentOnline] = useState(false);
  const [chatMode, setChatMode] = useState('bot'); // 'bot' or 'agent'
  const messagesEndRef = useRef(null);
  const pollIntervalRef = useRef(null);
  const sessionIdRef = useRef(null);

  // Keep ref in sync with state
  useEffect(() => {
    sessionIdRef.current = sessionId;
  }, [sessionId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Helper functions defined first
  const sendMessageToServer = useCallback(async (text, sender = 'user') => {
    const currentSessionId = sessionIdRef.current;
    if (!currentSessionId) return;
    try {
      await fetch(`${API_URL}/api/chat/message?session_id=${currentSessionId}&text=${encodeURIComponent(text)}&sender=${sender}`, {
        method: 'POST'
      });
    } catch (e) {
      console.log('Send message error:', e);
    }
  }, []);

  const detectService = (text) => {
    const lowerText = text.toLowerCase();
    for (const service of botConfig.services) {
      for (const keyword of service.keywords) {
        if (lowerText.includes(keyword)) {
          return service.id;
        }
      }
    }
    return null;
  };

  const addBotMessage = useCallback((text, options = null, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', text, options }]);
      sendMessageToServer(text, 'bot');
    }, delay);
  }, [sendMessageToServer]);

  const initSession = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/chat/session`, { method: 'POST' });
      const data = await res.json();
      setSessionId(data.id);
    } catch (e) {
      console.log('Session init error:', e);
    }
  }, []);

  // Check agent status periodically
  useEffect(() => {
    const checkAgentStatus = async () => {
      try {
        const res = await fetch(`${API_URL}/api/chat/agent-status`);
        const data = await res.json();
        setAgentOnline(data.is_online);
      } catch (e) {
        console.log('Agent status check failed');
      }
    };

    checkAgentStatus();
    const interval = setInterval(checkAgentStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  // Initialize session when chat opens
  useEffect(() => {
    if (isOpen && !sessionId) {
      initSession();
    }
  }, [isOpen, sessionId, initSession]);

  // Poll for new messages when in agent mode
  useEffect(() => {
    if (isOpen && sessionId && chatMode === 'agent') {
      const pollMessages = async () => {
        try {
          const sessionRes = await fetch(`${API_URL}/api/chat/session/${sessionId}`);
          const sessionData = await sessionRes.json();
          
          if (sessionData.status === 'bot') {
            setChatMode('bot');
            addBotMessage("You've been transferred back to Alex. How can I help you?", botConfig.options, 500);
          } else if (sessionData.status === 'closed') {
            addBotMessage("This chat has been closed. Feel free to start a new conversation!", botConfig.options, 500);
            setChatMode('bot');
          }

          const msgRes = await fetch(`${API_URL}/api/chat/messages/${sessionId}`);
          const allMessages = await msgRes.json();
          
          const agentMessages = allMessages.filter(m => m.sender === 'agent');
          
          setMessages(prev => {
            const displayedAgentMsgs = prev.filter(m => m.type === 'agent').length;
            if (agentMessages.length > displayedAgentMsgs) {
              const newAgentMsgs = agentMessages.slice(displayedAgentMsgs);
              return [...prev, ...newAgentMsgs.map(msg => ({ type: 'agent', text: msg.text }))];
            }
            return prev;
          });
        } catch (e) {
          console.log('Poll error:', e);
        }
      };

      pollIntervalRef.current = setInterval(pollMessages, 3000);
      return () => {
        if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
      };
    }
  }, [isOpen, sessionId, chatMode, addBotMessage]);

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { type: 'user', text: option }]);
    sendMessageToServer(option, 'user');

    if (option.toLowerCase() === 'tell me more') {
      if (lastServiceContext && botConfig.serviceDetails[lastServiceContext]) {
        addBotMessage(
          botConfig.serviceDetails[lastServiceContext],
          ['Get a quote', 'Other services', 'Talk to someone']
        );
      } else {
        addBotMessage("What would you like to know more about?", botConfig.options);
      }
      return;
    }

    if (option.toLowerCase() === 'other services') {
      addBotMessage("Here are all our services:", botConfig.options);
      setLastServiceContext(null);
      return;
    }

    if (option.toLowerCase().includes('quote') || option.toLowerCase().includes('talk to someone')) {
      setCollectingLead(true);
      setLeadStep(1);
      addBotMessage("Great! I'd love to connect you with our team. 📞\n\nFirst, what's your name?");
    } else {
      const serviceId = detectService(option);
      if (serviceId && botConfig.responses[serviceId]) {
        setLastServiceContext(serviceId);
        addBotMessage(botConfig.responses[serviceId], ['Get a quote', 'Tell me more', 'Other services']);
      } else {
        addBotMessage(botConfig.fallback, botConfig.options);
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    sendMessageToServer(userMessage, 'user');

    if (chatMode === 'agent') {
      return;
    }

    if (collectingLead) {
      if (leadStep === 1) {
        setLeadInfo(prev => ({ ...prev, name: userMessage }));
        setLeadStep(2);
        addBotMessage(`Nice to meet you, ${userMessage}! 😊\n\nWhat's your email address?`);
      } else if (leadStep === 2) {
        if (userMessage.includes('@')) {
          setLeadInfo(prev => ({ ...prev, email: userMessage }));
          setLeadStep(3);
          addBotMessage("Great! Which company are you with?");
        } else {
          addBotMessage("That doesn't look like a valid email. Could you please enter your email address?");
        }
      } else if (leadStep === 3) {
        setLeadInfo(prev => ({ ...prev, company: userMessage }));
        setLeadStep(4);
        addBotMessage("And what's your role/designation? (Optional - type 'skip' to skip)");
      } else if (leadStep === 4) {
        const designation = userMessage.toLowerCase() === 'skip' ? '' : userMessage;
        setLeadInfo(prev => ({ ...prev, designation }));
        setLeadStep(5);
        addBotMessage("Perfect! Lastly, briefly describe what you're looking for:");
      } else if (leadStep === 5) {
        const finalLead = { ...leadInfo, message: userMessage };
        setLeadInfo(finalLead);
        
        try {
          await fetch(`${API_URL}/api/chatbot-lead`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(finalLead)
          });
        } catch (e) {
          console.log('Lead save error:', e);
        }

        if (sessionId) {
          try {
            await fetch(`${API_URL}/api/chat/session/${sessionId}/visitor?name=${encodeURIComponent(finalLead.name)}&email=${encodeURIComponent(finalLead.email)}&company=${encodeURIComponent(finalLead.company || '')}`, {
              method: 'PUT'
            });
          } catch (e) {
            console.log('Update visitor error:', e);
          }
        }

        setCollectingLead(false);
        setLeadStep(0);
        addBotMessage(botConfig.thankYou, ['Explore services', 'Visit homepage']);
      }
    } else {
      const serviceId = detectService(userMessage);
      
      if (userMessage.toLowerCase().includes('quote') || 
          userMessage.toLowerCase().includes('contact') ||
          userMessage.toLowerCase().includes('talk') ||
          userMessage.toLowerCase().includes('call')) {
        setCollectingLead(true);
        setLeadStep(1);
        addBotMessage("I'd be happy to connect you with our team! 📞\n\nFirst, what's your name?");
      } else if (serviceId && botConfig.responses[serviceId]) {
        setLastServiceContext(serviceId);
        addBotMessage(botConfig.responses[serviceId], ['Get a quote', 'Tell me more', 'Other services']);
      } else if (userMessage.toLowerCase().includes('hello') || 
                 userMessage.toLowerCase().includes('hi') ||
                 userMessage.toLowerCase().includes('hey')) {
        addBotMessage("Hello! 👋 How can I assist you today?", botConfig.options);
      } else if (userMessage.toLowerCase().includes('thank')) {
        addBotMessage("You're welcome! 😊 Is there anything else I can help you with?", botConfig.options);
      } else {
        addBotMessage(botConfig.fallback, botConfig.options);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-teal-600 to-green-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
        data-testid="chatbot-toggle"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            data-testid="chatbot-window"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-green-600 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  {chatMode === 'agent' ? <UserCheck className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">
                    {chatMode === 'agent' ? 'Live Agent' : 'Alex - Lionforce Assistant'}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <span className={`w-2 h-2 rounded-full ${agentOnline ? 'bg-green-400' : 'bg-gray-400'}`}></span>
                    {chatMode === 'agent' 
                      ? 'Connected to live agent' 
                      : agentOnline 
                        ? 'Live agent available' 
                        : 'Bot mode • Usually replies instantly'}
                  </div>
                </div>
              </div>
              {/* Quick Action Buttons */}
              <div className="flex gap-2 mt-3">
                <a
                  href="mailto:info@lionforce.net"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-full text-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Us
                </a>
                <a
                  href="tel:+919600536354"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-full text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Us
                </a>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[320px] overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                    {(msg.type === 'bot' || msg.type === 'agent') && (
                      <div className="flex items-start gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'agent' ? 'bg-blue-100' : 'bg-teal-100'}`}>
                          {msg.type === 'agent' ? <UserCheck className="w-4 h-4 text-blue-600" /> : <Bot className="w-4 h-4 text-teal-600" />}
                        </div>
                        <div>
                          <div className={`p-3 rounded-2xl rounded-tl-none shadow-sm border ${msg.type === 'agent' ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-100'}`}>
                            <p className="text-sm text-gray-700 whitespace-pre-line">{msg.text}</p>
                          </div>
                          {msg.options && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {msg.options.map((option, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleOptionClick(option)}
                                  className="text-xs px-3 py-1.5 bg-white border border-teal-200 text-teal-700 rounded-full hover:bg-teal-50 transition-colors"
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    {msg.type === 'user' && (
                      <div className="flex items-start gap-2 justify-end">
                        <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm">
                          <p className="text-sm">{msg.text}</p>
                        </div>
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-gray-600" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={chatMode === 'agent' ? "Message live agent..." : "Type your message..."}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  data-testid="chatbot-input"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-gradient-to-r from-teal-600 to-green-600 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md transition-shadow"
                  data-testid="chatbot-send"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;
