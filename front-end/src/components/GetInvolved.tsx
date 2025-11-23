import { motion } from 'motion/react';
import { UserPlus, Calendar, Mail, Users, Code, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export function GetInvolved() {
  const ways = [
    {
      icon: Users,
      title: 'Become a Member',
      description: 'Join USACS and gain access to exclusive workshops, networking events, and a community of passionate CS students.',
      action: 'Sign up for our mailing list',
      color: 'from-blue-500 to-cyan-600',
      steps: [
        'Subscribe to our mailing list on the home page',
        'Attend a general meeting or social event',
        'Connect with us on social media',
        'Start participating in our events and activities',
      ],
    },
    {
      icon: Code,
      title: 'Join a Committee',
      description: 'Get hands-on experience by joining one of our committees. Build your skills while contributing to the club\'s success.',
      action: 'Explore committees',
      color: 'from-purple-500 to-pink-600',
      steps: [
        'Check out our Committees page to learn about each team',
        'Reach out to the committee that interests you',
        'Attend a committee meeting to see if it\'s a good fit',
        'Apply during our recruitment period',
      ],
    },
    {
      icon: Calendar,
      title: 'Attend Events',
      description: 'From hackathons to tech talks, we host events throughout the year. All skill levels are welcome!',
      action: 'View upcoming events',
      color: 'from-emerald-500 to-teal-600',
      steps: [
        'Check our Events page for the calendar',
        'RSVP to events that interest you',
        'Bring friends and meet new people',
        'Follow us on social media for event updates',
      ],
    },
    {
      icon: Sparkles,
      title: 'Contribute to Projects',
      description: 'Work on open-source projects, club tools, or start your own initiative with club support.',
      action: 'Get started',
      color: 'from-orange-500 to-rose-600',
      steps: [
        'Browse our GitHub repositories',
        'Join the Development Committee',
        'Propose your own project idea',
        'Collaborate with other members',
      ],
    },
  ];

  const benefits = [
    {
      icon: Code,
      title: 'Skill Development',
      description: 'Learn new technologies through workshops and hands-on projects',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with students, alumni, and industry professionals',
    },
    {
      icon: Sparkles,
      title: 'Resume Building',
      description: 'Gain experience and projects to showcase to employers',
    },
    {
      icon: Calendar,
      title: 'Exclusive Opportunities',
      description: 'Access to hackathons, tech talks, and career events',
    },
  ];

  const faqs = [
    {
      question: 'Do I need to be a CS major to join?',
      answer: 'No! While we focus on computer science, we welcome students from all majors who are interested in technology and programming.',
    },
    {
      question: 'Is there a membership fee?',
      answer: 'USACS membership is completely free! We want to be accessible to all students interested in computer science.',
    },
    {
      question: 'What if I\'m a beginner?',
      answer: 'We welcome students at all skill levels! Many of our events and workshops are specifically designed for beginners. Everyone starts somewhere.',
    },
    {
      question: 'How much time commitment is required?',
      answer: 'It\'s flexible! You can attend events casually or get more involved with committees. We understand that students have busy schedules.',
    },
    {
      question: 'When can I join?',
      answer: 'You can join at any time during the academic year! While committee applications may have specific periods, general membership is always open.',
    },
    {
      question: 'How do I stay updated on events?',
      answer: 'Subscribe to our mailing list, follow our social media accounts, and join our GroupMe to get notifications about all our activities.',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 via-pink-600 to-rose-600 rounded-2xl flex items-center justify-center">
          <UserPlus className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl text-white">Get Involved</h1>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Whether you're looking to learn, lead, or just connect with fellow CS enthusiasts, 
          USACS has a place for you. Here's how you can become part of our community.
        </p>
      </motion.div>

      {/* Ways to Get Involved */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl text-white">Ways to Get Involved</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Choose your path to becoming an active member of USACS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${way.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <way.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-2">{way.title}</h3>
                  <p className="text-white/70">{way.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <p className="text-white/80 text-sm">How to get started:</p>
                {way.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white/70 text-xs">{idx + 1}</span>
                    </div>
                    <p className="text-white/60 text-sm">{step}</p>
                  </div>
                ))}
              </div>

              <button className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl transition-all flex items-center justify-center gap-2 group">
                <span>{way.action}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
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

        <div className="relative z-10 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-4">Why Get Involved?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Being part of USACS comes with incredible benefits that extend beyond the classroom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="backdrop-blur-lg bg-white/5 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* FAQs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl text-white">Frequently Asked Questions</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + index * 0.05 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <h3 className="text-white">{faq.question}</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed ml-8">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-12 text-center"
      >
        <h2 className="text-3xl text-white mb-4">Ready to Join USACS?</h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          Take the first step today! Subscribe to our mailing list, follow us on social media, 
          or reach out directly. We can't wait to welcome you to the community.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="mailto:usacs@email.rutgers.edu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-red-600 via-pink-600 to-rose-700 text-white rounded-xl shadow-lg hover:shadow-red-500/50 transition-all inline-flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Us</span>
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
          >
            View Events Calendar
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
