import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

// Custom Button Component for the Navbar
const NavButton = ({ to, label, icon, color }) => {
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => navigate(to)}
      style={{
        backgroundColor: color,
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: 'bold',
        fontSize: '1rem'
      }}
    >
      <span>{icon}</span> {label}
    </button>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#0a0a0a',
    padding: '1rem 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #00d4ff',
    width: '100%'
  },
  leftNav: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#00d4ff',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  rightNav: {
    display: 'flex',
    gap: '20px'
  }
};

const Home = () => (
  <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#121212', color: 'white' }}>
    <h1>🏠 Welcome to the Main Hub</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        {/* Extreme Left: Home Icon and Name */}
        <Link to="/" style={styles.leftNav}>
          <span style={{ marginRight: '10px' }}>🏠</span> HOME
        </Link>

        {/* Right Side: Action Buttons */}
        <div style={styles.rightNav}>
          <NavButton to="/profile" label="Profile" icon="👤" color="#00d4ff" />
          <NavButton to="/dashboard" label="Dashboard" icon="📊" color="#ff4b2b" />
        </div>
      </nav>

      {/* Routing Logic (Standard Experiment-1 Methodology) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}