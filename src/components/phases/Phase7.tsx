import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase7Props {
  theme: Theme;
}

export function Phase7({ theme }: Phase7Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        🧭 Phase 7: Routing (React Router)
      </h1>

      <TopicCard title="What is React Router?" icon="🗺️" theme={theme}>
        <p>
          <strong>React Router</strong> lets you create different pages in your app without reloading! 
          It's like having many rooms in a house! 🏠
        </p>
        <p>Install it with: <code className="bg-black/20 px-2 py-1 rounded">npm install react-router-dom</code></p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p><strong>Why routing?</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🏠 Different pages (Home, About, Contact)</li>
            <li>📱 Shareable URLs (send link to specific page)</li>
            <li>🔙 Back/Forward buttons work</li>
            <li>⚡ No page reload - super fast!</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="BrowserRouter & Routes" icon="🌐" theme={theme}>
        <p>Let's create our first multi-page app!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page components
function Home() {
  return <h1>🏠 Home Page</h1>;
}

function About() {
  return <h1>ℹ️ About Page</h1>;
}

function Contact() {
  return <h1>📧 Contact Page</h1>;
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

// Now you can visit:
// localhost:3000/ → Home
// localhost:3000/about → About
// localhost:3000/contact → Contact`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Like a TV remote! 📺 Different buttons take you to 
          different channels (pages)!
        </p>
      </TopicCard>

      <TopicCard title="Link & NavLink" icon="🔗" theme={theme}>
        <p>Use Link to navigate without page reload!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      {/* Regular Link */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      
      {/* NavLink - adds 'active' class when on that page */}
      <NavLink 
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'blue',
          fontWeight: isActive ? 'bold' : 'normal'
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="URL Parameters" icon="🎯" theme={theme}>
        <p>Pass data through the URL!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// Component that reads URL parameter
function UserProfile() {
  const { username } = useParams();
  
  return (
    <div>
      <h1>Profile: {username}</h1>
      <p>Welcome to {username}'s page! 👋</p>
    </div>
  );
}

function ProductPage() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Product #{id}</h1>
      <p>Showing details for product {id}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Links with parameters */}
      <nav>
        <Link to="/user/alex">Alex's Profile</Link>
        <Link to="/user/sam">Sam's Profile</Link>
        <Link to="/product/123">Product 123</Link>
        <Link to="/product/456">Product 456</Link>
      </nav>
      
      <Routes>
        {/* Route with parameter */}
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="useNavigate Hook" icon="🚀" theme={theme}>
        <p>Navigate programmatically (in code)!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    // After login, go to dashboard
    navigate('/dashboard');
  };
  
  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Go back */}
      <button onClick={() => navigate(-1)}>
        ← Go Back
      </button>
      
      {/* Go to specific page */}
      <button onClick={() => navigate('/profile')}>
        View Profile
      </button>
      
      {/* Replace current page (can't go back) */}
      <button onClick={() => navigate('/logout', { replace: true })}>
        Logout
      </button>
    </div>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="Nested Routing" icon="📁" theme={theme}>
        <p>Create routes inside routes!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// Parent component with nested routes
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
        <Link to="/dashboard/stats">Stats</Link>
      </nav>
      
      {/* This is where child routes render */}
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h2>👤 Profile Page</h2>;
}

function Settings() {
  return <h2>⚙️ Settings Page</h2>;
}

function Stats() {
  return <h2>📊 Stats Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        
        {/* Nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}`}
        />
      </TopicCard>

      <TopicCard title="Protected Routes" icon="🔐" theme={theme}>
        <p>Make routes that only logged-in users can see!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { Navigate } from 'react-router-dom';
import { useState } from 'react';

// Protected Route Component
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };
  
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Dashboard() {
  return <h1>🔒 Protected Dashboard</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}`}
        />
      </TopicCard>

      <div className={`p-6 rounded-xl mt-6 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
        <h3 className="mb-3">🎮 Complete Routing Example!</h3>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { BrowserRouter, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';

// Pages
function Home() {
  return (
    <div>
      <h1>🏠 Home</h1>
      <p>Welcome to our app!</p>
    </div>
  );
}

function BlogList() {
  const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
    { id: 3, title: 'Third Post' }
  ];
  
  return (
    <div>
      <h1>📝 Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={\`/blog/\${post.id}\`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}

function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h1>Post #{id}</h1>
      <p>This is blog post {id}</p>
      <Link to="/blog">← Back to all posts</Link>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found! 😢</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/blog">Blog</Link> | 
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/about" element={<h1>ℹ️ About Us</h1>} />
        
        {/* 404 - Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
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
          🎉 Navigation Master!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          You can now build multi-page applications! URLs, navigation, everything! 
          Ready for Phase 8? Let's make things beautiful with Styling! 🎨
        </p>
      </div>
    </div>
  );
}
