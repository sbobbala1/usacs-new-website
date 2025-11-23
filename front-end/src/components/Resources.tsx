import { motion } from 'motion/react';
import { Book, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function Resources() {
  const [openSections, setOpenSections] = useState<string[]>(['getting-started']);

  const toggleSection = (id: string) => {
    setOpenSections(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const resourceSections = [
    {
      id: 'getting-started',
      title: "I've never programmed before. Where do I start?",
      resources: [
        {
          name: 'Codecademy Python course',
          description: 'A fantastic place to first learn programming, and an excellent introduction to Python. Completing this free course will give you a wonderful foundation and prepare you for so many CS opportunities!',
          url: 'https://www.codecademy.com/learn/learn-python-3'
        },
        {
          name: 'Rutgers CS Discord',
          description: 'Community of Rutgers CS students and alumni, mostly people from USACS.',
          url: 'https://discord.com/invite/q4WDdK9'
        },
        {
          name: 'Harvard CS50',
          description: 'Introduction to the intellectual enterprises of computer science and the art of programming.',
          url: 'https://cs50.harvard.edu/'
        }
      ]
    },
    {
      id: 'usacs-resources',
      title: 'USACS-Authored Resources',
      resources: [
        {
          name: 'USACS Interest Groups',
          description: 'Learn about a variety of topics such as JavaScript, Python, machine learning, data science, and cybersecurity from students and alumni who have experience in these fields.',
          url: 'https://discord.com/invite/udUEuuY'
        },
        {
          name: 'USACS YouTube Channel',
          description: 'Starting from Fall 2018, all USACS student Hacker Hours have been recorded and uploaded to YouTube. The code and slides are also posted in the video descriptions.',
          url: 'https://www.youtube.com/channel/UCwDoERNwcCrZICFil2fmdmA'
        },
        {
          name: 'USACS Medium Series',
          description: 'Blogs written by USACS members on various topics, such as community endeavors and tips for achieving success in CS.',
          url: 'https://medium.com/@rutgersusacs'
        }
      ]
    },
    {
      id: 'alumni',
      title: 'USACS Alumni Directory',
      resources: [
        {
          name: 'USACS Alumni Directory',
          description: 'Looking to get in touch with alumni who can give you career guidance or potentially give referrals? Reach out to USACS.',
          url: 'https://usacs.rutgers.edu/resources#:~:text=%C2%B7-,USACS%20Alumni%20Directory'
        }
      ]
    },
    {
      id: 'internships',
      title: 'Internship Applications',
      resources: [
        {
          name: 'CSL/USACS',
          description: 'People here are your first professional network! They can give you tips and referrals.',
          url: 'https://discord.com/invite/q4WDdK9'
        },
        {
          name: 'intern.supply',
          description: 'Excellent listing of tech companies to apply to.',
          url: 'https://intern.supply/'
        },
        {
          name: 'Internships Google Doc',
          description: "A student's listing of tech internships to apply to, categorized by which year of college you're in, along with tips for success.",
          url: 'https://usacs.rutgers.edu/resources#:~:text=Internships%20Google%20Doc'
        }
      ]
    },
    {
      id: 'interview-prep',
      title: 'Interview Prep',
      resources: [
        {
          name: 'FireCode',
          description: "Essentially easier, more guided, less anxiety-inducing Leetcode. If you're just starting your interview prep, or hate the competitiveness of Leetcode/Hackerrank, give this a go.",
          url: 'https://usacs.rutgers.edu/resources#:~:text=%C2%B7-,FireCode'
        },
        {
          name: 'Leetcode',
          description: 'A lot of interview questions that people have actually gotten, and is good practice for 112!',
          url: 'https://leetcode.com/'
        },
        {
          name: 'Pramp',
          description: 'Lets you practice coding interviews live, and is really interactive.',
          url: 'https://www.pramp.com/'
        },
        {
          name: 'Cracking the Coding Interview',
          description: 'Great, concise explanation of the fundamentals of data structures. The CSL also has a copy you can borrow!',
          url: 'https://usacs.rutgers.edu/resources#:~:text=Cracking%20the%20Coding%20Interview'
        }
      ]
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      resources: [
        {
          name: 'Web Development Roadmap',
          description: 'Start here! This has a listing of all the topics in web dev, what they are, and the order in which you should learn them.',
          url: 'https://roadmap.sh/frontend'
        },
        {
          name: 'Codecademy - HTML/CSS/JavaScript',
          description: 'Learn the basics of building a website and making it dynamic in fun, interactive tutorials.',
          url: 'https://www.codecademy.com/catalog/language/html-css'
        },
        {
          name: 'MDN Web Docs',
          description: 'Documentation and tutorials for web development. The beginner tutorials in the "learn web development" section are some of the best.',
          url: 'https://developer.mozilla.org/en-US/docs/Learn'
        }
      ]
    },
    {
      id: 'python',
      title: 'Python',
      resources: [
        {
          name: 'Codecademy Python course',
          description: 'A fantastic place to first learn programming, and an excellent introduction to Python.',
          url: 'https://www.codecademy.com/learn/learn-python-3'
        },
        {
          name: 'Automate the Boring Stuff with Python',
          description: 'This resource is packed with easy tutorials for using Python to automate repetitive tasks.',
          url: 'https://automatetheboringstuff.com/'
        }
      ]
    },
    {
      id: 'cpp',
      title: 'C++',
      resources: [
        {
          name: 'TutorialsPoint C++',
          description: 'C++ is a challenging language to learn. TutorialsPoint has thorough and easy-to-understand explanations for C++ beginners.',
          url: 'https://www.tutorialspoint.com/cplusplus/'
        },
        {
          name: 'cplusplus reference',
          description: 'Detailed list of all functions, objects, and libraries in the native c++ library.',
          url: 'https://cplusplus.com/reference/'
        }
      ]
    },
    {
      id: 'java',
      title: 'Java',
      resources: [
        {
          name: 'Codecademy - Java',
          description: "If you complete this interactive course, you'll be set for 111 (if you're new to programming, do the Python course first though)!",
          url: 'https://www.codecademy.com/learn/learn-java'
        },
        {
          name: 'Coding Bat',
          description: 'Good intro to Java practice; helpful for CS111.',
          url: 'https://codingbat.com/java'
        }
      ]
    },
    {
      id: 'data-structures',
      title: 'Data Structures / Algorithms',
      resources: [
        {
          name: 'mycodeschool - Data Structures playlist',
          description: 'A nice playlist on Introduction to Data Structures; the tutor codes in C++ but it\'s still pretty straightforward and easy to follow.',
          url: 'https://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P'
        },
        {
          name: 'Visualized Data Structures',
          description: 'Visualizations of common algorithms and data structures. You can interact with all the data structures, and see how common algorithms act on them.',
          url: 'https://usacs.rutgers.edu/resources#:~:text=Visualized%20Data%20Structures'
        },
        {
          name: 'MIT 6.006 Lectures',
          description: "Lecture videos for MIT's version of 112. Content is much better than many of the free MOOCs you get by just googling.",
          url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/'
        },
        {
          name: 'MIT 6.046J Lectures',
          description: 'Same as 6.006 lectures, but equivalent to 344.',
          url: 'https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/'
        },
        {
          name: 'Cracking the Coding Interview',
          description: 'Great, concise explanation of the fundamentals of data structures. The CSL also has a copy you can borrow!',
          url: 'https://usacs.rutgers.edu/resources#:~:text=Cracking%20the%20Coding%20Interview'
        }
      ]
    },
    {
      id: 'general-cs',
      title: 'General CS Knowledge',
      resources: [
        {
          name: 'Hacker News',
          description: 'One of the most active tech forums on the internet. Great for staying up to date with the field.',
          url: 'https://news.ycombinator.com/'
        },
        {
          name: 'Awesome Lists',
          description: 'Open Sourced / Community Curated list of the best lists for learning various technologies/languages.',
          url: 'https://github.com/sindresorhus/awesome'
        },
        {
          name: 'Learn X in Y Minutes',
          description: 'A great way to refresh your knowledge on a language, or if you need to quickly learn the syntax or design of a language.',
          url: 'https://learnxinyminutes.com/'
        },
        {
          name: 'Replit',
          description: 'REPL for most common languages. Useful for quickly trying something out without installing anything.',
          url: 'https://replit.com/'
        },
        {
          name: 'Dev.to',
          description: 'Programming blogs, might be looking at if you run out of content on HN.',
          url: 'https://dev.to/'
        },
        {
          name: 'Tech Dev Guide',
          description: 'A collection of material from many sources, including Google, that you can use to supplement your classwork or direct your own learning.',
          url: 'https://techdevguide.withgoogle.com/'
        },
        {
          name: 'Open Source Society University',
          description: 'A complete education in computer science utilizing only online resources.',
          url: 'https://github.com/ossu/computer-science'
        },
        {
          name: 'SICP',
          description: "MIT's intro book that offers a new and interesting approach to programming - especially functional programming.",
          url: 'https://mitpress.mit.edu/sites/default/files/sicp/index.html'
        },
        {
          name: 'HackerRank',
          description: 'Keep your skills up on university holidays.',
          url: 'https://www.hackerrank.com/'
        },
        {
          name: 'TechYacks',
          description: 'Best tech talks, scraped from Hacker News.',
          url: 'https://techyacks.com/'
        },
        {
          name: 'Public APIs',
          description: 'Looking for APIs for your next project? Use this!',
          url: 'https://github.com/public-apis/public-apis'
        }
      ]
    },
    {
      id: 'git',
      title: 'Git',
      resources: [
        {
          name: 'Learn Git Branching',
          description: 'Visual interactive guide for understanding git branching. Shows a visual representation of what the commit tree looks like.',
          url: 'https://learngitbranching.js.org/'
        },
        {
          name: 'Git: The Simple Guide',
          description: 'Quick and easy-to-follow explanation of the Git workflow.',
          url: 'https://rogerdudler.github.io/git-guide/'
        },
        {
          name: 'Atlassian Git tutorial',
          description: "The Atlassian group's comprehensive tutorial on all of Git.",
          url: 'https://www.atlassian.com/git/tutorials'
        }
      ]
    },
    {
      id: 'vim',
      title: 'Vim',
      resources: [
        {
          name: 'VIM Adventures',
          description: 'Small game that teaches the basics of vim.',
          url: 'https://vim-adventures.com/'
        }
      ]
    },
    {
      id: 'batch',
      title: 'Batch Script',
      resources: [
        {
          name: 'Win32 Shell Scripting',
          description: 'In depth tutorial on how to write batch files and code that runs from the command line.',
          url: 'https://ss64.com/nt/'
        }
      ]
    },
    {
      id: 'stickers',
      title: 'Stickers',
      resources: [
        {
          name: 'Stickermule',
          description: 'Great place to buy custom stickers, maybe to put on your laptop!',
          url: 'https://www.stickermule.com/'
        }
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Book/library-style pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10' y='10' width='10' height='60' fill='%23ffffff'/%3E%3Crect x='25' y='10' width='10' height='60' fill='%23ffffff'/%3E%3Crect x='40' y='10' width='10' height='60' fill='%23ffffff'/%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative z-10 container mx-auto px-6 py-8 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
            <Book className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl text-white">Resources</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A community-driven collection of resources to aid you in your CS endeavors.
          </p>
        </motion.div>

        {/* Resource Sections */}
        <div className="space-y-4">
          {resourceSections.map((section, sectionIndex) => {
            const isOpen = openSections.includes(section.id);
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + sectionIndex * 0.05 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden"
              >
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all group"
                >
                  <h2 className="text-xl text-white text-left group-hover:text-blue-400 transition-colors">
                    {section.title}
                  </h2>
                  <div className="text-white/70 group-hover:text-white transition-colors">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Section Content */}
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <div className="p-6 space-y-4">
                      {section.resources.map((resource, resourceIndex) => (
                        <motion.div
                          key={resourceIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: resourceIndex * 0.05 }}
                          className="group"
                        >
                          <a
                            href={resource.url}
                            target={resource.url.startsWith('http') ? '_blank' : undefined}
                            rel={resource.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="flex items-start gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all"
                          >
                            <ExternalLink className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <div className="flex-1 space-y-1">
                              <h3 className="text-white group-hover:text-blue-400 transition-colors">
                                {resource.name}
                              </h3>
                              <p className="text-white/70 text-sm leading-relaxed">
                                {resource.description}
                              </p>
                            </div>
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Contribute Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-white/20 rounded-2xl p-8 text-center space-y-6"
        >
          <h2 className="text-3xl text-white">Have a Resource to Share?</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Help your fellow CS students by contributing study guides, notes, or tutorials. 
            Share your knowledge and make learning easier for everyone!
          </p>
          <motion.a
            href="https://usacs.rutgers.edu/resources#:~:text=to%20add%20something%3F-,Let%20us%20know."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            Submit a Resource
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}