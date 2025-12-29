import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase12Props {
  theme: Theme;
}

export function Phase12({ theme }: Phase12Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        🧪 Phase 12: Testing
      </h1>

      <TopicCard title="Why Testing?" icon="🤔" theme={theme}>
        <p>
          <strong>Testing</strong> helps make sure your code works correctly and catches bugs before users do! 🐛
        </p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p><strong>Benefits of testing:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>✅ Catch bugs early</li>
            <li>✅ Confidence when changing code</li>
            <li>✅ Documentation (tests show how code works)</li>
            <li>✅ Saves time in the long run</li>
          </ul>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Like checking your homework before turning it in! ✏️ 
          Better to find mistakes yourself than have the teacher find them!
        </p>
      </TopicCard>

      <TopicCard title="Jest" icon="🃏" theme={theme}>
        <p>
          <strong>Jest</strong> is a testing framework. It runs your tests and tells you if they pass or fail!
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// math.js - Simple functions to test
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// math.test.js - Tests for those functions
import { add, multiply } from './math';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
  expect(add(5, 7)).toBe(12);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

// Run tests with: npm test`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <p><strong>Common Jest Matchers:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><code className="bg-black/20 px-1">toBe(value)</code> - Exact equality</li>
            <li><code className="bg-black/20 px-1">toEqual(value)</code> - Deep equality (for objects)</li>
            <li><code className="bg-black/20 px-1">toBeTruthy()</code> - Is truthy</li>
            <li><code className="bg-black/20 px-1">toContain(item)</code> - Array contains item</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="React Testing Library" icon="⚛️" theme={theme}>
        <p>Test React components the way users use them!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Component to test
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Test
test('renders greeting with name', () => {
  render(<Greeting name="Alex" />);
  
  // Check if text appears
  const heading = screen.getByText(/Hello, Alex!/i);
  expect(heading).toBeInTheDocument();
});

test('renders different name', () => {
  render(<Greeting name="Sam" />);
  expect(screen.getByText('Hello, Sam!')).toBeInTheDocument();
});`}
        />
      </TopicCard>

      <TopicCard title="Testing User Interactions" icon="👆" theme={theme}>
        <p>Test clicks, typing, and other user actions!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// Tests
test('starts at 0', () => {
  render(<Counter />);
  expect(screen.getByText('Count: 0')).toBeInTheDocument();
});

test('increments when button clicked', () => {
  render(<Counter />);
  
  const button = screen.getByText('Increment');
  
  // Click button
  fireEvent.click(button);
  
  // Check count increased
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
  
  // Click again
  fireEvent.click(button);
  expect(screen.getByText('Count: 2')).toBeInTheDocument();
});

// Testing input
test('updates input value when typing', async () => {
  render(<MyForm />);
  
  const input = screen.getByPlaceholderText('Enter name');
  
  // Type in input
  await userEvent.type(input, 'Alex');
  
  expect(input).toHaveValue('Alex');
});`}
        />
      </TopicCard>

      <TopicCard title="Snapshot Testing" icon="📸" theme={theme}>
        <p>Take a "picture" of your component and check if it changes unexpectedly!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { render } from '@testing-library/react';

function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

test('matches snapshot', () => {
  const { container } = render(
    <Card title="Hello" description="This is a card" />
  );
  
  // Creates snapshot on first run
  // Compares to snapshot on future runs
  expect(container).toMatchSnapshot();
});

// If component changes, test will fail
// You can update snapshot if change is intentional`}
        />
      </TopicCard>

      <TopicCard title="Complete Testing Example" icon="🎮" theme={theme}>
        <p>Let's test a todo component!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// TodoList.jsx
import { useState } from 'react';

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput('');
    }
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };
  
  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && <p>No todos yet!</p>}
    </div>
  );
}

// TodoList.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoList } from './TodoList';

test('renders empty todo list', () => {
  render(<TodoList />);
  expect(screen.getByText('No todos yet!')).toBeInTheDocument();
});

test('adds a todo', () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText('Add todo');
  const button = screen.getByText('Add');
  
  // Type and add todo
  fireEvent.change(input, { target: { value: 'Learn React' } });
  fireEvent.click(button);
  
  // Check if todo appears
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.queryByText('No todos yet!')).not.toBeInTheDocument();
});

test('deletes a todo', () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText('Add todo');
  const addButton = screen.getByText('Add');
  
  // Add todo
  fireEvent.change(input, { target: { value: 'Test todo' } });
  fireEvent.click(addButton);
  
  // Delete todo
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  
  // Check if todo is gone
  expect(screen.queryByText('Test todo')).not.toBeInTheDocument();
  expect(screen.getByText('No todos yet!')).toBeInTheDocument();
});

test('does not add empty todos', () => {
  render(<TodoList />);
  
  const button = screen.getByText('Add');
  
  // Click without typing
  fireEvent.click(button);
  
  // Should still be empty
  expect(screen.getByText('No todos yet!')).toBeInTheDocument();
});`}
        />
      </TopicCard>

      <div className={`mt-8 p-6 rounded-xl text-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30'
          : 'bg-gradient-to-r from-green-100 to-blue-100 border border-green-300'
      }`}>
        <h3 className={`mb-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
          🎉 Testing Champion!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          Your code is now reliable and bug-free! Ready for Phase 13? Let's deploy your app to the world! 🌐
        </p>
      </div>
    </div>
  );
}
