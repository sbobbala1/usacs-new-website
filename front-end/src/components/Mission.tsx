import { motion } from 'motion/react';
import { Target, Eye, Heart, Zap, CheckCircle, Users } from 'lucide-react';

export function Mission() {
  const values = [
    {
      title: 'Technology',
      description: 'Inspire and keep alive the spirit of hacking.',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'Education',
      description: 'Promoting mentorship, research, and learning.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      title: 'Community',
      description: 'Foster diverse, inclusive, and friendly social spaces.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Outreach',
      description: 'Build relationships with youth, alumni, and tech companies.',
      color: 'from-amber-400 to-orange-500',
    },
  ];

  const methods = [
    'Host quality-assured technical talks on a weekly basis.',
    'Provide platforms for career development and project sharing.',
    'Initiate and oversee mentorship program for undergraduates.',
    'Promote undergraduate research and faculty involvement.',
    'Grow and maintain social media presence for CS students.',
    'Stay in tune with CAVE management and hackathon coordination.',
    'Build framework to connect alumni with community after graduation.',
    'Coordinate tech company recruitment and outreach efforts.',
    'Connect students with mentorship opportunities targeting youth.',
    'Inviting prominent leaders in technology to speak to our community.',
  ];

  const measures = [
    'Students feeling comfortable in and growing from our events, spaces, and programs.',
    'Other communities, departments, and universities knowing how awesome we are.',
    'Public visibility for our community\'s projects and endeavors while keeping diverse.',
  ];

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      {/* Hexagon pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='43.4' viewBox='0 0 50 43.4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0 L50 21.7 L25 43.4 L0 21.7 Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '50px 43.4px',
      }}></div>

      <div className="relative z-10 container mx-auto px-6 py-8 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 via-purple-500 to-rose-600 rounded-2xl flex items-center justify-center"
        >
          <Target className="w-10 h-10 text-white" />
        </motion.div>

        <h1 className="text-5xl text-white">Mission</h1>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="backdrop-blur-xl bg-gradient-to-br from-red-600/20 via-purple-600/20 to-rose-700/20 border border-white/20 rounded-2xl p-8 relative overflow-hidden"
      >
        {/* Star pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5 L22 18 L35 20 L22 22 L20 35 L18 22 L5 20 L18 18 Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="flex items-center justify-center mb-6 relative z-10">
          <div className="w-14 h-14 bg-gradient-to-br from-red-500 via-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
            <Eye className="w-7 h-7 text-white" />
          </div>
        </div>
        <h2 className="text-3xl text-white text-center mb-6 relative z-10">Vision</h2>
        <p className="text-xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed relative z-10">
          To keep the Rutgers CS/tech community thriving.
        </p>
      </motion.div>

      {/* Values Section */}
      <div className="space-y-6">
        <h2 className="text-3xl text-white text-center">Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 space-y-4 hover:bg-white/15 transition-all cursor-pointer"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-white">{value.title}</h3>
              <p className="text-white/70 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Methods Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 space-y-6"
      >
        <div className="flex items-center justify-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
            <Zap className="w-7 h-7 text-white" />
          </div>
        </div>
        <h2 className="text-3xl text-white text-center">Methods</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.05 }}
              className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white text-xs">{index + 1}</span>
              </div>
              <span className="text-white/80 leading-relaxed">{method}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Measures Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/20 rounded-2xl p-8 space-y-6"
      >
        <div className="flex items-center justify-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-7 h-7 text-white" />
          </div>
        </div>
        <h2 className="text-3xl text-white text-center">Measures</h2>
        
        <div className="space-y-4 mt-6">
          {measures.map((measure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="flex items-start space-x-4 p-5 bg-white/10 rounded-xl hover:bg-white/15 transition-all cursor-pointer"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <p className="text-white/90 leading-relaxed text-lg">{measure}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </div>
  );
}