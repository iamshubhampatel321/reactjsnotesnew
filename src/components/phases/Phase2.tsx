import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase2Props {
  theme: Theme;
}

export function Phase2({ theme }: Phase2Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        🧩 Phase 2: JSX & Components
      </h1>

      <TopicCard title="What is JSX?" icon="✨" theme={theme}>
        <p>
          <strong>JSX</strong> stands for JavaScript XML. It's like a magic mix of HTML and JavaScript! 🎨
        </p>
        <p>
          Imagine if you could write HTML, but also use JavaScript superpowers in it. That's JSX!
        </p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <h4 className="mb-2">Here's a simple example:</h4>
          <CodeBlock
            theme={theme}
            language="jsx"
            code={`function Welcome() {
  return <h1>Hello, React! 👋</h1>;
}

// This looks like HTML, but it's actually JSX!`}
          />
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Think of JSX like a recipe 🍰. HTML is just the ingredients 
          list, but JSX lets you add instructions (JavaScript) right next to the ingredients!
        </p>
      </TopicCard>

      <TopicCard title="JSX Syntax" icon="📝" theme={theme}>
        <p>JSX has special rules. Let's learn them!</p>
        <div className="space-y-4 mt-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h4 className="mb-2">1. Must return ONE parent element</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// ❌ Wrong - Two elements
function App() {
  return (
    <h1>Hello</h1>
    <p>World</p>
  );
}

// ✅ Correct - Wrapped in one div
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>World</p>
    </div>
  );
}

// ✅ Also correct - Using fragment
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>World</p>
    </>
  );
}`}
            />
          </div>

          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
            <h4 className="mb-2">2. Use className instead of class</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// ❌ Wrong
<div class="container">Hello</div>

// ✅ Correct
<div className="container">Hello</div>`}
            />
            <p className="mt-2">
              <strong>Why?</strong> Because "class" is a reserved word in JavaScript!
            </p>
          </div>

          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-pink-900/30' : 'bg-pink-100'}`}>
            <h4 className="mb-2">3. Close all tags</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// ❌ Wrong
<img src="cat.jpg">
<br>

// ✅ Correct - Self-closing tags
<img src="cat.jpg" />
<br />`}
            />
          </div>
        </div>
      </TopicCard>

      <TopicCard title="Expressions in JSX" icon="🎯" theme={theme}>
        <p>You can use JavaScript inside JSX with curly braces <code className="bg-black/20 px-2 py-1 rounded">{`{}`}</code>!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`function MathFun() {
  const name = "Alex";
  const age = 10;
  const favoriteColor = "purple";
  
  return (
    <div>
      <h1>Hi, I'm {name}! 👋</h1>
      <p>I'm {age} years old</p>
      <p>In 5 years, I'll be {age + 5}!</p>
      <p>My favorite color is {favoriteColor}</p>
      <p>2 + 2 = {2 + 2}</p>
    </div>
  );
}

// Output:
// Hi, I'm Alex! 👋
// I'm 10 years old
// In 5 years, I'll be 15!
// My favorite color is purple
// 2 + 2 = 4`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <strong>Real-World Example:</strong> It's like Mad Libs! 📝 You have a story template, 
          and you fill in the blanks with different words (variables)!
        </p>
      </TopicCard>

      <TopicCard title="JSX vs HTML" icon="⚔️" theme={theme}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
            <h4 className="mb-2">HTML</h4>
            <ul className="space-y-2 text-sm">
              <li>Uses <code className="bg-black/20 px-1">class</code></li>
              <li>Uses <code className="bg-black/20 px-1">for</code> in labels</li>
              <li>Can leave tags unclosed</li>
              <li>Static content only</li>
              <li>No JavaScript expressions</li>
            </ul>
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h4 className="mb-2">JSX</h4>
            <ul className="space-y-2 text-sm">
              <li>Uses <code className="bg-black/20 px-1">className</code></li>
              <li>Uses <code className="bg-black/20 px-1">htmlFor</code> in labels</li>
              <li>Must close all tags</li>
              <li>Can be dynamic</li>
              <li>Can use JavaScript with <code className="bg-black/20 px-1">{`{}`}</code></li>
            </ul>
          </div>
        </div>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// HTML
<label for="name" class="label">Name:</label>
<input id="name">

// JSX
<label htmlFor="name" className="label">Name:</label>
<input id="name" />`}
        />
      </TopicCard>

      <TopicCard title="JSX Rules" icon="📏" theme={theme}>
        <p>Remember these important rules when writing JSX:</p>
        <div className="space-y-3 mt-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100'}`}>
            <strong>Rule 1:</strong> Always return a single root element
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-orange-900/30' : 'bg-orange-100'}`}>
            <strong>Rule 2:</strong> Close all tags (even self-closing ones)
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
            <strong>Rule 3:</strong> Use camelCase for attributes (className, onClick, etc.)
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <strong>Rule 4:</strong> JavaScript expressions go inside <code className="bg-black/20 px-2 py-1 rounded">{`{}`}</code>
          </div>
        </div>
      </TopicCard>

      <TopicCard title="Components" icon="🧩" theme={theme}>
        <p>
          <strong>Components</strong> are like LEGO blocks! Each piece is a component that you can reuse! 🎨
        </p>
        <p>
          Components are the building blocks of React. They're reusable pieces of UI.
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// A simple component
function Button() {
  return <button>Click Me! 🎯</button>;
}

// Using the component
function App() {
  return (
    <div>
      <h1>My App</h1>
      <Button />
      <Button />
      <Button />
    </div>
  );
}

// You get 3 buttons! 🎉`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <strong>Real-World Example:</strong> Think of components like toys! 🧸 You can have multiple 
          toy cars (same component), but each can be a different color (different props)!
        </p>
      </TopicCard>

      <TopicCard title="Functional Components" icon="⚡" theme={theme}>
        <p>
          In React, we mostly use <strong>Functional Components</strong>. They're like JavaScript functions 
          that return JSX!
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// Simple functional component
function Greeting() {
  return <h1>Hello, friend! 👋</h1>;
}

// Component with variables
function Welcome() {
  const message = "Welcome to React!";
  const emoji = "🚀";
  
  return (
    <div>
      <h1>{message} {emoji}</h1>
      <p>Let's build something amazing!</p>
    </div>
  );
}

// Component with logic
function TimeGreeting() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good Morning ☀️" : "Good Afternoon 🌤️";
  
  return <h1>{greeting}</h1>;
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <p><strong>Key Points:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>A component is just a function!</li>
            <li>It returns JSX (what to display)</li>
            <li>Can have variables and logic inside</li>
            <li>Must start with a capital letter</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Component Naming Conventions" icon="📛" theme={theme}>
        <p>Follow these rules when naming components:</p>
        <div className="space-y-3 mt-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
            <h4 className="mb-2">✅ Good Names (PascalCase)</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`function Button() { }
function UserProfile() { }
function ShoppingCart() { }
function NavigationBar() { }`}
            />
          </div>
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100'}`}>
            <h4 className="mb-2">❌ Bad Names</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`function button() { }  // lowercase - wrong!
function user_profile() { }  // snake_case - wrong!
function shopping-cart() { }  // kebab-case - wrong!`}
            />
          </div>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
          <strong>Remember:</strong> Component names must start with a capital letter! 
          This helps React know it's a component, not a regular HTML tag.
        </p>
      </TopicCard>

      <TopicCard title="Export & Import" icon="📦" theme={theme}>
        <p>To use components in different files, we need to export and import them!</p>
        <div className="space-y-4 mt-4">
          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
            <h4 className="mb-2">Named Export & Import</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// Button.jsx
export function Button() {
  return <button>Click me!</button>;
}

export function BigButton() {
  return <button style={{fontSize: '24px'}}>Big Click!</button>;
}

// App.jsx
import { Button, BigButton } from './Button';

function App() {
  return (
    <div>
      <Button />
      <BigButton />
    </div>
  );
}`}
            />
          </div>

          <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
            <h4 className="mb-2">Default Export & Import</h4>
            <CodeBlock
              theme={theme}
              language="jsx"
              code={`// Card.jsx
export default function Card() {
  return <div className="card">I'm a card!</div>;
}

// App.jsx
import Card from './Card';  // No curly braces!

function App() {
  return <Card />;
}`}
            />
          </div>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <strong>Tip:</strong> Use named exports when you have multiple components in one file. 
          Use default export when you have one main component per file!
        </p>
      </TopicCard>

      <TopicCard title="Reusable Components" icon="♻️" theme={theme}>
        <p>The best part about components? You can use them over and over! 🔄</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// Create a Star component
function Star() {
  return <span style={{fontSize: '30px'}}>⭐</span>;
}

// Use it multiple times!
function Rating() {
  return (
    <div>
      <h2>Movie Rating:</h2>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

// Create once, use many times! 🎉`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <h4 className="mb-2">A More Useful Example:</h4>
          <CodeBlock
            theme={theme}
            language="jsx"
            code={`function ProfileCard() {
  return (
    <div className="card">
      <img src="avatar.jpg" alt="User" />
      <h3>User Name</h3>
      <p>User Bio</p>
      <button>Follow</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Social Network</h1>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      {/* Same component, used 3 times! */}
    </div>
  );
}`}
          />
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Instagram uses the same post component thousands of times! 
          Each post looks the same but shows different content. That's the power of reusable components! 📱
        </p>
      </TopicCard>

      <TopicCard title="Component Composition" icon="🏗️" theme={theme}>
        <p>
          <strong>Component Composition</strong> means building big components from smaller ones! 
          Like building a house from bricks! 🏠
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// Small components
function Header() {
  return <header><h1>My Website</h1></header>;
}

function Navigation() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
}

function Content() {
  return (
    <main>
      <h2>Welcome! 👋</h2>
      <p>This is my awesome website!</p>
    </main>
  );
}

function Footer() {
  return <footer><p>© 2025 My Website</p></footer>;
}

// Big component made from small ones!
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
          <p><strong>Benefits of Component Composition:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🧹 Cleaner code - each piece does one thing</li>
            <li>🔧 Easier to fix - find the problem component</li>
            <li>♻️ Reusable - use components in different places</li>
            <li>👥 Team-friendly - different people work on different components</li>
          </ul>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <strong>Real-World Example:</strong> Think of a pizza! 🍕 The whole pizza is your app. 
          The crust, sauce, cheese, and toppings are different components. Together they make something delicious!
        </p>
      </TopicCard>

      <div className={`mt-8 p-6 rounded-xl text-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30'
          : 'bg-gradient-to-r from-green-100 to-blue-100 border border-green-300'
      }`}>
        <h3 className={`mb-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
          🎉 Amazing Work!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          You've mastered JSX and Components! You can now create and reuse UI pieces like a pro! 
          Ready for Phase 3? Let's learn about Props and State! 🚀
        </p>
      </div>
    </div>
  );
}
