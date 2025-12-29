import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase10Props {
  theme: Theme;
}

export function Phase10({ theme }: Phase10Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        🧘 Phase 10: State Management
      </h1>

      <TopicCard title="Why State Management?" icon="🤔" theme={theme}>
        <p>
          When your app grows, passing props through many components gets messy! 
          State management helps organize everything! 🗂️
        </p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p><strong>Problems without state management:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🎢 Prop drilling (passing props through many levels)</li>
            <li>😵 Hard to track where data comes from</li>
            <li>🔄 Same data duplicated in many places</li>
            <li>🐛 Bugs when data gets out of sync</li>
          </ul>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Like a school locker! 🏫 Instead of carrying all your books everywhere, 
          you keep them in one place and grab what you need!
        </p>
      </TopicCard>

      <TopicCard title="Context API" icon="🌐" theme={theme}>
        <p>React's built-in solution for sharing state!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { createContext, useContext, useState } from 'react';

// 1. Create Context
const UserContext = createContext();

// 2. Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Alex',
    age: 10,
    loggedIn: false
  });
  
  const login = () => setUser({ ...user, loggedIn: true });
  const logout = () => setUser({ ...user, loggedIn: false });
  
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Custom hook to use context
function useUser() {
  return useContext(UserContext);
}

// 4. Use in any component!
function Header() {
  const { user, logout } = useUser();
  
  return (
    <header>
      <h1>Welcome, {user.name}!</h1>
      {user.loggedIn && <button onClick={logout}>Logout</button>}
    </header>
  );
}

function LoginButton() {
  const { user, login } = useUser();
  
  if (user.loggedIn) return null;
  
  return <button onClick={login}>Login</button>;
}

// 5. Wrap app with provider
function App() {
  return (
    <UserProvider>
      <Header />
      <LoginButton />
    </UserProvider>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="Redux Basics" icon="🏪" theme={theme}>
        <p>
          <strong>Redux</strong> is like a giant store for all your app's data! 
          Popular for big applications! 🏢
        </p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <p><strong>Redux Concepts:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🏪 <strong>Store:</strong> Holds all your app's state</li>
            <li>⚡ <strong>Actions:</strong> Describe what happened</li>
            <li>🔧 <strong>Reducers:</strong> Functions that update state</li>
            <li>📡 <strong>Dispatch:</strong> Send actions to the store</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Redux Toolkit" icon="🛠️" theme={theme}>
        <p>The modern, easier way to use Redux!</p>
        <p>Install: <code className="bg-black/20 px-2 py-1 rounded">npm install @reduxjs/toolkit react-redux</code></p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice (piece of state)
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Create store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// index.js
import { Provider } from 'react-redux';
import { store } from './store';

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Counter.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store';

function Counter() {
  // Read from store
  const count = useSelector((state) => state.counter.value);
  
  // Get dispatch function
  const dispatch = useDispatch();
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>
        +1
      </button>
      <button onClick={() => dispatch(decrement())}>
        -1
      </button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        +10
      </button>
    </div>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="Complete Redux Example" icon="🎮" theme={theme}>
        <p>Let's build a todo app with Redux!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

// TodoApp.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';

function TodoApp() {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };
  
  return (
    <div>
      <h1>Redux Todo List 📝</h1>
      
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      
      <p>Total: {todos.length} | Done: {todos.filter(t => t.completed).length}</p>
    </div>
  );
}`}
        />
      </TopicCard>

      <div className={`mt-8 p-6 rounded-xl text-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30'
          : 'bg-gradient-to-r from-green-100 to-blue-100 border border-green-300'
      }`}>
        <h3 className={`mb-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
          🎉 State Management Pro!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          You can now manage state in big applications! Ready for Phase 11? Let's optimize performance! 🧼
        </p>
      </div>
    </div>
  );
}
