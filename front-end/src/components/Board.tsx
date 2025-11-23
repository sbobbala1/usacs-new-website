import { motion } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Board() {
  const boardMembers = [
    {
      name: 'Angela Xue',
      position: 'Co-President',
      major: 'CS, Math & Cognitive Science',
      year: 'Senior',
      bio: 'Angela is a senior triple majoring in Computer Science, Mathematics, and Cognitive Science. Now in her third year on the board (#USACS4life!), she brings energy and dedication to the organization while also being a proud member of Rutgers\' Womxn\'s Ultimate Frisbee team, Nightshade. Her favorite USACS memories are hosting board meetings with a team of kind, passionate, and driven e-board members.',
      interests: 'Finance and tech career paths outside of traditional software engineering roles',
      favoriteEvents: 'Paws and Professors, Mock Interviews, Bloomberg office visit',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'Aditi Parekh',
      position: 'Co-President',
      major: 'CS & Critical Intelligence Studies',
      year: 'Senior',
      bio: 'Aditi is a senior majoring in Computer Science with a minor in Critical Intelligence Studies. Now in her second year on the board, Aditi is passionate about creating engaging events and fostering a strong community. Outside of USACS, she enjoys watching Netflix, following tennis and the NFL, and connecting with peers at socials.',
      interests: 'Data Science and AI/ML',
      favoriteEvents: 'Mock Interview workshop, Boba Social',
      color: 'from-purple-400 to-pink-500',
    },
    {
      name: 'Ishita Gabhane',
      position: 'Vice President & Road To SWE Co-Director',
      major: 'CS, Data Science & Business Admin',
      year: 'Senior',
      bio: 'Ishita is a senior double-majoring in Computer Science and Data Science with a minor in Business Administration. She brings three years of e-board experience to the role and has been deeply involved in USACS since her freshman year. Outside of USACS, she loves spending time with friends, mixing tracks, and planning her next travel adventure.',
      interests: 'Software engineering, AI/ML, and fintech',
      favoriteEvents: 'Paws & Profs, e-board socials',
      color: 'from-green-400 to-emerald-500',
    },
    {
      name: 'Hasan Ali',
      position: 'Education Director',
      major: 'CS & Physics',
      year: 'Junior',
      bio: 'Hasan is a junior double-majoring in Computer Science and Physics. Passionate about building community and sharing knowledge, Hasan loves connecting with peers and creating opportunities for growth within the organization. Outside of academics, he enjoys playing the saxophone, hitting the tennis courts, reading, and exploring his love for cars.',
      interests: 'Software engineering',
      favoriteEvents: 'First Town Hall',
      color: 'from-pink-400 to-rose-500',
    },
    {
      name: 'Gokul Elangovan',
      position: 'Tech Director',
      major: 'CS & Data Science',
      year: 'Junior',
      bio: 'Gokul is a junior majoring in Computer Science and Data Science. Passionate about tech and community building, Gokul is excited to help lead and grow the organization. He\'s a big fan of sweets and enjoys creative outlets — his favorite event so far was the Paint and Sip, where he painted former USACS President Sibi in striking detail.',
      interests: 'AI/ML research',
      favoriteEvents: 'Paint and Sip',
      color: 'from-amber-400 to-orange-500',
    },
    {
      name: 'Zene Sangoi',
      position: 'Community Director',
      major: 'CS, Data Science & Business Admin',
      year: 'Sophomore',
      bio: 'Zene is a sophomore double-majoring in Computer Science and Data Science with a minor in Business Administration. Always curious and eager to try new things, Zene loves traveling, exploring emerging technologies, and crocheting in her free time. A fun fact — she\'s already visited 40 countries!',
      interests: 'Data Science and AI/ML',
      favoriteEvents: 'Outdoor boba social before elections',
      color: 'from-indigo-400 to-purple-500',
    },
    {
      name: 'Ved Patel',
      position: 'Outreach Director',
      major: 'CS & Data Science',
      year: 'Junior',
      bio: 'Ved is a junior double-majoring in Computer Science and Data Science. He\'s excited to help make this year in USACS memorable and is always eager to connect with new members at events. Outside of academics, Ved loves playing basketball and going on hikes. One of his favorite USACS experiences was the mentorship socials, where he met incredible mentors.',
      interests: 'Software engineering and artificial intelligence',
      favoriteEvents: 'Mentorship socials',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'Pallavi Biswas',
      position: 'Communications Director',
      major: 'CS, Data Science & Business Admin',
      year: 'Junior',
      bio: 'Pallavi is a junior double-majoring in Computer Science and Data Science with a minor in Business Administration. She treasures events like Paws & Professors, where she combined her love for dogs with networking opportunities, and considers e-board socials an unforgettable part of her USACS journey.',
      interests: 'AI/ML engineering and data analytics',
      favoriteEvents: 'Paws & Professors, e-board socials',
      color: 'from-rose-400 to-pink-500',
    },
    {
      name: 'Anusha Iyer',
      position: 'Road To SWE Co-Director',
      major: 'Math, CS & PPE',
      year: 'Sophomore',
      bio: 'Anusha is a sophomore majoring in Mathematics and Computer Science with a minor in Philosophy, Politics, and Economics (PPE). She brings her passion for interdisciplinary learning and research to the USACS community. Outside of academics, she enjoys dancing, reading, listening to music, and solving crossword puzzles.',
      interests: 'Software engineering and AI/ML',
      favoriteEvents: 'Mentorship socials',
      color: 'from-violet-400 to-fuchsia-500',
    },
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      {/* Triangular mesh pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z M30 15 L45 30 L30 45 L15 30 Z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative z-10 container mx-auto px-6 py-8 space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl text-white">Meet Our Board</h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Dedicated students working together to build an amazing CS community at Rutgers
        </p>
      </motion.div>

      {/* Board Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {boardMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all cursor-pointer"
          >
            {/* Avatar */}
            <div className={`h-48 bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center relative z-10">
                <span className="text-white text-3xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 space-y-3">
              <div>
                <h3 className="text-xl text-white">{member.name}</h3>
                <p className="text-purple-400">{member.position}</p>
                <p className="text-white/60 text-sm">{member.major} • {member.year}</p>
              </div>

              <p className="text-white/70 text-sm leading-relaxed line-clamp-4">{member.bio}</p>

              {/* Interests */}
              {member.interests && (
                <div className="pt-2">
                  <p className="text-white/50 text-xs">Interested in:</p>
                  <p className="text-white/80 text-sm">{member.interests}</p>
                </div>
              )}

              {/* Favorite Events */}
              {member.favoriteEvents && (
                <div>
                  <p className="text-white/50 text-xs">Favorite Events:</p>
                  <p className="text-white/80 text-sm">{member.favoriteEvents}</p>
                </div>
              )}

              {/* Social Links */}
              <div className="flex items-center space-x-3 pt-2">
                <div
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center opacity-50 cursor-not-allowed"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center opacity-50 cursor-not-allowed"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center opacity-50 cursor-not-allowed"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Join Board CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-2xl p-8 text-center space-y-6"
      >
        <h2 className="text-3xl text-white">Interested in Joining the Board?</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          We're always looking for passionate students to help lead USACS. Board applications 
          open at the start of each semester. Follow us on social media to stay updated on 
          application deadlines and requirements!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          Learn More
        </motion.button>
      </motion.div>
      </div>
    </div>
  );
}