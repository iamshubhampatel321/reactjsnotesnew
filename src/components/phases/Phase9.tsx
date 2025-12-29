import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase9Props {
  theme: Theme;
}

export function Phase9({ theme }: Phase9Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        🌍 Phase 9: API Integration & Data Handling
      </h1>

      <TopicCard title="What is an API?" icon="🔌" theme={theme}>
        <p>
          An <strong>API</strong> (Application Programming Interface) is like a waiter at a restaurant! 🍽️
        </p>
        <p>
          You tell the waiter what you want (request), they go to the kitchen (server), 
          and bring back your food (response)!
        </p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p><strong>Common APIs:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🌤️ Weather API - Get weather data</li>
            <li>😸 Cat Facts API - Random cat facts</li>
            <li>🎬 Movie Database API - Movie information</li>
            <li>🎮 Pokemon API - Pokemon data</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Fetch API" icon="📡" theme={theme}>
        <p>The built-in way to get data from the internet!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState, useEffect } from 'react';

function CatFacts() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch data when component mounts
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())  // Convert to JSON
      .then(data => {
        setFact(data.fact);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);
  
  if (loading) {
    return <p>Loading cat fact... 🐱</p>;
  }
  
  return (
    <div>
      <h2>Random Cat Fact:</h2>
      <p>{fact}</p>
    </div>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="Axios" icon="🚀" theme={theme}>
        <p>A better way to make API calls! More features and easier to use!</p>
        <p>Install: <code className="bg-black/20 px-2 py-1 rounded">npm install axios</code></p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonInfo() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(response => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <p>Loading... ⏳</p>;
  if (error) return <p>Error: {error} ❌</p>;
  
  return (
    <div>
      <h1>{pokemon.name} ⚡</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="HTTP Methods" icon="📬" theme={theme}>
        <p>Different ways to talk to an API!</p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h4 className="mb-2">GET - Read Data 📖</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// Get all users
axios.get('/api/users')
  .then(response => {
    console.log(response.data);
  });

// Get specific user
axios.get('/api/users/123')
  .then(response => {
    console.log(response.data);
  });`}
            />
          </div>
          
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
            <h4 className="mb-2">POST - Create Data ➕</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// Create new user
axios.post('/api/users', {
  name: 'Alex',
  age: 10,
  email: 'alex@example.com'
})
.then(response => {
  console.log('Created!', response.data);
});`}
            />
          </div>
          
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
            <h4 className="mb-2">PUT - Update Data ✏️</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// Update user
axios.put('/api/users/123', {
  name: 'Alex Updated',
  age: 11
})
.then(response => {
  console.log('Updated!', response.data);
});`}
            />
          </div>
          
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100'}`}>
            <h4 className="mb-2">DELETE - Remove Data 🗑️</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// Delete user
axios.delete('/api/users/123')
  .then(response => {
    console.log('Deleted!');
  });`}
            />
          </div>
        </div>
      </TopicCard>

      <TopicCard title="Loading & Error States" icon="⏳" theme={theme}>
        <p>Always show users what's happening!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  // Loading state
  if (loading) {
    return (
      <div>
        <p>Loading users... ⏳</p>
        <div className="spinner">🔄</div>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div>
        <p>❌ Error: {error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }
  
  // Success state
  return (
    <div>
      <h1>Users ({users.length})</h1>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="Complete CRUD Example" icon="🎮" theme={theme}>
        <p>Create, Read, Update, Delete - all together!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState, useEffect } from 'react';
import axios from 'axios';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  // READ - Get all todos
  useEffect(() => {
    fetchTodos();
  }, []);
  
  const fetchTodos = () => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  };
  
  // CREATE - Add new todo
  const addTodo = () => {
    if (!input.trim()) return;
    
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: input,
      completed: false,
      userId: 1
    })
    .then(response => {
      setTodos([response.data, ...todos]);
      setInput('');
    });
  };
  
  // UPDATE - Toggle todo
  const toggleTodo = (id, completed) => {
    axios.put(\`https://jsonplaceholder.typicode.com/todos/\${id}\`, {
      completed: !completed
    })
    .then(() => {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      ));
    });
  };
  
  // DELETE - Remove todo
  const deleteTodo = (id) => {
    axios.delete(\`https://jsonplaceholder.typicode.com/todos/\${id}\`)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      });
  };
  
  if (loading) return <p>Loading... ⏳</p>;
  
  return (
    <div>
      <h1>Todo List 📝</h1>
      
      {/* Add Todo */}
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="New todo..."
        />
        <button onClick={addTodo}>Add ➕</button>
      </div>
      
      {/* Todo List */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id, todo.completed)}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
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
          🎉 API Expert!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          You can now connect your React apps to the internet and work with real data! 
          Ready for Phase 10? Let's learn State Management! 🧘
        </p>
      </div>
    </div>
  );
}
