import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase4Props {
  theme: Theme;
}

export function Phase4({ theme }: Phase4Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        ⚡ Phase 4: Events, Lists & Conditional Rendering
      </h1>

      <TopicCard title="Event Handling" icon="👆" theme={theme}>
        <p>
          <strong>Events</strong> are things that happen! Clicks, typing, hovering, etc. 
          Let's make our components respond to these events! 🎯
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function ClickMe() {
  const [clicks, setClicks] = useState(0);
  
  // Event handler function
  const handleClick = () => {
    setClicks(clicks + 1);
    alert('Button clicked! 🎉');
  };
  
  return (
    <div>
      <p>Clicked {clicks} times</p>
      <button onClick={handleClick}>
        Click Me! 🖱️
      </button>
    </div>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p><strong>Common Events:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><code className="bg-black/20 px-2 py-1 rounded">onClick</code> - When you click</li>
            <li><code className="bg-black/20 px-2 py-1 rounded">onChange</code> - When input changes</li>
            <li><code className="bg-black/20 px-2 py-1 rounded">onSubmit</code> - When form submits</li>
            <li><code className="bg-black/20 px-2 py-1 rounded">onMouseEnter</code> - When mouse enters</li>
            <li><code className="bg-black/20 px-2 py-1 rounded">onMouseLeave</code> - When mouse leaves</li>
            <li><code className="bg-black/20 px-2 py-1 rounded">onKeyDown</code> - When key is pressed</li>
          </ul>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Like a doorbell! 🔔 When someone presses it (event), 
          it rings (handler function)!
        </p>
      </TopicCard>

      <TopicCard title="Passing Arguments to Events" icon="📬" theme={theme}>
        <p>Sometimes you want to pass extra information to your event handlers!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('gray');
  
  // Function that takes a parameter
  const changeColor = (newColor) => {
    setColor(newColor);
  };
  
  return (
    <div style={{ backgroundColor: color, padding: '20px' }}>
      <p>Current color: {color}</p>
      
      {/* Pass argument using arrow function */}
      <button onClick={() => changeColor('red')}>
        Red 🔴
      </button>
      <button onClick={() => changeColor('blue')}>
        Blue 🔵
      </button>
      <button onClick={() => changeColor('green')}>
        Green 🟢
      </button>
      <button onClick={() => changeColor('yellow')}>
        Yellow 🟡
      </button>
    </div>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <h4 className="mb-2">Two Ways to Pass Arguments:</h4>
          <CodeBlock
            theme={theme}
            language="jsx"
            code={`// Method 1: Arrow function (most common)
<button onClick={() => handleClick('hello')}>Click</button>

// Method 2: Bind
<button onClick={handleClick.bind(null, 'hello')}>Click</button>`}
          />
        </div>
      </TopicCard>

      <TopicCard title="Synthetic Events" icon="🎭" theme={theme}>
        <p>
          React wraps browser events in something called <strong>Synthetic Events</strong>. 
          They work the same across all browsers! 🌐
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();  // Stop page reload!
    console.log('Form submitted!');
  };
  
  const handleInput = (event) => {
    console.log('You typed:', event.target.value);
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('You pressed Enter!');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
          <p><strong>Useful Event Properties:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><code className="bg-black/20 px-1">event.target.value</code> - Input value</li>
            <li><code className="bg-black/20 px-1">event.preventDefault()</code> - Stop default behavior</li>
            <li><code className="bg-black/20 px-1">event.key</code> - Which key was pressed</li>
            <li><code className="bg-black/20 px-1">event.target</code> - The element that triggered it</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Conditional Rendering - if/else" icon="🔀" theme={theme}>
        <p>
          <strong>Conditional Rendering</strong> means showing different things based on conditions! 
          Like choosing what to wear based on weather! ☀️🌧️
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Method 1: if/else with early return
  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome back! 👋</h2>
        <button onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Please log in 🔐</h2>
        <button onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      </div>
    );
  }
}`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Like a restaurant door! 🍽️ 
          If you're 18+, you can enter. If not, you can't. Same door, different result!
        </p>
      </TopicCard>

      <TopicCard title="Conditional Rendering - Ternary Operator" icon="❓" theme={theme}>
        <p>The <strong>ternary operator</strong> is a shorter way to write if/else!</p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p className="mb-2">Format: <code className="bg-black/20 px-2 py-1 rounded">condition ? true : false</code></p>
        </div>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function Weather() {
  const [isSunny, setIsSunny] = useState(true);
  
  return (
    <div>
      <h2>
        {isSunny ? "It's sunny! ☀️" : "It's rainy! 🌧️"}
      </h2>
      
      <p>
        {isSunny ? "Wear sunglasses! 😎" : "Bring an umbrella! ☔"}
      </p>
      
      <button onClick={() => setIsSunny(!isSunny)}>
        Change Weather
      </button>
    </div>
  );
}

// More examples:
function App() {
  const age = 12;
  const score = 85;
  
  return (
    <div>
      {/* Simple condition */}
      <p>{age >= 13 ? "Teenager" : "Kid"}</p>
      
      {/* With different components */}
      {score >= 90 ? <Prize /> : <TryAgain />}
      
      {/* With styling */}
      <p style={{ color: score >= 70 ? 'green' : 'red' }}>
        Score: {score}
      </p>
    </div>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="Conditional Rendering - Logical &&" icon="🔗" theme={theme}>
        <p>Use <code className="bg-black/20 px-2 py-1 rounded">&&</code> when you only want to show something if true!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function Notifications() {
  const [hasMessages, setHasMessages] = useState(true);
  const [messageCount, setMessageCount] = useState(5);
  
  return (
    <div>
      <h2>Inbox</h2>
      
      {/* Only show if hasMessages is true */}
      {hasMessages && (
        <p style={{ color: 'red' }}>
          You have {messageCount} new messages! 📬
        </p>
      )}
      
      {/* Only show if count > 10 */}
      {messageCount > 10 && (
        <p>Wow! You're popular! 🌟</p>
      )}
      
      <button onClick={() => setHasMessages(!hasMessages)}>
        Toggle Messages
      </button>
    </div>
  );
}

// More examples:
function UserProfile() {
  const user = {
    name: 'Alex',
    age: 10,
    premium: true
  };
  
  return (
    <div>
      <h2>{user.name}</h2>
      
      {/* Only show premium badge if user is premium */}
      {user.premium && <span>⭐ Premium Member</span>}
      
      {/* Only show if age is under 13 */}
      {user.age < 13 && <p>👶 Kid Account</p>}
    </div>
  );
}`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <strong>Remember:</strong> <code className="bg-black/20 px-1">&&</code> means "AND". 
          Both things must be true! Like "IF it's sunny AND it's Saturday, go to the park!" 🏞️
        </p>
      </TopicCard>

      <TopicCard title="Rendering Lists" icon="📋" theme={theme}>
        <p>
          When you have a list of items (array), you can use <code className="bg-black/20 px-2 py-1 rounded">.map()</code> 
          to show them all!
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`function FruitList() {
  const fruits = ['🍎 Apple', '🍌 Banana', '🍊 Orange', '🍇 Grapes'];
  
  return (
    <div>
      <h2>My Favorite Fruits:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

// Output:
// My Favorite Fruits:
// • 🍎 Apple
// • 🍌 Banana
// • 🍊 Orange
// • 🍇 Grapes`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <h4 className="mb-2">More Complex Example:</h4>
          <CodeBlock
            theme={theme}
            language="jsx"
            code={`function StudentList() {
  const students = [
    { id: 1, name: 'Alex', grade: 'A' },
    { id: 2, name: 'Sam', grade: 'B' },
    { id: 3, name: 'Jordan', grade: 'A' },
    { id: 4, name: 'Taylor', grade: 'C' }
  ];
  
  return (
    <div>
      <h2>Class Roster:</h2>
      {students.map((student) => (
        <div key={student.id} className="student-card">
          <h3>{student.name}</h3>
          <p>Grade: {student.grade}</p>
        </div>
      ))}
    </div>
  );
}`}
          />
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <strong>Real-World Example:</strong> Like a roll call! 📢 The teacher has a list of names 
          and calls them one by one. That's what <code className="bg-black/20 px-1">.map()</code> does!
        </p>
      </TopicCard>

      <TopicCard title="Keys and Their Importance" icon="🔑" theme={theme}>
        <p>
          Every item in a list needs a unique <strong>key</strong>! It helps React keep track of items! 🎯
        </p>
        <div className="space-y-4 mt-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100'}`}>
            <h4 className="mb-2">❌ Bad - No Keys:</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// React will show a warning!
{items.map((item) => (
  <li>{item}</li>
))}`}
            />
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
            <h4 className="mb-2">⚠️ Okay - Using Index (but not best):</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// Works, but only if list never changes order
{items.map((item, index) => (
  <li key={index}>{item}</li>
))}`}
            />
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h4 className="mb-2">✅ Best - Using Unique ID:</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// Best! Each item has unique ID
const todos = [
  { id: 1, text: 'Homework' },
  { id: 2, text: 'Play' },
  { id: 3, text: 'Sleep' }
];

{todos.map((todo) => (
  <li key={todo.id}>{todo.text}</li>
))}`}
            />
          </div>
        </div>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p><strong>Why Keys Matter:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🔍 Help React identify which items changed</li>
            <li>⚡ Make updates faster and more efficient</li>
            <li>🎯 Prevent bugs when list changes</li>
            <li>🔄 Keep component state correct when reordering</li>
          </ul>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Like student ID numbers! 🎓 Even if two students have the 
          same name, their ID numbers are different. That's how school tracks everyone!
        </p>
      </TopicCard>

      <div className={`p-6 rounded-xl mt-6 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
        <h3 className="mb-3">🎮 Fun Practice Project!</h3>
        <p className="mb-3">Let's combine everything we learned!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: true },
    { id: 2, text: 'Build a project', done: false }
  ]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input, done: false }
      ]);
      setInput('');
    }
  };
  
  const toggleDone = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <h1>My Todo List 📝</h1>
      
      {/* Input form */}
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="What to do?"
        />
        <button onClick={addTodo}>Add ➕</button>
      </div>
      
      {/* Show message if no todos */}
      {todos.length === 0 && (
        <p>No todos! Add one above! 👆</p>
      )}
      
      {/* List of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleDone(todo.id)}
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.done ? '✅' : '⭕'} {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
      
      {/* Show summary */}
      <p>
        Total: {todos.length} | 
        Done: {todos.filter(t => t.done).length} | 
        Left: {todos.filter(t => !t.done).length}
      </p>
    </div>
  );
}`}
        />
      </div>

      <div className={`mt-8 p-6 rounded-xl text-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30'
          : 'bg-gradient-to-r from-green-100 to-blue-100 border border-green-300'
      }`}>
        <h3 className={`mb-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
          🎉 You're on Fire!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          You can now handle events, show lists, and display things conditionally! 
          Your apps are getting interactive! Ready for Phase 5? Let's learn about Forms and Refs! ✍️
        </p>
      </div>
    </div>
  );
}
