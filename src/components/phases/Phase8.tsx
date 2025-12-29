import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase8Props {
  theme: Theme;
}

export function Phase8({ theme }: Phase8Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        🎨 Phase 8: Styling in React
      </h1>

      <TopicCard title="CSS Files in React" icon="📄" theme={theme}>
        <p>The traditional way - import CSS files!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// Button.css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

.button:hover {
  background-color: darkblue;
}

// Button.jsx
import './Button.css';

function Button() {
  return <button className="button">Click Me!</button>;
}`}
        />
      </TopicCard>

      <TopicCard title="Inline Styles" icon="✨" theme={theme}>
        <p>Write styles directly in JSX using JavaScript objects!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`function StyledComponent() {
  const boxStyle = {
    backgroundColor: 'purple',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center'
  };
  
  return (
    <div style={boxStyle}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>
        Hello! 👋
      </h1>
      <p>Inline styled component!</p>
    </div>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
          <p><strong>Note:</strong> Use camelCase for property names!</p>
          <ul className="list-disc list-inside mt-2">
            <li>CSS: <code className="bg-black/20 px-1">background-color</code></li>
            <li>React: <code className="bg-black/20 px-1">backgroundColor</code></li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="CSS Modules" icon="📦" theme={theme}>
        <p>Scoped CSS that won't affect other components!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// Button.module.css
.button {
  background-color: green;
  color: white;
  padding: 10px 20px;
}

.primary {
  background-color: blue;
}

.secondary {
  background-color: gray;
}

// Button.jsx
import styles from './Button.module.css';

function Button() {
  return (
    <div>
      <button className={styles.button}>Normal</button>
      <button className={styles.primary}>Primary</button>
      <button className={styles.secondary}>Secondary</button>
      
      {/* Multiple classes */}
      <button className={\`\${styles.button} \${styles.primary}\`}>
        Combined
      </button>
    </div>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="Tailwind CSS" icon="💨" theme={theme}>
        <p>Utility-first CSS framework - the modern way! This website uses it! 🚀</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`function TailwindExample() {
  return (
    <div className="container mx-auto p-4">
      {/* Card */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Tailwind Card 🎨
        </h1>
        <p className="text-gray-700 mb-4">
          Tailwind uses utility classes!
        </p>
        
        {/* Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me!
        </button>
      </div>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-red-100 p-4 rounded">Box 1</div>
        <div className="bg-green-100 p-4 rounded">Box 2</div>
        <div className="bg-blue-100 p-4 rounded">Box 3</div>
      </div>
    </div>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <p><strong>Common Tailwind Classes:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li><code className="bg-black/20 px-1">p-4</code> - Padding</li>
            <li><code className="bg-black/20 px-1">m-4</code> - Margin</li>
            <li><code className="bg-black/20 px-1">bg-blue-500</code> - Background color</li>
            <li><code className="bg-black/20 px-1">text-white</code> - Text color</li>
            <li><code className="bg-black/20 px-1">rounded</code> - Border radius</li>
            <li><code className="bg-black/20 px-1">shadow-lg</code> - Shadow</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Material UI (MUI)" icon="🎭" theme={theme}>
        <p>Pre-built beautiful components!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function MUIExample() {
  return (
    <div>
      {/* Buttons */}
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary Button
      </Button>
      
      {/* Text Field */}
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
      />
      
      {/* Card */}
      <Card>
        <CardContent>
          <h2>Beautiful Card! 🎨</h2>
          <p>Material Design is awesome!</p>
        </CardContent>
      </Card>
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
          🎉 Styling Superstar!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          You know multiple ways to style React apps! Ready for Phase 9? Let's connect to the internet! 🌍
        </p>
      </div>
    </div>
  );
}
