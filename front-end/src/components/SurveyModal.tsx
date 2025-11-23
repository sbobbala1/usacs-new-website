import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Send } from 'lucide-react';
import { useState } from 'react';

interface SurveyModalProps {
  onClose: () => void;
}

export function SurveyModal({ onClose }: SurveyModalProps) {
  const [formData, setFormData] = useState({
    year: '',
    major: '',
    websiteRating: 0,
    usefulnessRating: 0,
    designRating: 0,
    favoriteFeature: '',
    improvements: '',
    eventsInterest: [] as string[],
    wouldRecommend: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const eventTypes = [
    'Workshops',
    'Hackathons',
    'Tech Talks',
    'Social Events',
    'Career Fairs',
    'Study Groups',
  ];

  const handleRatingClick = (category: 'websiteRating' | 'usefulnessRating' | 'designRating', rating: number) => {
    setFormData({ ...formData, [category]: rating });
  };

  const handleEventInterestToggle = (event: string) => {
    const currentInterests = formData.eventsInterest;
    if (currentInterests.includes(event)) {
      setFormData({
        ...formData,
        eventsInterest: currentInterests.filter(e => e !== event),
      });
    } else {
      setFormData({
        ...formData,
        eventsInterest: [...currentInterests, event],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const StarRating = ({ 
    rating, 
    onRate, 
    category 
  }: { 
    rating: number; 
    onRate: (rating: number) => void; 
    category: string;
  }) => (
    <div className="flex items-center justify-center space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate(star)}
          className="transition-transform hover:scale-125"
        >
          <Star
            className={`w-8 h-8 ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-white/30 hover:text-white/50'
            }`}
          />
        </button>
      ))}
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {!submitted ? (
            <>
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-xl border-b border-white/20 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl text-white">Student Website Survey</h2>
                  <p className="text-white/70 text-sm">Help us improve the USACS website!</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2">Year</label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="" className="bg-gray-800">Select year</option>
                      <option value="freshman" className="bg-gray-800">Freshman</option>
                      <option value="sophomore" className="bg-gray-800">Sophomore</option>
                      <option value="junior" className="bg-gray-800">Junior</option>
                      <option value="senior" className="bg-gray-800">Senior</option>
                      <option value="graduate" className="bg-gray-800">Graduate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white mb-2">Major</label>
                    <input
                      type="text"
                      value={formData.major}
                      onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                      placeholder="e.g., Computer Science"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Ratings */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-center mb-3">
                      Overall Website Experience
                    </label>
                    <StarRating
                      rating={formData.websiteRating}
                      onRate={(rating) => handleRatingClick('websiteRating', rating)}
                      category="websiteRating"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-center mb-3">
                      How Useful is the Content?
                    </label>
                    <StarRating
                      rating={formData.usefulnessRating}
                      onRate={(rating) => handleRatingClick('usefulnessRating', rating)}
                      category="usefulnessRating"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-center mb-3">
                      Design & Aesthetics
                    </label>
                    <StarRating
                      rating={formData.designRating}
                      onRate={(rating) => handleRatingClick('designRating', rating)}
                      category="designRating"
                    />
                  </div>
                </div>

                {/* Favorite Feature */}
                <div>
                  <label className="block text-white mb-2">
                    What's your favorite feature of the website?
                  </label>
                  <input
                    type="text"
                    value={formData.favoriteFeature}
                    onChange={(e) => setFormData({ ...formData, favoriteFeature: e.target.value })}
                    placeholder="e.g., AI Chatbot, Events Calendar, Resources..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Events Interest */}
                <div>
                  <label className="block text-white mb-3">
                    What types of events are you most interested in?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {eventTypes.map((event) => (
                      <button
                        key={event}
                        type="button"
                        onClick={() => handleEventInterestToggle(event)}
                        className={`px-4 py-2 rounded-xl transition-all ${
                          formData.eventsInterest.includes(event)
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                            : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
                        }`}
                      >
                        {event}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Improvements */}
                <div>
                  <label className="block text-white mb-2">
                    What improvements would you suggest?
                  </label>
                  <textarea
                    value={formData.improvements}
                    onChange={(e) => setFormData({ ...formData, improvements: e.target.value })}
                    placeholder="Share your ideas to help us improve..."
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                </div>

                {/* Would Recommend */}
                <div>
                  <label className="block text-white mb-3">
                    Would you recommend USACS to other CS students?
                  </label>
                  <div className="flex items-center justify-center space-x-4">
                    {['Yes', 'Maybe', 'No'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFormData({ ...formData, wouldRecommend: option })}
                        className={`px-6 py-2 rounded-xl transition-all ${
                          formData.wouldRecommend === option
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                            : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Submit Survey</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 text-center space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
              >
                <span className="text-white text-4xl">✓</span>
              </motion.div>
              <h2 className="text-3xl text-white">Thank You!</h2>
              <p className="text-white/70">
                Your feedback helps us make USACS better for everyone. 
                We appreciate you taking the time to share your thoughts!
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}