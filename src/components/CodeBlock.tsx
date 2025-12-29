import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Theme } from '../App';

interface CodeBlockProps {
  code: string;
  language?: string;
  theme: Theme;
}

export function CodeBlock({ code, language = 'jsx', theme }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative rounded-xl overflow-hidden ${
      theme === 'dark'
        ? 'bg-gray-900/50 border border-purple-500/30'
        : 'bg-white border border-purple-300'
    } shadow-lg`}>
      <div className={`flex items-center justify-between px-4 py-2 ${
        theme === 'dark' ? 'bg-gray-800/80' : 'bg-purple-50'
      }`}>
        <span className={`${
          theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
        }`}>
          {language}
        </span>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all hover:scale-105 ${
            copied
              ? theme === 'dark'
                ? 'bg-green-600 text-white'
                : 'bg-green-500 text-white'
              : theme === 'dark'
                ? 'bg-purple-600 hover:bg-purple-500 text-white'
                : 'bg-purple-500 hover:bg-purple-600 text-white'
          }`}
        >
          {copied ? (
            <>
              <Check size={16} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className={`p-4 overflow-x-auto ${
        theme === 'dark' ? 'text-green-300' : 'text-gray-800'
      }`}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
