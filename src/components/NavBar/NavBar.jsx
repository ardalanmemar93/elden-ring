import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="bg-green-950 p-4 flex items-center justify-end w-full">
      <Link to="/orders" className="text-white hover:text-gray-300 mr-4">Message History</Link>
      <span className="text-white">|</span>
      <Link to="/orders/new" className="text-white hover:text-gray-300 mx-4">New Message</Link>
      <span className="text-white">|</span>
      <span className="ml-4 text-white">Welcome, {user.name}</span>
      <Link to="" onClick={handleLogOut} className="ml-4 text-white hover:underline">Log Out</Link>
    </nav>
  );
  
  
}
