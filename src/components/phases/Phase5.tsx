import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase5Props {
  theme: Theme;
}

export function Phase5({ theme }: Phase5Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        ✍️ Phase 5: Forms & Refs
      </h1>

      <TopicCard title="Controlled Components" icon="🎛️" theme={theme}>
        <p>
          A <strong>Controlled Component</strong> is when React controls the form input value! 
          React is the boss! 👑
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Hello, \${name}! 👋\`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}  // React controls this!
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      
      <p>You typed: {name}</p>
    </form>
  );
}`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Real-World Example:</strong> Like a puppet show! 🎭 React is the puppeteer controlling 
          the strings (input value). Every move is controlled!
        </p>
      </TopicCard>

      <TopicCard title="Uncontrolled Components" icon="🆓" theme={theme}>
        <p>
          <strong>Uncontrolled Components</strong> let the DOM control the value. 
          React just reads it when needed!
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get value from DOM directly
    alert(\`Hello, \${nameRef.current.value}! 👋\`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          ref={nameRef}  // DOM controls this!
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p><strong>When to use which?</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>✅ <strong>Controlled</strong>: Most of the time! More React-y! Better for validation!</li>
            <li>✅ <strong>Uncontrolled</strong>: Simple forms, file inputs, or when integrating with non-React code</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="useRef Hook" icon="🎯" theme={theme}>
        <p>
          <code className="bg-black/20 px-2 py-1 rounded">useRef</code> is like a special box 📦 
          that can hold a value that doesn't cause re-renders!
        </p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useRef, useState } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  
  // Focus the input when button clicked
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>
        Focus Input! 🎯
      </button>
      
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <p><strong>Common uses for useRef:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>📍 Access DOM elements (like focusing an input)</li>
            <li>💾 Store values that don't need re-renders</li>
            <li>⏱️ Keep previous values</li>
            <li>🎬 Interact with third-party libraries</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Handling Multiple Inputs" icon="🎪" theme={theme}>
        <p>When you have many inputs, use one state object!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    country: 'USA'
  });
  
  // One handler for all inputs!
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value  // Update the right field
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label>Age:</label>
        <input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
      </div>
      
      <button type="submit">Register 🚀</button>
      
      <div>
        <h3>Preview:</h3>
        <p>Username: {formData.username}</p>
        <p>Email: {formData.email}</p>
        <p>Age: {formData.age}</p>
        <p>Country: {formData.country}</p>
      </div>
    </form>
  );
}`}
        />
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <strong>Pro Tip:</strong> Use the <code className="bg-black/20 px-1">name</code> attribute 
          to match your state keys. Then one handler can update any field! 🎯
        </p>
      </TopicCard>

      <TopicCard title="Basic Form Validation" icon="✅" theme={theme}>
        <p>Let's make sure users enter the right information!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required!';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters!';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required!';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters!';
    }
    
    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match!';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      // No errors! Submit the form
      alert('Form submitted successfully! 🎉');
      console.log('Form Data:', formData);
    } else {
      // Show errors
      setErrors(newErrors);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          style={{ borderColor: errors.username ? 'red' : '' }}
        />
        {errors.username && (
          <p style={{ color: 'red' }}>❌ {errors.username}</p>
        )}
      </div>
      
      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          style={{ borderColor: errors.password ? 'red' : '' }}
        />
        {errors.password && (
          <p style={{ color: 'red' }}>❌ {errors.password}</p>
        )}
      </div>
      
      <div>
        <label>Confirm Password:</label>
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={{ borderColor: errors.confirmPassword ? 'red' : '' }}
        />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>❌ {errors.confirmPassword}</p>
        )}
      </div>
      
      <button type="submit">Sign Up 🚀</button>
    </form>
  );
}`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
          <p><strong>Validation Checklist:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>✓ Required fields (not empty)</li>
            <li>✓ Minimum/maximum length</li>
            <li>✓ Email format</li>
            <li>✓ Password strength</li>
            <li>✓ Matching fields (password confirmation)</li>
            <li>✓ Number ranges (age between 1-120)</li>
          </ul>
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <strong>Real-World Example:</strong> Like a bouncer at a party! 🎉 They check your ID (validation) 
          before letting you in. No ID? No entry!
        </p>
      </TopicCard>

      <div className={`p-6 rounded-xl mt-6 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
        <h3 className="mb-3">🎮 Complete Form Example with All Features!</h3>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`import { useState, useRef } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const nameInputRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required!';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required!';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid!';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required!';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message too short (min 10 chars)!';
    }
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log('Submitted:', formData);
      // Reset form
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
          subscribe: false
        });
        setSubmitted(false);
        nameInputRef.current.focus();
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };
  
  if (submitted) {
    return (
      <div className="success">
        <h2>✅ Thank you!</h2>
        <p>Your message has been sent!</p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us 📧</h2>
      
      <div>
        <label>Name:</label>
        <input
          ref={nameInputRef}
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name..."
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      
      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={5}
        />
        {errors.message && <p className="error">{errors.message}</p>}
        <small>{formData.message.length} characters</small>
      </div>
      
      <div>
        <label>
          <input
            name="subscribe"
            type="checkbox"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to newsletter 📰
        </label>
      </div>
      
      <button type="submit">Send Message 🚀</button>
    </form>
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
          🎉 Awesome Progress!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          You can now create forms, validate data, and use refs! 
          Forms are everywhere in web development! 
          Ready for Phase 6? Let's dive deep into Hooks! 🎣
        </p>
      </div>
    </div>
  );
}
