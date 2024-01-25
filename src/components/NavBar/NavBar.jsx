import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="bg-gray-800 p-4">
      <Link to="/orders" className="text-white hover:text-gray-300">Message History</Link>
      <span className="text-white"> | </span>
      <Link to="/orders/new" className="text-white hover:text-gray-300">New Message</Link>
      <span className="ml-4 text-white">Welcome, {user.name}</span>
      <Link to="" onClick={handleLogOut} className="ml-4 text-white hover:underline">Log Out</Link>
    </nav>
  );
}
