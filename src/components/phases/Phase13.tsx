import { Theme } from '../../App';
import { TopicCard } from '../TopicCard';
import { CodeBlock } from '../CodeBlock';

interface Phase13Props {
  theme: Theme;
}

export function Phase13({ theme }: Phase13Props) {
  return (
    <div className="max-w-5xl mx-auto mt-20 pb-12">
      <h1 className={`text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        🌐 Phase 13: Build & Deployment
      </h1>

      <TopicCard title="Production Build" icon="📦" theme={theme}>
        <p>
          Before deploying, create an optimized <strong>production build</strong>! 
          It makes your app super fast! ⚡
        </p>
        <CodeBlock
          theme={theme}
          language="bash"
          code={`# For Vite projects
npm run build

# For Create React App
npm run build

# This creates a 'dist' or 'build' folder with optimized files!`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p><strong>What happens during build:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>🗜️ Code is minified (made smaller)</li>
            <li>⚡ Optimized for speed</li>
            <li>🔒 Dead code removed</li>
            <li>📦 Everything bundled together</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Environment Variables" icon="🔐" theme={theme}>
        <p>Store secrets and config safely!</p>
        <CodeBlock
          theme={theme}
          language="jsx"
          code={`// .env file (in project root)
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_secret_key_here

// In your React code
function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  
  // Use them safely!
  fetch(\`\${apiUrl}/data\`, {
    headers: {
      'Authorization': \`Bearer \${apiKey}\`
    }
  });
}

// For Create React App, use REACT_APP_ prefix:
// REACT_APP_API_URL=...
// const apiUrl = process.env.REACT_APP_API_URL;`}
        />
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100'}`}>
          <p><strong>⚠️ Important:</strong></p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Never commit .env to Git!</li>
            <li>Add .env to .gitignore</li>
            <li>Create .env.example for team members</li>
          </ul>
        </div>
      </TopicCard>

      <TopicCard title="Deploy on Vercel" icon="▲" theme={theme}>
        <p>
          <strong>Vercel</strong> is the easiest way to deploy React apps! Free and super fast! 🚀
        </p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <h4 className="mb-2">Method 1: Using Website (Easiest!)</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li>Push your code to GitHub</li>
            <li>Go to <strong>vercel.com</strong></li>
            <li>Sign in with GitHub</li>
            <li>Click "New Project"</li>
            <li>Select your repository</li>
            <li>Click "Deploy" 🎉</li>
            <li>Your app is live!</li>
          </ol>
        </div>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <h4 className="mb-2">Method 2: Using CLI</h4>
          <CodeBlock
            theme={theme}
            language="bash"
            code={`# Install Vercel CLI
npm install -g vercel

# Deploy your app
vercel

# Follow the prompts, and you're done!`}
          />
        </div>
        <p className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <strong>Benefits:</strong> Automatic deployments, free SSL, custom domains, preview URLs for each commit!
        </p>
      </TopicCard>

      <TopicCard title="Deploy on Netlify" icon="🎯" theme={theme}>
        <p>Another awesome free hosting platform!</p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <h4 className="mb-2">Using Website:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li>Push code to GitHub</li>
            <li>Go to <strong>netlify.com</strong></li>
            <li>Sign up/Sign in</li>
            <li>Click "New site from Git"</li>
            <li>Connect to GitHub</li>
            <li>Select repository</li>
            <li>Build command: <code className="bg-black/20 px-2 py-1 rounded">npm run build</code></li>
            <li>Publish directory: <code className="bg-black/20 px-2 py-1 rounded">dist</code> or <code className="bg-black/20 px-2 py-1 rounded">build</code></li>
            <li>Click "Deploy site" 🎉</li>
          </ol>
        </div>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <h4 className="mb-2">Drag & Drop:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li>Build your app: <code className="bg-black/20 px-1">npm run build</code></li>
            <li>Go to Netlify</li>
            <li>Drag your build folder to Netlify</li>
            <li>Done! 🎉</li>
          </ol>
        </div>
      </TopicCard>

      <TopicCard title="GitHub Integration" icon="🔗" theme={theme}>
        <p>Automatic deployments when you push code!</p>
        <CodeBlock
          theme={theme}
          language="bash"
          code={`# 1. Create GitHub repository
# Go to github.com and create a new repo

# 2. Initialize Git in your project
git init
git add .
git commit -m "Initial commit"

# 3. Connect to GitHub
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main

# 4. Now when you connect Vercel/Netlify to GitHub:
# Every time you push code, it auto-deploys! 🚀

# Making changes:
git add .
git commit -m "Added new feature"
git push

# Your site automatically updates!`}
        />
      </TopicCard>

      <TopicCard title="Custom Domain" icon="🌐" theme={theme}>
        <p>Use your own domain name!</p>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
          <h4 className="mb-2">On Vercel:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li>Go to your project settings</li>
            <li>Click "Domains"</li>
            <li>Add your domain (e.g., myawesomesite.com)</li>
            <li>Follow DNS setup instructions</li>
            <li>Wait for DNS to update (can take 24 hours)</li>
            <li>Your site is on your custom domain! 🎉</li>
          </ol>
        </div>
        <div className={`p-4 rounded-lg mt-4 ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
          <h4 className="mb-2">On Netlify:</h4>
          <ol className="list-decimal list-inside space-y-2">
            <li>Go to "Domain settings"</li>
            <li>Click "Add custom domain"</li>
            <li>Enter your domain</li>
            <li>Update DNS records at your domain provider</li>
            <li>Netlify automatically provides free SSL! 🔒</li>
          </ol>
        </div>
      </TopicCard>

      <TopicCard title="Deployment Checklist" icon="✅" theme={theme}>
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
          <p className="mb-2"><strong>Before deploying, make sure:</strong></p>
          <ul className="space-y-2">
            <li>✅ App works locally</li>
            <li>✅ All tests pass</li>
            <li>✅ Production build works: <code className="bg-black/20 px-1">npm run build</code></li>
            <li>✅ Environment variables are set</li>
            <li>✅ .env is in .gitignore</li>
            <li>✅ No console.log or debug code</li>
            <li>✅ Images are optimized</li>
            <li>✅ 404 page exists</li>
            <li>✅ SEO meta tags added</li>
            <li>✅ Favicon added</li>
          </ul>
        </div>
      </TopicCard>

      <div className={`p-6 rounded-xl mt-6 ${theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'}`}>
        <h3 className="mb-3">🚀 Quick Deployment Guide</h3>
        <CodeBlock
          theme={theme}
          language="bash"
          code={`# Step 1: Build your app
npm run build

# Step 2: Test the build locally (optional)
npm run preview  # For Vite

# Step 3: Push to GitHub
git add .
git commit -m "Ready for deployment"
git push

# Step 4: Deploy
# Option A: Connect Vercel/Netlify to GitHub (auto-deploy)
# Option B: Use CLI
vercel  # or netlify deploy

# Your app is live! 🎉
# Share the link with friends and family!`}
        />
      </div>

      <div className={`mt-8 p-6 rounded-xl text-center ${
        theme === 'dark'
          ? 'bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-green-500/30'
          : 'bg-gradient-to-r from-green-100 to-blue-100 border border-green-300'
      }`}>
        <h3 className={`mb-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-900'}`}>
          🎉 Deployment Master!
        </h3>
        <p className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>
          Your apps are now live on the internet! Anyone can visit them! 
          Ready for Phase 14? Let's build real projects! 💪
        </p>
      </div>
    </div>
  );
}
