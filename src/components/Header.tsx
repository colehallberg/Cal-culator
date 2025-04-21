import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../pages/style.css';
import { logoutUser } from '../services/supabaseClient'; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="custom-header">
      <div className="header-content">
        <button className="menu-button" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="nav-menu">
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/tracker" onClick={() => setMenuOpen(false)}>Tracker</Link>
          <button onClick={() => { logoutUser(); setMenuOpen(false); }} className="logout-button">
      Logout
    </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
