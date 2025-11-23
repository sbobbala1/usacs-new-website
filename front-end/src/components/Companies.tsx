import { motion } from 'motion/react';
import { Building2, Mail, Calendar, Handshake, Users, Briefcase } from 'lucide-react';

export function Companies() {
  const supportWays = [
    {
      icon: Calendar,
      title: 'Host an Event',
      description: 'Organize tech talks, workshops, or networking sessions with our members. Share your expertise and build relationships with future talent.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Briefcase,
      title: 'Sponsor USACS',
      description: 'Support our hackathons, workshops, and events. Your sponsorship helps us provide valuable experiences to hundreds of CS students.',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Users,
      title: 'Recruitment Opportunities',
      description: 'Connect with talented CS students for internships, co-ops, and full-time positions. Access our job board and career fairs.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Handshake,
      title: 'Partner with Us',
      description: 'Collaborate on long-term initiatives, provide mentorship, or offer resources to support student development.',
      color: 'from-orange-500 to-rose-600',
    },
  ];

  const benefits = [
    'Direct access to 500+ motivated CS students',
    'Brand visibility at major university events',
    'Opportunities to mentor the next generation',
    'Early access to top talent for recruiting',
    'Build lasting relationships with Rutgers CS community',
    'Make a meaningful impact on student education',
  ];

  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
          <Building2 className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl text-white">Partner With USACS</h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Join leading tech companies in supporting the next generation of computer scientists at Rutgers University.
          We offer unique opportunities for companies to engage with our vibrant community of students.
        </p>
      </motion.div>

      {/* Ways to Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl text-white">How to Support USACS</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            There are many ways to get involved and make a difference in our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportWays.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all cursor-pointer group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${way.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <way.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-3">{way.title}</h3>
              <p className="text-white/70 leading-relaxed">{way.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="backdrop-blur-xl bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-rose-700/20 border border-purple-400/30 rounded-2xl p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.5) 35px, rgba(255,255,255,0.5) 70px)`,
        }}></div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl text-white text-center">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
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

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-12 text-center"
      >
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 via-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl text-white mb-4">Ready to Get Started?</h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          We'd love to hear from you! Reach out to discuss partnership opportunities, event hosting, or any other ways to engage with our community.
        </p>
        <div className="space-y-4">
          <motion.a
            href="mailto:usacs@email.rutgers.edu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 via-pink-600 to-rose-700 text-white rounded-xl shadow-lg hover:shadow-red-500/50 transition-all"
          >
            Contact Us: usacs@email.rutgers.edu
          </motion.a>
          <p className="text-white/60 text-sm">
            Please include your company name, contact information, and how you'd like to collaborate with us.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
