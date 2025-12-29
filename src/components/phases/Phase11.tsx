import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase11Props {
  theme: Theme;
}

export function Phase11({ theme }: Phase11Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        🧼 Phase 11: Performance & Best Practices
      </h1>

      <TopicCard title="React.memo" icon="🧠" theme={theme}>
        <p>
          <strong>React.memo</strong> prevents unnecessary re-renders! 
          It's like remembering the answer instead of recalculating! 📝
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { memo, useState } from 'react';

// Without memo - re-renders every time parent changes
function ExpensiveComponent({ name }) {
  console.log('Rendering ExpensiveComponent');
  // Imagine expensive calculations here...
  return <h2>Hello, {name}!</h2>;
}

// With memo - only re-renders when 'name' changes!
const MemoizedComponent = memo(function ExpensiveComponent({ name }) {
  console.log('Rendering MemoizedComponent');
  return <h2>Hello, {name}!</h2>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alex');
  
  return (
    <div>
      <MemoizedComponent name={name} />
      {/* This button won't cause MemoizedComponent to re-render! */}
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      <button onClick={() => setName('Sam')}>
        Change Name (will re-render)
      </button>
    </div>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="Code Splitting" icon="✂️" theme={theme}>
        <p>Load code only when needed! Makes your app load faster! ⚡</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { lazy, Suspense } from 'react';

// Regular import (loaded immediately)
// import HeavyComponent from './HeavyComponent';

// Lazy import (loaded only when needed)
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Heavy Component
      </button>
      
      {show && (
        <Suspense fallback={<div>Loading... ⏳</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Like a library! 📚 You don't take all books home at once. 
          You borrow one when you need it!
        </p>
      </TopicCard>

      <TopicCard title="Lazy Loading Routes" icon="🗺️" theme={theme}>
        <p>Load pages only when user visits them!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading page... ⏳</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="Avoid Unnecessary Re-renders" icon="🚫" theme={theme}>
        <p>Tips to make your app super fast!</p>
        <div className="space-y-4 mt-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h4 className="mb-2">✅ Move state down</h4>
            <p className="mb-2">Don't put state in parent if only child needs it!</p>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// ❌ Bad - counter in parent
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent />  {/* Re-renders when count changes! */}
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

// ✅ Good - counter in its own component
function Parent() {
  return (
    <div>
      <ExpensiveComponent />  {/* Never re-renders! */}
      <CounterWrapper />
    </div>
  );
}

function CounterWrapper() {
  const [count, setCount] = useState(0);
  return <Counter count={count} setCount={setCount} />;
}`}
            />
          </div>

          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
            <h4 className="mb-2">✅ Use useCallback for functions</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  
  // Function recreated every render
  const handleClick = () => {
    console.log('Clicked!');
  };
  
  // Function only created once
  const handleClickMemo = useCallback(() => {
    console.log('Clicked!');
  }, []);
  
  return <Child onClick={handleClickMemo} />;
}`}
            />
          </div>
        </div>
      </TopicCard>

      <TopicCard title="Best Practices" icon="⭐" theme={theme}>
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
            <h4 className="mb-2">📁 Folder Structure</h4>
            <CodeBlock
              theme={theme}
              language="text"
              code={`src/
├── components/       # Reusable components
│   ├── Button.jsx
│   └── Card.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   └── About.jsx
├── hooks/           # Custom hooks
│   └── useFetch.js
├── utils/           # Helper functions
│   └── helpers.js
├── styles/          # CSS files
└── App.jsx`}
            />
          </div>

          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
            <h4 className="mb-2">📝 Naming Conventions</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Components: PascalCase → <code className="bg-black/20 px-1">UserCard.jsx</code></li>
              <li>Functions: camelCase → <code className="bg-black/20 px-1">handleClick</code></li>
              <li>Constants: UPPER_CASE → <code className="bg-black/20 px-1">API_URL</code></li>
              <li>CSS files: kebab-case → <code className="bg-black/20 px-1">user-card.css</code></li>
            </ul>
          </div>

          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h4 className="mb-2">✨ Clean Code Tips</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Keep components small (one responsibility)</li>
              <li>Use meaningful names</li>
              <li>Extract repeated code into custom hooks</li>
              <li>Comment complex logic</li>
              <li>Use destructuring for cleaner code</li>
              <li>Avoid deeply nested components</li>
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
          🎉 Performance Expert!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          Your apps will be fast and clean! Ready for Phase 12? Let's learn Testing! 🧪
        </p>
      </div>
    </div>
  );
}
