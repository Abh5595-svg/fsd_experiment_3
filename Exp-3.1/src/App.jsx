import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// --- Page Components ---
const Home = () => (
  <div className="page-card">
    <h1>🏠 Welcome Home</h1>
    <p>This is the landing page of our Single Page Application.</p>
  </div>
);

const About = () => (
  <div className="page-card">
    <h1>ℹ️ About Page</h1>
    <p>Client-side routing allows us to switch views without a page reload.</p>
  </div>
);

const Contact = () => (
  <div className="page-card">
    <h1>📞 Contact Page</h1>
    <p>Get in touch with us via email or social media.</p>
  </div>
);

// --- Main Application ---
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Route Definitions */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;