import profilePic from '../Profile_pics/Profile_pic.png';
import p1_main from '../Profile_pics/project-1_pics/image.png';
import p2_main from '../Profile_pics/project-2_pics/Screenshot_Case_study.png';

const projectStyles = {
  card: {
    background: '#1e1e1e',
    borderRadius: '20px',
    padding: '30px',
    border: '1px solid #333',
    marginBottom: '40px'
  },
  imgGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    margin: '20px 0'
  }
};

export default function Profile() {
  return (
    <div style={{ padding: '80px 10%', backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
      
      {/* Professional Bio Section */}
      <section style={{ textAlign: 'center', marginBottom: '100px' }}>
        <img src={profilePic} alt="Profile" style={{ width: '220px', borderRadius: '50%', border: '4px solid #00d4ff', marginBottom: '30px' }} />
        <h1 style={{ fontSize: '3rem', color: '#00d4ff' }}>Professional Aspirations</h1>
        <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.2rem', lineHeight: '1.8', color: '#ccc' }}>
          I am an aspiring Full Stack Developer dedicated to architecting high-performance web solutions that bridge the gap between complex engineering principles and intuitive user experiences. My core interests lie in system architecture, performance optimization, and the "Liquid Glass" design aesthetic. I am constantly exploring modern frontend frameworks like React and Vite to build precision-engineered platforms that empower users through visual clarity and technical accuracy. I aspire to contribute to global tech initiatives that redefine how students and professionals interact with technical data.
        </p>
      </section>

      {/* Project 1 Section */}
      <div style={projectStyles.card}>
        <h2 style={{ color: '#00d4ff', fontSize: '2rem' }}>Project 1: Supercar-Hub</h2>
        <p style={{ color: '#aaa', marginTop: '10px' }}>
          A professional Multi-Library UI Showcase built to demonstrate technical interoperability between Bootstrap 5 and Material UI (MUI).
        </p>
        <div style={projectStyles.imgGrid}>
          <img src={p1_main} style={{ width: '100%', borderRadius: '10px' }} alt="Project 1 View 1" />
          <div style={{ background: '#252525', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '15px' }}>
            <ul style={{ color: '#00d4ff', fontSize: '0.9rem' }}>
              <li>✅ Bootstrap 5 Responsive Grid</li>
              <li>✅ Material UI (MUI) Paper Components</li>
              <li>✅ Dark Theme Optimization</li>
              <li>✅ Dynamic Data Mapping</li>
            </ul>
          </div>
        </div>
        <p style={{ color: '#888' }}>
          This project focuses on responsive navigation and card-based layout systems, ensuring a premium experience across all device viewports.
        </p>
      </div>

      {/* Project 2 Section */}
      <div style={projectStyles.card}>
        <h2 style={{ color: '#00d4ff', fontSize: '2rem' }}>Project 2: Exam Pulse</h2>
        <p style={{ color: '#aaa', marginTop: '10px' }}>
          A high-performance curriculum platform designed for engineering excellence, featuring advanced visual learning aids.
        </p>
        <div style={projectStyles.imgGrid}>
          <img src={p2_main} style={{ width: '100%', borderRadius: '10px' }} alt="Project 2 View 1" />
          <div style={{ background: '#252525', borderRadius: '10px', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
             <p style={{ color: '#fff', fontWeight: 'bold' }}>Core Features:</p>
             <p style={{ fontSize: '0.85rem', color: '#ccc' }}>Implemented smart hero carousels with 5-second auto-scroll and manual override for focused revision.</p>
          </div>
        </div>
        <p style={{ color: '#888' }}>
          Utilizes "Liquid Glass" aesthetics with high-fidelity transitions and senior-curated insights to provide visual clarity for complex technical topologies.
        </p>
      </div>

    </div>
  );
}