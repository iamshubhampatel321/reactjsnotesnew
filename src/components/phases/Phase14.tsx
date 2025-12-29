import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase14Props {
  theme: Theme;
}

export function Phase14({ theme }: Phase14Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        💪 Phase 14: Real-World Projects
      </h1>

      <div className={`p-6 rounded-xl mb-8 text-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-purple-500/40'
          : 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300'
      }`}>
        <h2 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          🎓 Time to Build Real Projects!
        </h2>
        <p className={theme === 'dark' ? 'text-purple-200' : 'text-purple-800'}>
          You've learned everything! Now let's put it all together and build amazing projects! 🚀
        </p>
      </div>

      <TopicCard title="Project 1: CRUD Todo App" icon="📝" theme={theme}>
        <p><strong>What you'll build:</strong> A complete todo application with create, read, update, and delete!</p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <p><strong>Features to include:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>➕ Add new todos</li>
            <li>✅ Mark todos as complete</li>
            <li>✏️ Edit existing todos</li>
            <li>🗑️ Delete todos</li>
            <li>🔍 Filter (All, Active, Completed)</li>
            <li>💾 Save to localStorage</li>
            <li>📊 Show statistics</li>
          </ul>
        </div>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  
  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);
  
  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input, completed: false }
      ]);
      setInput('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };
  
  const saveEdit = () => {
    setTodos(todos.map(todo =>
      todo.id === editId ? { ...todo, text: editText } : todo
    ));
    setEditId(null);
    setEditText('');
  };
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  return (
    <div className="todo-app">
      <h1>My Todo List 📝</h1>
      
      {/* Add Todo */}
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="What needs to be done?"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      {/* Filters */}
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      
      {/* Todo List */}
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span style={{
                  textDecoration: todo.completed ? 'line-through' : 'none'
                }}>
                  {todo.text}
                </span>
                <button onClick={() => startEdit(todo)}>✏️</button>
                <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
              </>
            )}
          </li>
        ))}
      </ul>
      
      {/* Stats */}
      <div className="stats">
        <p>Total: {todos.length}</p>
        <p>Active: {todos.filter(t => !t.completed).length}</p>
        <p>Completed: {todos.filter(t => t.completed).length}</p>
      </div>
    </div>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="Project 2: Weather Dashboard" icon="🌤️" theme={theme}>
        <p><strong>What you'll build:</strong> A weather app that shows current weather and forecast!</p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <p><strong>Features to include:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🌍 Search by city</li>
            <li>🌡️ Show temperature, humidity, wind</li>
            <li>📅 5-day forecast</li>
            <li>🎨 Weather icons</li>
            <li>💾 Save favorite cities</li>
            <li>🔄 Auto-refresh</li>
          </ul>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>API:</strong> Use OpenWeatherMap API (free!) - openweathermap.org
        </p>
      </TopicCard>

      <TopicCard title="Project 3: Movie Search App" icon="🎬" theme={theme}>
        <p><strong>What you'll build:</strong> Search and discover movies!</p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p><strong>Features to include:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🔍 Search movies by title</li>
            <li>🎭 View movie details (rating, description, cast)</li>
            <li>⭐ Favorite movies list</li>
            <li>🎯 Filter by genre</li>
            <li>📱 Responsive design</li>
            <li>🎨 Beautiful UI with posters</li>
          </ul>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
          <strong>API:</strong> Use OMDB API or TMDB API (both free!)
        </p>
      </TopicCard>

      <TopicCard title="Project 4: E-commerce Shopping Cart" icon="🛒" theme={theme}>
        <p><strong>What you'll build:</strong> A shopping cart with products!</p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-pink-900/30' : 'bg-pink-100'}`}>
          <p><strong>Features to include:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🏬 Product list with images</li>
            <li>🛒 Add to cart</li>
            <li>➕➖ Increase/decrease quantity</li>
            <li>🗑️ Remove from cart</li>
            <li>💰 Calculate total price</li>
            <li>💾 Persist cart in localStorage</li>
            <li>🎨 Beautiful product cards</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Project 5: Authentication App" icon="🔐" theme={theme}>
        <p><strong>What you'll build:</strong> Login/Signup system with protected routes!</p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <p><strong>Features to include:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>📝 Signup form with validation</li>
            <li>🔑 Login form</li>
            <li>👤 User profile page</li>
            <li>🚪 Logout functionality</li>
            <li>🔒 Protected routes</li>
            <li>💾 Context API for auth state</li>
            <li>⏰ Session timeout</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Project 6: Portfolio Website" icon="💼" theme={theme}>
        <p><strong>What you'll build:</strong> Your personal portfolio to showcase projects!</p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <p><strong>Features to include:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🏠 Home page with intro</li>
            <li>💼 Projects showcase</li>
            <li>🎓 Skills section</li>
            <li>📧 Contact form</li>
            <li>🌙 Dark/Light mode toggle</li>
            <li>📱 Fully responsive</li>
            <li>✨ Smooth animations</li>
            <li>🚀 Fast and optimized</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Project Ideas List" icon="💡" theme={theme}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
            <h4 className="mb-2">Beginner Projects:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>📝 Note-taking app</li>
              <li>⏱️ Timer/Stopwatch</li>
              <li>🧮 Calculator</li>
              <li>🎲 Random quote generator</li>
              <li>🎨 Color picker</li>
              <li>📊 Quiz app</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
            <h4 className="mb-2">Intermediate Projects:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>💬 Chat application</li>
              <li>📰 News aggregator</li>
              <li>🎵 Music player</li>
              <li>📷 Image gallery</li>
              <li>🍕 Recipe finder</li>
              <li>💪 Fitness tracker</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h4 className="mb-2">Advanced Projects:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>📱 Social media clone</li>
              <li>🎮 Game (Tic-tac-toe, Snake)</li>
              <li>📊 Data visualization dashboard</li>
              <li>🏨 Booking system</li>
              <li>💼 Project management tool</li>
              <li>🤖 AI chatbot interface</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
            <h4 className="mb-2">Fun Projects:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>🎨 Drawing app</li>
              <li>🎭 Meme generator</li>
              <li>🎯 Typing speed test</li>
              <li>🔮 Fortune teller</li>
              <li>🎲 Dice roller</li>
              <li>🌈 Gradient generator</li>
            </ul>
          </div>
        </div>
      </TopicCard>

      <TopicCard title="Building Tips" icon="🛠️" theme={theme}>
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p className="mb-2"><strong>How to start a project:</strong></p>
          <ol className="list-decimal list-inside space-y-2">
            <li>📋 Plan features on paper</li>
            <li>🎨 Sketch the design</li>
            <li>🗂️ Create component structure</li>
            <li>💾 Decide on state management</li>
            <li>🔌 Check if you need APIs</li>
            <li>🚀 Start with basic version</li>
            <li>✨ Add features one by one</li>
            <li>🎨 Polish the UI last</li>
            <li>🧪 Test everything</li>
            <li>🌐 Deploy and share!</li>
          </ol>
        </div>
      </TopicCard>

      <div className={`p-6 rounded-xl mt-6 ${theme === 'dark' ? 'bg-gradient-to-r from-purple-900/60 to-pink-900/60' : 'bg-gradient-to-r from-purple-100 to-pink-100'}`}>
        <h3 className="mb-3">🎯 Challenge Yourself!</h3>
        <p className={theme === 'dark' ? 'text-purple-200' : 'text-purple-800'}>
          Try to build one project per week! Here's a roadmap:
        </p>
        <ul className={`list-disc list-inside mt-3 space-y-1 ${theme === 'dark' ? 'text-purple-200' : 'text-purple-800'}`}>
          <li>Week 1: Todo App (learn CRUD)</li>
          <li>Week 2: Weather App (learn API calls)</li>
          <li>Week 3: Movie Search (improve UI skills)</li>
          <li>Week 4: Shopping Cart (state management)</li>
          <li>Week 5: Auth App (routing & protection)</li>
          <li>Week 6: Portfolio (showcase everything!)</li>
        </ul>
      </div>

      <div className={`mt-8 p-8 rounded-xl text-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-green-900/60 to-blue-900/60 border-2 border-green-500/50'
          : 'bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-400'
      }`}>
        <h2 className={`mb-4 ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
          🎉🎊 CONGRATULATIONS! 🎊🎉
        </h2>
        <p className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          You've completed ALL 14 phases of React learning!
        </p>
        <p className={`mb-6 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
          You're now a React developer! 🚀 You can build amazing web applications! 
          Keep practicing, keep building, and never stop learning! 
        </p>
        <div className={`text-4xl mb-4`}>
          🏆 🌟 ⭐ 💪 🎓 🚀
        </div>
        <p className={theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}>
          Go build something amazing and share it with the world! 🌍
        </p>
        <p className={`mt-4 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
          Remember: The best way to learn is by building! Start your first project today! 💻
        </p>
      </div>
    </div>
  );
}
