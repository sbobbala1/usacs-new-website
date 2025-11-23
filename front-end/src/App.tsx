import { useState } from 'react';
import { Home } from './components/Home';
import { Mission } from './components/Mission';
import { Board } from './components/Board';
import { Events } from './components/Events';
import { Resources } from './components/Resources';
import { Donate } from './components/Donate';
import { Companies } from './components/Companies';
import { Partnerships } from './components/Partnerships';
import { AboutUs } from './components/AboutUs';
import { Committees } from './components/Committees';
import { GetInvolved } from './components/GetInvolved';
import { AIChatbox } from './components/AIChatbox';
import { GlassyBackground } from './components/GlassyBackground';
import { SurveyModal } from './components/SurveyModal';
import { MessageSquare } from 'lucide-react';
import usacsLogo from 'figma:asset/b19ea8866895b5235fec00c379fca8401d6dbbdd.png';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'mission':
        return <Mission />;
      case 'board':
        return <Board />;
      case 'events':
        return <Events />;
      case 'resources':
        return <Resources />;
      case 'donate':
        return <Donate />;
      case 'companies':
        return <Companies />;
      case 'partnerships':
        return <Partnerships />;
      case 'about-us':
        return <AboutUs />;
      case 'committees':
        return <Committees />;
      case 'get-involved':
        return <GetInvolved />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      activeTab === 'home' 
        ? 'bg-gradient-to-br from-red-950 via-slate-900 to-rose-950' 
        : 'bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900'
    }`}>
      <GlassyBackground />
      
      {/* Pattern Overlay - only for Home */}
      {activeTab === 'home' && (
        <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      )}

      {/* Neutral gradient overlays for non-Home pages */}
      {activeTab !== 'home' && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-15">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-600/30 via-slate-600/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-slate-600/30 via-gray-700/30 to-transparent rounded-full blur-3xl"></div>
        </div>
      )}
      
      {/* Header */}
      <header className="relative z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <img src={usacsLogo} alt="USACS Logo" className="w-14 h-14 rounded-lg" />
              <div>
                <h1 className="text-white">USACS</h1>
                <p className="text-white/70 text-sm">Undergraduate Student Alliance of Computer Scientists</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-1">
              {['home', 'mission', 'board', 'events'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 capitalize text-sm ${
                    activeTab === tab
                      ? 'bg-white/20 text-white backdrop-blur-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="w-px h-6 bg-white/20"></div>
              {['committees', 'get-involved'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                    activeTab === tab
                      ? 'bg-white/20 text-white backdrop-blur-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab === 'get-involved' ? 'Get Involved' : 'Committees'}
                </button>
              ))}
              <div className="w-px h-6 bg-white/20"></div>
              {['about-us', 'partnerships', 'companies'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 uppercase text-sm ${
                    activeTab === tab
                      ? 'bg-white/20 text-white backdrop-blur-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="w-px h-6 bg-white/20"></div>
              {['resources', 'donate'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 capitalize text-sm ${
                    activeTab === tab
                      ? 'bg-white/20 text-white backdrop-blur-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button
                onClick={() => setIsSurveyOpen(true)}
                className="px-3 py-2 rounded-lg bg-gradient-to-r from-red-600 to-rose-700 text-white hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 text-sm"
              >
                Survey
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {renderContent()}
      </main>

      {/* AI Chatbox Toggle Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-red-600 to-rose-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110"
      >
        <MessageSquare className="w-8 h-8 text-white" />
      </button>

      {/* AI Chatbox */}
      {isChatOpen && <AIChatbox onClose={() => setIsChatOpen(false)} />}

      {/* Survey Modal */}
      {isSurveyOpen && <SurveyModal onClose={() => setIsSurveyOpen(false)} />}
    </div>
  );
}