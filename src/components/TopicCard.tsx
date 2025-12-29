import { motion } from 'motion/react';
import { Theme } from '../App';

interface TopicCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  theme: Theme;
}

export function TopicCard({ title, icon, children, theme }: TopicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl p-6 mb-6 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30'
          : 'bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-300'
      } shadow-xl hover:shadow-2xl transition-all`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{icon}</span>
        <h2 className={`${
          theme === 'dark' ? 'text-purple-200' : 'text-purple-900'
        }`}>
          {title}
        </h2>
      </div>
      <div className={`space-y-4 ${
        theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
      }`}>
        {children}
      </div>
    </motion.div>
  );
}
