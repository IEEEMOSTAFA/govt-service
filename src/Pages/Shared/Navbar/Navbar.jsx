


















import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => console.log('User signed out successfully'))
      .catch((error) => console.error('Error signing out:', error));
  };

  const navLinks = (
    <>
      <li><NavLink to="/" className="hover:text-blue-500">Home</NavLink></li>
      <li><NavLink to="/mymap" className="hover:text-blue-500">Our Location</NavLink></li>
      <li><NavLink to="/about" className="hover:text-blue-500">About</NavLink></li>
      <li><NavLink to="/animate" className="hover:text-blue-500">Animate</NavLink></li>
      {!user && (
        <>
          <li><NavLink to="/login" className="hover:text-blue-500">Login</NavLink></li>
          <li><NavLink to="/register" className="hover:text-blue-500">Register</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg">
      {/* Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} role="button" aria-label="Menu" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* User Authentication Section */}
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn btn-warning">Sign Out</button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline btn-warning">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
