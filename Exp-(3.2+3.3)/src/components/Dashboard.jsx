export default function Dashboard() {
  const data = [
    { title: "Frontend Stack", content: "React 18+, Vite, Bootstrap 5, Material UI (MUI) 6.0+" },
    { title: "UI Design", content: "Liquid Glass Aesthetic, Glass-morphism, Apple Style transitions" },
    { title: "Engineering", content: "Computer Networks, Operating Systems, Technical Topologies" },
    { title: "Architecture", content: "Single Page Application (SPA), Client-Side Routing, Component-based design" }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white', padding: '80px 10%' }}>
      <h1 style={{ color: '#00d4ff', marginBottom: '50px', borderLeft: '10px solid #00d4ff', paddingLeft: '20px' }}>Technical Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {data.map((item, i) => (
          <div key={i} style={{ background: '#161616', padding: '40px', borderRadius: '15px', borderBottom: '5px solid #00d4ff', transition: '0.3s' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{item.title}</h3>
            <p style={{ color: '#888', lineHeight: '1.5' }}>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}