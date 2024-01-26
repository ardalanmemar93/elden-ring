import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className=" h-screen ">
      <div className="w-full max-w-md">
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 form-container" autoComplete="off" onSubmit={handleSubmit}>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            id="email"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
  
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
  
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            LOG IN
          </button>
        </form>
  
        <p className="text-red-500 text-xs italic error-message">&nbsp;{error}</p>
      </div>
    </div>
  );
  
}
