import { motion } from 'motion/react';
import { Mail, Github, Instagram, Linkedin, Twitter, Users, Calendar, BookOpen, MapPin, Facebook, Youtube } from 'lucide-react';
import { useState } from 'react';
import usacsLogo from 'figma:asset/b19ea8866895b5235fec00c379fca8401d6dbbdd.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Home() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/rutgers.usacs/?ref=br_tf', label: 'Facebook', color: 'from-blue-600 to-blue-800' },
    { icon: Twitter, url: 'https://twitter.com/Rutgers_Usacs', label: 'Twitter', color: 'from-sky-400 to-blue-500' },
    { icon: Instagram, url: 'https://www.instagram.com/Rutgers_Usacs/', label: 'Instagram', color: 'from-pink-500 to-rose-600' },
    { icon: Github, url: 'https://github.com/usacs', label: 'GitHub', color: 'from-gray-700 to-gray-900' },
    { icon: 'Medium', url: 'https://medium.com/@rutgersusacs', label: 'Medium', color: 'from-green-600 to-emerald-700' },
    { icon: 'GroupMe', url: 'https://groupme.com/join_group/107740869/jBpq3tpX', label: 'GroupMe', color: 'from-cyan-500 to-blue-600' },
    { icon: Youtube, url: 'https://www.youtube.com/channel/UCwDoERNwcCrZICFil2fmdmA', label: 'YouTube', color: 'from-red-500 to-red-700' },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Active Members' },
    { icon: Calendar, value: '50+', label: 'Annual Events' },
    { icon: BookOpen, value: '100+', label: 'Workshops' },
  ];

  const locations = [
    {
      name: 'THE CSL',
      fullName: 'Coding and Social Lounge',
      location: 'Hill Bldg Annex, Room 252 (2nd Floor)',
      description: 'Part of the Computer Science Instructional Labs, The CSL was designed to provide students their own atmosphere for collaboration and group projects.',
      image: 'https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsb3VuZ2UlMjBjb21wdXRlcnMlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjM2Njc4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'COMMAND CENTER',
      fullName: 'Command Center',
      location: 'Hill Bldg Annex (Next to CSL)',
      description: 'Right next door to the CSL, the command center is stocked with Linux machines and whiteboards, perfect for late night cram sessions.',
      image: 'https://images.unsplash.com/photo-1648127549632-9232f0c36549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMGxpbnV4JTIwbWFjaGluZXN8ZW58MXx8fHwxNzYzNjY3ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-500 to-pink-600',
    },
    {
      name: 'HACKERSPACE',
      fullName: 'Hack-R-Space',
      location: 'Hill 120',
      description: 'As one of the newest additions to the Computer Science Instructional Labs, the Hack-R-Space is a workshop for students to tinker and build. The Hack-R-Space offers students access to an abundance of resources, including 3D printing, Robotics, Oculus Rifts, and Instrumental recording hardware.',
      image: 'https://images.unsplash.com/photo-1614086138082-8f9f4bed81e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtlcnNwYWNlJTIwM2QlMjBwcmludGluZyUyMHJvYm90aWNzfGVufDF8fHx8MTc2MzY2Nzg5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      name: 'MAKERSPACE',
      fullName: 'Makerspace',
      location: 'Near Livingston Campus',
      description: 'The Makerspace is designed for Rutgers affiliates of all experience levels to bring their ideas to life. Located near Livingston Campus, the Makerspace is a tech atelier for students to design and construct hardware.',
      image: 'https://images.unsplash.com/photo-1745449563046-f75d0bd28f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGhhcmR3YXJlJTIwY29uc3RydWN0aW9uJTIwdG9vbHN8ZW58MXx8fHwxNzYzNjY3ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-orange-500 to-rose-600',
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section with Circuit Pattern */}
      <div className="relative container mx-auto px-6 py-16">
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='90' cy='10' r='2'/%3E%3Ccircle cx='10' cy='90' r='2'/%3E%3Ccircle cx='90' cy='90' r='2'/%3E%3Cpath d='M10 10 L30 10 M70 10 L90 10 M10 90 L30 90 M70 90 L90 90 M10 10 L10 30 M10 70 L10 90 M90 10 L90 30 M90 70 L90 90' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block"
          >
            <img src={usacsLogo} alt="USACS Logo" className="w-40 h-40 mx-auto rounded-2xl shadow-2xl" />
          </motion.div>

          <h1 className="text-6xl text-white">
            Welcome to <span className="bg-gradient-to-r from-red-300 via-rose-400 to-purple-400 bg-clip-text text-transparent">USACS</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            The Undergraduate Student Alliance of Computer Scientists at Rutgers University. 
            Join us in building the future of technology, one line of code at a time.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white rounded-xl shadow-lg hover:shadow-red-500/50 transition-all"
            >
              Join Us Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Divider with Wave Pattern */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gradient-to-r from-red-600 via-purple-600 to-rose-700 px-6 py-2 rounded-full backdrop-blur-xl border border-white/20">
            <span className="text-white/70 text-sm">Explore USACS</span>
          </div>
        </div>
      </div>

      {/* Content Section with Dotted Pattern */}
      <div className="relative container mx-auto px-6 pb-16 space-y-12">
        {/* Dot pattern background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}></div>

        {/* Colorful gradient overlays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-red-600/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-600/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 space-y-12">
          {/* Social Media Section with Grid Pattern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}></div>
            
            <h2 className="text-3xl text-white text-center mb-6 relative z-10">Connect With Us</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all`}
                  aria-label={social.label}
                >
                  {typeof social.icon === 'string' ? (
                    social.icon === 'Medium' ? (
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.226 12.026c-1.92 0-3.477 1.56-3.477 3.483 0 1.924 1.556 3.484 3.477 3.484 1.92 0 3.477-1.56 3.477-3.484 0-1.923-1.556-3.483-3.477-3.483zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm.253 19.753c-4.268 0-7.726-3.46-7.726-7.73 0-4.27 3.458-7.73 7.726-7.73 4.268 0 7.727 3.46 7.727 7.73 0 4.27-3.46 7.73-7.727 7.73z"/>
                      </svg>
                    )
                  ) : (
                    <social.icon className="w-8 h-8 text-white" />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Mailing List Section with Stripe Pattern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="backdrop-blur-xl bg-gradient-to-br from-red-600/20 via-purple-600/20 to-rose-700/20 border border-red-400/30 rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Diagonal stripe pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.5) 35px, rgba(255,255,255,0.5) 70px)`,
            }}></div>

            <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 via-pink-500 to-rose-600 rounded-2xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl text-white">Join Our Mailing List</h2>
              <p className="text-white/70">
                Stay updated with the latest events, workshops, and opportunities. 
                Be the first to know about hackathons, tech talks, and networking events!
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-red-500 backdrop-blur-xl"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-red-600 via-pink-600 to-rose-700 text-white rounded-xl shadow-lg hover:shadow-red-500/50 transition-all whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </form>

              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400"
                >
                  ✓ Successfully subscribed! Check your email for confirmation.
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Locations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 via-rose-600 to-pink-600 rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl text-white">Our Locations</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Discover the spaces where innovation happens at Rutgers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((loc, index) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:border-red-400/50 transition-all cursor-pointer group"
                >
                  {/* Location Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={loc.image}
                      alt={loc.fullName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${loc.color} opacity-40 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="absolute top-4 left-4">
                      <h3 className="text-2xl text-white drop-shadow-lg">{loc.name}</h3>
                      <p className="text-white/90 text-sm drop-shadow-lg">{loc.fullName}</p>
                    </div>
                  </div>

                  {/* Location Info */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white/80">{loc.location}</p>
                    </div>
                    <p className="text-white/70 leading-relaxed">{loc.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}