import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase6Props {
  theme: Theme;
}

export function Phase6({ theme }: Phase6Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        🧠 Phase 6: Hooks (Core + Advanced)
      </h1>

      <TopicCard title="What are Hooks?" icon="🎣" theme={theme}>
        <p>
          <strong>Hooks</strong> are special functions that let you "hook into" React features! 
          They give your components superpowers! 🦸
        </p>
        <p>Hooks let you use state and other React features without writing a class!</p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p><strong>Rules of Hooks:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>✅ Only call Hooks at the top level (not in loops, conditions, or nested functions)</li>
            <li>✅ Only call Hooks from React function components or custom Hooks</li>
            <li>✅ Hook names must start with "use" (useState, useEffect, useMyHook)</li>
          </ul>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Hooks are like power-ups in a video game! 🎮 
          Each hook gives your component a new ability!
        </p>
      </TopicCard>

      <TopicCard title="useState Hook" icon="🔄" theme={theme}>
        <p>We already learned this one! It adds state to your component!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alex');
  
  return (
    <div>
      <p>{name} clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setName('Sam')}>Change Name</button>
    </div>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="useEffect Hook" icon="⚡" theme={theme}>
        <p>
          <strong>useEffect</strong> lets you perform side effects! Like fetching data, 
          setting up timers, or changing the document title! 🎯
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    // This runs after every render
    document.title = \`Time: \${seconds}s\`;
    
    // Set up interval
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    
    // Cleanup function (runs when component unmounts)
    return () => {
      clearInterval(interval);
    };
  }, [seconds]); // Dependency array
  
  return <h1>Timer: {seconds} seconds ⏱️</h1>;
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <p><strong>Common uses:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>📡 Fetching data from an API</li>
            <li>⏰ Setting up timers or intervals</li>
            <li>📊 Updating the document title</li>
            <li>🎧 Adding event listeners</li>
            <li>💾 Saving to localStorage</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="useEffect Dependency Array" icon="📋" theme={theme}>
        <p>The dependency array tells useEffect when to run!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState, useEffect } from 'react';

function Examples() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  
  // No dependency array - runs after EVERY render
  useEffect(() => {
    console.log('Runs every render');
  });
  
  // Empty array [] - runs only ONCE (on mount)
  useEffect(() => {
    console.log('Runs only on mount');
  }, []);
  
  // With dependencies - runs when those values change
  useEffect(() => {
    console.log('Runs when count changes');
  }, [count]);
  
  // Multiple dependencies
  useEffect(() => {
    console.log('Runs when count OR name changes');
  }, [count, name]);
  
  return <div>...</div>;
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
          <p><strong>Remember:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🔄 No array = runs every render</li>
            <li>🎯 Empty [] = runs once on mount</li>
            <li>📊 [value] = runs when value changes</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="useContext Hook" icon="🌐" theme={theme}>
        <p>
          <strong>useContext</strong> lets you share data without passing props through every level! 
          Like teleporting data! 🚀
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { createContext, useContext, useState } from 'react';

// 1. Create context
const ThemeContext = createContext();

// 2. Provider component
function App() {
  const [theme, setTheme] = useState('dark');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. Use context in any child component
function Toolbar() {
  return <Button />;
}

function Button() {
  // Access context without prop drilling!
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button
      style={{
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000'
      }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Current: {theme}
    </button>
  );
}`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Like a radio station! 📻 The station broadcasts (Provider), 
          and anyone with a radio (useContext) can tune in, no wires needed!
        </p>
      </TopicCard>

      <TopicCard title="useMemo Hook" icon="🧠" theme={theme}>
        <p>
          <strong>useMemo</strong> remembers expensive calculations so you don't have to repeat them! 
          It's like homework - do it once, remember the answer! 📝
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  
  // This only recalculates when count changes!
  const expensiveValue = useMemo(() => {
    console.log('Calculating...');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += count;
    }
    return result;
  }, [count]); // Only re-run if count changes
  
  return (
    <div>
      <p>Result: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setTodos([...todos, 'New Todo'])}>
        Add Todo (won't recalculate!)
      </button>
    </div>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="useCallback Hook" icon="🔄" theme={theme}>
        <p>
          <strong>useCallback</strong> remembers functions so they don't get recreated on every render!
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);
  
  // This function is only recreated if count changes
  const handleClick = useCallback(() => {
    console.log('Count:', count);
  }, [count]);
  
  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Change Other State (Child won't re-render!)
      </button>
    </div>
  );
}

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
}`}
        />
      </TopicCard>

      <TopicCard title="useReducer Hook" icon="🎛️" theme={theme}>
        <p>
          <strong>useReducer</strong> is like useState but for complex state logic! 
          It's like a state machine! 🤖
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useReducer } from 'react';

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        + Add
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        - Subtract
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        🔄 Reset
      </button>
    </div>
  );
}`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <strong>When to use useReducer?</strong> When you have complex state logic, 
          multiple sub-values, or the next state depends on the previous one!
        </p>
      </TopicCard>

      <TopicCard title="Custom Hooks" icon="✨" theme={theme}>
        <p>
          You can create your own hooks! Custom hooks let you reuse stateful logic! 🎯
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState, useEffect } from 'react';

// Custom hook for window size
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}

// Using custom hooks
function App() {
  const size = useWindowSize();
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <div>
      <p>Window: {size.width} x {size.height}</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name (saved in localStorage!)"
      />
    </div>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <p><strong>Popular Custom Hooks:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🎣 useFetch - for API calls</li>
            <li>📱 useMediaQuery - for responsive design</li>
            <li>💾 useLocalStorage - for local storage</li>
            <li>⏱️ useDebounce - for delayed updates</li>
            <li>🎨 useToggle - for boolean states</li>
          </ul>
        </div>
      </TopicCard>

      <div className={`mt-8 p-6 rounded-xl text-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30'
          : 'bg-gradient-to-r from-green-100 to-blue-100 border border-green-300'
      }`}>
        <h3 className={`mb-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
          🎉 You're a Hooks Master!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          Hooks are the heart of modern React! You now have all the tools to build amazing apps! 
          Ready for Phase 7? Let's learn Routing and build multi-page apps! 🧭
        </p>
      </div>
    </div>
  );
}
