import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Rocket, Star, Sparkles } from 'lucide-react';
import { Theme } from '../App';

interface HomeProps {
  theme: Theme;
}

export function Home({ theme }: HomeProps) {
  return (
    <div className="max-w-6xl mx-auto mt-16">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <Rocket className={`mx-auto mb-4 ${
          theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
        }`} size={80} />
        <h1 className={`mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Welcome to React Learning Adventure! 🚀
        </h1>
        <p className={`max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-purple-200' : 'text-purple-800'
        }`}>
          Hey there, future React developer! Get ready to learn React in the most fun way possible. 
          We'll go on an amazing journey through 14 exciting phases! 🎉
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[
          { phase: 1, title: 'React Intro & Setup', emoji: '🌱', color: 'green' },
          { phase: 2, title: 'JSX & Components', emoji: '🧩', color: 'blue' },
          { phase: 3, title: 'Props & State', emoji: '🔁', color: 'purple' },
          { phase: 4, title: 'Events & Lists', emoji: '⚡', color: 'yellow' },
          { phase: 5, title: 'Forms & Refs', emoji: '✍️', color: 'pink' },
          { phase: 6, title: 'Hooks', emoji: '🧠', color: 'indigo' },
          { phase: 7, title: 'Routing', emoji: '🧭', color: 'cyan' },
          { phase: 8, title: 'Styling', emoji: '🎨', color: 'rose' },
          { phase: 9, title: 'API Integration', emoji: '🌍', color: 'emerald' },
          { phase: 10, title: 'State Management', emoji: '🧘', color: 'violet' },
          { phase: 11, title: 'Performance', emoji: '🧼', color: 'sky' },
          { phase: 12, title: 'Testing', emoji: '🧪', color: 'orange' },
          { phase: 13, title: 'Deployment', emoji: '🌐', color: 'teal' },
          { phase: 14, title: 'Real Projects', emoji: '💪', color: 'fuchsia' },
        ].map((item) => (
          <motion.div
            key={item.phase}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={`/phase${item.phase}`}
              className={`block p-6 rounded-2xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-purple-800/40 to-pink-800/40 border border-purple-500/40'
                  : 'bg-gradient-to-br from-white to-purple-50 border border-purple-200'
              } shadow-lg hover:shadow-2xl transition-all`}
            >
              <div className="text-5xl mb-3 text-center">{item.emoji}</div>
              <div className={`text-center ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Phase {item.phase}
              </div>
              <div className={`text-center ${
                theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
              }`}>
                {item.title}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={`rounded-2xl p-8 mb-8 ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-purple-500/40'
            : 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300'
        } shadow-xl`}
      >
        <div className="flex items-start gap-4">
          <Sparkles className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} size={40} />
          <div>
            <h2 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              What You'll Learn 🎓
            </h2>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-purple-200' : 'text-purple-800'}`}>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-400" size={20} />
                Build awesome websites that people love to use
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-400" size={20} />
                Make interactive pages that respond to clicks and actions
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-400" size={20} />
                Connect to the internet and show real data
              </li>
              <li className="flex items-center gap-2">
                <Star className="text-yellow-400" size={20} />
                Create your own projects and share them with the world
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className={`text-center p-6 rounded-xl ${
        theme === 'dark'
          ? 'bg-purple-900/30 text-purple-200'
          : 'bg-purple-50 text-purple-800'
      }`}>
        <p>💡 <strong>Tip:</strong> Click the menu button (☰) at the top-left to navigate between phases!</p>
        <p className="mt-2">🌙 Use the theme toggle button to switch between dark and light mode!</p>
      </div>
    </div>
  );
}
