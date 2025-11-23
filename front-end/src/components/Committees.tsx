import { motion } from 'motion/react';
import { Code, Calendar, HeartHandshake, Users, Palette, Rocket, Mail } from 'lucide-react';

export function Committees() {
  const committees = [
    {
      icon: Code,
      name: 'Technology Committee',
      description: 'Inspires and keeps the spirit of hacking & creating alive.',
      responsibilities: [
        'Build and maintain USACS digital infrastructure',
        'Develop websites, internal tools, and member platforms',
        'Create tools to improve member experience',
        'Organize coding workshops and hackathons',
      ],
      skills: 'Web development, mobile development, DevOps, UI/UX design',
      color: 'from-blue-500 to-cyan-600',
      contact: 'dev@usacs.rutgers.edu',
    },
    {
      icon: Calendar,
      name: 'Education Committee',
      description: 'Promotes mentorship, research, learning, and improving the Rutgers CS academic experience for other students.',
      responsibilities: [
        'Organize tech talks and educational workshops',
        'Create mentorship programs for students',
        'Support research initiatives and academic projects',
        'Improve the CS learning experience at Rutgers',
      ],
      skills: 'Teaching, mentorship, curriculum development, event planning',
      color: 'from-purple-500 to-pink-600',
      contact: 'education@usacs.rutgers.edu',
    },
    {
      icon: HeartHandshake,
      name: 'Community Committee',
      description: 'Fosters diverse, inclusive, and friendly social spaces for CS majors to interact and form friendships and connections.',
      responsibilities: [
        'Organize social events and community building activities',
        'Lead diversity, equity, and inclusion initiatives',
        'Create welcoming spaces for all CS students',
        'Facilitate discussions on important topics',
      ],
      skills: 'Empathy, communication, event coordination, program development',
      color: 'from-pink-500 to-rose-600',
      contact: 'community@usacs.rutgers.edu',
    },
    {
      icon: Users,
      name: 'Outreach Committee',
      description: 'Builds relationships with youth, the Rutgers CS alumni network, and companies that are looking to recruit Computer Science majors.',
      responsibilities: [
        'Reach out to companies for sponsorships and partnerships',
        'Coordinate with alumni network',
        'Organize career fairs and recruiting events',
        'Build relationships with youth and educational programs',
      ],
      skills: 'Networking, communication, relationship building, negotiation',
      color: 'from-emerald-500 to-teal-600',
      contact: 'outreach@usacs.rutgers.edu',
    },
  ];

  const benefits = [
    'Develop leadership and professional skills',
    'Build your portfolio with real projects',
    'Network with industry professionals',
    'Make lasting friendships and connections',
    'Gain hands-on experience in your area of interest',
    'Contribute to a vibrant CS community',
  ];

  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 via-pink-600 to-rose-600 rounded-2xl flex items-center justify-center">
          <Rocket className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl text-white">Our Committees</h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          USACS committees are the driving force behind everything we do. Join a committee to develop your skills, 
          make an impact, and work alongside passionate students who share your interests.
        </p>
      </motion.div>

      {/* Why Join Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="backdrop-blur-xl bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-rose-700/20 border border-purple-400/30 rounded-2xl p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.5) 35px, rgba(255,255,255,0.5) 70px)`,
        }}></div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl text-white text-center">Why Join a Committee?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-white/80">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Committees Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl text-white">Explore Our Committees</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Find the committee that matches your interests and skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {committees.map((committee, index) => (
            <motion.div
              key={committee.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${committee.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <committee.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2">{committee.name}</h3>
                  <p className="text-white/70 leading-relaxed">{committee.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {committee.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                        <span className="text-white/50 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white mb-2 text-sm">Relevant Skills:</h4>
                  <p className="text-white/60 text-sm italic">{committee.skills}</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={`mailto:${committee.contact}`}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{committee.contact}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}