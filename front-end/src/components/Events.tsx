import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export function Events() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto h-full">{/* Calendar-style grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}></div>

      <div className="relative z-10 container mx-auto px-6 py-8 space-y-8 h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl text-white">Events Calendar</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Check out all our upcoming workshops, hackathons, networking events, and more!
          </p>
        </motion.div>

        {/* Google Calendar Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden flex-1"
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?src=923a9274ef4f95a6740bf40750c60b8b6f5108141aca6b488d5639eee61d131e%40group.calendar.google.com&ctz=America%2FNew_York"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            className="rounded-2xl"
          ></iframe>
        </motion.div>

        {/* Calendar Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-2xl p-6 text-center space-y-4"
        >
          <h2 className="text-2xl text-white">Never Miss an Event</h2>
          <p className="text-white/70">
            Add our calendar to your Google Calendar to get automatic updates about all USACS events!
          </p>
          <motion.a
            href="https://calendar.google.com/calendar/u/0/r?cid=923a9274ef4f95a6740bf40750c60b8b6f5108141aca6b488d5639eee61d131e@group.calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Add to Google Calendar
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}