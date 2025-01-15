import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex justify-center items-center p-6 tracking-wide">
      <div className="max-w-md bg-gray-700 rounded-md px-6 py-12 shadow-xl">
        <h1 className="text-white text-xl mb-6 font-bold text-center sm:text-3xl">
          Create your free account
          <span>
            <p className="text-sm text-slate-300 font-medium mt-2">
              Sign up and have a second brain
            </p>
          </span>
        </h1>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Username"
            className="w-full bg-gray-800 p-2 rounded-md placeholder-gray-400 text-white outline-none"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full bg-gray-800 p-2 rounded-md placeholder-gray-400 text-white outline-none"
          />
          <button className="text-white bg-indigo-600 w-full mt-4 py-2 rounded-md font-semibold hover:bg-indigo-700 duration-300">
            Signup
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-indigo-400 font-semibold select-none">
            Already have an account?
            <span
              onClick={() => navigate('/signin')}
              className="cursor-pointer underline underline-offset-2"
            >
              Signin
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
