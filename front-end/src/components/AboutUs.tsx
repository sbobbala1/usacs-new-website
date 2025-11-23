import { motion } from 'motion/react';
import { Heart, Users, Globe, Shield, Sparkles, Lightbulb } from 'lucide-react';

export function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: 'Inclusion First',
      description: 'We create spaces where every voice is heard, valued, and respected. Our community thrives on diverse perspectives and experiences.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Users,
      title: 'Equity in Action',
      description: 'We actively work to remove barriers and provide equal opportunities for all students, regardless of their background or identity.',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Globe,
      title: 'Diverse Community',
      description: 'We celebrate the rich diversity of our members and recognize that different backgrounds bring unique strengths to our community.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Shield,
      title: 'Safe Space',
      description: 'We maintain a zero-tolerance policy for discrimination and harassment. Everyone deserves to feel safe and supported in our spaces.',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const initiatives = [
    {
      title: 'Mentorship Programs',
      description: 'Connecting students from underrepresented groups with mentors who understand their unique challenges and can provide guidance.',
    },
    {
      title: 'Inclusive Events',
      description: 'Designing workshops, hackathons, and social events that are welcoming and accessible to students of all backgrounds and skill levels.',
    },
    {
      title: 'Scholarship Support',
      description: 'Advocating for and promoting scholarship opportunities specifically for underrepresented students in computer science.',
    },
    {
      title: 'Community Building',
      description: 'Creating affinity groups and support networks where students can connect with others who share similar experiences.',
    },
    {
      title: 'Awareness Campaigns',
      description: 'Hosting discussions, panels, and events that raise awareness about diversity, equity, and inclusion in tech.',
    },
    {
      title: 'Advocacy',
      description: 'Speaking up for policies and practices that promote equity and inclusion in computer science education and industry.',
    },
  ];

  const commitments = [
    'We acknowledge that diversity, equity, and inclusion are not just buzzwords—they are essential to innovation and progress in technology.',
    'We recognize that systemic barriers exist in computer science education and the tech industry, and we commit to actively working against them.',
    'We believe that everyone, regardless of race, gender, sexual orientation, disability, socioeconomic status, or any other identity, deserves equal opportunity to thrive in computer science.',
    'We stand in solidarity with marginalized communities and will use our platform to amplify their voices.',
    'We commit to continuous learning and improvement in our DEI efforts, recognizing that this is an ongoing journey.',
  ];

  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl text-white">About Us</h1>
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xl text-white/70">
            At USACS, we believe that a diverse and inclusive community is essential for innovation and growth in computer science.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="backdrop-blur-xl bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-indigo-700/20 border border-pink-400/30 rounded-xl p-6"
          >
            <p className="text-white/90 italic leading-relaxed">
              "Our administration may not support that, but we do."
            </p>
            <p className="text-white/70 text-sm mt-3">
              We stand firm in our commitment to diversity, equity, and inclusion, regardless of institutional stance. Our community leads by example.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl text-white">Our Core Values</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            These principles guide everything we do at USACS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-white mb-3">{value.title}</h3>
              <p className="text-white/70 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our Commitments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="backdrop-blur-xl bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-blue-700/20 border border-purple-400/30 rounded-2xl p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.5) 35px, rgba(255,255,255,0.5) 70px)`,
        }}></div>

        <div className="relative z-10 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl text-white mb-4">Our Commitments</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We hold ourselves accountable to these principles
            </p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-start gap-4 backdrop-blur-lg bg-white/5 rounded-xl p-4"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <p className="text-white/80 leading-relaxed">{commitment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Initiatives */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl text-white">Our Initiatives</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Concrete actions we're taking to build a more inclusive community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.05 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all"
            >
              <h3 className="text-xl text-white mb-3">{initiative.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-12 text-center"
      >
        <h2 className="text-3xl text-white mb-4">Join Us in Making a Difference</h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          Building an inclusive community is a collective effort. Whether you want to share your ideas, get involved in our initiatives, or need support, we're here for you.
        </p>
        <motion.a
          href="mailto:usacs@email.rutgers.edu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          Contact Our DEI Team
        </motion.a>
      </motion.div>
    </div>
  );
}
