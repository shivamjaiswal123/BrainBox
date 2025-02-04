import { Brain, ChevronRight, Youtube, Twitter, ListTodo } from 'lucide-react';
import { useSession } from '../hooks/useSession';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

function LandingPage() {
  const { data: session, isLoading } = useSession();
  const navigate = useNavigate();

  // only show landing page when user is not logged in.
  if (session) {
    navigate('/dashboard');
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 tracking-wider">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold">BrainBox</span>
          </div>
          <button
            onClick={() => navigate('/signin')}
            className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
        </nav>

        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-blue-700 text-transparent bg-clip-text">
            Your Digital Content Library
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Keep track of your favorite online content and tasks in one place
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/signup')}
              className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              Get Started <ChevronRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 border border-gray-700 rounded-lg hover:border-indigo-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors">
              <Youtube className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">YouTube Links</h3>
              <p className="text-gray-400">
                Save and organize your favorite YouTube videos by simply pasting
                their links
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors">
              <Twitter className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Twitter Links</h3>
              <p className="text-gray-400">
                Keep track of important tweets by saving their links for quick
                access
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-colors">
              <ListTodo className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Todo Lists</h3>
              <p className="text-gray-400">
                Create and manage your tasks alongside your saved content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
