import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase1Props {
  theme: Theme;
}

export function Phase1({ theme }: Phase1Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        🌱 Phase 1: React Introduction & Setup
      </h1>

      <TopicCard title="What is React?" icon="🤔" theme={theme}>
        <p>
          <strong>React</strong> is like a magic toolbox for building websites! 🎨
        </p>
        <p>
          Imagine you're building with LEGO blocks. React lets you create small pieces (called components) 
          and snap them together to build an entire website!
        </p>
        <p className={`p-4 rounded-lg ${
          theme === 'dark' ? 'bg-purple-800/30' : 'bg-purple-100'
        }`}>
          <strong>Real-World Example:</strong> Think of Facebook, Instagram, and Netflix - they all use React! 
          When you click "Like" on a post, React updates just that button without reloading the whole page. 
          It's super fast! ⚡
        </p>
      </TopicCard>

      <TopicCard title="Why React?" icon="💡" theme={theme}>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong>Fast & Smooth:</strong> Changes happen instantly without page reloads</li>
          <li><strong>Reusable Pieces:</strong> Create a button once, use it everywhere!</li>
          <li><strong>Popular:</strong> Millions of developers use it worldwide</li>
          <li><strong>Easy to Learn:</strong> Perfect for beginners like you!</li>
          <li><strong>Fun Projects:</strong> Build games, apps, and cool websites</li>
        </ul>
        <p className={`p-4 rounded-lg mt-4 ${
          theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
        }`}>
          <strong>Fun Fact:</strong> React was created by Facebook engineers in 2013. Now it's used by 
          companies like Netflix, Airbnb, and WhatsApp! 🏢
        </p>
      </TopicCard>

      <TopicCard title="Features of React" icon="⭐" theme={theme}>
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <strong>🧩 Components:</strong> Build websites like LEGO - small pieces that fit together
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
            <strong>⚡ Virtual DOM:</strong> A super-fast copy of your website that makes updates lightning quick
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-pink-900/30' : 'bg-pink-100'}`}>
            <strong>🔄 One-Way Data Flow:</strong> Data flows in one direction, making things predictable
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
            <strong>🎣 Hooks:</strong> Special tools that give your components superpowers!
          </div>
        </div>
      </TopicCard>

      <TopicCard title="SPA vs MPA" icon="🏗️" theme={theme}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
            <h3 className={`mb-2 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-900'}`}>
              SPA (Single Page Application)
            </h3>
            <p>React uses this! 🎉</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>One page, many views</li>
              <li>Super fast navigation</li>
              <li>Feels like an app</li>
              <li>No page reloads</li>
            </ul>
            <p className="mt-2"><strong>Example:</strong> Gmail, Facebook</p>
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-orange-900/30' : 'bg-orange-100'}`}>
            <h3 className={`mb-2 ${theme === 'dark' ? 'text-orange-300' : 'text-orange-900'}`}>
              MPA (Multi Page Application)
            </h3>
            <p>Traditional websites</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Many separate pages</li>
              <li>Page reloads on click</li>
              <li>Slower navigation</li>
              <li>Each page loads fresh</li>
            </ul>
            <p className="mt-2"><strong>Example:</strong> Wikipedia, News sites</p>
          </div>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <strong>Real-World Example:</strong> Imagine a book 📖. MPA is like flipping pages (each page loads). 
          SPA is like a magic book that changes its content without flipping! ✨
        </p>
      </TopicCard>

      <TopicCard title="Virtual DOM" icon="🎭" theme={theme}>
        <p>
          The <strong>Virtual DOM</strong> is React's secret superpower! 🦸
        </p>
        <p>
          Think of it like this: When you draw a picture, you might sketch it on scratch paper first, 
          then copy the final version to nice paper. React does the same thing!
        </p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <h3 className="mb-2">How it works:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>React creates a virtual copy of your website (the "sketch")</li>
            <li>When something changes, React updates the virtual copy first</li>
            <li>React compares the old and new virtual copies</li>
            <li>React only updates the parts that changed on the real website</li>
          </ol>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Imagine you're playing a video game 🎮. When your character 
          moves, the game doesn't redraw EVERYTHING - just your character! That's what Virtual DOM does 
          for React websites!
        </p>
      </TopicCard>

      <TopicCard title="React Architecture" icon="🏛️" theme={theme}>
        <p>React is organized in a smart way:</p>
        <div className="space-y-3 mt-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <strong>🧩 Components:</strong> Building blocks of your app
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
            <strong>📦 Props:</strong> Data passed from parent to child (like giving instructions)
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
            <strong>🔄 State:</strong> Data that can change (like a light switch: on/off)
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-pink-900/30' : 'bg-pink-100'}`}>
            <strong>🎣 Hooks:</strong> Special functions that add powers to components
          </div>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
          <strong>Think of it like a tree:</strong> Your App is the trunk, components are branches, 
          and the leaves are small pieces of UI! 🌳
        </p>
      </TopicCard>

      <TopicCard title="React vs Angular vs Vue" icon="⚔️" theme={theme}>
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
            <h3 className={`mb-2 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-900'}`}>
              ⚛️ React
            </h3>
            <ul className="space-y-1 text-sm">
              <li>✅ Easy to learn</li>
              <li>✅ Very popular</li>
              <li>✅ Flexible</li>
              <li>✅ Huge community</li>
              <li>✅ Made by Facebook</li>
            </ul>
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100'}`}>
            <h3 className={`mb-2 ${theme === 'dark' ? 'text-red-300' : 'text-red-900'}`}>
              🅰️ Angular
            </h3>
            <ul className="space-y-1 text-sm">
              <li>📚 More complex</li>
              <li>🏢 Used in big companies</li>
              <li>🛠️ All tools included</li>
              <li>📖 Steeper learning curve</li>
              <li>🏢 Made by Google</li>
            </ul>
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h3 className={`mb-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
              💚 Vue
            </h3>
            <ul className="space-y-1 text-sm">
              <li>🎨 Easy & fun</li>
              <li>📝 Good documentation</li>
              <li>⚡ Fast performance</li>
              <li>🌟 Growing popularity</li>
              <li>👥 Community-driven</li>
            </ul>
          </div>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <strong>Which one to learn?</strong> React is the most popular and easiest for beginners! 
          You're making a great choice! 🎉
        </p>
      </TopicCard>

      <TopicCard title="Environment Setup" icon="🛠️" theme={theme}>
        <h3 className="mb-2">Let's set up your computer to build React apps!</h3>
        
        <div className={`p-4 rounded-lg mb-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <h4 className="mb-2">Step 1: Install Node.js & npm</h4>
          <p className="mb-2">
            <strong>Node.js</strong> is like the engine that runs JavaScript on your computer. 
            <strong> npm</strong> is like an app store for code libraries!
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Visit <strong>nodejs.org</strong></li>
            <li>Download the LTS version (the stable one)</li>
            <li>Install it (click Next, Next, Next!)</li>
            <li>Open your terminal/command prompt</li>
            <li>Type: <code className="bg-black/20 px-2 py-1 rounded">node --version</code></li>
            <li>You should see a version number! 🎉</li>
          </ol>
        </div>

        <div className={`p-4 rounded-lg mb-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <h4 className="mb-2">Step 2: Create Your First React App with Vite (Recommended! ⚡)</h4>
          <p className="mb-2">
            <strong>Vite</strong> is super fast! It's like a race car compared to a regular car! 🏎️
          </p>
          <CodeBlock
            theme={theme}
            language="bash"
            code={`# Create a new React app
npm create vite@latest my-first-app

# Choose: React → JavaScript

# Enter the folder
cd my-first-app

# Install everything
npm install

# Start the app!
npm run dev`}
          />
        </div>

        <div className={`p-4 rounded-lg mb-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <h4 className="mb-2">Alternative: Create React App</h4>
          <p className="mb-2">This is the older way, but still works great!</p>
          <CodeBlock
            theme={theme}
            language="bash"
            code={`# Create a new React app
npx create-react-app my-first-app

# Enter the folder
cd my-first-app

# Start the app!
npm start`}
          />
        </div>
      </TopicCard>

      <TopicCard title="Project Folder Structure" icon="📁" theme={theme}>
        <p>When you create a React app, you get folders and files. Here's what they mean:</p>
        <CodeBlock
          theme={theme}
          language="text"
          code={`my-first-app/
├── node_modules/     📦 All the libraries (don't touch!)
├── public/           🌍 Public files (images, icons)
│   └── index.html    📄 Main HTML file
├── src/              💻 Your code goes here!
│   ├── App.jsx       ⚛️ Main component
│   ├── main.jsx      🚀 Starting point
│   └── App.css       🎨 Styles
├── package.json      📋 Project info & dependencies
└── vite.config.js    ⚙️ Vite settings`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
          <p><strong>Important folders:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><strong>src/</strong> - This is where you'll write your code!</li>
            <li><strong>public/</strong> - Put images and icons here</li>
            <li><strong>node_modules/</strong> - Don't touch! This is where libraries live</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Running & Building React App" icon="🚀" theme={theme}>
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h4 className="mb-2">🏃 Running in Development Mode</h4>
            <p className="mb-2">This is for when you're building and testing:</p>
            <CodeBlock
              theme={theme}
              language="bash"
              code={`# For Vite projects
npm run dev

# For Create React App
npm start`}
            />
            <p className="mt-2">
              Your app will open at <strong>http://localhost:5173</strong> (Vite) or 
              <strong> http://localhost:3000</strong> (CRA)
            </p>
            <p className="mt-2">
              Every time you save a file, the website updates automatically! Magic! ✨
            </p>
          </div>

          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
            <h4 className="mb-2">📦 Building for Production</h4>
            <p className="mb-2">When you're ready to share your app with the world:</p>
            <CodeBlock
              theme={theme}
              language="bash"
              code={`# Build your app
npm run build

# This creates a 'dist' or 'build' folder
# with all your files ready to deploy!`}
            />
            <p className="mt-2">
              The build command creates optimized files that load super fast! 🚀
            </p>
          </div>

          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
            <h4 className="mb-2">🎯 Quick Commands Reference</h4>
            <ul className="space-y-2">
              <li><code className="bg-black/20 px-2 py-1 rounded">npm run dev</code> - Start development server</li>
              <li><code className="bg-black/20 px-2 py-1 rounded">npm run build</code> - Build for production</li>
              <li><code className="bg-black/20 px-2 py-1 rounded">npm install</code> - Install dependencies</li>
            </ul>
          </div>
        </div>
      </TopicCard>

      <div className={`mt-8 p-6 rounded-xl text-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30'
          : 'bg-gradient-to-r from-green-100 to-blue-100 border border-green-300'
      }`}>
        <h3 className={`mb-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
          🎉 Congratulations!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          You've completed Phase 1! You now understand what React is and how to set it up. 
          Ready for Phase 2? Let's learn about JSX and Components! 🚀
        </p>
      </div>
    </div>
  );
}
