import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  
    window.location.reload();
  }

  return (
    <nav className="bg-green-950 p-4 flex items-center justify-end w-full">
      <Link to="/messages" className="text-white hover:text-gray-300 mr-4">Message History</Link>
      <span className="text-white">|</span>
      <Link to="/messages/new" className="text-white hover:text-gray-300 mx-4">New Message</Link>
      <span className="text-white">|</span>
      {user ? (
        <span className="ml-4 text-white">Welcome, {user.name}</span>
      ) : (
        <Link to="/auth" className="ml-4 text-white hover:underline">Log In / Sign Up</Link>
      )}
      {user && (
        <Link to="" onClick={handleLogOut} className="ml-4 text-white hover:underline">Log Out</Link>
      )}
    </nav>
  );
}

