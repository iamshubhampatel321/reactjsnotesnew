import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase3Props {
  theme: Theme;
}

export function Phase3({ theme }: Phase3Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        🔁 Phase 3: Props & State
      </h1>

      <TopicCard title="What are Props?" icon="📦" theme={theme}>
        <p>
          <strong>Props</strong> (short for properties) are like gifts 🎁 you give to components!
        </p>
        <p>
          They let you pass data from a parent component to a child component.
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// Child component that receives props
function Greeting(props) {
  return <h1>Hello, {props.name}! 👋</h1>;
}

// Parent component that sends props
function App() {
  return (
    <div>
      <Greeting name="Alex" />
      <Greeting name="Sam" />
      <Greeting name="Jordan" />
    </div>
  );
}

// Output:
// Hello, Alex! 👋
// Hello, Sam! 👋
// Hello, Jordan! 👋`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <strong>Real-World Example:</strong> Think of props like a vending machine! 🥤 
          You put in money (props), select a drink (component), and get exactly what you chose!
        </p>
      </TopicCard>

      <TopicCard title="Passing Props" icon="➡️" theme={theme}>
        <p>You can pass different types of data as props:</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>Price: {props.price}</p>
      <p>In Stock: {props.inStock ? "Yes ✅" : "No ❌"}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card 
        title="Gaming Mouse"
        description="RGB gaming mouse with 7 buttons"
        price={49.99}
        inStock={true}
      />
      <Card 
        title="Keyboard"
        description="Mechanical keyboard"
        price={89.99}
        inStock={false}
      />
    </div>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <p><strong>You can pass:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Strings: <code className="bg-black/20 px-2 py-1 rounded">name="Alex"</code></li>
            <li>Numbers: <code className="bg-black/20 px-2 py-1 rounded">{`age={10}`}</code></li>
            <li>Booleans: <code className="bg-black/20 px-2 py-1 rounded">{`isActive={true}`}</code></li>
            <li>Arrays: <code className="bg-black/20 px-2 py-1 rounded">{`colors={['red', 'blue']}`}</code></li>
            <li>Objects: <code className="bg-black/20 px-2 py-1 rounded">{`user={{name: 'Alex'}}`}</code></li>
            <li>Functions: <code className="bg-black/20 px-2 py-1 rounded">{`onClick={handleClick}`}</code></li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Props Destructuring" icon="📤" theme={theme}>
        <p>Instead of writing <code className="bg-black/20 px-2 py-1 rounded">props.name</code> every time, 
        we can destructure props to make code cleaner!</p>
        <div className="space-y-4 mt-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
            <h4 className="mb-2">Without Destructuring:</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}`}
            />
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h4 className="mb-2">With Destructuring (Better! ✨):</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`function UserCard({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Much cleaner! No more 'props.' everywhere!`}
            />
          </div>
        </div>
      </TopicCard>

      <TopicCard title="Default Props" icon="🎯" theme={theme}>
        <p>Sometimes you want default values if props aren't provided!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`function Button({ text = "Click Me", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

function App() {
  return (
    <div>
      {/* Uses defaults */}
      <Button />
      
      {/* Custom text, default color */}
      <Button text="Submit" />
      
      {/* Both custom */}
      <Button text="Delete" color="red" />
    </div>
  );
}`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <strong>Real-World Example:</strong> Like ordering a pizza! 🍕 If you don't specify toppings, 
          you get the default cheese pizza. But you can customize it!
        </p>
      </TopicCard>

      <TopicCard title="Props vs State" icon="⚖️" theme={theme}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
            <h4 className="mb-2">📦 Props</h4>
            <ul className="space-y-2 text-sm">
              <li>✅ Passed from parent to child</li>
              <li>✅ Read-only (can't change)</li>
              <li>✅ Like function arguments</li>
              <li>✅ Makes components reusable</li>
              <li>❌ Can't be changed by the child</li>
            </ul>
            <p className="mt-2 text-sm"><strong>Example:</strong> Your age when you tell someone</p>
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
            <h4 className="mb-2">🔄 State</h4>
            <ul className="space-y-2 text-sm">
              <li>✅ Belongs to the component</li>
              <li>✅ Can be changed</li>
              <li>✅ Like component's memory</li>
              <li>✅ Makes components interactive</li>
              <li>✅ When it changes, component re-renders</li>
            </ul>
            <p className="mt-2 text-sm"><strong>Example:</strong> A light switch (on/off)</p>
          </div>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <strong>Remember:</strong> Props flow down 👇 (parent to child), State stays inside 🏠 (the component)
        </p>
      </TopicCard>

      <TopicCard title="What is State?" icon="🔄" theme={theme}>
        <p>
          <strong>State</strong> is like a component's memory! 🧠 It remembers information that can change!
        </p>
        <p>
          When state changes, React automatically updates what you see on the screen! Like magic! ✨
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function LightSwitch() {
  // State: is the light on or off?
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div>
      <p>The light is {isOn ? "ON 💡" : "OFF 🌑"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Toggle Light
      </button>
    </div>
  );
}

// Click the button, and the light switches! 🎉`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Think of a video game! 🎮 Your score, health, and level 
          are all state - they change as you play!
        </p>
      </TopicCard>

      <TopicCard title="useState Hook" icon="🎣" theme={theme}>
        <p>
          <code className="bg-black/20 px-2 py-1 rounded">useState</code> is a special function 
          (called a Hook) that adds state to your component!
        </p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <h4 className="mb-2">How it works:</h4>
          <CodeBlock
            theme={theme}
            language="jsx"
            code={`import { useState } from 'react';

function Counter() {
  // useState returns an array with 2 things:
  // 1. The current value (count)
  // 2. A function to update it (setCount)
  const [count, setCount] = useState(0);
  //     ↑        ↑            ↑
  //   value   updater    initial value
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add 1 ➕
      </button>
    </div>
  );
}`}
          />
        </div>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <p><strong>Breaking it down:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><code className="bg-black/20 px-1">useState(0)</code> - Start with 0</li>
            <li><code className="bg-black/20 px-1">count</code> - Current value</li>
            <li><code className="bg-black/20 px-1">setCount</code> - Function to update count</li>
            <li>When you call <code className="bg-black/20 px-1">setCount</code>, React re-renders!</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Updating State" icon="🔄" theme={theme}>
        <p>Let's see different ways to update state!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function FunCounter() {
  const [score, setScore] = useState(0);
  
  return (
    <div>
      <h2>Score: {score} 🎯</h2>
      
      {/* Add 1 */}
      <button onClick={() => setScore(score + 1)}>
        +1
      </button>
      
      {/* Add 10 */}
      <button onClick={() => setScore(score + 10)}>
        +10
      </button>
      
      {/* Reset to 0 */}
      <button onClick={() => setScore(0)}>
        Reset
      </button>
      
      {/* Double the score */}
      <button onClick={() => setScore(score * 2)}>
        Double! ×2
      </button>
    </div>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
          <h4 className="mb-2">⚠️ Important Rule:</h4>
          <p>Never change state directly! Always use the setter function!</p>
          <CodeBlock
            theme={theme}
            language="jsx"
            code={`// ❌ WRONG - Don't do this!
score = score + 1;

// ✅ CORRECT - Always use setter!
setScore(score + 1);`}
          />
        </div>
      </TopicCard>

      <TopicCard title="Multiple State Variables" icon="🎪" theme={theme}>
        <p>You can have as many state variables as you need!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function Profile() {
  const [name, setName] = useState("Alex");
  const [age, setAge] = useState(10);
  const [favoriteColor, setFavoriteColor] = useState("blue");
  const [likes, setLikes] = useState(0);
  
  return (
    <div>
      <h2>{name}'s Profile</h2>
      <p>Age: {age}</p>
      <p>Favorite Color: {favoriteColor}</p>
      <p>Likes: {likes} ❤️</p>
      
      <button onClick={() => setLikes(likes + 1)}>
        Like! 👍
      </button>
      
      <button onClick={() => setAge(age + 1)}>
        Birthday! 🎂
      </button>
    </div>
  );
}`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Tip:</strong> Use multiple simple state variables instead of one complex object. 
          It's easier to understand and update!
        </p>
      </TopicCard>

      <TopicCard title="State Immutability" icon="🔒" theme={theme}>
        <p>
          <strong>Immutability</strong> means don't change the original! Create a new copy instead! 📋
        </p>
        <p>This is super important for arrays and objects!</p>
        <div className="space-y-4 mt-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100'}`}>
            <h4 className="mb-2">❌ Wrong Way - Mutating State:</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`const [items, setItems] = useState([1, 2, 3]);

// DON'T DO THIS!
items.push(4);  // Directly changing the array
setItems(items);  // React might not notice the change!`}
            />
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h4 className="mb-2">✅ Correct Way - Create New Array:</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`const [items, setItems] = useState([1, 2, 3]);

// Create a NEW array with the spread operator
setItems([...items, 4]);  // React sees the change!

// Or use methods that return new arrays
setItems(items.concat(4));`}
            />
          </div>
        </div>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <h4 className="mb-2">Full Example - Todo List:</h4>
          <CodeBlock
            theme={theme}
            language="jsx"
            code={`import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['Homework', 'Play']);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    // Create new array with old items + new item
    setTodos([...todos, input]);
    setInput('');  // Clear input
  };
  
  const removeTodo = (index) => {
    // Create new array without the item at index
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
          />
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
          <strong>Remember:</strong> Always create a NEW copy, don't change the original! 
          Use spread operator <code className="bg-black/20 px-2 py-1 rounded">...</code>, 
          <code className="bg-black/20 px-2 py-1 rounded">.map()</code>, 
          <code className="bg-black/20 px-2 py-1 rounded">.filter()</code>, etc.
        </p>
      </TopicCard>

      <div className={`mt-8 p-6 rounded-xl text-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30'
          : 'bg-gradient-to-r from-green-100 to-blue-100 border border-green-300'
      }`}>
        <h3 className={`mb-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
          🎉 Fantastic Progress!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          You now understand Props and State - the heart of React! 
          You can pass data around and make components interactive! 
          Ready for Phase 4? Let's learn about Events and Lists! ⚡
        </p>
      </div>
    </div>
  );
}
