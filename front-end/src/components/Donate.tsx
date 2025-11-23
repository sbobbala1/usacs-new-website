import { motion } from 'motion/react';
import { Heart, ArrowRight } from 'lucide-react';

export function Donate() {
  const steps = [
    {
      number: 1,
      text: 'Go to the Rutgers donation portal',
      link: 'https://give.rutgersfoundation.org/',
      linkText: 'Go here'
    },
    {
      number: 2,
      text: 'Click on "I want to view a list of schools and programs that I can support."'
    },
    {
      number: 3,
      text: 'A box will pop up. Select "Other, please specify" then enter the amount to be donated.'
    },
    {
      number: 4,
      text: 'Next to "If you\'ve selected the "other, please specify" option, please specify the fund:" type "USACS"'
    },
    {
      number: 5,
      text: 'Fill out the rest of the form including whether or not donation is recurrent as well as personal information.'
    },
    {
      number: 6,
      text: 'Click Proceed to Payment and fill in payment details.'
    }
  ];

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      {/* Hearts pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20 C30 15, 35 10, 40 15 C45 20, 45 25, 30 35 C15 25, 15 20, 20 15 C25 10, 30 15, 30 20' fill='%23ffffff'/%3E%3C/svg%3E")`,
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
            className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-400 via-rose-500 to-red-600 rounded-2xl flex items-center justify-center"
          >
            <Heart className="w-10 h-10 text-white" fill="currentColor" />
          </motion.div>

          <h1 className="text-5xl text-white">Donate</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Thank you for donating to USACS, the Rutgers Undergraduate Computer Science Community!
          </p>
        </motion.div>

        {/* Main Donation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="backdrop-blur-xl bg-gradient-to-br from-pink-500/20 via-rose-600/20 to-red-600/20 border border-pink-400/30 rounded-2xl p-8 space-y-8"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl text-white">How to Donate to USACS</h2>
            <p className="text-white/80">Follow these simple steps to make your contribution:</p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all group"
              >
                <div className="flex items-start gap-4">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                    <span className="text-white">{step.number}</span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <p className="text-white/90 leading-relaxed">
                      {step.text}
                      {step.link && (
                        <>
                          {' - '}
                          <a
                            href={step.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors underline"
                          >
                            {step.linkText}
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center pt-4">
            <motion.a
              href="https://give.rutgersfoundation.org/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-rose-600 to-red-600 text-white rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all text-lg"
            >
              Donate Now
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 space-y-6"
        >
          <h2 className="text-3xl text-white text-center">Your Impact</h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto leading-relaxed">
            Your generous donation helps USACS create amazing opportunities for CS students at Rutgers. 
            We use funds to support workshops, hackathons, networking events, technology resources, 
            and student initiatives. Every contribution makes a real difference in building our community!
          </p>
        </motion.div>

        {/* Questions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 text-center space-y-4"
        >
          <h2 className="text-2xl text-white">Have Questions?</h2>
          <p className="text-white/70">
            If you have any questions about donations or need assistance with the process, 
            please don't hesitate to reach out to us.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 backdrop-blur-xl bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}